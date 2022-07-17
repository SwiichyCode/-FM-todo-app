import React from "react";
import { TaskFooterWrapper } from "./TaskFooter.style";

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
      <div className="task-filter">
        <button
          data-filter="all"
          onClick={filterTask}
          className={filter === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          data-filter="uncompleted"
          onClick={filterTask}
          className={filter === "uncompleted" ? "active" : ""}
        >
          Active
        </button>
        <button
          data-filter="completed"
          onClick={filterTask}
          className={filter === "completed" ? "active" : ""}
        >
          Completed
        </button>
      </div>
      <button
        className="task-clear"
        onClick={() => handleDeleteComplete(tasks.id)}
      >
        Clear Completed
      </button>
    </TaskFooterWrapper>
  );
}
