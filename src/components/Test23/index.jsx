const CustomInput = props => {
  const { inputStyles, ...rest } = props;
  const [field, meta, helpers] = useField();

  const stylesForInput = cx(
    styles.input,
    {
      [styles.inputWithError]: meta.touched && meta.error,
      [styles.inputWithSuuccess]: meta.touched && !meta.error,
    },
    inputStyles
  );

  return (
    <label className={styles.container}>
      <input type="text" {...field} {...rest} className={stylesForInput} />
      {meta.touched && meta.error && (
        <span className={styles.error}>{meta.error}</span>
      )}
    </label>
  );
};
