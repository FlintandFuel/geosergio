import { motion } from 'framer-motion'

const img = p => import.meta.env.BASE_URL + p.replace(/^\//, '')

const BRANDS = [
  { name: 'Audi', src: 'images/brands/audi.webp' },
  { name: 'Porsche', src: 'images/brands/Porsche.png' },
  { name: 'Mercedes-Benz', src: 'images/brands/mb.jpg' },
  { name: 'Volkswagen', src: 'images/brands/vw-logo.jpg' },
  { name: 'Toyota', src: 'images/brands/toyota.jpg' },
  { name: 'Ford', src: 'images/brands/ford.jpg' },
  { name: 'Land Rover', src: 'images/brands/landrover.jpg' },
  { name: 'Volvo', src: 'images/brands/volvo-logo-png_seeklogo-150599.png' },
  { name: 'MINI', src: 'images/brands/mini.jpg' },
  { name: 'Nissan', src: 'images/brands/nissan.png' },
]

export default function Brands() {
  return (
    <section id="brands" className="bg-ink py-24 md:py-32">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-[13px] tracking-[0.25em] uppercase text-accent font-bold">
            Brands we service
          </span>
          <h2 className="mt-4 font-display font-extrabold text-ivory text-4xl sm:text-5xl leading-tight">
            All makes and models. European specialists.
          </h2>
          <p className="mt-6 text-lg text-ivory/70 leading-relaxed">
            From everyday family cars to the European brands that send other workshops
            running, including the cars dealerships quote a fortune to even look at.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-white/10"
        >
          {BRANDS.map(brand => (
            <div
              key={brand.name}
              className="bg-ink aspect-[3/2] flex items-center justify-center p-4 md:p-6"
            >
              <div className="bg-ivory rounded-lg w-full h-full flex items-center justify-center p-3 md:p-4">
                <img
                  src={img(brand.src)}
                  alt={`${brand.name} logo`}
                  className="max-h-10 md:max-h-12 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
