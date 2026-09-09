export default function Audiences() {
  const cards = [
    {
      title: "COLEGIOS",
      desc: "Reduce la carga administrativa del equipo PIE y libera horas para la atención directa de estudiantes.",
      link: "Soy un colegio →"
    },
    {
      title: "SOSTENEDORES",
      desc: "Obtén visibilidad consolidada sobre el estado documental de múltiples establecimientos a tu cargo.",
      link: "Gestiono varios colegios →"
    },
    {
      title: "SLEP / DAEM / DEM",
      desc: "Centraliza la trazabilidad e informes de cumplimiento a escala territorial de forma estandarizada.",
      link: "Gestiono red pública →"
    },
    {
      title: "PROVEEDORES EDTECH",
      desc: "Integra motor de estructuración de documentos e inteligencia especializada directamente en tu software.",
      link: "Quiero integrar EvalúaAI →"
    }
  ];

  return (
    <section style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2.25rem', color: '#ffffff', textAlign: 'center', marginBottom: '48px', fontWeight: '800' }}>
        Diseñado para cada nivel de la gestión educativa
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '24px'
      }}>
        {cards.map((item, i) => (
          <div key={i} style={{
            backgroundColor: '#111827',
            border: '1px solid #1e293b',
            borderRadius: '12px',
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div>
              <h3 style={{ fontSize: '0.875rem', letterSpacing: '0.05em', color: '#00e5ff', marginBottom: '12px', fontWeight: '700' }}>
                {item.title}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '24px' }}>
                {item.desc}
              </p>
            </div>
            <a href="#demo" style={{ color: '#ffffff', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              {item.link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
