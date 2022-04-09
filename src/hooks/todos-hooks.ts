import { TodoResponse } from '../utils/api/types';
import { FilterType } from '../components/Todos';
import { useMemo } from 'react';

export const useTodos = (
  todos: TodoResponse[],
  filter: FilterType
): TodoResponse[] => {
  return useMemo(() => {
    return [...todos].filter((todo) => {
      if (filter === 'todo') {
        return !todo.done;
      } else if (filter === 'done') {
        return todo.done;
      }

      return todo;
    });
  }, [todos, filter]);
};
