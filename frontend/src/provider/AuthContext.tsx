import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { gql, useQuery } from "@apollo/client";
import { User } from "../types/graphql";

interface AuthContextType {
    authToken: string | null;
    loggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
    currentUser: User | null;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USER_INFO = gql`
  query USER_INFO_Query {
    getLoggedUser {
      id
      email
      username
    }
  }
`;

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [authToken, setAuthToken] = useState<string | null>(localStorage.getItem('token_케이팝_Paris'));
    const [loggedIn, setLoggedIn] = useState<boolean>(!!authToken);
    const [user, setUser] = useState<User | null>(null);
    const { data: userInfoData } = useQuery(USER_INFO, {
        skip: !authToken // Skip the query if there's no auth token
    });

    useEffect(() => {
        if (userInfoData) {
            setUser(userInfoData.getLoggedUser);
        }
    }, [userInfoData]);



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
        // setUser(null);
    };

    return (
        <AuthContext.Provider value={{ authToken, loggedIn, login, logout, currentUser:user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};
