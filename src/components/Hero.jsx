import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(236,72,153,0.35),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold inline-block w-max">
              New Festive Arrivals
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Handpicked Sarees that whisper elegance
            </h1>
            <p className="text-gray-600 text-lg max-w-xl">
              Discover artisanal weaves, luxurious fabrics, and contemporary drapes designed to make every occasion unforgettable.
            </p>
            <div className="flex items-center gap-4">
              <a href="#shop" className="px-5 py-3 rounded-full bg-rose-600 text-white hover:bg-rose-500 transition font-semibold">Shop Now</a>
              <a href="#about" className="px-5 py-3 rounded-full border border-gray-300 hover:border-gray-400 transition">Explore Story</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1609252924199-810a13f0ce0d?q=80&w=1500&auto=format&fit=crop"
                alt="Saree Model"
                className="h-full w-full object-cover"
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur rounded-2xl p-3 text-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Kanjivaram Silk</span>
                  <span className="text-rose-600 font-bold">$129</span>
                </div>
                <div className="text-gray-500">Handwoven zari border • Maroon</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
