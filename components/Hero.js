import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.badge}>
        <span className={styles.dot}></span>
        Especializado en el PIE chileno · Decreto 170
      </div>

      <h1 className={styles.headline}>
        Deja de perder<br />
        <span className={styles.highlight}>40 horas al mes</span><br />
        en burocracia PIE
      </h1>

      <p className={styles.sub}>
        EvalúaAI genera informes técnicos y perfiles neuro-psico-educativos
        en minutos. IA ajustada a la normativa chilena, sin alucinaciones
        pedagógicas y sincronizada con FUDEI.
      </p>

      <div className={styles.actions}>
        <a href="#cta" className={styles.primary}>Solicitar Demo Gratuito</a>
        <a href="#como-funciona" className={styles.secondary}>Ver cómo funciona →</a>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.num}>40h</span>
          <span className={styles.label}>ahorradas al mes por equipo PIE</span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.stat}>
          <span className={styles.num}>700K</span>
          <span className={styles.label}>estudiantes con NEE en Chile</span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.stat}>
          <span className={styles.num}>100%</span>
          <span className={styles.label}>precisión técnica normativa</span>
        </div>
      </div>
    </section>
  );
}
