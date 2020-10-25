import React from 'react';
import { Field } from 'formik';
import styles from './CustomInput.module.css';
import cx from 'classnames';

const CustomInput = (props) => {
  const { name, ...rest } = props;

  return (
    <Field name={name}>
      {({ field, meta }) => {

        const inputClasses = cx(styles.input, {
          [styles.invalid]: meta.touched && meta.error,
          [styles.valid]: !meta.error && meta.touched,
        });

        return (
          <label className={styles.container}>
            <input {...field} {...rest} className={inputClasses} />
            {meta.touched && meta.error && (
              <span className={styles.error}>{meta.error}</span>
            )}
          </label>
        );
      }}
    </Field>
  );
};

export default CustomInput;
