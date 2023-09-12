import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import styles from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={styles.formLabel}>
        Username
        <input className={styles.formInput} type="text" name="name" />
      </label>
      <label className={styles.formLabel}>
        Email
        <input className={styles.formInput} type="email" name="email" />
      </label>
      <label className={styles.formLabel}>
        Password
        <input className={styles.formInput} type="password" name="password" />
      </label>
      <button className={styles.registerBtn} type="submit">
        Register
      </button>
    </form>
  );
};
