import styles from './Objections.module.css';

export default function Objections() {
  const faqs = [
    {
      q: '¿Por qué no usar simplemente ChatGPT para hacer los informes?',
      a: 'ChatGPT es un modelo de propósito general sin estructura de expediente, trazabilidad institucional ni aislamiento de privacidad para colegios. EvalúaAI no es un chat: es un flujo de trabajo contextualizado en la normativa y formularios chilenos, diseñado para ordenar carpetas, perfiles de usuario y gestión centralizada.'
    },
    {
      q: '¿La inteligencia artificial reemplaza la labor del profesional PIE?',
      a: 'No. EvalúaAI redacta borradores técnicos basados exclusivamente en la información ingresada. La validación, modificación y firma final recae estrictamente en el profesional especialista.'
    },
    {
      q: '¿Cómo se incorpora EvalúaAI al establecimiento?',
      a: 'A través de un proceso ágil de onboarding de 20 minutos donde configuramos el espacio institucional del colegio y capacitamos al equipo PIE/UTP para comenzar a cargar antecedentes.'
    }
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Preguntas frecuentes</h2>
      <div className={styles.list}>
        {faqs.map((faq, idx) => (
          <div key={idx} className={styles.item}>
            <h3>{faq.q}</h3>
            <p>{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
