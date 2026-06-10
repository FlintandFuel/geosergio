import { motion } from 'framer-motion'

const img = p => import.meta.env.BASE_URL + p.replace(/^\//, '')

const BADGES = [
  { name: 'RMI Accredited', src: 'images/warranties/RMI.png' },
  { name: 'M-Sure Warranty', src: 'images/warranties/m-sure.svg' },
  { name: 'Santam', src: 'images/warranties/santam.png' },
  { name: 'Ring Automotive', src: 'images/warranties/ring4.png' },
  { name: 'MIO SA', src: 'images/warranties/mio-sa-logo.jpg' },
  { name: 'R&D Lighting', src: 'images/warranties/rndlogo.png' },
]

export default function Warranties() {
  return (
    <section className="bg-ink py-24 md:py-32 border-t border-white/10">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-[13px] tracking-[0.25em] uppercase text-accent font-bold">
            Backed by warranty
          </span>
          <h2 className="mt-4 font-display font-extrabold text-ivory text-4xl sm:text-5xl leading-tight">
            The fix is guaranteed. So you can stop worrying about it.
          </h2>
          <p className="mt-6 text-lg text-ivory/70 leading-relaxed">
            Every alternator, starter and electrical repair is backed by a workmanship
            and parts warranty, and we work alongside accredited industry partners to
            keep it that way.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {BADGES.map(badge => (
            <div key={badge.name} className="bg-white rounded-sm p-4 flex items-center justify-center h-20 w-32 md:h-24 md:w-40">
              <img
                src={img(badge.src)}
                alt={badge.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
