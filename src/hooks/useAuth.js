import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../contexts/AuthContext";

const useAuth = () => {
  const { usuario, carregado } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (carregado && usuario === null) {
      router.push("/login");
    }
  }, [carregado, usuario, router]);

  return { usuario, carregado };
};

export default useAuth;
