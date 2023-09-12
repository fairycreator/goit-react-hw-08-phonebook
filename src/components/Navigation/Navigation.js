import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={styles.navigationContainer}>
      <NavLink className={styles.link} to="/">
        Phone<span>book</span>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={styles.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
