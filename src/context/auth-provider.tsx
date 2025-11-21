"use client";

import type { User } from "@/lib/types";
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<User | null>;
  register: (name: string, email: string, pass: string) => Promise<User | null>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock Firebase Auth
const mockAuth = {
  login: async (email: string): Promise<User> => {
    // In a real app, this would call Firebase
    console.log(`Simulating login for ${email}`);
    return { id: "user-123", email, name: "Test User" };
  },
  register: async (name: string, email: string): Promise<User> => {
    console.log(`Simulating registration for ${name} <${email}>`);
    return { id: "user-123", email, name };
  },
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for an existing session
    try {
      const storedUser = localStorage.getItem("woodify-user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem("woodify-user");
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (email: string, pass: string) => {
    setLoading(true);
    // Dummy password check
    if (pass === "password123") {
      const loggedInUser = await mockAuth.login(email);
      setUser(loggedInUser);
      localStorage.setItem("woodify-user", JSON.stringify(loggedInUser));
      setLoading(false);
      return loggedInUser;
    }
    setLoading(false);
    return null;
  };

  const register = async (name: string, email: string, pass: string) => {
    setLoading(true);
    // Dummy validation
    if (name && email && pass) {
      const newUser = await mockAuth.register(name, email);
      setUser(newUser);
      localStorage.setItem("woodify-user", JSON.stringify(newUser));
      setLoading(false);
      return newUser;
    }
    setLoading(false);
    return null;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("woodify-user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
