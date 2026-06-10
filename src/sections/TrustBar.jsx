import { motion } from 'framer-motion'

const STATS = [
  { value: '60+', label: 'Years in Gezina' },
  { value: 'Family', label: 'Run business' },
  { value: '4.6', label: 'Google rating, star average' },
  { value: '141+', label: 'Google reviews' },
]

export default function TrustBar() {
  return (
    <section className="bg-ink border-y border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-[1180px] mx-auto px-6 md:px-8 py-10 md:py-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 text-center">
          {STATS.map(stat => (
            <div key={stat.label}>
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-ivory">
                {stat.value}
              </div>
              <div className="mt-1 text-[13px] tracking-[0.12em] uppercase text-ivory/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-[13px] tracking-[0.2em] uppercase text-accent font-bold">
          Pretoria&rsquo;s Auto Electrical Specialists
        </p>
      </motion.div>
    </section>
  )
}
