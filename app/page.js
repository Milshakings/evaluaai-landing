import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Audiences from '../components/Audiences';
import Comparison from '../components/Comparison';
import LeadForm from '../components/LeadForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#0b0f17', minHeight: '100vh', color: '#ffffff' }}>
      <Navbar />
      <Hero />
      <Audiences />
      <Comparison />
      <LeadForm />
      <Footer />
    </main>
  );
}
