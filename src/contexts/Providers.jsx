'use client';

import { AuthProvider } from "@/contexts/AuthContext";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: Arial, sans-serif;
  }
`;

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <GlobalStyle />
      {children}
    </AuthProvider>
  );
}
