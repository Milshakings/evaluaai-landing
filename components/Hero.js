import React from 'react';
import styles from "./Hero.module.css";


export default function Hero({ onOpenDemo }) {
  return (
    <section className="hero">
      {/* Badge con punto animado */}
      <div className="badge">
        <span className="dot"></span>
        <span>Alineado al Decreto 170 &bull; Sistema PIE Chile</span>
      </div>

      {/* Titular */}
      <h1 className="headline">
        Trazabilidad PIE al día y{' '}
        <span className="highlight">carpetas de evaluación listas en minutos</span>
      </h1>

      {/* Subtítulo */}
      <p className="sub">
        Plataforma especializada que automatiza la redacción de borradores técnicos, 
        elimina la duplicación de datos para FUDEI y protege a tu colegio en auditorías.
      </p>

      {/* Acciones / Botones */}
      <div className="actions">
        <button onClick={onOpenDemo} className="primary">
          Solicitar Demo Institucional
        </button>
        <a href="#ver-demo" className="secondary">
          Ver cómo funciona &rarr;
        </a>
      </div>

      {/* Métricas / Estadísticas */}
      <div className="stats">
        <div className="stat">
          <span className="num">80%</span>
          <span className="label">Menos tiempo en papeleo administrativo</span>
        </div>

        <div className="divider"></div>

        <div className="stat">
          <span className="num">100%</span>
          <span className="label">Trazabilidad de expedientes para la Dirección</span>
        </div>

        <div className="divider"></div>

        <div className="stat">
          <span className="num">1 Clic</span>
          <span className="label">Formato listo para traspasar a FUDEI</span>
        </div>
      </div>
    </section>
  );
}

       

       
