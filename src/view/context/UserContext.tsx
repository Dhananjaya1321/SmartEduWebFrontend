import React, { createContext, useContext, useState } from "react";

// Define UserContext types
interface User {
    email: string;
    username: string;
    role: string;
    password?: string; // Optional for extra security
}

interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
}

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Custom hook for easy access
export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
};

// Provider component
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null); // Initialize with null (no user logged in)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
