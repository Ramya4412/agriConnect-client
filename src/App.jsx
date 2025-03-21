// App.jsx
import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import LoginForm from './pages/LoginForm';
import Layout from './pages/layout';
import Registration from './pages/Registration';
import Profile from './pages/Profile';
import Market from './pages/Market';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs'; // Import the ContactUs component

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "LoginForm", element: <LoginForm /> },
      { path: "SignUp", element: <Registration /> },
      { path: "Profile", element: <Profile /> },
      { path: "Market", element: <Market /> },
      { path: "AboutUs", element: <AboutUs /> },
      { path: "contact", element: <ContactUs /> }, // Changed to "contact" (lowercase)
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;