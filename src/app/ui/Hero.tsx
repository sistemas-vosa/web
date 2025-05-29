"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Search, MapPin, Calendar, ArrowRight, Star, Shield, Clock } from "lucide-react"
import PromotionsSlider from "@/app/ui/PromotionsSlider"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)
    const formRef = useRef<HTMLDivElement>(null)
    const backgroundRef = useRef<HTMLDivElement>(null)
    const featuresRef = useRef<HTMLDivElement>(null)

    const [formData, setFormData] = useState({
        origen: "",
        destino: "",
        fecha: "",
    })

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

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        // Aquí iría la lógica de búsqueda
        console.log("Búsqueda:", formData)
    }

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
            <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4 pt-32 pb-8">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Título principal */}
                    <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        Tu viaje perfecto
                        <span className="block text-orange-400">comienza aquí</span>
                    </h1>

                    {/* Subtítulo */}
                    <p
                        ref={subtitleRef}
                        className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
                    >
                        Más de 25 años conectando Argentina con seguridad, confort y puntualidad. Descubrí por qué somos la elección
                        de miles de pasajeros.
                    </p>

                    {/* Features destacadas */}
                    <div ref={featuresRef} className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                            <Star className="text-orange-400" size={18} />
                            <span>+200 destinos</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                            <Shield className="text-orange-400" size={18} />
                            <span>Viajes seguros</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                            <Clock className="text-orange-400" size={18} />
                            <span>Atención 24hs</span>
                        </div>
                    </div>

                    {/* Formulario de búsqueda mejorado */}
                    <div
                        ref={formRef}
                        className="bg-white/95 backdrop-blur-sm text-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto"
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-center mb-6 text-gray-800">
                            Encontrá tu próximo destino
                        </h3>

                        <form onSubmit={handleSearch} className="space-y-4 md:space-y-0 md:flex md:gap-4 md:items-end">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <MapPin size={16} className="inline mr-1" />
                                    Origen
                                </label>
                                <input
                                    type="text"
                                    placeholder="¿Desde dónde viajas?"
                                    value={formData.origen}
                                    onChange={(e) => setFormData({ ...formData, origen: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                />
                            </div>

                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <MapPin size={16} className="inline mr-1" />
                                    Destino
                                </label>
                                <input
                                    type="text"
                                    placeholder="¿A dónde quieres ir?"
                                    value={formData.destino}
                                    onChange={(e) => setFormData({ ...formData, destino: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                />
                            </div>

                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <Calendar size={16} className="inline mr-1" />
                                    Fecha de viaje
                                </label>
                                <input
                                    type="date"
                                    value={formData.fecha}
                                    onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full md:w-auto bg-orange-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-orange-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <Search size={20} />
                                Buscar Viajes
                                <ArrowRight size={20} />
                            </button>
                        </form>

                        <p className="text-center text-sm text-gray-600 mt-4">
                            💡 <strong>Tip:</strong> Reservá con anticipación y obtené los mejores precios
                        </p>
                    </div>
                </div>
            </div>

            {/* Slider de promociones */}
            <div className="relative z-10">
                <PromotionsSlider />
            </div>

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
