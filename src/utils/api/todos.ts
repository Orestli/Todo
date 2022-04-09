import axios from 'axios';
import { TodoProps, TodoResponse } from './types';

const instance = axios.create({
  baseURL: 'https://624e99b177abd9e37c88a074.mockapi.io/',
});

export const TodosApi = {
  async getAll() {
    const { data } = await instance.get<TodoResponse[]>('todos');
    return data;
  },
  async getOne(id: number) {
    const { data } = await instance.get<TodoResponse>(`todos/${id}`);
    return data;
  },
  async create(params: TodoProps) {
    const { data } = await instance.post<TodoResponse>(`todos`, params);
    return data;
  },
  async delete(id: number) {
    const { data } = await instance.delete<TodoResponse>(`todos/${id}`);
    return data;
  },
  async update(params: TodoResponse) {
    const { data } = await instance.put<TodoResponse>(`todos/${params.id}`, {
      text: params.text,
      done: params.done,
    });
    return data;
  },
};
