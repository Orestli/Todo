import React from 'react';

import s from './Main.module.scss';
import clsx from "clsx";

const HomePage: React.FC = () => {
  return (
    <>
      <div className={s.grid}>
        <div className={clsx(s.container, s.grid_todos)}>
          <h2 className={clsx('text', s.title)}>Todos</h2>
          <div>
            <ul>
              <li>— <span className={s.text}>Create</span></li>
              <li>— <span className={s.text}>Edit</span></li>
              <li>— <span className={s.text}>Delete</span></li>
              <li>— <span className={s.text}>Mark</span></li>
              <li>— <span className={s.text}>Filter</span></li>
              <li>— <span className={s.text}>Route</span></li>
              <li>— <span className={s.text}>Stored data</span></li>
            </ul>
          </div>
        </div>

        <div className={clsx(s.container, s.grid_photos)}>
          <h2 className={clsx('text', s.title)}>Photos</h2>
          <div>
            <ul>
              <li>— <span className={s.text}>Create</span></li>
              <li>— <span className={s.text}>Edit</span></li>
              <li>— <span className={s.text}>Delete</span></li>
            </ul>
          </div>
        </div>

        <div className={s.grid_instruments}>

        </div>
      </div>
    </>
  );
};

export default HomePage;
