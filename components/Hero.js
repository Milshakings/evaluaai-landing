import styles from "./Hero.module.css";
import React from 'react';

export default function Hero({ onOpenDemo }) {
  return (
    <section className="bg-slate-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Tag de Cumplimiento */}
        <span className="inline-block bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
          Alineado al Decreto 170 &bull; Sistema PIE Chile
        </span>

        {/* H1 Transversal */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Trazabilidad PIE al día y <br />
          <span className="text-blue-500">carpetas de evaluación listas en minutos</span>
        </h1>

        {/* Bajada Clara */}
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
          Plataforma especializada que automatiza la redacción de borradores técnicos, 
          elimina la duplicación de datos para FUDEI y protege a tu colegio en auditorías.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button
            onClick={onOpenDemo}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-200"
          >
            Solicitar Demo Institucional
          </button>
          <a
            href="#ver-demo"
            className="border border-slate-700 hover:bg-slate-800 text-slate-300 font-semibold py-3 px-8 rounded-lg transition duration-200"
          >
            Ver cómo funciona &rarr;
          </a>
        </div>

        {/* Métricas Reales y Auditables */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-800 text-left max-w-4xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-blue-400">80%</div>
            <div className="text-sm text-slate-400">Menos tiempo en papeleo administrativo</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">100%</div>
            <div className="text-sm text-slate-400">Trazabilidad de expedientes para la Dirección</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">1 Clic</div>
            <div className="text-sm text-slate-400">Formato listo para traspasar a FUDEI</div>
          </div>
        </div>
      </div>
    </section>
  );
}

       
