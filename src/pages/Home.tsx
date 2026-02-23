import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { getFeaturedProducts } from '../data/products'

export default function Home() {
  const featured = getFeaturedProducts()

  return (
    <>
      <section
        style={{
          padding: '4rem 0 5rem',
          textAlign: 'center',
          background: 'linear-gradient(180deg, var(--bg-elevated) 0%, var(--bg) 100%)',
        }}
      >
        <div className="container">
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 600,
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            Less noise. More meaning.
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
            Curated products designed for simplicity and longevity. No trends—just things that last.
          </p>
          <Link to="/shop" className="btn btn-primary">
            Shop the collection
          </Link>
        </div>
      </section>

      <section style={{ padding: '3rem 0 4rem' }}>
        <div className="container">
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.75rem',
              fontWeight: 600,
              marginBottom: '2rem',
            }}
          >
            Featured
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/shop" className="btn btn-outline">
              View all products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
