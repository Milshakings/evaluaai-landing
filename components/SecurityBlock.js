import React from 'react';
import styles from './SecurityBlock.module.css';

export default function SecurityBlock() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Cumplimiento Legal & Ciberseguridad</span>
          <h2 className={styles.title}>Protección Estricta de Datos Sensibles</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.box}>
            <div className={styles.icon}>🔒</div>
            <h3 className={styles.boxTitle}>Ley 19.628 (Chile)</h3>
            <p className={styles.boxDesc}>
              Tratamiento de datos personales estructurado según la normativa chilena sobre protección de la vida privada de los estudiantes.
            </p>
          </div>

          <div className={styles.box}>
            <div className={styles.icon}>🛡️</div>
            <h3 className={styles.boxTitle}>Modelos Privados de IA</h3>
            <p className={styles.boxDesc}>
              Los expedientes e informes procesados jamás se utilizan para entrenar modelos públicos ni se comparten con terceros.
            </p>
          </div>

          <div className={styles.box}>
            <div className={styles.icon}>🔑</div>
            <h3 className={styles.boxTitle}>Aislamiento por Establecimiento</h3>
            <p className={styles.boxDesc}>
              Base de datos privada con encriptación. Cada colegio o sostenedor mantiene el control exclusivo de sus expedientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
