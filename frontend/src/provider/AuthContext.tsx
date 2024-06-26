import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { gql, useQuery } from "@apollo/client";
import { User } from "../types/graphql";
import {useMainControllerContext} from "../main";

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
      imagePath
    }
  }
`;

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [authToken, setAuthToken] = useState<string | null>(localStorage.getItem('token_케이팝_Paris'));
    const [loggedIn, setLoggedIn] = useState<boolean>(!!authToken);
    const [user, setUser] = useState<User | null>(null);

    const {m_notificationController} = useMainControllerContext();

    const { data: userInfoData, refetch  } = useQuery(USER_INFO, {
        skip: !authToken
    });

    useEffect(() => {
        if (userInfoData) {
            setUser(userInfoData.getLoggedUser);
        }
    }, [userInfoData]);


    const login = (token: string) => {
        setAuthToken(token);
        localStorage.setItem('token_케이팝_Paris', token);
        refetch().then(() => {
            setLoggedIn(true);
        }).catch(() => {
            setAuthToken(null);
            localStorage.removeItem('token_케이팝_Paris');
            setLoggedIn(false);
            setUser(null);
        });
    };

    const logout = () => {
        setAuthToken(null);
        localStorage.removeItem('token_케이팝_Paris');
        setLoggedIn(false);
        setUser(null);
        m_notificationController.setNotification({ message: "Logged out", type: "success" });
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
