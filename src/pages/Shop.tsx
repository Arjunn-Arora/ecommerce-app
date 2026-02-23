import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { categories, getProductsByCategory } from '../data/products'

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all')
  const filtered = getProductsByCategory(activeCategory)

  return (
    <div style={{ padding: '2rem 0 4rem' }}>
      <div className="container">
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 600, marginBottom: '0.5rem' }}>
          Shop
        </h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>All products</p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2rem',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={activeCategory === cat.id ? 'btn btn-primary' : 'btn btn-ghost'}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                textTransform: 'capitalize',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
