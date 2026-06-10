import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const img = p => import.meta.env.BASE_URL + p.replace(/^\//, '')

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Brands We Service', href: '#brands' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-ink/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1180px] mx-auto px-6 md:px-8 flex items-center justify-between h-24 md:h-28">
        <a href="#top" className="shrink-0 flex items-center h-14 md:h-16">
          <img
            src={img('images/brand/logo-v3.png')}
            alt="Geosergio Auto Electrical logo"
            className="h-full w-auto object-contain"
          />
        </a>

        <div className="hidden nav:flex items-center gap-10">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-ivory/80 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-sm bg-accent text-white text-sm font-bold tracking-wide uppercase transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(238,59,36,0.55)]"
          >
            Book a Service
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="nav:hidden flex items-center justify-center min-h-[44px] min-w-[44px] text-ivory"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="nav:hidden fixed inset-0 z-50 bg-ink flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-24">
              <div className="flex items-center h-12">
                <img src={img('images/brand/logo-v3.png')} alt="Geosergio Auto Electrical logo" className="h-full w-auto object-contain" />
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex items-center justify-center min-h-[44px] min-w-[44px] text-ivory"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8 px-8 pb-24">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-display font-bold text-ivory hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center min-h-[44px] px-8 py-4 rounded-sm bg-accent text-white text-base font-bold tracking-wide uppercase"
              >
                Book a Service
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
