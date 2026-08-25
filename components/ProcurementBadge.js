import React from 'react';
import styles from './ProcurementBadge.module.css';

export default function ProcurementBadge() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.infoGroup}>
          <div className={styles.icon}>🏛️</div>
          <div>
            <h4 className={styles.title}>Adquisición Vía Mercado Público & Convenio Marco</h4>
            <p className={styles.description}>
              Habilitados como proveedores activos para Venta Directa o Licitación a Establecimientos Públicos, SLEP y DAEM/DEM. Financiamiento utilizable con fondos SEP / PIE.
            </p>
          </div>
        </div>
        <a href="#demo" className={styles.ctaButton}>
          Solicitar Ficha para Mercado Público &rarr;
        </a>
      </div>
    </div>
  );
}
