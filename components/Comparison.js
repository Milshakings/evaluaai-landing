import styles from './Comparison.module.css';

export default function Comparison() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>¿Qué cambia en la gestión diaria de tu establecimiento?</h2>
      <div className={styles.tableContainer}>
        <div className={styles.column}>
          <h3 className={styles.colHeaderBad}>Sin EvalúaAI</h3>
          <ul>
            <li>Información fragmentada y carpetas físicas o locales</li>
            <li>Redacción manual de borradores desde cero</li>
            <li>Duplicación de digitación de datos del estudiante</li>
            <li>Revisión manual expediente por expediente</li>
            <li>Seguimiento desconectado entre UTP y PIE</li>
          </ul>
        </div>
        <div className={styles.columnHighlight}>
          <h3 className={styles.colHeaderGood}>Con EvalúaAI</h3>
          <ul>
            <li>Información centralizada, estructurada y reutilizable</li>
            <li>Generación asistida de borradores técnicos para revisión</li>
            <li>Reutilización inteligente de antecedentes del caso</li>
            <li>Visibilidad consolidada del estado del expediente</li>
            <li>Trazabilidad completa de avances y modificaciones</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
