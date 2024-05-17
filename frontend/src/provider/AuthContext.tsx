import { createContext, useContext, useState, ReactNode, useEffect  } from 'react';

interface AuthContextType {
    authToken: string | null;
    loggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
}
interface AuthProviderProps {
    children: ReactNode;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [authToken, setAuthToken] = useState<string | null>(localStorage.getItem('token_케이팝_Paris'));
    const [loggedIn, setLoggedIn] = useState<boolean>(!!authToken);

    useEffect(() => {
        setLoggedIn(!!authToken);
    }, [authToken]);

    const login = (token: string) => {
        setAuthToken(token);
        localStorage.setItem('token_케이팝_Paris', token);
    };

    const logout = () => {
        setAuthToken(null);
        localStorage.removeItem('token_케이팝_Paris');
    };

    return (
        <AuthContext.Provider value={{ authToken, loggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};