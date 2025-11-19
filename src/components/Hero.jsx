export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.15),transparent_70%)]" />
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Retrouver l'équilibre du corps et de l'esprit
            </h1>
            <p className="mt-4 text-blue-100 text-lg">
              Séances personnalisées de kinésiologie pour réduire le stress, libérer les tensions et avancer sereinement.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="/reservation" className="px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium transition">Prendre rendez-vous</a>
              <a href="/kinesiologie" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium transition">En savoir plus</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-white/10" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-cyan-400/30 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
