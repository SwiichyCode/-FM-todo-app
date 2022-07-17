import React, { useState } from "react";
import { TaskListWrapper } from "./TaskList.style";

import TaskListFooter from "../TaskFooter/TaskFooter";
import TaskItem from "../TaskItem/TaskItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function TaskList({ tasks, setTasks }) {
  const [filter, setFilter] = useState("all");

  const handleDelete = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const handleCompleted = (id) => {
    setTasks(
      tasks.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      })
    );
  };

  let filtred = [...tasks];

  switch (filter) {
    case "all":
      filtred = [...tasks];
      break;
    case "completed":
      filtred = tasks.filter((task) => task.isCompleted);
      break;
    case "uncompleted":
      filtred = tasks.filter((task) => !task.isCompleted);
      break;
    default:
      filtred = [...tasks];
      break;
  }

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (
          <TaskListWrapper
            className="characters"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {filtred.map(({ task, isCompleted, id }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <TaskItem
                      task={task}
                      isCompleted={isCompleted}
                      id={id}
                      handleCompleted={handleCompleted}
                      handleDelete={handleDelete}
                      provided={provided}
                    />
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
            <TaskListFooter
              tasks={tasks}
              filtred={filtred}
              setTasks={setTasks}
              filter={filter}
              setFilter={setFilter}
            />
          </TaskListWrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
}
