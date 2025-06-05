'use client';

import useAuth from "@/hooks/useAuth";

export default function Home() {
  const { usuario, carregado } = useAuth();

  if (!carregado) return <p>Carregando...</p>;
  if (!usuario) return <p>Você precisa estar logado.</p>;

  return (
    <div>
      <h1>Bem-vindo, {usuario?.Nome}!</h1>
    </div>
  );
}
