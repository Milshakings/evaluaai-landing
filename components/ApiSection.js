import styles from './ApiSection.module.css';

export default function ApiSection() {
  return (
    <section id="api" className={styles.section}>
      <div className={styles.content}>
        <span className={styles.badge}>Programa de Integración (Piloto API)</span>
        <h2>EvalúaAI también puede funcionar dentro de tu propia plataforma</h2>
        <p>
          Si ya cuentas con un software de gestión escolar, LMS o plataforma educativa, no necesitas desarrollar desde cero un motor para procesar y estructurar documentación especializada.
        </p>
        <p className={styles.subtext}>
          EvalúaAI evoluciona como una capa API de inteligencia especializada que permite a otros proveedores integrar capacidades de procesamiento documental en sus propios sistemas.
        </p>
        <a href="#demo" className={styles.btnApi}>Explorar EvalúaAI API</a>
      </div>
    </section>
  );
}
