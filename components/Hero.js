import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <span className={styles.badge}>Pensado para equipos PIE, UTP y sostenedores</span>
      <h1 className={styles.title}>
        Automatiza la documentación <br />
        <span className={styles.highlight}>de tu equipo PIE</span>
      </h1>
      <p className={styles.subtitle}>
        EvalúaAI ayuda a colegios y sostenedores a transformar evaluaciones e información técnica en borradores estructurados, centralizar expedientes y reducir el trabajo administrativo repetitivo.
      </p>
      <div className={styles.ctaGroup}>
        <a href="#demo" className={styles.btnPrimary}>Solicitar una demostración (20 min)</a>
        <a href="#como-funciona" className={styles.btnSecondary}>Ver cómo funciona</a>
      </div>
      <p className={styles.disclaimer}>
        *La inteligencia artificial actúa como asistente. La revisión y decisión técnica siempre permanece en el profesional.
      </p>
    </section>
  );
}
