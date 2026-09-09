import styles from './Problem.module.css';

export default function Problem() {
  const problems = [
    { code: 'COPIAR', desc: 'La misma información aparece dispersa en distintos documentos y sistemas institucionales.' },
    { code: 'REDACTAR', desc: 'Profesionales altamente especializados gastan horas preparando informes repetitivos.' },
    { code: 'REVISAR', desc: 'Coordinadores deben comprobar manualmente el avance y completitud de múltiples expedientes.' },
    { code: 'SEGUIR', desc: 'La dirección requiere visibilidad clara de qué está completo, qué falta y dónde hay riesgos de plazo.' },
    { code: 'RESPONDER', desc: 'Ante revisiones o auditorías, recopilar evidencia documental se convierte en un proceso complejo.' }
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>El problema no es la falta de información. Es todo el trabajo administrativo que hay que hacer con ella.</h2>
      <div className={styles.grid}>
        {problems.map((item) => (
          <div key={item.code} className={styles.card}>
            <span className={styles.code}>{item.code}</span>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


