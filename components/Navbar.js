"use client";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          EvalúaAI
        </a>
        <ul className={styles.links}>
          <li><a href="#problema">El Problema</a></li>
          <li><a href="#como-funciona">Cómo Funciona</a></li>
          <li><a href="#para-quien">Para Quién</a></li>
          <li><a href="#cta" className={styles.btn}>Solicitar Demo</a></li>
        </ul>
      </div>
    </nav>
  );
}
