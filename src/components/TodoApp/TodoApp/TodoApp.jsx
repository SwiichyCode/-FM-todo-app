import React, { useState } from "react";
import styled from "styled-components";
import { initialValue } from "../../../data/Tasks";
import useLocalStorage from "../../../hooks/useLocalStorage";

import TodoForm from "../TodoForm/TodoForm";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoList from "../TodoList/TodoList";
import TaskListFooter from "../../Task/TaskFooter/TaskFooter";
import TodoFooter from "../TodoFooter/TodoFooter";
export default function TodoApp() {
  const [todos, setTodos] = useLocalStorage("tasks", initialValue);
  const [filter, setFilter] = useState("all");

  // ADD TASK
  const addTodo = (todo) => {
    if (!todo.task || /^\s*$/.test(todo.task)) {
      return;
    }

    const newTodo = [todo, ...todos];
    setTodos(newTodo);
  };

  // REMOVE TASK
  const deleteTodo = (id) => {
    const removeTodo = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeTodo);
  };

  // COMPLETED/UNCOMPLETED TASK
  const completeTodo = (id) => {
    let updatedTodos = todos.map((item) => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  // UPDATE TASK
  const updateTodo = (todoId, newValue) => {
    if (!newValue.task || /^\s*$/.test(newValue.task)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  // FILTER / ALL / ACTIVE / COMPLETED
  let filtredTodos = [...todos];

  switch (filter) {
    case "all":
      filtredTodos = [...todos];
      break;
    case "completed":
      filtredTodos = todos.filter((task) => task.isCompleted);
      break;
    case "uncompleted":
      filtredTodos = todos.filter((task) => !task.isCompleted);
      break;
    default:
      filtredTodos = [...todos];
      break;
  }

  return (
    <TodoListWrapper>
      <TodoHeader />
      <TodoForm addTodo={addTodo} completeTodo={completeTodo} />
      <TodoList
        todos={todos}
        addTodo={addTodo}
        filtredTodos={filtredTodos}
        setTodos={setTodos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        updateTodo={updateTodo}
      />
      <TaskListFooter
        todos={todos}
        filtredTodos={filtredTodos}
        filter={filter}
        setFilter={setFilter}
      />
      <TodoFooter />
    </TodoListWrapper>
  );
}

const TodoListWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
`;
