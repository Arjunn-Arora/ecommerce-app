import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [status, setStatus] = useState<'form' | 'success'>('form')
  const [form, setForm] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    zip: '',
    country: '',
    card: '',
    exp: '',
    cvc: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    clearCart()
    setStatus('success')
  }

  if (items.length === 0 && status !== 'success') {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>Your cart is empty</h1>
        <Link to="/shop" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Shop now
        </Link>
      </div>
    )
  }

  if (status === 'success') {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center', maxWidth: '480px' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '0.5rem' }}>Thank you</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Your order has been received. This is a demo—no payment was processed.
        </p>
        <Link to="/shop" className="btn btn-primary" onClick={() => navigate('/shop')}>
          Continue shopping
        </Link>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem 0 4rem' }}>
      <div className="container">
        <Link to="/cart" style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem', display: 'inline-block' }}>
          ← Back to cart
        </Link>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 600, marginBottom: '2rem' }}>
          Checkout
        </h1>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '3rem', alignItems: 'start' }} className="checkout-layout">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <section>
                <h2 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>Contact</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <label className="label">Email</label>
                  <input name="email" type="email" className="input" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
                  <label className="label">Full name</label>
                  <input name="name" type="text" className="input" placeholder="Jane Doe" value={form.name} onChange={handleChange} required />
                </div>
              </section>
              <section>
                <h2 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>Shipping address</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <label className="label">Address</label>
                  <input name="address" type="text" className="input" placeholder="123 Main St" value={form.address} onChange={handleChange} required />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label className="label">City</label>
                      <input name="city" type="text" className="input" placeholder="City" value={form.city} onChange={handleChange} required />
                    </div>
                    <div>
                      <label className="label">ZIP</label>
                      <input name="zip" type="text" className="input" placeholder="ZIP" value={form.zip} onChange={handleChange} required />
                    </div>
                  </div>
                  <label className="label">Country</label>
                  <input name="country" type="text" className="input" placeholder="Country" value={form.country} onChange={handleChange} required />
                </div>
              </section>
              <section>
                <h2 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>Payment (demo)</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <label className="label">Card number</label>
                  <input name="card" type="text" className="input" placeholder="4242 4242 4242 4242" value={form.card} onChange={handleChange} />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label className="label">Expiry</label>
                      <input name="exp" type="text" className="input" placeholder="MM/YY" value={form.exp} onChange={handleChange} />
                    </div>
                    <div>
                      <label className="label">CVC</label>
                      <input name="cvc" type="text" className="input" placeholder="123" value={form.cvc} onChange={handleChange} />
                    </div>
                  </div>
                </div>
              </section>
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
                <ul style={{ marginBottom: '1rem' }}>
                  {items.map(({ product, quantity }) => (
                    <li key={product.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                        {product.name} × {quantity}
                      </span>
                      <span>${(product.price * quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: '1.125rem', marginBottom: '1rem' }}>
                  <span>Total</span>
                  <span style={{ color: 'var(--accent)' }}>${subtotal.toFixed(2)}</span>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Place order (demo)
                </button>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.75rem' }}>
                  No real payment. Submitting completes the demo flow.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
