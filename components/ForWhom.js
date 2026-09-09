import styles from './ForWhom.module.css';

export default function ForWhom() {
  return (
    <section id="para-quien" className={styles.section}>
      <h2 className={styles.title}>Diseñado para cada nivel de la gestión educativa</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>COLEGIOS</h3>
          <p>Reduce la carga administrativa del equipo PIE y libera horas para la atención directa de estudiantes.</p>
          <a href="#demo" className={styles.link}>Soy un colegio →</a>
        </div>
        <div className={styles.card}>
          <h3>SOSTENEDORES</h3>
          <p>Obtén visibilidad consolidada sobre el estado documental de múltiples establecimientos a tu cargo.</p>
          <a href="#demo" className={styles.link}>Gestiono varios colegios →</a>
        </div>
        <div className={styles.card}>
          <h3>SLEP / DAEM / DEM</h3>
          <p>Centraliza la trazabilidad e informes de cumplimiento a escala territorial de forma estandarizada.</p>
          <a href="#demo" className={styles.link}>Gestiono red pública →</a>
        </div>
        <div className={styles.card}>
          <h3>PROVEEDORES EDTECH</h3>
          <p>Integra motor de estructuración de documentos e inteligencia especializada directamente en tu software.</p>
          <a href="#api" className={styles.link}>Quiero integrar EvalúaAI →</a>
        </div>
      </div>
    </section>
  );
}


