import React from "react";
import { TaskItemWrapper } from "./TaskItem.style";

import IconCheck from "../../assets/icon-check.svg";
import IconDelete from "../../assets/icon-cross.svg";

export default function TaskItem({
  task,
  isCompleted,
  id,
  handleCompleted,
  handleDelete,
}) {
  return (
    <TaskItemWrapper isCompleted={isCompleted} key={id}>
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
    </TaskItemWrapper>
  );
}
