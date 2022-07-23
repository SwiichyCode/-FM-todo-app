import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { IconContext } from "react-icons";

import { TaskItemWrapper } from "./TaskItem.style";
import IconCheck from "../../../assets/icon-check.svg";
import TaskDeleted from "../TaskDeleted/TaskDeleted";

export default function TaskItem({
  task,
  setNewValue,
  isCompleted,
  id,
  isDeleted,
  deletation,
  handleCompleted,
  handleDelete,
  handleEdit,
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
      deletation={deletation}
    >
      <div className="content-li">
        <div className="completed" onClick={() => handleCompleted(id)}>
          {isCompleted ? <img src={IconCheck} alt="icon-check" /> : null}
        </div>
        {editing ? (
          <form
            onSubmit={(event) => {
              event.preventDefault();

              handleEdit(id);
              setEditing(false);
            }}
          >
            <input
              type={"text"}
              placeholder="Enter new value"
              onChange={(e) => setNewValue(e.target.value)}
            />
          </form>
        ) : (
          <span className={isDeleted ? "task-animation" : null}>{task}</span>
        )}
      </div>
      <IconContext.Provider value={{ size: "1.6em", className: "close" }}>
        <MdClose onClick={deletation ? null : () => handleDelete(id)} />
      </IconContext.Provider>

      {/* [Error popup] */}
      {isDeleted ? <TaskDeleted /> : null}
    </TaskItemWrapper>
  );
}
