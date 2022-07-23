import React, { useState } from "react";
import { TaskListWrapper } from "./TaskList.style";

import TaskListFooter from "../TaskFooter/TaskFooter";
import TaskItem from "../TaskItem/TaskItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function TaskList({ tasks, setTasks }) {
  const [filter, setFilter] = useState("all");
  const [newValue, setNewValue] = useState("");
  const [deletation, setDeletation] = useState(false);

  const handleDelete = (id) => {
    setTasks(
      tasks.map((item) => {
        if (item.id === id) {
          return { ...item, isDeleted: !item.isDeleted };
        }
        return item;
      })
    );

    setDeletation(true);
    setTimeout(() => {
      setTasks(tasks.filter((item) => item.id !== id));
      setDeletation(false);
    }, 1500);
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

  const handleEdit = (id) => {
    setTasks(
      tasks.map((item) => {
        if (item.id === id) {
          return { ...item, task: newValue };
        }
        return item;
      })
    );
  };

  // DND Handler
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items);
  };

  // Filter List
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

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (
          <TaskListWrapper
            className="characters"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {filtred.map(({ task, isCompleted, id, isDeleted }, index) => {
              return (
                <>
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <TaskItem
                        task={task}
                        setNewValue={setNewValue}
                        isCompleted={isCompleted}
                        id={id}
                        isDeleted={isDeleted}
                        deletation={deletation}
                        handleCompleted={handleCompleted}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        provided={provided}
                      />
                    )}
                  </Draggable>
                </>
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
