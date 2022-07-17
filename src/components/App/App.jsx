import React from "react";
import { initialValue } from "../../data/Tasks";
import { AppWrapper, Container } from "./App.style";
import useLocalStorage from "../../hooks/useLocalStorage";

import Header from "../Header/Header";
import Input from "../Input/Input";
import TaskList from "../TaskList/TaskList";

export default function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", initialValue);

  return (
    <AppWrapper>
      <Container>
        <Header />
        <Input tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
        <span className="dnd-message">Drag and drop to reorder list</span>
      </Container>
    </AppWrapper>
  );
}
