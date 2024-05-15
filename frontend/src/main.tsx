import ReactDOM from 'react-dom/client';
import React, { createContext } from 'react';
import App from './App';
import useMainController from "./controller/controllerMain";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/home/Home';
import ErrorPage from './pages/error/Error';
import LoginPage from './pages/login/Login';
import RegisterPage from "./pages/register/Register";
import Post from "./pages/post/Post";

const mainController = useMainController();
const MainControllerContext = createContext(mainController);


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path:'/login', element: <LoginPage /> },
            { path:'/register', element: <RegisterPage /> },
            { path:'/post', element: <Post /> }
    ]},
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MainControllerContext.Provider value={mainController}>
            <RouterProvider router={router} />
        </MainControllerContext.Provider>
    </React.StrictMode>
);
