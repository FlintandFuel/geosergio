/*
  GEOSERGIO AUTO ELECTRICAL — Landing Page

  Positioning angle: "The rescue narrative" — Geosergio is the Pretoria auto
  electrical specialist that finds and fixes faults other workshops and
  dealerships couldn't, backed by 60+ years of family-run history and named
  technicians (Enzo, Babbo, Andrew).

  Top trust signals: 60+ years in Gezina, family business, 4.6/5 from 141+
  Google reviews, named technicians, RMI/warranty-backed workmanship.

  Primary CTA rationale: "Book a Service" in the accent red, repeated in nav,
  hero, footer and contact — every section moves the reader toward the
  feeling of relief that comes from knowing this time the fault gets found.

  Font pairing: Syne (display, heavy/geometric, oversized headings) paired
  with DM Sans (body) — modern, technical-precision sans pairing that reads
  premium and editorial, close to the brief's "Elms Sans" direction.

  Accent colour: #ee3b24 (automotive red) — used for CTA buttons, section
  labels, star ratings, hover states and the FOG hero highlight colour, on a
  near-black (#0d0d0d) and off-white (#f5f5f5) base per the brief.
*/

import './index.css'
import Nav from './sections/Nav'
import Hero from './sections/Hero'
import TrustBar from './sections/TrustBar'
import Services from './sections/Services'
import Story from './sections/Story'
import Brands from './sections/Brands'
import Reviews from './sections/Reviews'
import Warranties from './sections/Warranties'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import SalesBar from './components/SalesBar'

function App() {
  return (
    <div className="font-body pb-24 bg-ink">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <Story />
      <Brands />
      <Reviews />
      <Warranties />
      <FAQ />
      <Contact />
      <Footer />
      <SalesBar />
    </div>
  )
}

export default App
