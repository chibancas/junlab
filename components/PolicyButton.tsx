'use client'

import { Shield } from 'lucide-react'
import { useState } from 'react'
import PolicyBanner from './PolicyBanner'

export default function PolicyButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-black/80 p-4 text-white shadow-lg hover:bg-black"
        aria-label="Privacy policy"
      >
        <Shield size={24} />
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 py-8">
          <div className="relative w-full max-w-lg max-h-[85vh] overflow-hidden rounded-xl bg-white pt-12 px-6 pb-6 text-black mx-5">
            <button
              onClick={() => setOpen(false)}
              className="
              absolute right-3 top-3 text-gray-500 hover:bg-black hover:text-white
              font-bold text-xl p-2.5 rounded-xl transition-all duration-250"
            >
              ✕
            </button>

            <PolicyBanner/>
          </div>
        </div>
      )}
    </>
  )
}
