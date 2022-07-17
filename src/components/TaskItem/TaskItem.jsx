import React from "react";
import { MdClose } from "react-icons/md";
import { IconContext } from "react-icons";

import { TaskItemWrapper } from "./TaskItem.style";
import IconCheck from "../../assets/icon-check.svg";

export default function TaskItem({
  task,
  isCompleted,
  id,
  handleCompleted,
  handleDelete,
  provided,
}) {
  return (
    <TaskItemWrapper
      isCompleted={isCompleted}
      key={id}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <div className="content-li">
        <div className="completed" onClick={() => handleCompleted(id)}>
          {isCompleted ? <img src={IconCheck} alt="icon-check" /> : null}
        </div>
        <span>{task}</span>
      </div>
      <IconContext.Provider value={{ size: "1.6em", className: "close" }}>
        <MdClose onClick={() => handleDelete(id)} />
      </IconContext.Provider>
    </TaskItemWrapper>
  );
}
