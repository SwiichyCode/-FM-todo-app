import React, { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { initialValue } from "../../data/Tasks";
import { AppWrapper, Container } from "./App.style";
import useLocalStorage from "../../hooks/useLocalStorage";

import Header from "../Header/Header";
import AddTask from "../Task/AddTask/AddTask";
import TaskList from "../Task/TaskList/TaskList";

import { light, dark } from "../../theme/schema";

const themesMap = { light, dark };
export const ThemePreferenceContext = createContext();

export default function App() {
  // State
  const [tasks, setTasks] = useLocalStorage("tasks", initialValue);

  // Theme
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
            <AddTask tasks={tasks} setTasks={setTasks} />
            <TaskList tasks={tasks} setTasks={setTasks} />
            <span className="dnd-message">Drag and drop to reorder list</span>
          </Container>
        </AppWrapper>
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
}
