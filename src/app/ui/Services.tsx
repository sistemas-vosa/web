"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Star, Wifi, Coffee, Tv, Bed, ArrowRight, Check } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const services = [
    {
        id: "suite",
        title: "Servicio Suite",
        subtitle: "La experiencia de lujo definitiva",
        description:
            "Nuestro servicio más exclusivo con butacas que se reclinan 180°, catering gourmet, bebidas premium, mantas de alta calidad, almohadas ergonómicas y atención personalizada las 24 horas.",
        image: "/img/services/service-suite.jpg",
        price: "Desde $15.000",
        rating: 4.9,
        features: [
            "Butacas reclinables 180°",
            "Catering gourmet incluido",
            "Bebidas premium ilimitadas",
            "Atención personalizada VIP",
            "Mantas y almohadas premium",
            "Entretenimiento individual",
        ],
        amenities: [
            { icon: <Bed size={20} />, label: "Cama completa" },
            { icon: <Coffee size={20} />, label: "Catering gourmet" },
            { icon: <Wifi size={20} />, label: "WiFi gratuito" },
            { icon: <Tv size={20} />, label: "Entretenimiento" },
        ],
        routes: "Buenos Aires ↔ Santiago del Estero ↔ Tucumán",
        color: "from-purple-600 to-indigo-600",
        bgColor: "bg-purple-50",
    },
    {
        id: "cama",
        title: "Servicio Cama",
        subtitle: "Confort y calidad en cada kilómetro",
        description:
            "Butacas reclinables hasta 160°, comidas calientes a bordo, bebidas incluidas, climatización personalizada, mantas suaves y almohadas cómodas. Conectamos Buenos Aires con las principales ciudades del norte.",
        image: "/img/services/service-cama.jpg",
        price: "Desde $8.500",
        rating: 4.7,
        features: [
            "Butacas reclinables 160°",
            "Comidas calientes incluidas",
            "Bebidas sin cargo",
            "Climatización individual",
            "Mantas y almohadas",
            "Múltiples destinos",
        ],
        amenities: [
            { icon: <Bed size={20} />, label: "Reclinable 160°" },
            { icon: <Coffee size={20} />, label: "Comidas incluidas" },
            { icon: <Wifi size={20} />, label: "WiFi disponible" },
            { icon: <Tv size={20} />, label: "TV y música" },
        ],
        routes: "Buenos Aires ↔ La Banda ↔ Tucumán ↔ Salta ↔ Santiago del Estero",
        color: "from-blue-600 to-cyan-600",
        bgColor: "bg-blue-50",
    },
    {
        id: "semicama",
        title: "Servicio Semi-Cama",
        subtitle: "La opción inteligente para viajar",
        description:
            "Una alternativa accesible sin comprometer la comodidad. Butacas reclinables 145°, aire acondicionado, sistema de entretenimiento con música y TV, y nuestra amplia red de destinos en todo el país.",
        image: "/img/services/service-semicama.jpg",
        price: "Desde $4.200",
        rating: 4.5,
        features: [
            "Butacas reclinables 145°",
            "Aire acondicionado",
            "Sistema de entretenimiento",
            "Red nacional de destinos",
            "Precio accesible",
            "Frecuencias diarias",
        ],
        amenities: [
            { icon: <Bed size={20} />, label: "Reclinable 145°" },
            { icon: <Coffee size={20} />, label: "Snacks disponibles" },
            { icon: <Wifi size={20} />, label: "WiFi básico" },
            { icon: <Tv size={20} />, label: "TV y música" },
        ],
        routes: "Red nacional - Más de 200 destinos",
        color: "from-green-600 to-emerald-600",
        bgColor: "bg-green-50",
    },
]

