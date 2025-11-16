import { motion } from 'framer-motion'

export default function ProductCard({ product, onAdd }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl overflow-hidden bg-white shadow/40 shadow-rose-100 hover:shadow-lg border border-rose-100"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={product.image_url} alt={product.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">{product.title}</h3>
          <span className="text-rose-600 font-bold">${product.price.toFixed(2)}</span>
        </div>
        {product.color && (
          <div className="text-sm text-gray-500">{product.fabric} • {product.color}</div>
        )}
        <button
          onClick={() => onAdd(product)}
          className="mt-3 w-full px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  )
}
