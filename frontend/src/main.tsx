import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/error/Error";
import HomePage from "./pages/home/Home";

const routes = [
    {path: '/', element: <HomePage/>},
];

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route errorElement={<ErrorPage/>}>
            {routes.map((route, idx) => (
                <Route errorElement={<ErrorPage/>} key={window.btoa(idx.toString())} path={route.path} element={<App page={route.element} />} />
            ))}
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);