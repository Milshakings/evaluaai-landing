import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProcurementBadge from "../components/ProcurementBadge";
import ProductShowcase from "../components/ProductShowcase";
import SecurityBlock from "../components/SecurityBlock";
import Problem from "../components/Problem";
import HowItWorks from "../components/HowItWorks";
import ForWhom from "../components/ForWhom";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProcurementBadge />
        <ProductShowcase />
        <SecurityBlock />
        <Problem />
        <HowItWorks />
        <ForWhom />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
