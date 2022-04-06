import { configureStore } from '@reduxjs/toolkit';
import photosReducer from './reducers/photosReducer';
import todosReducer from "./reducers/todosReducer";

export const store = configureStore({
  reducer: {
    photos: photosReducer,
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
