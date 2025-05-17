'use client'

import { useEffect, useRef } from 'react'
import gsap from '@/lib/gsap'
import PromotionsSlider from '@/app/ui/PromotionsSlider'

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)
    const buttonsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return
        const tl = gsap.timeline()
        tl.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2 })
            .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, "-=0.8")
            .fromTo(buttonsRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8 }, "-=0.8")
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100vh] flex flex-col justify-center items-center text-center text-white bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url('/img/bus-bg.jpg')`,
                backgroundPosition: 'center center',
            }}
        >
            <div className="bg-black/50 absolute inset-0 z-0" />

            <div className="relative z-10 w-full max-w-[90%] sm:max-w-2xl px-4">
                <h1 ref={titleRef} className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
                    Conectamos destinos, transportamos experiencias
                </h1>
                <p ref={subtitleRef} className="text-base sm:text-lg md:text-2xl text-gray-200 mb-8">
                    Viajes de larga distancia y encomiendas en todo el país.
                </p>
                <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <button disabled className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-full opacity-70 cursor-not-allowed">
                        Comprar Pasajes Online
                    </button>
                    <button disabled className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-full opacity-70 cursor-not-allowed">
                        Envío de Encomiendas
                    </button>
                </div>

                {/* Slider Reutilizable */}
                <PromotionsSlider />
            </div>
        </section>
    )
}
