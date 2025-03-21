import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // Get authentication state from localStorage (persists after refresh)
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem("isLoggedIn") === "true";
    });

    const [loggedUser, setLoggedUser] = useState(() => {
        return JSON.parse(localStorage.getItem("loggedUser")) || {};
    });

    // Function to log in and store user details
    const login = (userData) => {
        setIsLoggedIn(true);
        setLoggedUser(userData);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loggedUser", JSON.stringify(userData));
    };

    // Function to log out and clear user details
    const logout = () => {
        setIsLoggedIn(false);
        setLoggedUser({});
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("loggedUser");
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, setLoggedUser, loggedUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use authentication in any component
export const useAuth = () => useContext(AuthContext);
