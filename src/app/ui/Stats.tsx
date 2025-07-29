"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MapPin, Calendar, Users, Award } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface StatItem {
    icon: React.ReactNode
    number: number
    suffix: string
    label: string
    description: string
    color: string
}

const stats: StatItem[] = [
    {
        icon: <MapPin size={32} />,
        number: 30,
        suffix: "+",
        label: "Destinos",
        description: "En todo el país",
        color: "text-orange-600",
    },
    {
        icon: <Calendar size={32} />,
        number: 25,
        suffix: "+",
        label: "Años",
        description: "De experiencia",
        color: "text-blue-600",
    },
    {
        icon: <Users size={32} />,
        number: 300,
        suffix: "K+",
        label: "Pasajeros",
        description: "Transportados",
        color: "text-green-600",
    },
    {
        icon: <Award size={32} />,
        number: 98,
        suffix: "%",
        label: "Satisfacción",
        description: "De nuestros clientes",
        color: "text-purple-600",
    },
]

export default function Stats() {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const [counters, setCounters] = useState(stats.map(() => 0))

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (sectionRef.current) {
                // Animación de entrada de las tarjetas
                gsap.fromTo(
                    sectionRef.current.querySelectorAll(".stat-card"),
                    { opacity: 0, y: 50, scale: 0.8 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 80%",
                            onEnter: () => {
                                // Animar contadores cuando entran en vista
                                stats.forEach((stat, index) => {
                                    gsap.to(
                                        {},
                                        {
                                            duration: 2,
                                            ease: "power2.out",
                                            onUpdate: function () {
                                                const progress = this.progress()
                                                const currentValue = Math.round(stat.number * progress)
                                                setCounters((prev) => {
                                                    const newCounters = [...prev]
                                                    newCounters[index] = currentValue
                                                    return newCounters
                                                })
                                            },
                                        },
                                    )
                                })
                            },
                        },
                    },
                )
            }
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Números que nos
                        <span className="text-orange-600"> respaldan</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Más de dos décadas construyendo confianza y conectando destinos en toda Argentina
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                        >
                            {/* Icon */}
                            <div className={`${stat.color} mb-4 flex justify-center`}>
                                <div className="bg-gray-50 rounded-full p-4">{stat.icon}</div>
                            </div>

                            {/* Number */}
                            <div className="text-center">
                                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                                    {counters[index]}
                                    {stat.suffix}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">{stat.label}</h3>
                                <p className="text-gray-600">{stat.description}</p>
                            </div>

                            {/* Progress bar */}
                            <div className="mt-6">
                                <div className="bg-gray-200 rounded-full h-2">
                                    <div
                                        className={`h-2 rounded-full transition-all duration-2000 ${
                                            stat.color.includes("orange")
                                                ? "bg-orange-600"
                                                : stat.color.includes("blue")
                                                    ? "bg-blue-600"
                                                    : stat.color.includes("green")
                                                        ? "bg-green-600"
                                                        : "bg-purple-600"
                                        }`}
                                        style={{
                                            width: `${(counters[index] / stat.number) * 100}%`,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Listo para ser parte de estas estadísticas?</h3>
                        <p className="text-gray-600 mb-6">Únete a miles de pasajeros que confían en nosotros para sus viajes</p>
                        <button
                            onClick={() => {
                                const hero = document.getElementById("hero");
                                if (hero) hero.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors"
                        >
                            Reservar Ahora
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
