import { motion } from 'framer-motion'

const img = p => import.meta.env.BASE_URL + p.replace(/^\//, '')

export default function Story() {
  return (
    <section id="about" className="bg-[#f5f5f0] py-24 md:py-32">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <span className="text-[13px] tracking-[0.25em] uppercase text-accent font-bold">
            The Geosergio story
          </span>
          <h2 className="mt-4 font-display font-extrabold text-[#141414] text-4xl sm:text-5xl leading-tight">
            Sixty years of being the place other workshops send the hard cases to.
          </h2>

          <div className="mt-8 space-y-5 text-lg text-[#3a3a3a] leading-relaxed max-w-xl">
            <p>
              Geosergio has been on 11th Avenue in Gezina since 1962, run by the same
              family for three generations. Enzo, Babbo and Andrew aren&rsquo;t job
              titles, they&rsquo;re names you&rsquo;ll be on a first-name basis with
              after your first visit.
            </p>
            <p>
              You&rsquo;ll notice the difference the moment you walk in. No clipboard
              hand-offs, no anonymous service desk. Just people who genuinely want to
              know what&rsquo;s wrong with your car, and won&rsquo;t stop until they do.
            </p>
            <p>
              That&rsquo;s the whole reason customers keep coming back, and keep
              sending their friends and family. Once Geosergio fixes it, you stop
              worrying about it.
            </p>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="order-1 lg:order-2"
        >
          <div className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src={img('images/team/family.jpg')}
                alt="The Geosergio family team outside the Gezina workshop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-ink text-ivory px-6 py-5 rounded-sm shadow-xl max-w-[220px]">
              <div className="font-display font-extrabold text-3xl text-accent">61</div>
              <div className="text-[13px] tracking-[0.1em] uppercase text-ivory/70 mt-1">
                Years serving Pretoria motorists
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
