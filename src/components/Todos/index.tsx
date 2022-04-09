import { Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
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
import clsx from 'clsx';

import s from './Todos.module.scss';

interface FormikValuesProps {
  text: string;
  done: boolean;
}

const TodosPage: React.FC = () => {
  const { todos } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

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
                className={clsx('block', touched.text && errors.text && 'error')}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {touched.text && errors.text && <span className={s.error}>{errors.text}</span>}
                <Field
                  className={clsx('text', s.text_field)}
                  name="text"
                  placeholder="Text..."
                />
                <button className={clsx('text', s.add_button)} type="submit">
                  Add
                </button>
              </div>
              {todos.map((todo) => (
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
