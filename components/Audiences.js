export default function Audiences() {
  const cards = [
    {
      title: "COLEGIOS",
      desc: "Reduce drásticamente la carga administrativa del equipo PIE, libera horas para atención directa y estandariza informes técnicos.",
      link: "Soluciones para Colegios"
    },
    {
      title: "SOSTENEDORES",
      desc: "Supervisa el avance documental en tiempo real de múltiples establecimientos con métricas consolidadas.",
      link: "Vista Sostenedores"
    },
    {
      title: "SLEP / DAEM / DEM",
      desc: "Garantiza trazabilidad, cumplimiento normativo (Dec. 170) e informes estandarizados a escala territorial.",
      link: "Redes Públicas"
    },
    {
      title: "PROVEEDORES EDTECH",
      desc: "Integra nuestro motor de estructuración con IA en tu plataforma mediante API segura.",
      link: "Integración API"
    }
  ];

  return (
    <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <span style={{ color: '#00e5ff', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Arquitectura Multinivel
        </span>
        <h2 style={{ fontSize: '2.25rem', color: '#ffffff', fontWeight: '800', marginTop: '8px' }}>
          Diseñado para cada nivel de la gestión educativa
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px'
      }}>
        {cards.map((item, i) => (
          <div key={i} style={{
            background: 'linear-gradient(180deg, #111827 0%, #0d121f 100%)',
            border: '1px solid #1e293b',
            borderRadius: '16px',
            padding: '32px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Acento superior decorativo */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #00e5ff, transparent)' }} />

            <div>
              <div style={{
                display: 'inline-block',
                color: '#00e5ff',
                fontSize: '0.75rem',
                fontWeight: '800',
                letterSpacing: '0.05em',
                marginBottom: '16px',
                backgroundColor: 'rgba(0, 229, 255, 0.1)',
                padding: '4px 10px',
                borderRadius: '6px'
              }}>
                {item.title}
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '28px' }}>
                {item.desc}
              </p>
            </div>

            <a href="#demo" style={{
              color: '#ffffff',
              fontWeight: '700',
              fontSize: '0.9rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              {item.link} <span style={{ color: '#00e5ff' }}>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}


