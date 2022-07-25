import React from "react";
import { MdClose, MdEdit } from "react-icons/md";
import { IconContext } from "react-icons";

import { TodoItemWrapper } from "./TodoItem.style";
import IconCheck from "../../../assets/icon-check.svg";

export default function TodoItem({
  task,
  setEdit,
  completeTodo,
  isCompleted,
  id,
  deleteTodo,
  provided,
}) {
  return (
    <TodoItemWrapper
      isCompleted={isCompleted}
      key={id}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <div className="content-li">
        <div className="completed" onClick={() => completeTodo(id)}>
          {isCompleted ? <img src={IconCheck} alt="icon-check" /> : null}
        </div>
        <span>{task}</span>
      </div>
      <div className="content-icon">
        <IconContext.Provider value={{ size: "1.6em", className: "close" }}>
          <MdEdit onClick={() => setEdit({ id: id, value: task })} />
          <MdClose onClick={() => deleteTodo(id)} />
        </IconContext.Provider>
      </div>
    </TodoItemWrapper>
  );
}
