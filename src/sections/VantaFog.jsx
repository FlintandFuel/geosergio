import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import * as fogModule from 'vanta/dist/vanta.fog.min'

const FOG = [fogModule, fogModule.default, fogModule.default?.default]
  .find(m => typeof m === 'function')

export default function VantaFog({ className = '' }) {
  const ref = useRef(null)
  const [effect, setEffect] = useState(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    if (!effect && ref.current) {
      setEffect(
        FOG({
          el: ref.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xee3b24,
          midtoneColor: 0x4a0e08,
          lowlightColor: 0x0d0d0d,
          baseColor: 0x0d0d0d,
          blurFactor: 0.6,
          speed: 1.2,
          zoom: 0.9,
        })
      )
    }
    return () => {
      if (effect) effect.destroy()
    }
  }, [effect])

  return <div ref={ref} className={className} />
}
