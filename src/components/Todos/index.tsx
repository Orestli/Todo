import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { todoInput } from '../../utils/validations';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import {
  createTodo,
  removeTodo,
  getAllTodo,
  updateTodo,
} from '../../redux/reducers/TodosReducer/todosThunks';
import TodoItem from '../TodoItem';
import { TodoResponse } from '../../utils/api/types';
import { useTodos } from '../../hooks/todos-hooks';
import clsx from 'clsx';

import s from './Todos.module.scss';

interface FormikValuesProps {
  text: string;
  done: boolean;
}

export type FilterType = 'all' | 'todo' | 'done';

const TodosPage: React.FC = () => {
  const { todos } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<FilterType>('all');
  const filteredTodos = useTodos(todos, filter);

  useEffect(() => {
    dispatch(getAllTodo());
  }, []);

  const onSubmit = (values: FormikValuesProps) => {
    dispatch(createTodo({ text: values.text, done: values.done }));
  };

  const onUpdate = (data: TodoResponse) => {
    dispatch(updateTodo(data));
  };

  const onDelete = (id: number) => {
    dispatch(removeTodo(id));
  };

  const filterTodo = (newFilter: FilterType) => {
    setFilter(newFilter);
  };

  const initialValues: FormikValuesProps = {
    text: '',
    done: false,
  };

  return (
    <section className="section">
      <div className="container">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => onSubmit(values)}
          validationSchema={todoInput}
          enableReinitialize
        >
          {({ touched, errors }) => (
            <Form>
              <div
                className={clsx(
                  'block',
                  s.input_container,
                  touched.text && errors.text && 'error'
                )}
              >
                {touched.text && errors.text && (
                  <p className={s.error}>{errors.text}</p>
                )}
                <Field
                  className={clsx('text', s.text_field)}
                  name="text"
                  placeholder="Text..."
                />
                <button className={clsx('text', s.add_button)} type="submit">
                  Add
                </button>
              </div>

              <div className={s.filter_container}>
                <div className={s.filter_block}>
                  <button
                    type="button"
                    className={s.filter_button}
                    onClick={() => filterTodo('all')}
                  >
                    All
                  </button>
                </div>
                <div className={s.filter_block}>
                  <button
                    type="button"
                    className={s.filter_button}
                    onClick={() => filterTodo('todo')}
                  >
                    Todo
                  </button>
                </div>
                <div className={clsx(s.filter_block, s.selected_filter)}>
                  <button
                    type="button"
                    className={s.filter_button}
                    onClick={() => filterTodo('done')}
                  >
                    Done
                  </button>
                </div>
              </div>

              {filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  done={todo.done}
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                />
              ))}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default TodosPage;