export default function Services() {
    const serviceRefs = useRef<(HTMLDivElement | null)[]>([])
    const [activeService, setActiveService] = useState(0)

    useEffect(() => {
        const ctx = gsap.context(() => {
            serviceRefs.current.forEach((el, i) => {
                if (el) {
                    gsap.fromTo(
                        el,
                        { opacity: 0, y: 100, rotationX: 15 },
                        {
                            opacity: 1,
                            y: 0,
                            rotationX: 0,
                            duration: 1.2,
                            delay: i * 0.2,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 80%",
                            },
                        },
                    )
                }
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <section id="servicios" className="bg-gradient-to-br from-gray-50 to-white text-gray-800 py-20 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Nuestros <span className="text-orange-600">Servicios</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Elegí la experiencia de viaje que mejor se adapte a tus necesidades. Desde el lujo absoluto hasta opciones
                        accesibles, siempre con la calidad Vosa.
                    </p>
                </div>

                {/* Services */}
                <div className="space-y-32">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            ref={(el) => {
                                serviceRefs.current[index] = el
                            }}
                            className={`flex flex-col ${
                                index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                            } items-center gap-12 lg:gap-16`}
                        >
                            {/* Image */}
                            <div className="lg:w-1/2">
                                <div className="relative group">
                                    <Image
                                        src={service.image || "/placeholder.svg"}
                                        alt={service.title}
                                        width={600}
                                        height={400}
                                        className="rounded-2xl shadow-2xl w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Price overlay */}
                                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                                        <span className="font-bold text-gray-800">{service.price}</span>
                                    </div>
                                    {/* Rating overlay */}
                                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                                        <Star className="text-yellow-500 fill-current" size={16} />
                                        <span className="font-semibold text-gray-800">{service.rating}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="lg:w-1/2 space-y-6">
                                {/* Header */}
                                <div>
                                    <div
                                        className={`inline-block bg-gradient-to-r ${service.color} text-white px-4 py-1 rounded-full text-sm font-semibold mb-3`}
                                    >
                                        {service.subtitle}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{service.title}</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                                </div>

                                {/* Amenities */}
                                <div className="grid grid-cols-2 gap-3">
                                    {service.amenities.map((amenity, i) => (
                                        <div key={i} className={`${service.bgColor} rounded-lg p-3 flex items-center gap-3`}>
                                            <div className="text-gray-600">{amenity.icon}</div>
                                            <span className="text-sm font-medium text-gray-700">{amenity.label}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Features */}
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-gray-800 mb-3">Incluye:</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <Check className="text-green-600" size={16} />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Routes */}
                                <div className={`${service.bgColor} rounded-lg p-4`}>
                                    <h4 className="font-semibold text-gray-800 mb-2">Rutas disponibles:</h4>
                                    <p className="text-gray-600">{service.routes}</p>
                                </div>

                                {/* CTA */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        className={`bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2`}
                                    >
                                        Reservar {service.title}
                                        <ArrowRight size={20} />
                                    </button>
                                    <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-gray-400 transition-colors">
                                        Ver horarios
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Comparison Table */}
                <div className="mt-32">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Compará nuestros servicios</h3>
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold text-gray-800">Características</th>
                                    <th className="px-6 py-4 text-center font-semibold text-purple-600">Suite</th>
                                    <th className="px-6 py-4 text-center font-semibold text-blue-600">Cama</th>
                                    <th className="px-6 py-4 text-center font-semibold text-green-600">Semi-Cama</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-800">Reclinación</td>
                                    <td className="px-6 py-4 text-center text-purple-600">180°</td>
                                    <td className="px-6 py-4 text-center text-blue-600">160°</td>
                                    <td className="px-6 py-4 text-center text-green-600">145°</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-800">Catering</td>
                                    <td className="px-6 py-4 text-center">
                                        <Check className="text-green-600 mx-auto" size={20} />
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <Check className="text-green-600 mx-auto" size={20} />
                                    </td>
                                    <td className="px-6 py-4 text-center text-gray-400">Snacks</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-800">WiFi</td>
                                    <td className="px-6 py-4 text-center">
                                        <Check className="text-green-600 mx-auto" size={20} />
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <Check className="text-green-600 mx-auto" size={20} />
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <Check className="text-green-600 mx-auto" size={20} />
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-800">Precio desde</td>
                                    <td className="px-6 py-4 text-center font-bold text-purple-600">$15.000</td>
                                    <td className="px-6 py-4 text-center font-bold text-blue-600">$8.500</td>
                                    <td className="px-6 py-4 text-center font-bold text-green-600">$4.200</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
