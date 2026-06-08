import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className={styles.logo}>EvalúaAI</span>
            <p className={styles.tagline}>
              IA especializada para la educación inclusiva chilena.
            </p>
          </div>
          <div className={styles.right}>
            <p className={styles.decree}>
              Ajustado al Decreto 170 · Sistema PIE · FUDEI
            </p>
            <p className={styles.copy}>
              © 2025 EvalúaAI. Hecho en Chile 🇨🇱
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
