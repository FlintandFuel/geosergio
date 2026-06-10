import { motion } from 'framer-motion'

const img = p => import.meta.env.BASE_URL + p.replace(/^\//, '')

const SERVICES = [
  {
    n: '01',
    title: 'Alternators & Starters',
    desc: 'Repairs and rebuilds for all makes and models, from passenger cars to commercial and earth-moving equipment.',
  },
  {
    n: '02',
    title: 'Full Vehicle Diagnostics',
    desc: 'Engine, ABS and airbag fault-finding on complex European and modern vehicles, the kind of faults dealerships miss.',
  },
  {
    n: '03',
    title: 'Wiring Fault Finding',
    desc: 'Shorts, gremlins and intermittent faults traced and resolved properly, not just papered over.',
  },
  {
    n: '04',
    title: 'Airbag & ABS Systems',
    desc: 'Warning lights and safety system faults diagnosed and corrected with the right equipment and experience.',
  },
  {
    n: '05',
    title: 'Car Air Conditioning',
    desc: 'Aircon repairs and re-gassing to get cool air back into your cabin before summer hits.',
  },
  {
    n: '06',
    title: 'European Specialists',
    desc: 'Volvo, Mercedes, BMW and VW electrical gremlins, sorted by people who actually know these cars.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function Services() {
  return (
    <section id="services" className="relative bg-ink py-24 md:py-32 overflow-hidden">
      <img
        src={img('images/services/diagnostics.webp')}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />

      <div className="relative max-w-[1180px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="text-[13px] tracking-[0.25em] uppercase text-accent font-bold">
            What we fix
          </span>
          <h2 className="mt-4 font-display font-extrabold text-ivory text-4xl sm:text-5xl leading-tight">
            If three workshops have already given up, this is where it ends.
          </h2>
          <p className="mt-6 text-lg text-ivory/70 leading-relaxed">
            You don&rsquo;t need another diagnostic fee and another &ldquo;come back tomorrow.&rdquo;
            You need someone who can actually find it. Here&rsquo;s what we do, every day,
            for cars exactly like yours.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10"
        >
          {SERVICES.map(service => (
            <motion.div
              key={service.title}
              variants={item}
              className="bg-ink p-8 md:p-10"
            >
              <span className="font-display font-bold text-accent text-sm tracking-[0.2em]">
                {service.n}
              </span>
              <h3 className="mt-6 font-display font-bold text-ivory text-xl sm:text-2xl">
                {service.title}
              </h3>
              <p className="mt-4 text-[15px] text-ivory/65 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
