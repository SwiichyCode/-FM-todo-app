import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormWrapper } from "./TodoForm.style";

export default function TodoForm({
  addTodo,
  completeTodo,
  edit,
  submitUpdate,
  closeUpdate,
}) {
  const [input, setInput] = useState(edit ? edit.value : "");
  const [success, setSuccess] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newValue = { id: uuidv4(), isCompleted: false, task: input };
    edit ? submitUpdate(newValue) : addTodo(newValue);
    setInput("");
  };

  if (success) {
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  }

  return (
    <FormWrapper onSubmit={handleSubmit} edit={edit}>
      <div className="form">
        <div className="circle" onClick={() => completeTodo(edit.id)}></div>
        {edit ? (
          <>
            <input
              placeholder="Update your item"
              value={input}
              onChange={handleChange}
              ref={inputRef}
            />
            <div className="content-btn">
              <button type="button" onClick={closeUpdate}>
                Exit
              </button>
              <button type="submit">Update</button>
            </div>
          </>
        ) : (
          <input
            placeholder="Create new Todo"
            value={input}
            onChange={handleChange}
            ref={inputRef}
          />
        )}
      </div>
    </FormWrapper>
  );
}

// {error ? <span className="error">Please enter a value</span> : null}
// {success ? <span className="success">Task added</span> : null}
