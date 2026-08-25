import React from 'react';
import styles from "./Hero.module.css";

export default function Hero({ onOpenDemo }) {
  return (
    <section className={styles.hero}>
      {/* Badge con punto animado */}
      <div className={styles.badge}>
        <span className={styles.dot}></span>
        <span>Alineado al Decreto 170 &bull; Sistema PIE Chile</span>
      </div>

      {/* Titular */}
      <h1 className={styles.headline}>
        Trazabilidad PIE al día y{' '}
        <span className={styles.highlight}>carpetas de evaluación listas en minutos</span>
      </h1>

      {/* Subtítulo */}
      <p className={styles.sub}>
        Plataforma especializada que automatiza la redacción de borradores técnicos, 
        elimina la duplicación de datos para FUDEI y protege a tu colegio en auditorías.
      </p>

      {/* Acciones / Botones */}
      <div className={styles.actions}>
        <button onClick={onOpenDemo} className={styles.primary}>
          Solicitar Demo Institucional
        </button>
        <a href="#ver-demo" className={styles.secondary}>
          Ver cómo funciona &rarr;
        </a>
      </div>

      {/* Métricas / Estadísticas */}
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.num}>80%</span>
          <span className={styles.label}>Menos tiempo en papeleo administrativo</span>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.stat}>
          <span className={styles.num}>100%</span>
          <span className={styles.label}>Trazabilidad de expedientes para la Dirección</span>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.stat}>
          <span className={styles.num}>1 Clic</span>
          <span className={styles.label}>Formato listo para traspasar a FUDEI</span>
        </div>
      </div>
    </section>
  );
}
