"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Star, Shield, Clock } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)
    const formRef = useRef<HTMLDivElement>(null)
    const backgroundRef = useRef<HTMLDivElement>(null)
    const featuresRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animación del título con efecto de escritura
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 },
            )

            gsap.fromTo(
                subtitleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.6 },
            )

            gsap.fromTo(
                formRef.current,
                { opacity: 0, y: 40, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.7)", delay: 0.9 },
            )

            gsap.fromTo(
                featuresRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 1.2 },
            )

            // Parallax del fondo
            if (backgroundRef.current) {
                gsap.to(backgroundRef.current, {
                    y: 150,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                })
            }
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            id="hero"
            ref={sectionRef}
            className="relative min-h-screen flex flex-col justify-between overflow-hidden text-white"
        >
            {/* Fondo con overlay mejorado */}
            <div ref={backgroundRef} className="absolute inset-0 z-0 bg-[url('/img/fondo.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-transparent" />
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4 pt-32 pb-8 w-full">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="flex flex-col-reverse md:flex-row md:items-stretch md:justify-center gap-8 w-full">
                        {/* Detalles de Hero a la derecha en desktop, abajo en mobile */}
                        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 md:space-y-8">
                            <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                Tu viaje
                                <span className="block text-orange-400">comienza aquí</span>
                            </h1>
                            <p
                                ref={subtitleRef}
                                className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto md:mx-0 leading-relaxed"
                            >
                                Más de 25 años conectando Argentina con seguridad, confort y puntualidad. Descubrí por qué somos la elección de miles de pasajeros.
                            </p>
                            <div ref={featuresRef} className="flex flex-wrap justify-center md:justify-start gap-4 text-sm md:text-base">
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                                    <Star className="text-orange-400" size={18} />
                                    <span>+30 destinos</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                                    <Shield className="text-orange-400" size={18} />
                                    <span>Viajes seguros</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                                    <Clock className="text-orange-400" size={18} />
                                    <span>Atención personalizada</span>
                                </div>
                            </div>
                        </div>
                        {/* Iframe a la izquierda en desktop, arriba en mobile */}
                        <div
                            ref={formRef}
                            className="flex-1 flex flex-col items-center justify-center mb-8 md:mb-0"
                        >
                            <div className="bg-white/95 backdrop-blur-sm text-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-xs md:max-w-sm lg:max-w-md flex flex-col items-center border border-gray-200">
                                <h3 className="text-xl md:text-2xl font-bold text-center mb-6 text-gray-800">
                                    Comprá tu pasaje online
                                </h3>
                                <div className="flex justify-center w-full">
                                    <iframe
                                        src="https://ecommerce.centraldepasajes.com.ar/agenciaframe.aspx?Token=C22TQeAa5%2BQ%2BOA6kFwavSXDleWuYm6XQjH9s3%2F3J%2BNI%3D&age=vos"
                                        style={{ border: 'none', width: '100%', maxWidth: 330, height: 494, overflow: 'hidden', borderRadius: 16, background: '#fff', boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' }}
                                        className="shadow-lg transition-all duration-300 hover:shadow-2xl focus:shadow-2xl"
                                        title="Buscador de pasajes"
                                        allowFullScreen={false}
                                    />
                                </div>
                                <p className="text-center text-sm text-gray-600 mt-4">
                                    💡 <strong>Tip:</strong> Reservá con anticipación y obtené los mejores precios
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slider de promociones (deshabilitado temporalmente) */}
            {/* <div className="relative z-10">
                <PromotionsSlider />
            </div> */}
            {/* Las promociones están deshabilitadas por el momento, se pueden volver a activar cuando se requiera. */}

            {/* Indicador de scroll */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
