"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [token, setToken] = useState(null);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const tokenSalvo = localStorage.getItem("token");
      const usuarioSalvo = localStorage.getItem("usuario");
      console.log("token localStorage:", tokenSalvo);
      console.log("usuario localStorage:", usuarioSalvo);

      if (tokenSalvo && usuarioSalvo) {
        setToken(tokenSalvo);
        setUsuario(JSON.parse(usuarioSalvo));
      }
    } catch (error) {
      console.error("Erro ao recuperar dados do localStorage:", error);
    }

    setCarregado(true);
  }, []);

  const login = (data) => {
    setUsuario(data.usuario);
    setToken(data.token);
    localStorage.setItem("token", data.token);
    localStorage.setItem("usuario", JSON.stringify(data.usuario));
  };

  const logout = () => {
    setUsuario(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
  };

  return (
    <AuthContext.Provider value={{ usuario, token, login, logout, carregado }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
