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

    console.log('demo_request', formData);

    alert(
      'Gracias por tu interés. Nos pondremos en contacto para coordinar la demo de 20 minutos.'
    );
  };

  return (
    <section id="demo" className={styles.section}>
      <div className={styles.backgroundGlow} />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            SOLICITA UNA DEMOSTRACIÓN
          </span>

          <h2 className={styles.title}>
            ¿Cuánto tiempo está perdiendo hoy tu equipo PIE en tareas
            administrativas?
          </h2>

          <p className={styles.description}>
            Agenda una demostración de 20 minutos y descubre cómo EvalúaAI
            puede reducir la carga administrativa de tu equipo y devolver
            tiempo de calidad al trabajo con los estudiantes.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h3>Conversemos sobre tu establecimiento</h3>
              <p>
                Completa tus datos y coordinaremos una demostración personalizada.
              </p>
            </div>

            <div className={styles.badge}>
              Demo · 20 min
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label htmlFor="nombre">
                  Nombre completo
                </label>

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
                <label htmlFor="cargo">
                  Cargo
                </label>

                <input
                  id="cargo"
                  name="cargo"
                  type="text"
                  placeholder="Ej. Coordinador/a PIE"
                  value={formData.cargo}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label htmlFor="organizacion">
                  Institución
                </label>

                <input
                  id="organizacion"
                  name="organizacion"
                  type="text"
                  placeholder="Ej. Colegio San Agustín"
                  value={formData.organizacion}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="tipoOrganizacion">
                  Tipo de organización
                </label>

                <select
                  id="tipoOrganizacion"
                  name="tipoOrganizacion"
                  value={formData.tipoOrganizacion}
                  onChange={handleChange}
                >
                  <option value="Colegio">
                    Colegio
                  </option>

                  <option value="Sostenedor">
                    Sostenedor / Red de colegios
                  </option>

                  <option value="SLEP">
                    SLEP
                  </option>

                  <option value="DAEM/DEM">
                    DAEM / DEM
                  </option>

                  <option value="Proveedor EdTech">
                    Proveedor EdTech
                  </option>

                  <option value="Otro">
                    Otro
                  </option>
                </select>
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label htmlFor="email">
                  Correo institucional
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="nombre@colegio.cl"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="whatsapp">
                  Teléfono / WhatsApp
                </label>

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

            <button
              type="submit"
              className={styles.btnSubmit}
            >
              <span>Quiero ver EvalúaAI funcionando</span>
              <span className={styles.arrow}>→</span>
            </button>

            <div className={styles.formFooter}>
              <span className={styles.check}>✓</span>
              <span>
                Sin compromiso · Demo personalizada · 20 minutos
              </span>
            </div>
          </form>
        </div>

        <div className={styles.trust}>
          <span>Diseñado para equipos PIE en Chile</span>
          <span className={styles.dot}>•</span>
          <span>Gestión documental</span>
          <span className={styles.dot}>•</span>
          <span>IA especializada</span>
        </div>
      </div>
    </section>
  );
}
