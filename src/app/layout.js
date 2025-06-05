import "./globals.css";
import Providers from "../contexts/Providers";

export const metadata = {
  title: "Minha Aplicação",
  description: "Descrição",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
