import { useState } from 'react'

export default function Reservation() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          // ensure date as YYYY-MM-DD
          date: form.date,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Erreur lors de la réservation')
      setStatus({ type: 'success', message: 'Réservation envoyée avec succès. Vous recevrez une confirmation par email.' })
      setForm({ name: '', email: '', phone: '', date: '', time: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-white mb-6">Réserver une séance</h2>
      {status && (
        <div className={`mb-4 p-3 rounded ${status.type === 'success' ? 'bg-emerald-500/20 text-emerald-100 border border-emerald-400/40' : 'bg-red-500/20 text-red-100 border border-red-400/40'}`}>
          {status.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="grid gap-4 bg-white/5 border border-white/10 rounded-lg p-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-blue-200 mb-1">Nom</label>
            <input name="name" value={form.name} onChange={handleChange} required className="w-full px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white" />
          </div>
          <div>
            <label className="block text-sm text-blue-200 mb-1">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white" />
          </div>
        </div>
        <div>
          <label className="block text-sm text-blue-200 mb-1">Téléphone</label>
          <input name="phone" value={form.phone} onChange={handleChange} className="w-full px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-blue-200 mb-1">Date</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} required className="w-full px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white" />
          </div>
          <div>
            <label className="block text-sm text-blue-200 mb-1">Heure</label>
            <input type="time" name="time" value={form.time} onChange={handleChange} required className="w-full px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white" />
          </div>
        </div>
        <div>
          <label className="block text-sm text-blue-200 mb-1">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows="4" className="w-full px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white" />
        </div>
        <button disabled={loading} className="px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium transition disabled:opacity-50">
          {loading ? 'Envoi…' : 'Confirmer la réservation'}
        </button>
      </form>
    </section>
  )
}
