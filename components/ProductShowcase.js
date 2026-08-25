import React, { useState } from 'react';
import styles from './ProductShowcase.module.css';

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('trazabilidad');

  return (
    <section className={styles.section} id="ver-demo">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Visibilidad en Tiempo Real</span>
          <h2 className={styles.title}>Plataforma Diseñada para la Gestión Técnica PIE</h2>
          <p className={styles.subtitle}>
            Toma decisiones pedagógicas oportunas con auditoría preventiva de plazos normativos y monitoreo de carga docente.
          </p>
        </div>

        {/* Pestañas de Navegación */}
        <div className={styles.tabs}>
          <button
            onClick={() => setActiveTab('trazabilidad')}
            className={`${styles.tabButton} ${activeTab === 'trazabilidad' ? styles.activeTab : ''}`}
          >
            Dashboard UTP & Auditoría
          </button>
          <button
            onClick={() => setActiveTab('inasistencia')}
            className={`${styles.tabButton} ${activeTab === 'inasistencia' ? styles.activeTab : ''}`}
          >
            Alerta Temprana Inasistencia
          </button>
        </div>

        {/* Panel con Imagen Reales */}
        <div className={styles.card}>
          {activeTab === 'trazabilidad' && (
            <div className={styles.grid}>
              <div className={styles.textContent}>
                <h3 className={styles.cardTitle}>Dashboard de Trazabilidad UTP</h3>
                <p className={styles.cardDesc}>
                  Termómetro de carga y auditoría preventiva. Monitorea el estado de cada expediente (Aprobado, En revisión o Precaución por documentación incompleta) antes de cerrar procesos.
                </p>
                <ul className={styles.bulletList}>
                  <li>✓ Muestra horas de trabajo administrativo recuperadas.</li>
                  <li>✓ Control estricto de expedientes sincronizados a FUDEI.</li>
                </ul>
              </div>
              <div className={styles.imageContainer}>
                <img 
                  src="/dashboard-utp.png" 
                  alt="Dashboard de Trazabilidad UTP EvalúaAI" 
                  className={styles.screenshot}
                />
              </div>
            </div>
          )}

          {activeTab === 'inasistencia' && (
            <div className={styles.grid}>
              <div className={styles.textContent}>
                <h3 className={styles.cardTitle}>Alerta Temprana de Inasistencia</h3>
                <p className={styles.cardDesc}>
                  Cruce semanal de asistencia de estudiantes NEE. Permite detectar caídas sostenidas en el compromiso escolar e intervenir preventivamente antes de la deserción.
                </p>
                <div className={styles.highlightBox}>
                  📊 Reportes automáticos para comisiones de evaluación y convivencia escolar.
                </div>
              </div>
              <div className={styles.imageContainer}>
                <img 
                  src="/alerta-inasistencia.png" 
                  alt="Alerta Temprana de Inasistencia NEE" 
                  className={styles.screenshot}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
