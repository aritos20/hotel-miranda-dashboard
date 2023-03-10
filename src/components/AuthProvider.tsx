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

interface Context {
    user: {
        userName: string;
        email: string;
        isLogged: Boolean;
    };
    dispatch?: any
}

const initialContext: Context = {
    user: {
        userName: '',
        email: '',
        isLogged: false
    }, 
}

const AuthContext = createContext(initialContext);

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

const retrieveFromStorage = (): any => {
    let storageData: any = {};
    try {
        storageData = localStorage.getItem("login");
        if (typeof storageData === 'string') {
            return JSON.parse(storageData);
            
        } else {
            return {userName: '', email: '', isLogged: false};
        }
    } catch (e) {
        console.error(e);
    }
}

export const AuthProvider: React.FC<{children: any}> = ({ children }) => {
    const [user, dispatch] = useReducer(reducer, retrieveFromStorage());

    return (
        <AuthContext.Provider value={{user, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}