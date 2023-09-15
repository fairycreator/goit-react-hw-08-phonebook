import { ChakraProvider, Box } from '@chakra-ui/react';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import SharedLayout from './SharedLayout/SharedLayout';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/authOperations';
import styles from './App.module.css';

const HomePage = lazy(() => import('../pages/Home.js'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ChakraProvider>
      <Box className={styles.appContainer}>
        {isRefreshing ? (
          <div className={styles.loader}>Refreshing user...</div>
        ) : (
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<RegisterPage />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<LoginPage />}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ContactsPage />}
                  />
                }
              />
            </Route>
          </Routes>
        )}
      </Box>
    </ChakraProvider>
  );
};
