'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('evaluaai-theme');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('evaluaai-theme', next);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>
            Evalúa<span className={styles.cyan}>AI</span>
          </span>
        </Link>

        <div className={styles.navLinks}>
          <a href="#como-funciona">Metodología</a>
          <a href="#ver-demo">Plataforma</a>
          <a href="#para-quien">Perfiles</a>
          <a href="#seguridad">Normativa y Seguridad</a>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Cambiar contraste de pantalla"
            style={{
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-main)',
              border: '1px solid var(--border-color)',
              padding: '7px 12px',
              borderRadius: '6px',
              fontSize: '0.82rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            {theme === 'dark' ? '☀️ Vista Clara' : '🌙 Vista Oscura'}
          </button>

          <a href="#demo" className={styles.btnPrimary}>
            Solicitar demo
          </a>
        </div>
      </div>
    </nav>
  );
}
