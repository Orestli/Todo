import { Field, Form, Formik } from 'formik';
import React from 'react';
import { todoInput } from '../../utils/validations';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { createTodo } from "../../redux/reducers/todosReducer";

interface FormikValuesProps {
  text: string;
  inProgress: boolean;
}

const TodosPage: React.FC = () => {
  const { todos } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const initialValues: FormikValuesProps = {
    text: '',
    inProgress: true,
  };

  const onSubmit = (values: FormikValuesProps) => {
    dispatch(createTodo(values))
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={todoInput}
        enableReinitialize
      >
        {() => (
          <Form>
            <Field name="text" />
            <button type="submit">Add</button>
            {todos.map((todo, i) => (
              <p key={i}>{todo.text} | {todo.inProgress ? "In progress" : "Done"}</p>
            ))}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TodosPage;
