import styles from './ForWhom.module.css';

export default function ForWhom() {
  return (
    <section id="para-quien" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Arquitectura Institucional</span>
          <h2 className={styles.title}>Diseñado para cada nivel de la gestión educativa</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.role}>COLEGIOS (PIE + UTP)</h3>
            <ul className={styles.list}>
              <li>• Reduce la carga administrativa del equipo PIE y libera horas para atención directa.</li>
              <li>• Conecta informes diagnósticos con adecuaciones evaluativas en aula regular (Decreto 83).</li>
              <li>• Rendición transparente compatible con subvenciones PIE y SEP.</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3 className={styles.role}>SOSTENEDORES Y REDES</h3>
            <ul className={styles.list}>
              <li>• Visibilidad consolidada del avance documental de múltiples establecimientos.</li>
              <li>• Auditoría preventiva de plazos normativos antes de fiscalizaciones.</li>
              <li>• Estandarización técnica de informes entre distintos equipos profesionales.</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3 className={styles.role}>SLEP / DAEM / DEM</h3>
            <ul className={styles.list}>
              <li>• Trazabilidad e indicadores de cumplimiento territorial bajo Decreto 170.</li>
              <li>• Adquisición habilitada vía Mercado Público (Compra Ágil, Trato Directo y Licitación).</li>
              <li>• Aislamiento estricto de bases de datos por establecimiento.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
