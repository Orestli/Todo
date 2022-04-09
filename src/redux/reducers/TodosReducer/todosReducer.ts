import { createSlice } from '@reduxjs/toolkit';
import { TodoResponse } from '../../../utils/api/types';
import { createTodo, removeTodo, getAllTodo, getOneTodo } from "./todosThunks";

interface ITodo {
  todos: TodoResponse[];
  selected: TodoResponse | null;
}

const initialState: ITodo = {
  todos: [],
  selected: null,
};

const todosReducer = createSlice({
  name: 'todos/reducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodo.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(getOneTodo.fulfilled, (state, action) => {
        state.selected = action.payload;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter(
          (todo) => todo.id !== action.payload.id
        );
      });
  },
});

export default todosReducer.reducer;
