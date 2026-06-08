"use client";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section id="cta" className={styles.section}>
      <div className="container">
        <div className={styles.box}>
          <span className={styles.eyebrow}>Early Access</span>
          <h2 className={styles.title}>
            ¿Tu colegio tiene un<br />equipo PIE agotado?
          </h2>
          <p className={styles.desc}>
            Estamos en fase piloto con establecimientos seleccionados.
            Solicita una demo gratuita y sé parte de la transformación
            de la educación inclusiva en Chile.
          </p>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="tu@colegio.cl"
              className={styles.input}
              required
            />
            <button type="submit" className={styles.btn}>
              Solicitar Demo Gratuito
            </button>
          </form>
          <p className={styles.note}>
            Sin costo. Sin compromiso. Respuesta en menos de 24 horas.
          </p>
        </div>
      </div>
    </section>
  );
}
