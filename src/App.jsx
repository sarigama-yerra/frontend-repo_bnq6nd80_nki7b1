import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductsGrid from './components/ProductsGrid'
import CartSheet from './components/CartSheet'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])

  const cartCount = useMemo(() => cart.reduce((s, i) => s + i.qty, 0), [cart])

  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id)
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p))
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setCartOpen(true)
  }

  async function checkout(total) {
    // For demo: create a simple order with cart items
    const orderPayload = {
      customer_name: 'Guest',
      customer_email: 'guest@example.com',
      customer_address: 'N/A',
      items: cart.map((c) => ({
        product_id: c.id,
        title: c.title,
        price: c.price,
        quantity: c.qty,
      })),
      subtotal: cart.reduce((s, i) => s + i.price * i.qty, 0),
      shipping: cart.length > 0 ? 6 : 0,
      total,
    }

    try {
      const res = await fetch(`${API_BASE}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload),
      })
      const data = await res.json()
      alert(`Order placed! ID: ${data.id}`)
      setCart([])
      setCartOpen(false)
    } catch (e) {
      alert('Failed to place order')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Navbar cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
      <Hero />
      <ProductsGrid onAdd={addToCart} />
      <CartSheet open={cartOpen} onClose={() => setCartOpen(false)} items={cart} onCheckout={checkout} />

      <footer className="py-12 text-center text-sm text-gray-500">© {new Date().getFullYear()} SareeAura. All rights reserved.</footer>
    </div>
  )
}

export default App
