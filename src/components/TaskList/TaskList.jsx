import React from "react";
import { LiWrapper, TaskListWrapper, TaskFooter } from "./style";
import IconCheck from "../../assets/icon-check.svg";
import IconDelete from "../../assets/icon-cross.svg";

export default function TaskList({ tasks, setTasks }) {
  const uncompletedTask = tasks.filter((item) => !item.isCompleted);
  const completedTask = tasks.filter((item) => item.isCompleted);

  const handleDeleteComplete = (id) => {
    setTasks(uncompletedTask.filter((item) => item.id !== id));
  };

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

  return (
    <TaskListWrapper>
      {tasks.map(({ task, isCompleted, id }) => (
        <>
          <LiWrapper isCompleted={isCompleted} key={id}>
            <div className="content-li">
              <div className="completed" onClick={() => handleCompleted(id)}>
                {isCompleted ? <img src={IconCheck} alt="icon-check" /> : null}
              </div>
              <span>{task}</span>
            </div>
            <img
              onClick={() => handleDelete(id)}
              src={IconDelete}
              alt="icon-delete"
            />
          </LiWrapper>
        </>
      ))}
      <TaskFooter>
        <span className="task-counter">
          {uncompletedTask.length} items left
        </span>
        <div className="task-filter"></div>
        <span
          className="task-clear"
          onClick={() => handleDeleteComplete(tasks.id)}
        >
          Clear Completed
        </span>
      </TaskFooter>
    </TaskListWrapper>
  );
}
