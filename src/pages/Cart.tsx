import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, removeFromCart, updateQuantity, subtotal, totalItems } = useCart()

  if (items.length === 0) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '0.5rem' }}>Your cart is empty</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Add something you like from the shop.</p>
        <Link to="/shop" className="btn btn-primary">
          Shop now
        </Link>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem 0 4rem' }}>
      <div className="container">
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 600, marginBottom: '2rem' }}>
          Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '3rem', alignItems: 'start' }} className="cart-layout">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="cart-item"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr auto auto',
                  gap: '1.25rem',
                  alignItems: 'center',
                  padding: '1.25rem',
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius)',
                }}
              >
                <div style={{ aspectRatio: '1', borderRadius: 'var(--radius-sm)', overflow: 'hidden', background: 'var(--bg-elevated)' }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <Link to={`/shop/${product.slug}`} style={{ fontWeight: 600, fontSize: '1rem' }}>
                    {product.name}
                  </Link>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    ${product.price}
                  </p>
                </div>
                <div className="cart-item-quantity" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '1.25rem', lineHeight: 1 }}
                  >
                    −
                  </button>
                  <span style={{ minWidth: '2rem', textAlign: 'center', fontWeight: 500 }}>{quantity}</span>
                  <button
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '1.25rem', lineHeight: 1 }}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-total" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontWeight: 600, color: 'var(--accent)' }}>${(product.price * quantity).toFixed(2)}</span>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ position: 'sticky', top: '90px' }}>
            <div
              style={{
                padding: '1.5rem',
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
              }}
            >
              <h2 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>Order summary</h2>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: '1.125rem' }}>
                <span>Total</span>
                <span style={{ color: 'var(--accent)' }}>${subtotal.toFixed(2)}</span>
              </div>
              <Link to="/checkout" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
