import React from "react";
import { TaskFooterFilterWrapper } from "./TaskFooterFilter.style";

export default function TaskFooterFilter({ filterTask, filter }) {
  return (
    <TaskFooterFilterWrapper>
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
    </TaskFooterFilterWrapper>
  );
}
