"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Aquí iría la lógica de envío del formulario
        console.log("Formulario enviado:", formData)
    }

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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="contact-item">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de contacto</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {contactInfo.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
                                    >
                                        <div
                                            className={`bg-gradient-to-r ${item.color} text-white rounded-lg p-3 w-fit mb-4 group-hover:scale-110 transition-transform`}
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

                        {/* Quick Actions */}
                        <div className="contact-item bg-white rounded-2xl p-8 shadow-lg">
                            <h4 className="text-xl font-bold text-gray-800 mb-6">Acciones rápidas</h4>
                            <div className="space-y-4">
                                <button className="w-full bg-green-600 text-white p-4 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center gap-3">
                                    <MessageCircle size={20} />
                                    Chat en vivo
                                </button>
                                <button className="w-full bg-blue-600 text-white p-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center gap-3">
                                    <Phone size={20} />
                                    Llamar ahora
                                </button>
                                <button className="w-full border-2 border-orange-600 text-orange-600 p-4 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transition-colors flex items-center gap-3">
                                    <MapPin size={20} />
                                    Ver terminales
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-item">
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Envianos tu consulta</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                            placeholder="Tu nombre"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                            placeholder="tu@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                            placeholder="Tu teléfono"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Asunto</label>
                                        <select
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                            required
                                        >
                                            <option value="">Seleccionar asunto</option>
                                            <option value="pasajes">Consulta sobre pasajes</option>
                                            <option value="encomiendas">Consulta sobre encomiendas</option>
                                            <option value="reclamo">Reclamo</option>
                                            <option value="sugerencia">Sugerencia</option>
                                            <option value="otro">Otro</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                                        placeholder="Contanos tu consulta..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                                >
                                    <Send size={20} />
                                    Enviar mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
