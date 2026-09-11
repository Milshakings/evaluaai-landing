'use client';
import { useState } from 'react';
import styles from './CTA.module.css';

export default function CTA() {
  const [formData, setFormData] = useState({
    nombre: '',
    cargo: '',
    organizacion: '',
    tipoOrganizacion: 'Colegio',
    email: '',
    whatsapp: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Preparado para conexión a eventos de analítica: demo_request
    console.log('demo_request', formData);
    alert('Gracias por tu interés. Nos pondremos en contacto para coordinar la demo de 20 minutos.');
  };

  return (
    <section id="demo" className={styles.section}>
      <div className={styles.container}>
        <h2>¿Cuánto tiempo está perdiendo hoy tu equipo PIE en tareas administrativas?</h2>
        <p>Agenda una demostración de 20 minutos y revisemos cómo EvalúaAI puede incorporarse a tu establecimiento.</p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.fieldGroup}>
            <input 
              type="text" 
              placeholder="Nombre completo" 
              required 
              value={formData.nombre}
              onChange={(e) => setFormData({...formData, nombre: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="Cargo (Ej: Coordinador PIE, Director, UTP)" 
              required 
              value={formData.cargo}
              onChange={(e) => setFormData({...formData, cargo: e.target.value})}
            />
          </div>

          <div className={styles.fieldGroup}>
            <input 
              type="text" 
              placeholder="Nombre de la institución / empresa" 
              required 
              value={formData.organizacion}
              onChange={(e) => setFormData({...formData, organizacion: e.target.value})}
            />
            <select 
              value={formData.tipoOrganizacion}
              onChange={(e) => setFormData({...formData, tipoOrganizacion: e.target.value})}
            >
              <option value="Colegio">Colegio</option>
              <option value="Sostenedor">Sostenedor / Red de colegios</option>
              <option value="SLEP">SLEP</option>
              <option value="DAEM/DEM">DAEM / DEM</option>
              <option value="Proveedor EdTech">Proveedor EdTech (Interés API)</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <div className={styles.fieldGroup}>
            <input 
              type="email" 
              placeholder="Correo institucional" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <input 
              type="tel" 
              placeholder="Teléfono / WhatsApp" 
              required 
              value={formData.whatsapp}
              onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
            />
          </div>

          <button type="submit" className={styles.btnSubmit}>Quiero ver EvalúaAI funcionando</button>
        </form>
      </div>
    </section>
  );
}


