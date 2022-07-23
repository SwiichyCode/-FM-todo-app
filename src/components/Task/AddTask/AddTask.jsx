import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { FormWrapper } from "./AddTask.style";

export default function AddTask({ tasks, setTasks }) {
  const [value, setValue] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setSuccess(false);
    setValue(e.target.value);

    if (value.length >= 0) {
      setError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) {
      tasks.push(
        setTasks([...tasks, { task: value, isCompleted: false, id: uuidv4() }])
      );
      setError(false);
      setSuccess(true);
      setValue("");
    } else {
      setError(true);
    }
  };

  if (success) {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div className="form">
        <div className="circle"></div>
        {error ? <span className="error">Please enter a value</span> : null}
        {success ? <span className="success">Task added</span> : null}
        <input
          type={"text"}
          value={value || ""}
          onChange={handleChange}
          placeholder="Create new Todo"
        />
      </div>
    </FormWrapper>
  );
}
