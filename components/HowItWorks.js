import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  const steps = [
    { num: '01', title: 'Carga de Antecedentes', desc: 'El profesional incorpora anamnesis, evaluaciones diagnósticas e informes previos del estudiante.' },
    { num: '02', title: 'Procesamiento Normativo', desc: 'EvalúaAI estructura la información bajo los criterios técnicos del Decreto 170.' },
    { num: '03', title: 'Borrador FUDEI', desc: 'Genera en segundos una propuesta documental coherente lista para revisión.' },
    { num: '04', title: 'Validación Profesional', desc: 'El especialista revisa, edita y firma con total autonomía clínica y pedagógica.' },
    { num: '05', title: 'Auditoría Preventiva UTP', desc: 'El expediente queda trazable y validado antes de fiscalizaciones de Superintendencia.' },
    { num: '06', title: 'Bajada al Aula (Decreto 83 / DUA)', desc: 'Traduce los antecedentes en sugerencias prácticas de adecuación evaluativa para el profesor de asignatura.' }
  ];

  return (
    <section id="como-funciona" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Flujo Integral PIE + UTP</span>
          <h2 className={styles.title}>Cómo funciona EvalúaAI</h2>
        </div>
        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepNumber}>{step.num}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
