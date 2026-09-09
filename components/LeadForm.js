'use client';

export default function LeadForm() {
  return (
    <section id="demo" style={{ padding: '80px 20px', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{
        background: 'linear-gradient(145deg, #131b2e 0%, #0d121f 100%)',
        border: '1px solid rgba(0, 229, 255, 0.2)',
        borderRadius: '20px',
        padding: '48px 40px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 229, 255, 0.05)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decoración Glowing */}
        <div style={{
          position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px',
          background: '#00e5ff', opacity: '0.15', filter: 'blur(50px)', borderRadius: '50%'
        }} />

        <div style={{ textTransform: 'uppercase', color: '#00e5ff', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.1em', textAlign: 'center', marginBottom: '12px' }}>
          Agendar Demostración
        </div>

        <h2 style={{ fontSize: '2rem', color: '#ffffff', textAlign: 'center', marginBottom: '12px', fontWeight: '800', lineHeight: '1.2' }}>
          ¿Cuánto tiempo está perdiendo hoy tu equipo PIE en tareas administrativas?
        </h2>
        
        <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '40px', fontSize: '1rem', maxWidth: '650px', margin: '0 auto 40px auto' }}>
          Agenda una sesión de 20 minutos y revisemos la factibilidad técnica para tu establecimiento o red de colegios.
        </p>

        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            <Field label="Nombre completo" placeholder="Ej: Marcela González" />
            <Field label="Cargo" placeholder="Ej: Coordinadora PIE / Director UTP" />
            <Field label="Nombre de la institución" placeholder="Ej: Colegio San Agustín" />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: '#cbd5e1', fontSize: '0.85rem', fontWeight: '600' }}>Tipo de establecimiento</label>
              <select style={inputStyle}>
                <option value="colegio">Colegio Particular / Subvencionado</option>
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
              marginTop: '16px',
              backgroundColor: '#00e5ff',
              color: '#0b0f17',
              border: 'none',
              padding: '18px 24px',
              borderRadius: '10px',
              fontWeight: '800',
              fontSize: '1.05rem',
              cursor: 'pointer',
              boxShadow: '0 0 20px rgba(0, 229, 255, 0.4)',
              transition: 'all 0.2s ease',
              textTransform: 'uppercase',
              letterSpacing: '0.02em'
            }}
          >
            Quiero ver EvalúaAI funcionando →
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = 'text' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ color: '#cbd5e1', fontSize: '0.85rem', fontWeight: '600' }}>{label}</label>
      <input type={type} placeholder={placeholder} style={inputStyle} />
    </div>
  );
}

const inputStyle = {
  backgroundColor: '#090d16',
  border: '1px solid #1e293b',
  color: '#ffffff',
  padding: '14px 16px',
  borderRadius: '8px',
  fontSize: '0.95rem',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box'
};
