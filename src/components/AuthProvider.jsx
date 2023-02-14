import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(false);

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("login")) || {email: "", password: "", isLogged: false});

    const login = ({email, password}) => {
        if (email === "admin@admin.com" && password === "admin") {
            localStorage.setItem("login", JSON.stringify({email: "admin@admin.com", password: "admin", isLogged: true}));
            setUser({email, password, isLogged: true});
        } else {
            alert("invalid credentials");
        }
    }
  
    const logout = () => {
        localStorage.removeItem("login");
        setUser(false);
    }

    const value = {
        user,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider