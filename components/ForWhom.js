import React from 'react';
import styles from './ForWhom.module.css';

export default function ForWhom() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Perfiles de Usuario</span>
          <h2 className={styles.title}>Diseñado para Todo el Equipo Educativo</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.role}>Sostenedores y Directores</h3>
            <ul className={styles.list}>
              <li>✓ Garantía de cumplimiento normativo ante auditorías.</li>
              <li>✓ Visibilidad total del avance del programa en tiempo real.</li>
              <li>✓ Transparencia en la gestión de fondos SEP/PIE.</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3 className={styles.role}>Coordinadores PIE & UTP</h3>
            <ul className={styles.list}>
              <li>✓ Monitoreo centralizado de estados de avance por nivel.</li>
              <li>✓ Reducción drástica del tiempo de revisión de expedientes.</li>
              <li>✓ Alertas preventivas sobre plazos de vencimiento.</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3 className={styles.role}>Educadores Especiales y Dupla</h3>
            <ul className={styles.list}>
              <li>✓ Apoyo inteligente para redactar borradores técnicos.</li>
              <li>✓ Menos horas dedicadas al trabajo administrativo fuera de horario.</li>
              <li>✓ Más tiempo efectivo para atención directa de estudiantes.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
