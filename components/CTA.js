'use client';

import { useState } from 'react';
import styles from './CTA.module.css';

export default function CTA() {
  const [requestType, setRequestType] = useState('demo'); // 'demo' | 'ficha'
  const [formData, setFormData] = useState({
    nombre: '',
    cargo: '',
    organizacion: '',
    tipoOrganizacion: 'Colegio',
    email: '',
    whatsapp: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('lead_request', { requestType, ...formData });

    if (requestType === 'ficha') {
      alert(
        'Solicitud recibida. Enviaremos a tu correo institucional la Ficha Técnica, especificaciones Ley 21.719 y datos de proveedor Mercado Público.'
      );
    } else {
      alert(
        'Gracias por tu interés. Nos pondremos en contacto para coordinar la demostración técnica de 20 minutos.'
      );
    }
  };

  return (
    <section id="demo" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>SIGUIENTE PASO INSTITUCIONAL</span>
          <h2 className={styles.title}>
            Lleva el orden normativo y pedagógico a tu equipo PIE
          </h2>
          <p className={styles.description}>
            Selecciona si deseas agendar una demostración práctica con tu equipo o recibir directamente la documentación técnica para evaluación de compra.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h3>
                {requestType === 'demo'
                  ? 'Agendar Demostración Técnica (20 min)'
                  : 'Solicitar Ficha Técnica & Kit Mercado Público'}
              </h3>
              <p>
                {requestType === 'demo'
                  ? 'Ideal para Directores, Jefes UTP y Coordinadores PIE.'
                  : 'Ideal para Sostenedores, Encargados de Compras SLEP/DAEM y Administración.'}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setRequestType('demo')}
                className={styles.badge}
                style={{
                  backgroundColor: requestType === 'demo' ? 'var(--brand-cyan)' : 'transparent',
                  color: requestType === 'demo' ? 'var(--btn-text-on-brand)' : 'var(--brand-cyan)',
                }}
              >
                1. Agendar Demo
              </button>
              <button
                type="button"
                onClick={() => setRequestType('ficha')}
                className={styles.badge}
                style={{
                  backgroundColor: requestType === 'ficha' ? 'var(--brand-cyan)' : 'transparent',
                  color: requestType === 'ficha' ? 'var(--btn-text-on-brand)' : 'var(--brand-cyan)',
                }}
              >
                2. Pedir Kit Compras / PDF
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label htmlFor="nombre">Nombre completo</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Ej. Marcela González"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="cargo">Cargo</label>
                <input
                  id="cargo"
                  name="cargo"
                  type="text"
                  placeholder="Ej. Director/a, Jefe UTP o Coordinador/a PIE"
                  value={formData.cargo}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label htmlFor="organizacion">Establecimiento / SLEP / Sostenedor</label>
                <input
                  id="organizacion"
                  name="organizacion"
                  type="text"
                  placeholder="Ej. Colegio San Agustín / SLEP Santa Rosa"
                  value={formData.organizacion}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="tipoOrganizacion">Tipo de institución</label>
                <select
                  id="tipoOrganizacion"
                  name="tipoOrganizacion"
                  value={formData.tipoOrganizacion}
                  onChange={handleChange}
                >
                  <option value="Colegio Particular Subvencionado">Colegio Particular Subvencionado</option>
                  <option value="Sostenedor / Red">Sostenedor / Red de colegios</option>
                  <option value="SLEP">SLEP</option>
                  <option value="DAEM/DEM">DAEM / DEM</option>
                  <option value="Colegio Particular Pagado">Colegio Particular Pagado</option>
                </select>
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label htmlFor="email">Correo institucional</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="nombre@institucion.cl"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="whatsapp">Teléfono / WhatsApp</label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="+56 9 1234 5678"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className={styles.btnSubmit}>
              <span>
                {requestType === 'demo'
                  ? 'Confirmar solicitud de Demo (20 min)'
                  : 'Recibir Ficha Técnica y Antecedentes Mercado Público'}
              </span>
              <span className={styles.arrow}>→</span>
            </button>

            <div className={styles.formFooter}>
              <span className={styles.check}>✓</span>
              <span>
                Sin compromiso · Cumplimiento Ley 21.719 · Respaldo glosas PIE / SEP
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
