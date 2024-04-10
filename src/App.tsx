import './App.css';

import { useEffect, useRef, useState } from 'react';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchAccount } from './redux/slice/accountSlice';
import { LayoutApp, NotFound } from './components/shared';
import { HomePage } from './pages/home';
import { ClientJobPage } from './pages/job';
import { ClientJobDetailPage } from './pages/job/detail';
import { ClientCompanyPage } from './pages/company';
import { ClientCompanyDetailPage } from './pages/company/detail';
import { LayoutAdmin } from './components/admin/layout.admin';
import { ProtectedRoute } from './components/shared/protected-route';
import {
  CompanyPage,
  DashboardPage,
  JobPage,
  PermissionPage,
  ResumePage,
  RolePage,
  UserPage,
} from './pages/admin';
import { ViewUpsertJob } from './components/admin/job';
import { LoginPage, RegisterPage } from './pages/auth';
import { Header } from './components/client';
import Footer from './components/client/footer.client';
import styles from 'styles/app.module.scss';

const LayoutClient = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rootRef && rootRef.current) {
      rootRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="layout-app" ref={rootRef}>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className={styles['content-app']}>
        <Outlet context={[searchTerm, setSearchTerm]} />
      </div>
      <Footer />
    </div>
  );
};

export default function App() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.account.isLoading);

  useEffect(() => {
    if (
      window.location.pathname === '/login' ||
      window.location.pathname === '/register'
    )
      return;
    dispatch(fetchAccount());
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <LayoutApp>
          <LayoutClient />
        </LayoutApp>
      ),
      errorElement: <NotFound />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'job', element: <ClientJobPage /> },
        { path: 'job/:id', element: <ClientJobDetailPage /> },
        { path: 'company', element: <ClientCompanyPage /> },
        { path: 'company/:id', element: <ClientCompanyDetailPage /> },
      ],
    },

    {
      path: '/admin',
      element: (
        <LayoutApp>
          <LayoutAdmin />{' '}
        </LayoutApp>
      ),
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'company',
          element: (
            <ProtectedRoute>
              <CompanyPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'user',
          element: (
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          ),
        },

        {
          path: 'job',
          children: [
            {
              index: true,
              element: (
                <ProtectedRoute>
                  {' '}
                  <JobPage />
                </ProtectedRoute>
              ),
            },
            {
              path: 'upsert',
              element: (
                <ProtectedRoute>
                  <ViewUpsertJob />
                </ProtectedRoute>
              ),
            },
          ],
        },

        {
          path: 'resume',
          element: (
            <ProtectedRoute>
              <ResumePage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'permission',
          element: (
            <ProtectedRoute>
              <PermissionPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'role',
          element: (
            <ProtectedRoute>
              <RolePage />
            </ProtectedRoute>
          ),
        },
      ],
    },

    {
      path: '/login',
      element: <LoginPage />,
    },

    {
      path: '/register',
      element: <RegisterPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
