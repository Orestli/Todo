import React from 'react';
import P from "../Paragraph";
import clsx from "clsx";
import { Link } from "react-router-dom";
import RightArrowIcon from '../../media/icons/right-arrow-icon.png';

import s from './Main.module.scss';

const HomePage: React.FC = () => {
  return (
    <>
      <div className={s.grid}>
        <div className={clsx(s.container, s.grid_photos)}>
          <h2 className={clsx('text', s.title)}>Photos</h2>
          <div>
            <ul className={s.grid_list}>
              <li><P text="Photo request" /></li>
              <li><P text="Validations" /></li>
            </ul>
          </div>
          <Link to="/photos">
            <button className={clsx(s.text, s.button_link)}>
              Photos
              <img className={s.arrow_icon} src={RightArrowIcon} alt="Right Arrow icon" />
            </button>
          </Link>
        </div>

        <div className={clsx(s.container, s.grid_todos)}>
          <h2 className={clsx('text', s.title)}>Todos</h2>
          <div>
            <ul className={s.grid_list}>
              <li><P text="Create" /></li>
              <li><P text="Edit" /></li>
              <li><P text="Delete" /></li>
              <li><P text="Mark" /></li>
              <li><P text="Filter" /></li>
              <li><P text="Route" /></li>
              <li><P text="Stored data" /></li>
            </ul>
          </div>
          <Link to="/todos">
            <button className={clsx(s.text, s.button_link)}>
              Todos
              <img className={s.arrow_icon} src={RightArrowIcon} alt="Right Arrow icon" />
            </button>
          </Link>
        </div>

        <div className={clsx(s.grid_instruments, s.container)}>
          <h2 className={clsx('text', s.title)}>Instruments</h2>
          <div className={s.instruments_container}>
            <P text="TypeScript" />
            <P text="React" />
            <P text="Redux/Toolkit" />
            <P text="Axios" />
            <P text="Formik" />
            <P text="Yup" />
            <P text="Sass" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
