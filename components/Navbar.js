import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.jpg" alt="EvalúaAI" width={32} height={32} className={styles.logoImg} />
          <span className={styles.logoText}>Evalúa<span>AI</span></span>
        </Link>
        <div className={styles.navLinks}>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#para-quien">Para quién</a>
          <a href="#seguridad">Seguridad</a>
          <a href="#api">API</a>
        </div>
        <div className={styles.navCta}>
          <a href="#demo" className={styles.btnPrimary}>Solicitar demo</a>
        </div>
      </div>
    </nav>
  );
}



