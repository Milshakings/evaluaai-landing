export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #1e293b',
      backgroundColor: '#070a10',
      padding: '40px 20px',
      color: '#64748b',
      fontSize: '0.85rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px'
      }}>
        <div>
          <span style={{ color: '#ffffff', fontWeight: '800', fontSize: '1.1rem' }}>
            Evalúa<span style={{ color: '#00e5ff' }}>AI</span>
          </span>
          <p style={{ marginTop: '6px', color: '#475569' }}>
            IA especializada para la educación inclusiva chilena.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', color: '#94a3b8' }}>
          <span>Ajustado al Decreto 170</span>
          <span>•</span>
          <span>Sistema PIE</span>
          <span>•</span>
          <span>FUDEI</span>
        </div>

        <div>
          © {new Date().getFullYear()} EvalúaAI. Hecho en Chile.
        </div>
      </div>
    </footer>
  );
}
