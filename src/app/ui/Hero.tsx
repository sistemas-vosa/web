'use client'

import { useEffect, useRef } from 'react'
import gsap from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PromotionsSlider from '@/app/ui/PromotionsSlider'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const bgRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current || !bgRef.current) return

        const parallax = gsap.to(bgRef.current, {
            y: 50,
            scale: 1.05,
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        })

        return () => {
            parallax.scrollTrigger?.kill()
        }
    }, [])

    return (
        <section ref={containerRef} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
            <div
                ref={bgRef}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/img/fondo.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center md:items-start gap-12">
                {/* Columna Izquierda - Formulario */}
                <div className="w-full md:w-1/2 bg-white/90 p-6 rounded-lg shadow-lg text-gray-800">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">¿A dónde querés viajar?</h1>
                    <form className="flex flex-col gap-4 mb-4">
                        <input type="text" placeholder="Origen" className="p-3 rounded border border-gray-300" />
                        <input type="text" placeholder="Destino" className="p-3 rounded border border-gray-300" />
                        <input type="date" className="p-3 rounded border border-gray-300" />
                        <button type="button" disabled className="bg-orange-500 text-white px-6 py-3 rounded font-semibold hover:bg-orange-600 transition cursor-not-allowed opacity-70">
                            Buscar
                        </button>
                    </form>
                    <p className="text-sm text-gray-600">Más de 200 destinos en todo el país.</p>
                </div>

                {/* Columna Derecha - Slider */}
                <div className="w-full md:w-1/2">
                    <PromotionsSlider />
                </div>
            </div>
        </section>
    )
}
