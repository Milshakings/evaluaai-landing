import styles from "./ForWhom.module.css";

const audiences = [
  {
    tag: "Usuario directo",
    tagColor: "blue",
    title: "Equipos Técnicos y Docentes PIE",
    desc: "Psicólogos, educadoras diferenciales y fonoaudiólogos que dedican horas fuera del horario laboral a redactar informes. EvalúaAI les devuelve ese tiempo.",
    benefits: ["Borradores en minutos", "Revisión, no redacción", "Fin al agotamiento burocrático"],
  },
  {
    tag: "Institucional",
    tagColor: "green",
    title: "Colegios, SLEP y Fundaciones",
    desc: "Establecimientos que necesitan estandarizar documentación, gestionar grandes volúmenes de estudiantes y rendir cuentas ante auditorías del Estado.",
    benefits: ["Dashboard centralizado", "Trazabilidad en tiempo real", "Evidencia para auditorías SLEP"],
  },
  {
    tag: "Potencial estratégico",
    tagColor: "amber",
    title: "Mutualidades y Gestión del Riesgo",
    desc: "La carga administrativa es un factor de riesgo psicosocial. EvalúaAI puede reducir las licencias médicas en el sector educación de forma medible.",
    benefits: ["Reducción de licencias médicas", "Bienestar docente medible", "Gestión de riesgo psicosocial"],
  },
];

const colorMap = {
  blue: styles.tagBlue,
  green: styles.tagGreen,
  amber: styles.tagAmber,
};

export default function ForWhom() {
  return (
    <section id="para-quien" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Para Quién</span>
          <h2 className={styles.title}>
            Una herramienta para todo<br />el ecosistema educativo
          </h2>
          <p className={styles.desc}>
            Desde el docente frente al aula hasta el directivo que rinde
            cuentas — EvalúaAI impacta a toda la cadena.
          </p>
        </div>

        <div className={styles.grid}>
          {audiences.map((a, i) => (
            <div key={i} className={styles.card}>
              <span className={`${styles.tag} ${colorMap[a.tagColor]}`}>
                {a.tag}
              </span>
              <h3 className={styles.cardTitle}>{a.title}</h3>
              <p className={styles.cardDesc}>{a.desc}</p>
              <ul className={styles.benefits}>
                {a.benefits.map((b, j) => (
                  <li key={j}>
                    <span className={styles.check}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.impact}>
          <p className={styles.impactNum}>33M</p>
          <p className={styles.impactLabel}>
            estudiantes con NEE en Latinoamérica que se benefician
            indirectamente cuando sus docentes tienen tiempo real de intervención
          </p>
        </div>
      </div>
    </section>
  );
}
