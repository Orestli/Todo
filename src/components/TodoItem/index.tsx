import React, { ChangeEvent, useEffect, useState } from 'react';
import { TodoResponse } from '../../utils/api/types';
import { useField } from 'formik';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import CloseIcon from '../../media/icons/close-icon.svg';
import EditIcon from '../../media/icons/edit-icon.svg';

import s from './TodoItem.module.scss';

interface TodoItemProps {
  id: string;
  text: string;
  done: boolean;
  onUpdate: (data: TodoResponse) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  done,
  onDelete,
  onUpdate,
}) => {
  const [active, setActive] = useState(false);
  const [checkboxField, checkboxMeta, checkboxHelpers] = useField(`checkbox[${id}]`);
  const [contentField, contentMeta, contentHelpers] = useField(`field[${id}]`);

  useEffect(() => {
    contentHelpers.setValue(text);
    checkboxHelpers.setValue(done);
  }, []);

  const onSubmit = (data: TodoResponse) => {
    setActive(false);
    onUpdate(data);
  };

  const setCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    checkboxHelpers.setValue(e.target.checked);

    onUpdate({
      id,
      text: contentField.value,
      done: e.target.checked,
    });
  };

  const setContentField = (e: ChangeEvent<HTMLInputElement>) => {
    contentHelpers.setValue(e.target.value);
  };

  const handleClick = () => {
    setActive(true);
  };

  return (
    <div className={clsx('block', s.flex, active && 'active')}>
      {active ? (
        <input
          className={s.edit_input}
          name={contentField.name}
          value={contentField.value}
          onChange={(e) => setContentField(e)}
        />
      ) : (
        <>
          <div className={s.checkbox}>
            <input
              type="checkbox"
              name={checkboxField.name}
              checked={checkboxField.value}
              onChange={(e) => setCheckBox(e)}
              className={s.checkbox_input}
              id={checkboxField.name}
            />
            <label htmlFor={checkboxField.name} className={s.checkbox_label} />
          </div>
          <p className={clsx(s.text, checkboxField.value && s.done)}>
            <Link to={`${id}`}>{contentField.value}</Link>
          </p>
        </>
      )}

      <div className={s.actions}>
        {active ? (
          <button
            className={clsx(s.edit, s.button_icon, s.editing)}
            type="button"
            onClick={() =>
              onSubmit({
                id,
                text: contentField.value,
                done: checkboxField.value,
              })
            }
          >
            <img src={EditIcon} alt="Edit Icon" />
          </button>
        ) : (
          <>
            {!checkboxField.value && (
              <button
                className={clsx(s.edit, s.button_icon)}
                type="button"
                onClick={handleClick}
              >
                <img src={EditIcon} alt="Edit Icon" />
              </button>
            )}
            <button
              className={clsx(s.remove, s.button_icon)}
              type="button"
              onClick={() => onDelete(+id)}
            >
              <img src={CloseIcon} alt="Close Icon" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
