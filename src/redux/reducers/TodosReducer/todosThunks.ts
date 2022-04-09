import { createAsyncThunk } from '@reduxjs/toolkit';
import { TodosApi } from '../../../utils/api/todos';
import { TodoProps, TodoResponse } from '../../../utils/api/types';

export const getAllTodo = createAsyncThunk(
  'todos/getAll',
  async (_, { rejectWithValue }) => {
    try {
      return await TodosApi.getAll();
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getOneTodo = createAsyncThunk(
  'todos/getOne',
  async (id: number, { rejectWithValue }) => {
    try {
      return await TodosApi.getOne(id);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const createTodo = createAsyncThunk(
  'todos/createTo',
  async (data: TodoProps, { rejectWithValue }) => {
    try {
      return await TodosApi.create(data);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const removeTodo = createAsyncThunk(
  'todos/removeTodo',
  async (id: number, { rejectWithValue }) => {
    try {
      return await TodosApi.delete(id);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async (data: TodoResponse, { rejectWithValue }) => {
    try {
      return await TodosApi.update(data);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
