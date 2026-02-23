import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductBySlug } from '../data/products'
import { useCart } from '../context/CartContext'

export default function Product() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProductBySlug(slug) : undefined
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>Product not found</h1>
        <Link to="/shop" className="btn btn-outline" style={{ marginTop: '1rem' }}>
          Back to shop
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div style={{ padding: '2rem 0 4rem' }}>
      <div className="container">
        <Link to="/shop" style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem', display: 'inline-block' }}>
          ← Back to shop
        </Link>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: '2rem',
            alignItems: 'start',
          }}
          className="product-layout"
        >
          <div style={{ aspectRatio: '1', background: 'var(--bg-card)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              {product.category}
            </p>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 600, marginBottom: '1rem' }}>
              {product.name}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent)' }}>${product.price}</span>
              {product.originalPrice && (
                <span style={{ fontSize: '1rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
              {product.description}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <label className="label" style={{ marginBottom: 0 }}>Quantity</label>
              <input
                type="number"
                min={1}
                max={99}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
                className="input"
                style={{ width: '80px', textAlign: 'center' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                className="btn btn-primary"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {added ? 'Added to cart' : 'Add to cart'}
              </button>
              <Link to="/cart" className="btn btn-outline">
                View cart
              </Link>
            </div>

            {!product.inStock && (
              <p style={{ color: 'var(--error)', marginTop: '1rem', fontSize: '0.875rem' }}>Out of stock</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
