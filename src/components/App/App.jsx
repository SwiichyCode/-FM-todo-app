import React, { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { initialValue } from "../../data/Tasks";
import { AppWrapper, Container } from "./App.style";
import useLocalStorage from "../../hooks/useLocalStorage";

import Header from "../Header/Header";
import Input from "../Input/Input";
import TaskList from "../TaskList/TaskList";

import { light, dark } from "../../theme/schema";

const themesMap = { light, dark };
export const ThemePreferenceContext = createContext();

export default function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", initialValue);
  const [currentTheme, setCurrentTheme] = useLocalStorage("theme", "dark");
  const theme = { colors: themesMap[currentTheme] };

  return (
    <ThemePreferenceContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Container>
            <Header
              currentTheme={currentTheme}
              setCurrentTheme={setCurrentTheme}
            />
            <Input tasks={tasks} setTasks={setTasks} />
            <TaskList tasks={tasks} setTasks={setTasks} />
            <span className="dnd-message">Drag and drop to reorder list</span>
          </Container>
        </AppWrapper>
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
}
