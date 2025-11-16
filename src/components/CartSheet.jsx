import { X } from 'lucide-react'

export default function CartSheet({ open, onClose, items, onCheckout }) {
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0)
  const shipping = items.length > 0 ? 6 : 0
  const total = subtotal + shipping

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <div
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="font-semibold">Your Cart</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full"><X size={18} /></button>
        </div>
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-180px)]">
          {items.length === 0 && <div className="text-gray-500 text-sm">Your cart is empty.</div>}
          {items.map((it) => (
            <div key={it.id} className="flex gap-3">
              <img src={it.image_url} alt={it.title} className="h-20 w-16 rounded object-cover" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{it.title}</div>
                  <div className="text-rose-600 font-bold">${(it.price * it.qty).toFixed(2)}</div>
                </div>
                <div className="text-sm text-gray-500">Qty: {it.qty}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t space-y-2">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Shipping</span><span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between font-semibold">
            <span>Total</span><span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={() => onCheckout(total)}
            className="mt-2 w-full px-4 py-2 rounded-full bg-rose-600 text-white hover:bg-rose-500 transition"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}
