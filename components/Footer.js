export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      backgroundColor: 'var(--bg-elevated)',
      padding: '40px 20px',
      color: 'var(--text-muted)',
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
          <span style={{ color: 'var(--text-main)', fontWeight: '800', fontSize: '1.1rem' }}>
            Evalúa<span style={{ color: 'var(--brand-cyan)' }}>AI</span>
          </span>
          <p style={{ marginTop: '6px' }}>
            IA especializada para la educación inclusiva chilena.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span>Decreto 170 y 83</span>
          <span>•</span>
          <span>Ley 21.719</span>
          <span>•</span>
          <a href="#demo" style={{ textDecoration: 'underline' }}>
            Desarrolladores / Integración API
          </a>
        </div>

        <div>
          © {new Date().getFullYear()} EvalúaAI. Hecho en Chile.
        </div>
      </div>
    </footer>
  );
}
