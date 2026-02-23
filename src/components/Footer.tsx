import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 'auto',
        padding: '3rem 0',
        borderTop: '1px solid var(--border)',
        background: 'var(--bg-elevated)',
      }}
    >
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
        <div>
          <Link to="/" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 600 }}>Meridian</Link>
          <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem', maxWidth: '280px' }}>
            Curated products for a simpler, intentional life.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Shop</p>
            <Link to="/shop" style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>All products</Link>
            <Link to="/cart" style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Cart</Link>
          </div>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Support</p>
            <a href="#" style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Contact</a>
            <a href="#" style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Shipping</a>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>© {new Date().getFullYear()} Meridian. Demo store.</p>
      </div>
    </footer>
  )
}
