export const dynamic = 'force-dynamic';
export const revalidate = 0;

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

// app/page.js

async function getData() {
  const controller = new AbortController();
  // Corta la petición si tarda más de 8 segundos en responder
  const timeoutId = setTimeout(() => controller.abort(), 8000); 

  try {
    const res = await fetch('https://api.tu-servicio.com/data', {
      signal: controller.signal,
      cache: 'no-store' // Evita guardar caché si necesitas datos dinámicos
    });
    
    clearTimeout(timeoutId);
    
    if (!res.ok) throw new Error('Error al obtener datos');
    return await res.json();

  } catch (error) {
    console.error('Error fetching data during build:', error);
    // Devuelve un valor por defecto para que el build NO falle
    return { data: [] }; 
  }
}

export default async function HomePage() {
  const data = await getData();

  return (
    <main>
      <h1>EvaluaAI</h1>
      {/* Tu contenido usando data */}
    </main>
  );
}
