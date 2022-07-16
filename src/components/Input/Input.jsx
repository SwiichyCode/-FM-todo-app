import React, { useState } from "react";
import { InputWrapper } from "./style";
import { v4 as uuidv4 } from "uuid";

export default function Input({ tasks, setTasks }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    tasks.push(
      setTasks([...tasks, { task: value, isCompleted: false, id: uuidv4() }])
    );
  };

  const handleKeyPress = (e) => {
    if (value.length > 0 && e.key === "Enter") {
      handleSubmit();
      setValue("");
    }
  };

  return (
    <InputWrapper>
      <div className="form">
        <div className="circle"></div>
        <input
          type={"text"}
          value={value || ""}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Create new Todo"
        />
      </div>
    </InputWrapper>
  );
}
