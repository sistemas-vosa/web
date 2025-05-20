'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PromotionsSlider from '@/app/ui/PromotionsSlider'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)
    const formRef = useRef<HTMLDivElement>(null)
    const backgroundRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', delay: 0.2 }
            )
            gsap.fromTo(
                subtitleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', delay: 0.4 }
            )
            gsap.fromTo(
                formRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', delay: 0.6 }
            )

            if (backgroundRef.current) {
                gsap.to(backgroundRef.current, {
                    y: 100,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                    },
                })
            }
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen max-h-screen flex flex-col justify-between overflow-hidden text-white px-4 pt-24"
        >
            {/* Fondo */}
            <div
                ref={backgroundRef}
                className="absolute inset-0 z-0 bg-[url('/img/fondo.jpg')] bg-cover bg-center"
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Contenido */}
            <div className="relative z-10 text-center flex flex-col items-center gap-4">
                <h1
                    ref={titleRef}
                    className="text-3xl md:text-5xl font-bold leading-tight"
                >
                    Conectamos destinos, transportamos experiencias
                </h1>
                <p
                    ref={subtitleRef}
                    className="text-base md:text-lg text-gray-200 max-w-xl"
                >
                    Viajes de larga distancia y encomiendas en todo el país.
                </p>

                <div
                    ref={formRef}
                    className="bg-white/90 text-gray-800 rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4 justify-center items-center max-w-3xl w-full mt-2"
                >
                    <input
                        type="text"
                        placeholder="Origen"
                        className="px-3 py-2 rounded w-full md:w-auto text-sm"
                    />
                    <input
                        type="text"
                        placeholder="Destino"
                        className="px-3 py-2 rounded w-full md:w-auto text-sm"
                    />
                    <input
                        type="date"
                        className="px-3 py-2 rounded w-full md:w-auto text-sm"
                    />
                    <button className="bg-orange-500 text-white font-semibold px-5 py-2 rounded hover:bg-orange-600 transition text-sm">
                        Buscar
                    </button>
                </div>
            </div>

            {/* Slider (altura controlada) */}
            <div className="relative z-10 mt-4 md:mt-6">
                <PromotionsSlider />
            </div>
        </section>
    )
}
