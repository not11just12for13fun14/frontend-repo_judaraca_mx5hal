import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FAQ from './components/FAQ'
import Reservation from './components/Reservation'
import About from './components/About'
import { Routes, Route } from 'react-router-dom'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_50%)]" />
      <Navbar />
      <main className="relative">{children}</main>
      <footer className="relative mt-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-8 text-blue-200 text-sm flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Kiné Bien-Être — Tous droits réservés</p>
          <p>
            <a href="/reservation" className="hover:text-white">Prendre rendez-vous</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Hero />} />
        <Route path="kinesiologie" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="reservation" element={<Reservation />} />
      </Routes>
    </Layout>
  )
}

export default App
