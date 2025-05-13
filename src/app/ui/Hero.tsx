'use client'

import { useEffect, useRef } from 'react'
import gsap from '@/lib/gsap'

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
        )
        gsap.fromTo(
            subtitleRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power2.out' }
        )
        gsap.fromTo(
            buttonRef.current,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.8, delay: 0.6, ease: 'back.out(1.7)' }
        )
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
            <div className="relative z-10 max-w-2xl px-4">
                <h1
                    ref={titleRef}
                    className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
                >
                    ¡Web en mantenimiento!

                </h1>
                <p
                    ref={subtitleRef}
                    className="text-lg md:text-xl text-gray-200 mb-8"
                >
                    Estamos trabajando para mejorar tu experiencia. Durante este tiempo, algunas funciones pueden no estar disponibles.
                    Vuelve a visitarnos en breve. ¡Gracias por tu paciencia!
                </p>
                <button
                    ref={buttonRef}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
                    onClick={() => {
                        window.location.href = 'tel:08003338672'
                    }}
                >
                    Llamar al 0800-333-8672
                </button>
            </div>
        </section>
    )
}
