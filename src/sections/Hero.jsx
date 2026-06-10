import { motion } from 'framer-motion'
import VantaFog from './VantaFog'

const img = p => import.meta.env.BASE_URL + p.replace(/^\//, '')

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100vh] flex items-center overflow-hidden bg-ink">
      {/* Engine PNG texture layer */}
      <img
        src={img('images/services/engine-hero.png')}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />

      {/* WebGL fog layer */}
      <VantaFog className="absolute inset-0 opacity-80" />

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink" />

      <div className="relative z-10 max-w-[1180px] mx-auto px-6 md:px-8 pt-32 pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[13px] tracking-[0.2em] uppercase text-ivory/70 mb-8">
            Gezina, Pretoria, since 1962
          </span>

          <h1 className="font-display font-extrabold text-ivory text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            The fault nobody else could find.
            <br />
            <span className="text-accent">We&rsquo;ve been finding it for 60 years.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base sm:text-lg text-ivory/70 leading-relaxed">
            If your car has an electrical fault that&rsquo;s already beaten one workshop or a dealership,
            bring it to Geosergio. Alternators, starters, wiring faults, diagnostics and aircon,
            for everyday cars and European specialists alike. Honest, fast, and a fraction of
            what you&rsquo;ve already been quoted.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center min-h-[52px] px-8 rounded-sm bg-accent text-white text-sm font-bold tracking-[0.15em] uppercase transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_32px_rgba(238,59,36,0.6)]"
            >
              Book a Service
            </a>
            <a
              href="tel:0123359118"
              className="inline-flex items-center justify-center min-h-[52px] px-8 rounded-sm border border-white/20 text-ivory text-sm font-bold tracking-[0.15em] uppercase transition-all duration-200 hover:border-accent hover:text-accent"
            >
              012 335 9118
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
