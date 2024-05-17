import { Navigate } from 'react-router-dom';
import {useAuth} from "../../provider/AuthContext";
import {ReactNode} from "react";

interface ProtectedRouteProps {
    children: ReactNode;
    redirectTo: string;
}

const ProtectedRoute = ({ children, redirectTo }: ProtectedRouteProps) => {
    const { loggedIn } = useAuth();
    return loggedIn ? <Navigate to={redirectTo} /> : children;
};

export default ProtectedRoute;