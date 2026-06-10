import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // Placeholder: connect to Formspree, Mailchimp or Brevo here
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-[#f5f5f0] py-24 md:py-32">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[13px] tracking-[0.25em] uppercase text-accent font-bold">
            Get your car diagnosed today
          </span>
          <h2 className="mt-4 font-display font-extrabold text-[#141414] text-4xl sm:text-5xl leading-tight">
            Bring it in. We&rsquo;ll find it.
          </h2>
          <p className="mt-6 text-lg text-[#3a3a3a] leading-relaxed max-w-md">
            Call, WhatsApp or send us a message with what&rsquo;s going on. The sooner we
            see the car, the sooner you stop thinking about it.
          </p>

          <div className="mt-10 space-y-5">
            <a href="tel:0123359118" className="flex items-center gap-4 group">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <div className="text-sm text-[#6b7280]">Call us now</div>
                <div className="font-display font-bold text-lg text-[#141414] group-hover:text-accent transition-colors">012 335 9118</div>
              </div>
            </a>

            <a href="https://wa.me/27123359118" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.38 1.3 4.85L2.05 22l5.36-1.4a9.93 9.93 0 0 0 4.63 1.18h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.83 14.06c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.13-4.9-4.32-.14-.19-1.18-1.57-1.18-2.99 0-1.42.74-2.12 1-2.41.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.57.81 1.99.88 2.13.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.17.29.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.36 1.46.29.14.46.12.63-.07.17-.19.71-.83.9-1.11.19-.29.38-.24.64-.14.26.1 1.66.78 1.94.93.29.14.48.21.55.33.07.12.07.69-.17 1.37z" />
                </svg>
              </span>
              <div>
                <div className="text-sm text-[#6b7280]">WhatsApp us</div>
                <div className="font-display font-bold text-lg text-[#141414] group-hover:text-accent transition-colors">012 335 9118</div>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <div className="text-sm text-[#6b7280]">Visit the workshop</div>
                <div className="font-display font-bold text-lg text-[#141414]">510 11th Ave, Gezina, Pretoria, 0084</div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-sm overflow-hidden border border-black/5 aspect-video">
            <iframe
              title="Geosergio Auto Electrical location map"
              src="https://www.google.com/maps?q=510+11th+Ave,+Gezina,+Pretoria,+0084&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-white border border-black/5 rounded-sm p-8 md:p-10 h-fit"
        >
          <h3 className="font-display font-bold text-2xl text-[#141414]">Book your car in</h3>
          <p className="mt-2 text-[15px] text-[#6b7280]">
            Tell us what&rsquo;s going on and we&rsquo;ll be in touch to arrange a time.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-sm bg-accent/10 border border-accent/20 px-6 py-8 text-center">
              <p className="font-display font-bold text-lg text-[#141414]">Thanks, we&rsquo;ve got your message.</p>
              <p className="mt-2 text-[15px] text-[#3a3a3a]">We&rsquo;ll be in touch shortly to book your car in.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#141414] mb-2">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full min-h-[48px] px-4 rounded-sm border border-black/15 bg-white text-[#141414] focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#141414] mb-2">Phone number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full min-h-[48px] px-4 rounded-sm border border-black/15 bg-white text-[#141414] focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="vehicle" className="block text-sm font-medium text-[#141414] mb-2">Vehicle make and model</label>
                <input
                  id="vehicle"
                  name="vehicle"
                  type="text"
                  className="w-full min-h-[48px] px-4 rounded-sm border border-black/15 bg-white text-[#141414] focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#141414] mb-2">What&rsquo;s the problem?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-sm border border-black/15 bg-white text-[#141414] focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-shadow resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center min-h-[52px] rounded-sm bg-accent text-white text-sm font-bold tracking-[0.15em] uppercase transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(238,59,36,0.45)]"
              >
                Book a Service
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
