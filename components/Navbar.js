import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      width: '100%',
      backgroundColor: '#0b0f17',
      borderBottom: '1px solid #1e293b',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: '16px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ffffff' }}>
            Evalúa<span style={{ color: '#00e5ff' }}>AI</span>
          </span>
        </Link>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="#demo" style={{
            backgroundColor: '#00e5ff',
            color: '#0b0f17',
            padding: '8px 16px',
            borderRadius: '6px',
            fontWeight: '700',
            fontSize: '0.9rem',
            textDecoration: 'none'
          }}>
            Solicitar demo
          </a>
        </div>
      </div>
    </nav>
  );
}
