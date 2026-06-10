import { motion } from 'framer-motion'

const REVIEWS = [
  {
    quote: "I had an electrical issue for the past 9 months, took my car all over Gauteng. Geosergio was the only place who could find the problem and fixed it for almost nothing. Thanks for great service Enzo!",
    name: 'Zonika Myburgh',
  },
  {
    quote: "After 3 auto electrical companies and 9k spent with the problem still not sorted, I found Andrew and his wife's business. I had my lights fixed, brakes fixed, full service. I will never go to any other garage in my life again. They are my car doctors and family.",
    name: 'Patriotic Wolf',
  },
  {
    quote: "This place is all of 61 years old, a family business. My car had been at the distributor for 3 days. These lovely folk fixed the car in a morning for a fraction of the dealership price. Long live Geosergio!",
    name: 'Canis Legis',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

function Stars() {
  return (
    <div className="flex gap-1" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#ee3b24">
          <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7L6 21l1.6-7L2.2 9.2l7.1-.6L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#f5f5f0] py-24 md:py-32">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-[13px] tracking-[0.25em] uppercase text-accent font-bold">
            What Pretoria says
          </span>
          <h2 className="mt-4 font-display font-extrabold text-[#141414] text-4xl sm:text-5xl leading-tight">
            4.6 stars from 141+ reviews on Google
          </h2>
          <p className="mt-6 text-lg text-[#3a3a3a] leading-relaxed">
            Real words from real people, who arrived exactly as frustrated as you might be
            right now.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {REVIEWS.map(review => (
            <motion.div
              key={review.name}
              variants={item}
              className="bg-white border border-black/5 rounded-sm p-8 flex flex-col"
            >
              <span className="font-display text-5xl text-accent leading-none">&ldquo;</span>
              <p className="mt-2 text-[16px] text-[#1a1a1a] leading-relaxed flex-1">
                {review.quote}
              </p>
              <div className="mt-6 pt-6 border-t border-black/5">
                <Stars />
                <div className="mt-3 text-sm font-medium text-[#6b7280]">{review.name}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
