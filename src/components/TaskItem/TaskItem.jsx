import React, { useState } from "react";
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
  const [editing, setEditing] = useState(false);
  const handleDoubleClick = (e) => {
    e.detail === 2 && setEditing(!editing);
  };

  return (
    <TaskItemWrapper
      isCompleted={isCompleted}
      key={id}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      onClick={handleDoubleClick}
    >
      <div className="content-li">
        <div className="completed" onClick={() => handleCompleted(id)}>
          {isCompleted ? <img src={IconCheck} alt="icon-check" /> : null}
        </div>
        {editing ? (
          <input type={"text"} placeholder="Enter new value" />
        ) : (
          <span>{task}</span>
        )}
      </div>
      <IconContext.Provider value={{ size: "1.6em", className: "close" }}>
        <MdClose onClick={() => handleDelete(id)} />
      </IconContext.Provider>
    </TaskItemWrapper>
  );
}
