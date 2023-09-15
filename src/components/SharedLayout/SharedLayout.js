import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';
import styles from './SharedLayout.module.css';

export default function SharedLayout() {
  return (
    <div className={styles.sharedLayoutContainer}>
      <div className={styles.sharedLayoutBar}>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
}
