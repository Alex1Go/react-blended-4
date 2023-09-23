import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = state => state.todos.todos;
export const selectFilter = state => state.filter.value;

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
