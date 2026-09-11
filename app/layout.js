import "./globals.css";

export const metadata = {
  title: "EvalúaAI — Automatiza la burocracia del PIE",
  description:
    "IA especializada para equipos PIE en Chile. Genera informes técnicos en minutos, sincroniza con FUDEI y devuelve tiempo de calidad al aula.",
  keywords: [
    "EvalúaAI",
    "PIE",
    "Programa de Integración Escolar",
    "educación inclusiva",
    "inteligencia artificial",
    "colegios Chile",
    "FUDEI",
    "Decreto 170",
  ],
  openGraph: {
    title: "EvalúaAI — Automatiza la burocracia del PIE",
    description:
      "IA especializada para equipos PIE en Chile. Genera informes técnicos, centraliza expedientes y reduce el trabajo administrativo.",
    url: "https://evaluaai.cl",
    siteName: "EvalúaAI",
    locale: "es_CL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}


