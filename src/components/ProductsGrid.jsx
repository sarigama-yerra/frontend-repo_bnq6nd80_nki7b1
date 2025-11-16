import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function ProductsGrid({ onAdd }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        const res = await fetch(`${API_BASE}/api/products`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setError('Failed to load products')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="text-center py-20">Loading products...</div>
  if (error) return <div className="text-center py-20 text-red-600">{error}</div>

  return (
    <section id="shop" className="py-14 bg-gradient-to-b from-white to-rose-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Trending Sarees</h2>
            <p className="text-gray-600">Curated designs for every occasion</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  )
}
