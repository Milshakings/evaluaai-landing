'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Comparison from '../components/Comparison';
import HowItWorks from '../components/HowItWorks';
import SecurityBlock from '../components/SecurityBlock';
import ForWhom from '../components/ForWhom';
import ApiSection from '../components/ApiSection';
import Objections from '../components/Objections';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Comparison />
      <HowItWorks />
      <SecurityBlock />
      <ForWhom />
      <ApiSection />
      <Objections />
      <CTA />
      <Footer />
    </main>
  );
}


