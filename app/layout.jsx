import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clínica Álvarez",
  description: "Clínica Álvarez",
  icons: {
    icon: "/LOGO-CLINICA.png",
    shortcut: "/LOGO-CLINICA.png",
    apple: "/LOGO-CLINICA.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
