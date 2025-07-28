"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Bus, Route, Package, Headset, Shield, Clock, Award, Users } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const features = [
    {
        icon: <Bus size={32} />,
        title: "Flota moderna",
        description: "Unidades nuevas con tecnología de última generación para mayor confort y seguridad.",
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-50",
        iconColor: "text-blue-600",
    },
    {
        icon: <Route size={32} />,
        title: "Cobertura nacional",
        description: "Más de 200 destinos conectados en todo el país con frecuencias diarias.",
        color: "from-green-500 to-green-600",
        bgColor: "bg-green-50",
        iconColor: "text-green-600",
    },
    {
        icon: <Package size={32} />,
        title: "Seguimiento de carga",
        description: "Trazabilidad completa de tus encomiendas con tecnología de rastreo en tiempo real.",
        color: "from-purple-500 to-purple-600",
        bgColor: "bg-purple-50",
        iconColor: "text-purple-600",
    },
    {
        icon: <Headset size={32} />,
        title: "Atención personalizada",
        description: "Soporte constante en todas nuestras rutas con personal capacitado.",
        color: "from-orange-500 to-orange-600",
        bgColor: "bg-orange-50",
        iconColor: "text-orange-600",
    },
    {
        icon: <Shield size={32} />,
        title: "Viajes seguros",
        description: "Certificación IRAM 3810 y protocolos de seguridad de clase mundial.",
        color: "from-red-500 to-red-600",
        bgColor: "bg-red-50",
        iconColor: "text-red-600",
    },
    {
        icon: <Clock size={32} />,
        title: "Puntualidad garantizada",
        description: "98% de puntualidad en nuestros servicios con monitoreo GPS en tiempo real.",
        color: "from-indigo-500 to-indigo-600",
        bgColor: "bg-indigo-50",
        iconColor: "text-indigo-600",
    },
    {
        icon: <Award size={32} />,
        title: "Calidad certificada",
        description: "Reconocimientos nacionales por excelencia en servicio al cliente.",
        color: "from-yellow-500 to-yellow-600",
        bgColor: "bg-yellow-50",
        iconColor: "text-yellow-600",
    },
    {
        icon: <Users size={32} />,
        title: "Experiencia comprobada",
        description: "Más de 25 años transportando familias con la confianza de miles de clientes.",
        color: "from-teal-500 to-teal-600",
        bgColor: "bg-teal-50",
        iconColor: "text-teal-600",
    },
]

export default function WhyVosa() {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animación del título
            const h2 = sectionRef.current?.querySelector("h2")
            if (h2) {
                gsap.fromTo(
                    h2,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 85%",
                        },
                    },
                )
            }

            // Animación de las tarjetas
            cardsRef.current.forEach((el, i) => {
                if (el) {
                    gsap.fromTo(
                        el,
                        { opacity: 0, y: 60, rotationY: 15, scale: 0.8 },
                        {
                            opacity: 1,
                            y: 0,
                            rotationY: 0,
                            scale: 1,
                            duration: 0.8,
                            delay: i * 0.1,
                            ease: "back.out(1.7)",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 90%",
                            },
                        },
                    )
                }
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="bg-gradient-to-br from-gray-50 to-white py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        ¿Por qué elegir <span className="text-orange-600">Vosa</span>?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Descubrí las razones por las que miles de pasajeros confían en nosotros para sus viajes por toda Argentina
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                cardsRef.current[index] = el
                            }}
                            className={`group relative ${feature.bgColor} rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden`}
                        >
                            {/* Background gradient on hover */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            ></div>

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon */}
                                <div
                                    className={`${feature.iconColor} group-hover:text-white transition-colors duration-500 mb-4 transform group-hover:scale-110 transition-transform duration-500`}
                                >
                                    {feature.icon}
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-lg mb-3 text-gray-800 group-hover:text-white transition-colors duration-500">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-500 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Decorative element */}
                                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-current opacity-20 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                            </div>

                            {/* Hover effect overlay */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto border border-gray-100">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">¿Convencido? ¡Es hora de viajar!</h3>
                        <p className="text-gray-600 mb-6 text-lg">
                            Únete a los miles de pasajeros que ya eligieron la mejor experiencia de viaje
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => {
                                    const hero = document.getElementById("hero");
                                    if (hero) hero.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl"
                            >
                                Reservar mi viaje
                            </button>
                            {/* <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-colors">
                                Ver destinos
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
