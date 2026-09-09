import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  const steps = [
    { num: '01', title: 'Carga', desc: 'El profesional incorpora las evaluaciones e informes disponibles del estudiante.' },
    { num: '02', title: 'Procesamiento', desc: 'EvalúaAI estructura la información respetando la lógica de los procesos PIE.' },
    { num: '03', title: 'Borrador', desc: 'El sistema genera una propuesta documental estructurada en segundos.' },
    { num: '04', title: 'Revisión profesional', desc: 'El especialista valida, edita y complementa con su juicio clínico/pedagógico.' },
    { num: '05', title: 'Gestión', desc: 'El expediente queda organizado, trazable y listo para seguimiento o auditoría.' }
  ];

  return (
    <section id="como-funciona" className={styles.section}>
      <h2 className={styles.title}>Cómo funciona EvalúaAI</h2>
      <div className={styles.stepsGrid}>
        {steps.map((step) => (
          <div key={step.num} className={styles.stepCard}>
            <div className={styles.stepNum}>{step.num}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


