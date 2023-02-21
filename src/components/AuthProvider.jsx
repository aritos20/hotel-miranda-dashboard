import React, { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext(false);

export const useAuth = () => {
    return useContext(AuthContext);
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            if (action.value.email === "admin@admin.com" && action.value.password === "admin" && action.value.userName === 'admin') {
                localStorage.setItem("login", JSON.stringify({userName: action.value.userName, email: action.value.email, isLogged: true}));
                return {...state, userName: action.value.userName, email: action.value.email, isLogged: true};
            } else {
                alert("invalid credentials");
                break;
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

const AuthProvider = ({ children }) => {
    const [user, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem("login")) || {userName: '', email: '', isLogged: false});

    return (
        <AuthContext.Provider value={{user, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider