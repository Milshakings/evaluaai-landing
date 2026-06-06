import styles from "./HowItWorks.module.css";

const steps = [
  {
    num: "01",
    title: "Ingresa los datos del estudiante",
    desc: "El equipo PIE registra la información evaluativa una sola vez. EvalúaAI la procesa usando modelos LLM ajustados al Decreto 170.",
  },
  {
    num: "02",
    title: "IA genera el informe en minutos",
    desc: "Se produce un borrador técnico del perfil neuro-psico-educativo con precisión normativa del 100%. Sin alucinaciones pedagógicas.",
  },
  {
    num: "03",
    title: "Sincronización automática con FUDEI",
    desc: "La información fluye directamente al sistema FUDEI sin duplicar gestiones. Un solo ingreso, cero doble trabajo.",
  },
  {
    num: "04",
    title: "Dashboard de trazabilidad institucional",
    desc: "Directivos y sostenedores visualizan avances en tiempo real. Evidencia lista para auditorías SLEP en cualquier momento.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Cómo Funciona</span>
          <h2 className={styles.title}>
            De datos crudos a informe<br />técnico en 4 pasos
          </h2>
        </div>

        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.num}>{s.num}</div>
              <div className={styles.content}>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.highlight}>
          <div className={styles.hlInner}>
            <span className={styles.hlIcon}>🎯</span>
            <div>
              <p className={styles.hlTitle}>
                No es ChatGPT con un prompt de educación
              </p>
              <p className={styles.hlDesc}>
                EvalúaAI utiliza LLMs livianos (Llama / DeepSeek) con
                fine-tuning sobre la normativa chilena PIE y una arquitectura
                NoSQL privada. Cada output es técnicamente válido para su uso
                en establecimientos educacionales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
