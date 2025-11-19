import { useEffect, useState } from 'react'

export default function FAQ() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/faq`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-white mb-6">FAQ</h2>
      {loading ? (
        <p className="text-blue-100">Chargement…</p>
      ) : (
        <div className="space-y-4">
          {items.map((q, idx) => (
            <details key={idx} className="group bg-white/5 border border-white/10 rounded-lg p-4">
              <summary className="cursor-pointer text-white font-medium list-none flex justify-between items-center">
                <span>{q.question}</span>
                <span className="text-blue-200 group-open:rotate-180 transition">▾</span>
              </summary>
              <p className="mt-2 text-blue-100">{q.answer}</p>
            </details>
          ))}
        </div>
      )}
    </section>
  )
}
