/** @type {import('next').NextConfig} */
const nextConfig = {
  // Aumenta el tiempo de espera para la generación de páginas estáticas
  staticPageGenerationTimeout: 300,
  images: {
    unoptimized: true, // Desactiva la optimización estricta para evitar bloqueos en el build
  },
};

module.exports = nextConfig;
