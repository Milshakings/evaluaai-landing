import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <span className={styles.badge}>
        Decreto 170 · Decreto 83 (DUA) · Gestión FUDEI
      </span>
      <h1 className={styles.title}>
        Automatiza la documentación PIE <br />
        <span className={styles.highlight}>y conecta el expediente con el aula</span>
      </h1>
      <p className={styles.subtitle}>
        EvalúaAI transforma informes clínicos y psicopedagógicos en borradores listos para FUDEI, entrega trazabilidad preventiva a UTP y sugiere adecuaciones curriculares para el docente de asignatura.
      </p>
      <div className={styles.ctaGroup}>
        <a href="#demo" className={styles.btnPrimary}>Agendar Demo Técnica (20 min)</a>
        <a href="#ver-demo" className={styles.btnSecondary}>Ver ejemplo Antes y Después</a>
      </div>
      <p className={styles.disclaimer}>
        * Respaldo institucional: La IA estructura borradores; la validación y decisión técnica siempre permanece en el profesional.
      </p>
    </section>
  );
}
