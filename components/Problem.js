import React from 'react';
import styles from './Problem.module.css';

export default function Problem() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>El Desafío Real en Educación</span>
          <h2 className={styles.title}>
            El papeleo excesivo consume el tiempo de tus profesionales PIE
          </h2>
          <p className={styles.subtitle}>
            Las exigencias normativas del Decreto 170 desgastan a los equipos técnicos con tareas repetitivas en lugar de enfocar el tiempo en el aula.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>⌛</div>
            <h3 className={styles.cardTitle}>Horas Perdidas en Redacción</h3>
            <p className={styles.cardDesc}>
              Coordinadores e integradores dedican hasta un 40% de su jornada redactando borradores, informes de avance y fichas técnicas manualmente.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>📋</div>
            <h3 className={styles.cardTitle}>Doble Carga con FUDEI</h3>
            <p className={styles.cardDesc}>
              Copiar información entre carpetas físicas, planillas de Excel internas y la plataforma oficial genera errores y trabajo duplicado.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>⚠️</div>
            <h3 className={styles.cardTitle}>Riesgo en Auditorías Superintendencia</h3>
            <p className={styles.cardDesc}>
              Falta de estandarización en las evidencias pedagógicas y riesgo de multas o devoluciones de subvención por expedientes fuera de plazo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const items = [
  {
    icon: "📋",
    title: "Informes que nadie tiene tiempo de escribir",
    desc: "Los equipos PIE pasan hasta 40 horas mensuales redactando perfiles neuro-psico-educativos fuera de su horario laboral.",
  },
  {
    icon: "🔄",
    title: "FUDEI: datos ingresados dos veces",
    desc: "La información técnica se duplica entre sistemas sin comunicación, generando errores y pérdida de tiempo crítico.",
  },
  {
    icon: "📊",
    title: "Cero trazabilidad institucional",
    desc: "Directivos no pueden centralizar avances ni justificar el uso de la subvención estatal ante auditorías de SLEP.",
  },
  {
    icon: "🧠",
    title: "IAs genéricas que alucinan normativa",
    desc: "ChatGPT y similares no conocen el Decreto 170 ni los protocolos PIE. El resultado: documentos técnicamente inválidos.",
  },
];

