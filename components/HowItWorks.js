import React from 'react';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Flujo Simplificado</span>
          <h2 className={styles.title}>¿Cómo Funciona EvalúaAI en tu Colegio?</h2>
        </div>

        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3 className={styles.stepTitle}>Carga de Evaluaciones y Diagnósticos</h3>
            <p className={styles.stepDesc}>
              Sube informes psicopedagógicos, médicos o de equipo de aula de forma segura y centralizada.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Generación Asistida de Borradores</h3>
            <p className={styles.stepDesc}>
              El motor especializado procesa los datos y sugiere borradores normativos alineados al Decreto 170.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Revisión UTP y Sincronización</h3>
            <p className={styles.stepDesc}>
              El coordinador valida con un clic, descarga el expediente o lo prepara para su ingreso directo a FUDEI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
