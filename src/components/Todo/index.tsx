import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { getOneTodo } from '../../redux/reducers/TodosReducer/todosThunks';
import ArrowIcon from '../../media/icons/back-arrow-icon.png';

import s from './Todo.module.scss';

const TodoPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { selected: todo } = useAppSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getOneTodo(Number(id)));
  }, []);

  const handleClick = () => {
    navigate('/todos');
  };

  return (
    <div className="container" style={{ display: 'flex' }}>
      <button className={s.back_button} onClick={handleClick}>
        <img src={ArrowIcon} alt="Arrow Icon" />
      </button>
      <div className="block" style={{ width: "100%" }}>
        <h1 className={s.title}>Text</h1>
        <p className={s.text}>{todo?.text}</p>
      </div>
    </div>
  );
};

export default TodoPage;
