import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import HowItWorks from '../components/HowItWorks';
import ProductShowcase from '../components/ProductShowcase';
import Audiences from '../components/Audiences';
import ForWhom from '../components/ForWhom';
import Comparison from '../components/Comparison';
import SecurityBlock from '../components/SecurityBlock';
import ProcurementBadge from '../components/ProcurementBadge';
import Objections from '../components/Objections';
import ApiSection from '../components/ApiSection';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: '#0b0f17',
        minHeight: '100vh',
        color: '#ffffff',
        overflowX: 'hidden',
      }}
    >
      {/* Navegación */}
      <Navbar />

      {/* 1. Propuesta de valor principal */}
      <Hero />

      {/* 2. El problema que resolvemos */}
      <Problem />

      {/* 3. Cómo funciona EvalúaAI */}
      <HowItWorks />

      {/* 4. Producto / demostración visual */}
      <ProductShowcase />

      {/* 5. A quién está dirigido */}
      <Audiences />

      {/* 6. Perfiles de usuarios */}
      <ForWhom />

      {/* 7. Comparación con el proceso tradicional */}
      <Comparison />

      {/* 8. Seguridad y confianza */}
      <SecurityBlock />

      {/* 9. Compras / implementación institucional */}
      <ProcurementBadge />

      {/* 10. Respuestas a objeciones */}
      <Objections />

      {/* 11. Posibilidades de integración */}
      <ApiSection />

      {/* 12. Llamado a la acción */}
      <CTA />

      {/* 13. Pie de página */}
      <Footer />
    </main>
  );
}

