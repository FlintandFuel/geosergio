const img = p => import.meta.env.BASE_URL + p.replace(/^\//, '')

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <h4 className="font-display font-bold text-ivory uppercase tracking-[0.15em] text-sm mb-4">Contact</h4>
          <ul className="space-y-3 text-[15px] text-ivory/65">
            <li>510 11th Ave, Gezina, Pretoria, 0084, Gauteng</li>
            <li><a href="tel:0123359118" className="hover:text-accent transition-colors">012 335 9118</a></li>
            <li><a href="mailto:geosergio@vodamail.co.za" className="hover:text-accent transition-colors">geosergio@vodamail.co.za</a></li>
            <li><a href="https://www.facebook.com/geosergioautoelectrical" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Facebook</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-ivory uppercase tracking-[0.15em] text-sm mb-4">On Google</h4>
          <div className="flex items-center gap-3">
            <span className="font-display font-extrabold text-3xl text-ivory">4.6</span>
            <div>
              <div className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#ee3b24">
                    <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7L6 21l1.6-7L2.2 9.2l7.1-.6L12 2z" />
                  </svg>
                ))}
              </div>
              <div className="text-[13px] text-ivory/60 mt-1">141+ Google reviews</div>
            </div>
          </div>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center justify-center min-h-[44px] px-6 rounded-sm bg-accent text-white text-sm font-bold tracking-wide uppercase transition-all duration-200 hover:scale-[1.03]"
          >
            Book a Service
          </a>
        </div>

        <div>
          <div className="inline-flex items-center h-16">
            <img src={img('images/brand/logo-v3.png')} alt="Geosergio Auto Electrical logo" className="h-full w-auto object-contain" />
          </div>
          <p className="mt-4 text-[15px] text-ivory/60 leading-relaxed max-w-xs">
            Geosergio Auto Electrical CC. A family-run auto electrical specialist in
            Gezina, Pretoria, since 1962.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center">
        <p className="text-[13px] text-ivory/40">
          Website design by{' '}
          <a
            href="https://flintandfuel.co.za"
            target="_blank"
            rel="noopener"
            className="underline hover:opacity-70"
          >
            Flint and Fuel Creative
          </a>
        </p>
      </div>
    </footer>
  )
}
