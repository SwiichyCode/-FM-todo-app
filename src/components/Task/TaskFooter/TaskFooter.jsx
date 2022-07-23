import React from "react";
import { TaskFooterWrapper } from "./TaskFooter.style";
import TaskFooterFilter from "../TaskFooterFilter/TaskFooterFilter";
export default function TaskListFooter({
  tasks,
  filtred,
  setTasks,
  filter,
  setFilter,
}) {
  const uncompletedTask = tasks.filter((item) => !item.isCompleted);
  const handleDeleteComplete = (id) => {
    setTasks(uncompletedTask.filter((item) => item.id !== id));
  };

  const filterTask = (e) => {
    setFilter(e.target.dataset["filter"]);
  };

  return (
    <TaskFooterWrapper>
      <span className="task-counter">{filtred.length} items left</span>
      <TaskFooterFilter filter={filter} filterTask={filterTask} />
      <button
        className="task-clear"
        onClick={() => handleDeleteComplete(tasks.id)}
      >
        Clear Completed
      </button>
    </TaskFooterWrapper>
  );
}
