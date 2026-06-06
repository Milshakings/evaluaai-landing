import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
});

export const metadata = {
  title: "EvalúaAI — Automatiza la burocracia del PIE",
  description:
    "IA especializada para equipos PIE en Chile. Genera informes técnicos en minutos, sincroniza con FUDEI y devuelve tiempo de calidad al aula.",
  openGraph: {
    title: "EvalúaAI",
    description: "Automatiza la burocracia del PIE con IA especializada.",
    url: "https://evaluaai.cl",
    siteName: "EvalúaAI",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
