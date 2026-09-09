import styles from './SecurityBlock.module.css';

export default function SecurityBlock() {
  return (
    <section id="seguridad" className={styles.section}>
      <h2 className={styles.title}>Tus datos educativos requieren un tratamiento riguroso</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>PRIVACIDAD</h3>
          <p>Los datos de los estudiantes se procesan bajo protocolos estrictos de confidencialidad y aislamiento documental.</p>
        </div>
        <div className={styles.card}>
          <h3>AISLAMIENTO</h3>
          <p>Cada establecimiento o sostenedor mantiene sus bases de información totalmente separadas e inaccesibles para terceros.</p>
        </div>
        <div className={styles.card}>
          <h3>CONTROL HUMANO</h3>
          <p>La plataforma genera borradores. La responsabilidad técnica, validación y decisión final es siempre del profesional educativo.</p>
        </div>
        <div className={styles.card}>
          <h3>IA RESPONSABLE</h3>
          <p>Modelos optimizados exclusivamente para estructuración administrativa y soporte documental, no para tomar decisiones diagnósticas.</p>
        </div>
      </div>
    </section>
  );
}

