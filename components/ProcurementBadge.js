import React from 'react';
import styles from './ProcurementBadge.module.css';

export default function ProcurementBadge() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.infoGroup}>
          <div className={styles.icon}>🏛️</div>
          <div>
            <h4 className={styles.title}>Adquisición Habilitada en Mercado Público</h4>
            <p className={styles.description}>
              Proveedores activos para <strong>Compra Ágil, Trato Directo y Licitaciones</strong> en SLEP, DAEM/DEM y Colegios. Entregamos respaldo técnico y administrativo para rendición diferenciada bajo glosa <strong>Subvención PIE</strong> (gestión y apoyo diagnóstico) o <strong>Subvención SEP</strong> (acciones PME).
            </p>
          </div>
        </div>
        <a href="#demo" className={styles.ctaButton}>
          Solicitar Ficha Técnica &amp; Kit Compras &rarr;
        </a>
      </div>
    </div>
  );
}
