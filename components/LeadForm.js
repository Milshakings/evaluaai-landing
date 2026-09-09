import styles from './LeadForm.module.css';

export default function LeadForm() {
  return (
    <section id="demo" className={styles.section}>
      <div className={styles.card}>
        <h2 className={styles.title}>¿Cuánto tiempo está perdiendo hoy tu equipo PIE en tareas administrativas?</h2>
        <p className={styles.subtitle}>
          Agenda una demostración de 20 minutos y revisemos cómo EvalúaAI puede incorporarse a tu establecimiento.
        </p>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.grid}>
            <div className={styles.group}>
              <label>Nombre completo</label>
              <input type="text" placeholder="Ej: Marcela González" className={styles.input} />
            </div>
            <div className={styles.group}>
              <label>Cargo</label>
              <input type="text" placeholder="Ej: Coordinadora PIE / UTP" className={styles.input} />
            </div>
            <div className={styles.group}>
              <label>Nombre de la institución</label>
              <input type="text" placeholder="Ej: Liceo Bicentenario..." className={styles.input} />
            </div>
            <div className={styles.group}>
              <label>Tipo de establecimiento</label>
              <select className={styles.select}>
                <option value="colegio">Colegio / Escuela</option>
                <option value="sostenedor">Sostenedor / Red de Colegios</option>
                <option value="slep">SLEP / Municipio</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div className={styles.group}>
              <label>Correo institucional</label>
              <input type="email" placeholder="nombre@colegio.cl" className={styles.input} />
            </div>
            <div className={styles.group}>
              <label>Teléfono / WhatsApp</label>
              <input type="tel" placeholder="+56 9 1234 5678" className={styles.input} />
            </div>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Quiero ver EvalúaAI funcionando
          </button>
        </form>
      </div>
    </section>
  );
}
