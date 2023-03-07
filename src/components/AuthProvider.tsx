import React, { createContext, useContext, useReducer } from 'react';

interface State {
    userName: string;
    email: string;
    isLogged: Boolean;
}

interface Action {
    type: string;
    value?: any
}

const AuthContext = createContext(false);

export const useAuth = () => {
    return useContext(AuthContext);
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'LOGIN':
            if (action.value.email === "admin@admin.com" && action.value.password === "admin" && action.value.userName === 'admin') {
                localStorage.setItem("login", JSON.stringify({userName: action.value.userName, email: action.value.email, isLogged: true}));
                return {...state, userName: action.value.userName, email: action.value.email, isLogged: true};
            } else {
                return {...state, isLogged: false};
            }
        case 'LOGOUT':
            localStorage.removeItem("login");
            return {...state, userName: '', email: '', isLogged: false};
        case 'UPDATEUSER':
            localStorage.setItem("login", JSON.stringify({userName: action.value.userName, email: action.value.email, isLogged: true}));
            return {...state, userName: action.value.userName, email: action.value.email, isLogged: true};
        default:
            return {...state};
    }
}

export const AuthProvider: React.FC<{children: any}> = ({ children }) => {
    const [user, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem("login")) || {userName: '', email: '', isLogged: false});

    return (
        <AuthContext.Provider value={{user, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}