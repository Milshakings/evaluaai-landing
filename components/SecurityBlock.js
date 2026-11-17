import styles from './SecurityBlock.module.css';

export default function SecurityBlock() {
  return (
    <section id="seguridad" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Respaldo Jurídico y Ciberseguridad</span>
          <h2 className={styles.title}>Protección estricta para datos clínicos y escolares</h2>
        </div>
        <div className={styles.grid}>
          <div className={styles.box}>
            <h3 className={styles.boxTitle}>Cumplimiento Ley 21.719</h3>
            <p className={styles.boxDesc}>
              Protocolos de encriptación y resguardo diseñados para la nueva Ley de Protección de Datos Personales tratándose de datos sensibles de menores con NEE.
            </p>
          </div>
          <div className={styles.box}>
            <h3 className={styles.boxTitle}>Aislamiento Institucional</h3>
            <p className={styles.boxDesc}>
              Cada colegio, sostenedor o SLEP opera en un entorno aislado. Los datos de tus estudiantes jamás se utilizan para entrenar modelos públicos.
            </p>
          </div>
          <div className={styles.box}>
            <h3 className={styles.boxTitle}>Autonomía Profesional</h3>
            <p className={styles.boxDesc}>
              La IA estructura borradores administrativos; el criterio clínico, la validación y la firma final pertenecen siempre al especialista PIE.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
