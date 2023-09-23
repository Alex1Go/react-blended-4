import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { todos: [] },
  reducers: {
    addTodo(state, action) {
      //   state.todos.push(action.payload)
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },
  },
});
export const { addTodo, deleteTodo } = todoSlice.actions;
export const todosReducer = todoSlice.reducer;
