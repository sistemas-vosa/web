"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import {
    Package,
    Truck,
    Shield,
    Clock,
    MapPin,
    Home,
    CheckCircle,
    Headset,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const features = [
    {
        icon: <Truck size={24} />,
        title: "Retiro y entrega a domicilio",
        description: "Servicio puerta a puerta en principales ciudades",
    },
    {
        icon: <Clock size={24} />,
        title: "Tiempos de entrega",
        description: "Envíos rápidos: 24 a 72hs según destino",
    },
    {
        icon: <Shield size={24} />,
        title: "Seguro adicional",
        description: "Protección extra para cargas de alto valor",
    },
    {
        icon: <Headset size={24} />,
        title: "Contacto encomiendas",
        description: "0800-333-8672 | info@vosa.com.ar",
    },
]

const steps = [
    {
        number: "01",
        title: "Prepará tu envío",
        description: "Empacá tu encomienda de forma segura",
        icon: <Package size={32} />,
    },
    {
        number: "02",
        title: "Llevala a terminal",
        description: "O solicitá retiro a domicilio",
        icon: <MapPin size={32} />,
    },
    {
        number: "03",
        title: "Seguí tu envío",
        description: "Rastreá en tiempo real el estado",
        icon: <Clock size={32} />,
    },
    {
        number: "04",
        title: "Recibí confirmación",
        description: "Notificación cuando llegue a destino",
        icon: <CheckCircle size={32} />,
    },
]

export default function ParcelsInfo() {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const contentRef = useRef<HTMLDivElement | null>(null)
    const stepsRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (sectionRef.current) {
                // Animación del contenido principal
                gsap.fromTo(
                    contentRef.current,
                    { opacity: 0, x: -50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 80%",
                        },
                    },
                )

                // Animación de los pasos
                stepsRef.current.forEach((el, i) => {
                    if (el) {
                        gsap.fromTo(
                            el,
                            { opacity: 0, y: 50, scale: 0.8 },
                            {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                duration: 0.8,
                                delay: i * 0.2,
                                ease: "back.out(1.7)",
                                scrollTrigger: {
                                    trigger: el,
                                    start: "top 85%",
                                },
                            },
                        )
                    }
                })
            }
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            id="encomiendas"
            ref={sectionRef}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-800 py-20 px-4 md:px-6"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Servicio de <span className="text-blue-600">Encomiendas</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Enviá tus paquetes con la confianza y seguridad que nos caracteriza. Red nacional conectada las 24 horas.
                    </p>
                    <a
                        href="http://mercury.sisorgcloud.com/tracking/P6ndO5ThH54AI6tYq1JcwOxlbAGiXtWsG40PVhkm***tn9QQbyJCOgNu1GTDm0***43HzO2+AVoupOMwltIFJ18LlTKeMaAdYsQxjcWoD1drZuCkU1m2VbzaCUWpAXVBsDgs+rxLpHV5OBc0i6+n66UfqpqgzWI59LZJV4YnS0LJCXKzxjF5rElod0UfTaQlE0uX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 bg-orange-600 text-white font-semibold px-6 py-2 rounded shadow hover:bg-orange-700 transition"
                    >
                        {/* Icono de paquete */}
                        <span className="text-white">
                            <Package size={20} />
                        </span>
                        Seguí tu encomienda
                    </a>
                </div>

                {/* Main Content */}
                <div ref={contentRef} className="flex flex-col lg:flex-row items-center gap-12 mb-20">
                    <div className="lg:w-5/12">
                        <Image
                            src="/img/parcels/parcels-service.jpeg"
                            alt="Servicio de Encomiendas Vosa"
                            width={600}
                            height={400}
                            className="rounded-2xl shadow-2xl object-cover w-full h-auto"
                        />
                    </div>

                    <div className="lg:w-7/12 space-y-8">
                        <div>
                            <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                Confianza garantizada
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tu encomienda en las mejores manos</h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                La seriedad, la seguridad y el seguimiento de la carga son nuestros pilares fundamentales. Contamos con
                                unidades modernas, depósitos controlados y una red conectada las 24 horas para garantizar que tu
                                encomienda llegue en perfectas condiciones.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-blue-100 rounded-lg p-2 text-blue-600">{feature.icon}</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                                            <p className="text-sm text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2">
                                Enviar encomienda
                                <ArrowRight size={20} />
                            </button>
                            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                                Rastrear envío
                            </button>
                        </div>
                        */}
                    </div>
                </div>

                {/* Process Steps */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl hidden">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">¿Cómo enviar tu encomienda?</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                ref={(el) => {
                                    stepsRef.current[index] = el
                                }}
                                className="text-center group"
                            >
                                <div className="relative mb-6">
                                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {step.number}
                                    </div>
                                    <div className="bg-blue-100 rounded-full p-3 w-fit mx-auto text-blue-600 group-hover:bg-blue-200 transition-colors">
                                        {step.icon}
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
                                    )}
                                </div>

                                <h4 className="font-bold text-gray-800 mb-2">{step.title}</h4>
                                <p className="text-gray-600 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Pricing and Info */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Pricing */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Package className="text-blue-600" size={20} />
                            Información de envío
                        </h4>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Peso máximo recomendado</span>
                                <span className="font-semibold">30kg por bulto</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Dimensiones</span>
                                <span className="font-semibold">Consultar según destino</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Cobertura</span>
                                <span className="font-semibold">Nacional</span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">Para cotizaciones y más detalles, contactanos.</p>
                    </div>

                    {/* Delivery Times */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Clock className="text-green-600" size={20} />
                            Tiempos de entrega
                        </h4>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Capital Federal</span>
                                <span className="font-semibold">24-48hs</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Gran Buenos Aires</span>
                                <span className="font-semibold">48-72hs</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Interior del país</span>
                                <span className="font-semibold">3-5 días</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                        <h4 className="font-bold mb-4 flex items-center gap-2">
                            <Home size={20} />
                            ¿Necesitás ayuda?
                        </h4>
                        <p className="mb-4 text-blue-100">Nuestro equipo está disponible para asesorarte</p>
                        <div className="space-y-2 text-sm">
                            <p>📞 0800-333-8672</p>
                            <p>📧 info@vosa.com.ar</p>
                            <p>🕒 Atención personalizada</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
