"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
    const sectionRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (sectionRef.current) {
                gsap.fromTo(
                    sectionRef.current.querySelectorAll(".contact-item"),
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 80%",
                        },
                    },
                )
            }
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const contactInfo = [
        {
            icon: <Phone size={24} />,
            title: "Teléfono",
            info: "0800-333-8672",
            description: "Línea gratuita 24 horas",
            color: "from-green-500 to-green-600",
        },
        {
            icon: <Mail size={24} />,
            title: "Email",
            info: "info@vosa.com.ar",
            description: "Respuesta en 24hs",
            color: "from-blue-500 to-blue-600",
        },
        {
            icon: <MapPin size={24} />,
            title: "Terminal Central",
            info: "Av. Ramos Mejía 1302",
            description: "Retiro, Buenos Aires",
            color: "from-purple-500 to-purple-600",
        },
        {
            icon: <Clock size={24} />,
            title: "Horarios",
            info: "24 horas",
            description: "Todos los días del año",
            color: "from-orange-500 to-orange-600",
        },
    ]

    return (
        <section id="contacto" ref={sectionRef} className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 contact-item">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Estamos aquí para <span className="text-orange-600">ayudarte</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        ¿Tenés alguna consulta? Nuestro equipo está disponible las 24 horas para brindarte la mejor atención
                    </p>
                </div>

                {/* Contact Info */}
                <div className="contact-item">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Información de contacto</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group text-center"
                            >
                                <div
                                    className={`bg-gradient-to-r ${item.color} text-white rounded-lg p-3 w-fit mb-4 group-hover:scale-110 transition-transform mx-auto`}
                                >
                                    {item.icon}
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                                <p className="font-bold text-gray-900 mb-1">{item.info}</p>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
