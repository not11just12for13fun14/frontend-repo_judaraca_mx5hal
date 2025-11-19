import { Link, NavLink } from 'react-router-dom'
import { Calendar, HelpCircle, Info, Home } from 'lucide-react'

export default function Navbar() {
  const baseLink = 'inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors no-underline'
  const linkClass = ({ isActive }) => `${baseLink} ${isActive ? 'bg-blue-600 text-white' : 'text-blue-100 hover:text-white hover:bg-white/10'}`

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 text-white no-underline">
            <img src="/flame-icon.svg" alt="Logo" className="w-8 h-8" />
            <span className="font-semibold tracking-tight">Kiné Bien-Être</span>
          </Link>

          <nav className="flex items-center gap-2">
            <NavLink to="/" className={linkClass} end>
              <Home size={16} /> Accueil
            </NavLink>
            <NavLink to="/kinesiologie" className={linkClass}>
              <Info size={16} /> La Kinésiologie
            </NavLink>
            <NavLink to="/faq" className={linkClass}>
              <HelpCircle size={16} /> FAQ
            </NavLink>
            <NavLink
              to="/reservation"
              className={({ isActive }) => `${baseLink} ${isActive ? 'bg-blue-600 text-white' : 'text-white bg-blue-600/90 hover:bg-blue-500'}`}
            >
              <Calendar size={16} /> Réserver
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
