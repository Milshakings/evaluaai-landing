import styles from "./Problem.module.css";

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

export default function Problem() {
  return (
    <section id="problema" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>El Problema</span>
          <h2 className={styles.title}>
            El sistema PIE está<br />ahogado en burocracia
          </h2>
          <p className={styles.desc}>
            1 de cada 3 estudiantes en Chile tiene NEE. Sus docentes merecen
            herramientas que estén a la altura del desafío.
          </p>
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.icon}>{item.icon}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
