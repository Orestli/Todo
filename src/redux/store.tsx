import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './reducers/TodosReducer/todosReducer';
import photosReducer from './reducers/photosReducer';

export const store = configureStore({
  reducer: {
    photos: photosReducer,
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['todos/getOne/rejected'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
