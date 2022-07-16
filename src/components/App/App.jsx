import React, { useState } from "react";
import Header from "../Header/Header";
import Input from "../Input/Input";
import TaskList from "../TaskList/TaskList";
import { AppWrapper, Container } from "./style";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      task: "Complete online JavaScript course",
      isCompleted: true,
      id: "bf4c6f52-90d5-41ce-8dd1-d7a2dbcf9d46",
    },
  ]);

  return (
    <AppWrapper>
      <Container>
        <Header />
        <Input tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </Container>
    </AppWrapper>
  );
}
