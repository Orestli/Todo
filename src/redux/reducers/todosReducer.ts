import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TodoProps {
  text: string;
  inProgress: boolean;
}

interface ITodo {
  todos: TodoProps[];
}

const initialState: ITodo = {
  todos: [],
};

const todosReducer = createSlice({
  name: 'todos/reducer',
  initialState,
  reducers: {
    createTodo(state, action: PayloadAction<TodoProps>) {
      state.todos.push(action.payload);

      const todos =localStorage.getItem('todos')

      if (!todos) {
        console.log(1);
      } else {
        console.log(JSON.parse(localStorage.getItem('todos') || ''));
      }
    },
  },
});

export const { createTodo } = todosReducer.actions;
export default todosReducer.reducer;
