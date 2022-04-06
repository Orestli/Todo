import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { getPhotos } from '../../redux/reducers/photosReducer';
import { photosInput } from '../../utils/validations';

import styles from './Photos.module.scss';

const PhotosPage: React.FC = () => {
  const [lastId, setLastId] = useState<number | null>(null);
  const { photos } = useAppSelector((state) => state.photos);
  const dispatch = useAppDispatch();

  const onSubmit = (id: number) => {
    dispatch(getPhotos(id));
    setLastId(id);
  };

  return (
    <div>
      <Formik
        initialValues={{ id: 1 }}
        onSubmit={({ id }) => onSubmit(id)}
        validationSchema={photosInput}
        enableReinitialize
      >
        {({ touched, errors, values }) => (
          <Form>
            {errors.id}
            <Field type="number" name="id" />
            <button type="submit" disabled={values.id === lastId}>
              Click
            </button>

            <div className={styles.grid}>
              {photos.map((photo) => (
                <img
                  key={photo.id}
                  className={styles.img_grid}
                  src={photo.thumbnailUrl}
                  alt="Album img"
                />
              ))}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PhotosPage;
