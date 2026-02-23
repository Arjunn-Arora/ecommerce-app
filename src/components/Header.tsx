import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { totalItems } = useCart()

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(15, 15, 15, 0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <Link
          to="/"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.5rem',
            fontWeight: 600,
            letterSpacing: '0.02em',
          }}
        >
          Meridian
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link to="/" style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', fontWeight: 500 }}>Home</Link>
          <Link to="/shop" style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', fontWeight: 500 }}>Shop</Link>
          <Link
            to="/cart"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-muted)',
              fontSize: '0.9375rem',
              fontWeight: 500,
            }}
          >
            Cart
            {totalItems > 0 && (
              <span
                style={{
                  background: 'var(--accent)',
                  color: 'var(--bg)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  minWidth: '1.25rem',
                  height: '1.25rem',
                  borderRadius: '999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  )
}
