import { Link } from 'react-router-dom'
import type { Product } from '../data/products'

type Props = { product: Product }

export default function ProductCard({ product }: Props) {
  return (
    <Link
      to={`/shop/${product.slug}`}
      style={{
        display: 'block',
        background: 'var(--bg-card)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        transition: 'transform var(--transition), box-shadow var(--transition)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = 'var(--shadow)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div style={{ aspectRatio: '1', background: 'var(--bg-elevated)', position: 'relative' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {product.originalPrice && (
          <span
            style={{
              position: 'absolute',
              top: '0.75rem',
              left: '0.75rem',
              background: 'var(--accent)',
              color: 'var(--bg)',
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '0.25rem 0.5rem',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            Sale
          </span>
        )}
      </div>
      <div style={{ padding: '1.25rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
          {product.category}
        </p>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>
          {product.name}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontWeight: 600, color: 'var(--accent)' }}>${product.price}</span>
          {product.originalPrice && (
            <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
