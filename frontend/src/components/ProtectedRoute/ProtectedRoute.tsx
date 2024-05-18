import { Navigate } from 'react-router-dom';
import {useAuth} from "../../provider/AuthContext";
import {ReactNode} from "react";

interface ProtectedRouteProps {
    children: ReactNode;
    redirectTo: string;
    blockIfLogged?: boolean;
}

const ProtectedRoute = ({ children, redirectTo, blockIfLogged = true }: ProtectedRouteProps) => {
    const { loggedIn } = useAuth();

    const shouldRedirect = blockIfLogged ? loggedIn : !loggedIn;

    return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

export default ProtectedRoute;