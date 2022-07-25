import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { TodoListWrapper } from "./TodoList.style";
import TodoItem from "../TodoItem/TodoItem";

import TodoForm from "../TodoForm/TodoForm";

export default function TodoList({
  todos,
  addTodo,
  filtredTodos,
  setTodos,
  deleteTodo,
  completeTodo,
  updateTodo,
}) {
  const [edit, setEdit] = useState({ id: null, value: "" });

  // UPDATE TASK
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  const closeUpdate = () => {
    setEdit({
      id: null,
      value: "",
    });
  };

  // Return new props on todo form
  if (edit.id) {
    return (
      <TodoForm
        edit={edit}
        submitUpdate={submitUpdate}
        closeUpdate={closeUpdate}
      />
    );
  }

  // DND Handler
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (
          <TodoListWrapper
            className="characters"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {filtredTodos.map(({ id, isCompleted, task }, index) => {
              return (
                <>
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <TodoItem
                        task={task}
                        setEdit={setEdit}
                        deleteTodo={deleteTodo}
                        completeTodo={completeTodo}
                        isCompleted={isCompleted}
                        id={id}
                        provided={provided}
                      />
                    )}
                  </Draggable>
                </>
              );
            })}
            {provided.placeholder}
          </TodoListWrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
}
