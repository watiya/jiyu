// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import  { lazy } from 'react';
import { Navigate, createBrowserRouter } from "react-router";
import Loadable from '../layouts/full/shared/loadable/Loadable';


/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));


// authentication
const Login = Loadable(lazy(() => import('../views/authentication/auth1/Login')));
const Register = Loadable(lazy(() => import('../views/authentication/auth1/Register')));
const ForgotPassword = Loadable(lazy(() => import('../views/authentication/auth1/ForgotPassword')));
const TwoSteps = Loadable(lazy(() => import('../views/authentication/auth1/TwoSteps')));
const Maintainance = Loadable(lazy(() => import('../views/authentication/Maintainance')));
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')));
const SamplePage2 = Loadable(lazy(() => import('../views/sample-page2/SamplePage2')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', exact: true, element: <SamplePage /> },
      { path: '/sample-page', exact: true, element: <SamplePage2 /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/auth/auth1/login', element: <Login /> },
      { path: '/auth/auth1/register', element: <Register /> },
      { path: '/auth/auth1/forgot-password', element: <ForgotPassword /> },
      { path: '/auth/auth1/two-steps', element: <TwoSteps /> },
      { path: '/auth/maintenance', element: <Maintainance /> },
      { path: '404', element: <Error /> },
      { path: '/auth/404', element: <Error /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  }
  ,
];

const router = createBrowserRouter(Router)

export default router;
