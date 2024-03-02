import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createTheme, ThemeProvider } from '@mui/material';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import AuthProvider from "./provider/AuthProvider";
import Dashboard from "./pages/Dashboard";
const queryClient = new QueryClient();

const theme = createTheme({
  typography: {
    fontFamily: [
      'Varela Round',
      'sans-serif',
    ].join(','),
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/faq",
        element: <Faq />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);