'use client';

import React, { useState } from 'react';
import styles from './ProductShowcase.module.css';

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('antes-despues');

  return (
    <section className={styles.section} id="ver-demo">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Prueba de Realidad</span>
          <h2 className={styles.title}>Plataforma Diseñada para el Rigor Técnico PIE</h2>
          <p className={styles.subtitle}>
            Revisa cómo el sistema estructura expedientes FUDEI reales y entrega trazabilidad preventiva a UTP.
          </p>
        </div>

        <div className={styles.tabs}>
          <button
            type="button"
            onClick={() => setActiveTab('antes-despues')}
            className={`${styles.tabButton} ${activeTab === 'antes-despues' ? styles.activeTab : ''}`}
          >
            Antes y Después (Borrador FUDEI)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('trazabilidad')}
            className={`${styles.tabButton} ${activeTab === 'trazabilidad' ? styles.activeTab : ''}`}
          >
            Dashboard UTP & Auditoría
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('inasistencia')}
            className={`${styles.tabButton} ${activeTab === 'inasistencia' ? styles.activeTab : ''}`}
          >
            Alerta Temprana Inasistencia
          </button>
        </div>

        {activeTab === 'antes-despues' && (
          <div className={styles.card}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              <div style={{ background: 'var(--bg-dark)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '20px' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  1. Entrada: Notas Clínicas / Psicopedagógicas
                </span>
                <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginTop: '12px', lineHeight: '1.6' }}>
                  &ldquo;Estudiante 4° básico, deriva profesora jefe por descenso en comprensión lectora y cálculo. En EVALÚA-2 obtiene percentil 15 en lectura y 20 en memoria de trabajo. Apoderada reporta antecedentes de parto prematuro sin terapias previas. Se sugiere apoyo en aula de recursos.&rdquo;
                </p>
              </div>

              <div style={{ background: 'var(--bg-dark)', border: '1px solid var(--brand-cyan-border)', borderRadius: '12px', padding: '20px' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--brand-cyan)', textTransform: 'uppercase' }}>
                  2. Salida EvalúaAI: Borrador FUDEI + Bajada DUA
                </span>
                <div style={{ fontSize: '13.5px', color: 'var(--text-main)', marginTop: '12px', lineHeight: '1.6' }}>
                  <p style={{ marginBottom: '8px' }}>
                    <strong>Síntesis Diagnóstica (Dec. 170):</strong> Presenta necesidades educativas especiales de carácter transitorio (DEA), evidenciadas en descenso significativo en decodificación lectora (Pc 15) y memoria operativa (Pc 20).
                  </p>
                  <p>
                    <strong>Sugerencia Aula Regular (Dec. 83):</strong> Segmentar instrucciones escritas en pasos breves, otorgar tiempo adicional en evaluaciones de Matemática y priorizar apoyos visuales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'trazabilidad' && (
          <div className={styles.card}>
            <div className={styles.grid}>
              <div className={styles.textContent}>
                <h3 className={styles.cardTitle}>Dashboard de Trazabilidad UTP</h3>
                <p className={styles.cardDesc}>
                  Termómetro de carga y auditoría preventiva. Monitorea el estado de cada expediente (Aprobado, En revisión o Precaución por documentación incompleta) antes de cerrar procesos.
                </p>
                <ul className={styles.bulletList}>
                  <li>✓ Reduce de 4 horas a 25 minutos la consolidación de expedientes.</li>
                  <li>✓ Control estricto de expedientes listos para plataforma FUDEI.</li>
                </ul>
              </div>
              <div className={styles.imageContainer}>
                <img src="/dashboard-utp.png" alt="Dashboard UTP" className={styles.screenshot} />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'inasistencia' && (
          <div className={styles.card}>
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
                <img src="/alerta-inasistencia.png" alt="Alerta Inasistencia" className={styles.screenshot} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
