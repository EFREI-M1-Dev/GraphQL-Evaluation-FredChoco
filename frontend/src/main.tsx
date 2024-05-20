import ReactDOM from 'react-dom/client';
import React, {createContext, ReactNode, useContext} from 'react';
import {client} from './provider/ApolloClient';
import {ApolloProvider} from '@apollo/client';
import App from './App';
import useMainController, {UseMainControllerReturnType} from "./controller/controllerMain";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/home/Home';
import ErrorPage from './pages/error/Error';
import LoginPage from './pages/login/Login';
import RegisterPage from "./pages/register/Register";
import ProfilePage from "./pages/profile/Profile";
import Post from "./pages/post/Post";
import {AuthProvider} from "./provider/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import SearchPage from "./pages/search/Search";
import CreatePostPage from "./pages/createPost/CreatePost";

const MainControllerContext = createContext<UseMainControllerReturnType | undefined>(undefined);

export const useMainControllerContext = () => {
    const context = useContext(MainControllerContext);
    if (!context) {
        throw new Error('useMainControllerContext must be used within a MainControllerProvider');
    }
    return context;
};

export const MainControllerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const mainController = useMainController();
    return (
        <MainControllerContext.Provider value={mainController}>
            {children}
        </MainControllerContext.Provider>
    );
};

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
                path: '/edit/profile',
                element: <RegisterPage/>
            },
            {
                path: '/edit/post/:idPost',
                element: <CreatePostPage/>
            },
            {
                path: '/post/:id',
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
            },
            {
                path: '/profile/:username',
                element: <ProfilePage/>
            },
            {
                path: '/search',
                element: <SearchPage/>
            },
            {
                path: '/createPost',
                element: <CreatePostPage/>
            },
        ]
    },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <MainControllerProvider>
                <AuthProvider>
                    <RouterProvider router={router}/>
                </AuthProvider>
            </MainControllerProvider>
        </ApolloProvider>
    </React.StrictMode>
);
