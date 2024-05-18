import ReactDOM from 'react-dom/client';
import React, {createContext} from 'react';
import {client} from './provider/ApolloClient';
import {ApolloProvider} from '@apollo/client';
import App from './App';
import useMainController from "./controller/controllerMain";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/home/Home';
import ErrorPage from './pages/error/Error';
import LoginPage from './pages/login/Login';
import RegisterPage from "./pages/register/Register";
import ProfilePage from "./pages/profile/Profile";
import Post from "./pages/post/Post";
import {AuthProvider} from "./provider/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const mainController = useMainController();
const MainControllerContext = createContext(mainController);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            {
                path: '/login',
                element: (
                    <ProtectedRoute redirectTo="/">
                        <LoginPage/>
                    </ProtectedRoute>
                )
            },
            {
                path: '/register',
                element:
                    (
                        <ProtectedRoute redirectTo="/">
                            <RegisterPage/>
                        </ProtectedRoute>
                    )
            },
            {
                path: '/post',
                element: <Post/>
            },
            {
                path: '/profile',
                element:
                    (
                        <ProtectedRoute redirectTo="/login" blockIfLogged={false}>
                            <ProfilePage/>
                        </ProtectedRoute>
                    )
            }
        ]
    },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthProvider>
            <ApolloProvider client={client}>
                <MainControllerContext.Provider value={mainController}>
                    <RouterProvider router={router}/>
                </MainControllerContext.Provider>
            </ApolloProvider>
        </AuthProvider>
    </React.StrictMode>
);
