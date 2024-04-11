import { useEffect, useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import 'styles/app.module.scss';

import { fetchAccount } from './redux/slice/accountSlide';
import { JobPage } from './pages/admin/job';
import { Footer, Header } from './components/client';
import { LayoutApp, NotFound } from './components/shared';
import { HomePage } from './pages/home';
import { LayoutAdmin } from './components/admin';
import { ProtectedRoute } from './components/shared/protected-route';
import {
  CompanyPage,
  DashboardPage,
  PermissionPage,
  ResumePage,
  RolePage,
  UserPage,
} from './pages/admin';
import { LoginPage, RegisterPage } from './pages/auth';

const LayoutClient = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="layout-app">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Outlet context={[searchTerm, setSearchTerm]} />
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
      children: [{ index: true, element: <HomePage /> }],
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
          element: (
            <ProtectedRoute>
              <JobPage />
            </ProtectedRoute>
          ),
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
      {
        // isLoading === false
        //   || window.location.pathname === '/login'
        //   || window.location.pathname === '/register'
        //   || window.location.pathname === '/'
        //   ?
        <RouterProvider router={router} />
        // :
        // <Loading />
      }
    </>
  );
}
