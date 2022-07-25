import React, { createContext } from "react";
import { ThemeProvider } from "styled-components";
import useLocalStorage from "../../hooks/useLocalStorage";
import { light, dark } from "../../theme/schema";
import TodoApp from "../TodoApp/TodoApp/TodoApp";
import { AppWrapper, Container } from "./App.style";

const themesMap = { light, dark };
export const ThemePreferenceContext = createContext();

export default function App() {
  // Theme
  const [currentTheme, setCurrentTheme] = useLocalStorage("theme", "dark");
  const theme = { colors: themesMap[currentTheme] };

  return (
    <ThemePreferenceContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Container>
            <TodoApp />
          </Container>
        </AppWrapper>
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
}
