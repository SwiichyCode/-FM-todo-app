import React, { useState } from "react";
import { TaskListWrapper } from "./TaskList.style";

import TaskListFooter from "../TaskFooter/TaskFooter";
import TaskItem from "../TaskItem/TaskItem";

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

  return (
    <TaskListWrapper>
      {filtred.map(({ task, isCompleted, id }) => (
        <>
          <TaskItem
            task={task}
            isCompleted={isCompleted}
            id={id}
            handleCompleted={handleCompleted}
            handleDelete={handleDelete}
          />
        </>
      ))}
      <TaskListFooter
        tasks={tasks}
        filtred={filtred}
        setTasks={setTasks}
        filter={filter}
        setFilter={setFilter}
      />
    </TaskListWrapper>
  );
}
