import { ShoppingCart, Sparkles } from 'lucide-react'

export default function Navbar({ cartCount, onCartClick }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-fuchsia-500 to-rose-500 flex items-center justify-center text-white">
            <Sparkles size={18} />
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-fuchsia-600 to-rose-600 bg-clip-text text-transparent">
            SareeAura
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#collections" className="hover:text-gray-900">Collections</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>

        <button onClick={onCartClick} className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition">
          <ShoppingCart size={18} />
          <span className="hidden sm:inline">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-rose-500 text-white text-xs grid place-items-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
