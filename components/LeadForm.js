export default function LeadForm() {
  return (
    <section id="demo" style={{ padding: '80px 20px', maxWidth: '850px', margin: '0 auto' }}>
      <div style={{
        backgroundColor: '#111827',
        border: '1px solid #1e293b',
        borderRadius: '16px',
        padding: '48px 36px',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)'
      }}>
        <h2 style={{ fontSize: '1.875rem', color: '#ffffff', textAlign: 'center', marginBottom: '12px', fontWeight: '700' }}>
          ¿Cuánto tiempo está perdiendo hoy tu equipo PIE en tareas administrativas?
        </h2>
        <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '32px', fontSize: '1rem' }}>
          Agenda una demostración de 20 minutos y revisemos cómo EvalúaAI puede incorporarse a tu establecimiento.
        </p>

        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <Field label="Nombre completo" placeholder="Ej: Marcela González" />
            <Field label="Cargo" placeholder="Ej: Coordinadora PIE / UTP" />
            <Field label="Nombre de la institución" placeholder="Ej: Liceo Bicentenario..." />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ color: '#cbd5e1', fontSize: '0.85rem', fontWeight: '500' }}>Tipo de establecimiento</label>
              <select style={inputStyle}>
                <option value="colegio">Colegio / Escuela</option>
                <option value="sostenedor">Sostenedor / Red de Colegios</option>
                <option value="slep">SLEP / DAEM / DEM</option>
                <option value="edtech">Proveedor EdTech</option>
              </select>
            </div>

            <Field label="Correo institucional" placeholder="nombre@colegio.cl" type="email" />
            <Field label="Teléfono / WhatsApp" placeholder="+56 9 1234 5678" type="tel" />
          </div>

          <button 
            type="submit" 
            style={{
              marginTop: '12px',
              backgroundColor: '#00e5ff',
              color: '#0b0f17',
              border: 'none',
              padding: '16px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 0 15px rgba(0, 229, 255, 0.3)',
              transition: 'all 0.2s ease'
            }}
          >
            Quiero ver EvalúaAI funcionando
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = 'text' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{ color: '#cbd5e1', fontSize: '0.85rem', fontWeight: '500' }}>{label}</label>
      <input type={type} placeholder={placeholder} style={inputStyle} />
    </div>
  );
}

const inputStyle = {
  backgroundColor: '#0b0f17',
  border: '1px solid #334155',
  color: '#ffffff',
  padding: '12px 14px',
  borderRadius: '8px',
  fontSize: '0.95rem',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box'
};
