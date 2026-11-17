export const dynamic = 'force-dynamic';
export const revalidate = 0;

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import HowItWorks from '../components/HowItWorks';
import ProductShowcase from '../components/ProductShowcase';
import ForWhom from '../components/ForWhom';
import Comparison from '../components/Comparison';
import SecurityBlock from '../components/SecurityBlock';
import ProcurementBadge from '../components/ProcurementBadge';
import Objections from '../components/Objections';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: 'var(--bg-dark)',
        minHeight: '100vh',
        color: 'var(--text-main)',
        overflowX: 'hidden',
        transition: 'background-color 0.25s ease, color 0.25s ease',
      }}
    >
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <ProductShowcase />
      <ForWhom />
      <Comparison />
      <SecurityBlock />
      <ProcurementBadge />
      <Objections />
      <CTA />
      <Footer />
    </main>
  );
}
