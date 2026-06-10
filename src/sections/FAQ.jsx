import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    q: 'What types of vehicles do you work on at Geosergio?',
    a: 'All makes and models. Everyday passenger cars, commercial vehicles and earth-moving equipment, plus particular expertise in European brands like Volvo, Mercedes-Benz, BMW and Volkswagen.',
  },
  {
    q: 'How long does a typical diagnostic or repair take?',
    a: 'Most electrical faults are diagnosed and resolved within hours, often the same day. Reviewers regularly mention problems fixed in a morning that other workshops or dealerships had held onto for days.',
  },
  {
    q: 'Do you offer warranties on your workmanship and parts?',
    a: 'Yes. Alternator, starter and electrical work is backed by a workmanship and parts warranty, so the fix stays fixed.',
  },
  {
    q: "Can you fix electrical faults that a dealership or other workshop couldn't diagnose?",
    a: "This is what Geosergio is known for. For over 60 years the team has solved wiring, alternator, ABS and airbag faults that dealerships and other workshops missed, often in a fraction of the time and cost.",
  },
]

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-6 py-6 text-left min-h-[44px]"
        aria-expanded={isOpen}
      >
        <span className="font-display font-bold text-lg sm:text-xl text-ivory">{faq.q}</span>
        <span className={`shrink-0 text-accent text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[16px] text-ivory/65 leading-relaxed max-w-2xl">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="text-[13px] tracking-[0.25em] uppercase text-accent font-bold">
            Questions
          </span>
          <h2 className="mt-4 font-display font-extrabold text-ivory text-4xl sm:text-5xl leading-tight">
            Common questions, answered straight.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-12 max-w-3xl border-t border-white/10"
        >
          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.q}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
