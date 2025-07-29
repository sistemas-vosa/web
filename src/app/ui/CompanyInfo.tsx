"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Calendar, Shield, Award } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function CompanyInfo() {
    const sectionRef = useRef(null)
    const blocksRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            blocksRef.current.forEach((el, i) => {
                if (el) {
                    gsap.fromTo(
                        el,
                        { opacity: 0, y: 80, rotationX: 15 },
                        {
                            opacity: 1,
                            y: 0,
                            rotationX: 0,
                            duration: 1.2,
                            delay: i * 0.3,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 85%",
                            },
                        },
                    )
                }
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            id="nosotros"
            ref={sectionRef}
            className="bg-white text-gray-800 py-20 px-4 md:px-6 max-w-7xl mx-auto space-y-32"
        >
            {/* Header */}
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    Nuestra <span className="text-orange-600">Historia</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Desde 1997, hemos sido pioneros en el transporte de pasajeros, construyendo una reputación basada en la
                    excelencia, seguridad y compromiso con nuestros clientes.
                </p>
            </div>

            {/* BLOQUE 1 - Historia */}
            <div ref={el => { blocksRef.current[0] = el }} className="flex flex-col lg:flex-row items-center gap-12">                <div className="lg:w-1/2">
                    <Image
                        src="/img/company/company-1997.jpg"
                        alt="Historia de Vosa desde 1997"
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-2xl w-full object-cover"
                    />
                </div>
                <div className="lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-orange-100 rounded-full p-3">
                            <Calendar className="text-orange-600" size={24} />
                        </div>
                        <span className="text-orange-600 font-semibold text-lg">Desde 1997</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                        Conectando destinos con pasión y dedicación
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Comenzamos como una pequeña empresa familiar con la visión de revolucionar el transporte de pasajeros en
                        Argentina. Desde entonces, hemos crecido constantemente, incorporando nuevas unidades a nuestra flota y
                        manteniéndolas con los más altos estándares de calidad.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Nuestra filosofía siempre ha sido clara: <strong>confort, seguridad y calidad en cada viaje</strong>. Estos
                        valores nos han permitido ganarnos la confianza de miles de familias argentinas.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <div className="bg-gray-50 rounded-lg px-4 py-2">
                            <span className="font-semibold text-orange-600">25+</span> años de experiencia
                        </div>
                        <div className="bg-gray-50 rounded-lg px-4 py-2">
                            <span className="font-semibold text-orange-600">300K+</span> pasajeros satisfechos
                        </div>
                    </div>
                </div>
            </div>

            {/* BLOQUE 2 - Seguridad */}
            <div ref={el => { blocksRef.current[1] = el }} className="flex flex-col lg:flex-row-reverse items-center gap-12">                <div className="lg:w-1/2">
                    <Image
                        src="/img/company/company-safety.jpg"
                        alt="Compromiso con la seguridad vial"
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-2xl w-full object-cover"
                    />
                </div>
                <div className="lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-100 rounded-full p-3">
                            <Shield className="text-blue-600" size={24} />
                        </div>
                        <span className="text-blue-600 font-semibold text-lg">Seguridad Certificada</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                        Tu seguridad es nuestra prioridad absoluta
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Implementamos uno de los programas de capacitación más exigentes del país para nuestros conductores. Nuestra
                        flota cumple con los más altos estándares de seguridad vial, incluyendo la prestigiosa certificación IRAM
                        3810.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 mt-1">
                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">Tecnología de última generación</h4>
                                <p className="text-gray-600">Plataformas 8x2 y sistemas de monitoreo avanzados</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 mt-1">
                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">Conductores certificados</h4>
                                <p className="text-gray-600">Capacitación continua y evaluaciones periódicas</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-green-100 rounded-full p-1 mt-1">
                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">Mantenimiento preventivo</h4>
                                <p className="text-gray-600">Revisiones técnicas constantes y repuestos originales</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BLOQUE 3 - Servicios */}
            <div ref={el => { blocksRef.current[2] = el }} className="flex flex-col lg:flex-row items-center gap-12">                <div className="lg:w-1/2">
                    <Image
                        src="/img/company/company-services.jpeg"
                        alt="Servicios premium de Vosa"
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-2xl w-full object-cover"
                    />
                </div>
                <div className="lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-purple-100 rounded-full p-3">
                            <Award className="text-purple-600" size={24} />
                        </div>
                        <span className="text-purple-600 font-semibold text-lg">Servicios Premium</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                        Experiencias de viaje únicas para cada pasajero
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Desde nuestro exclusivo servicio Suite hasta opciones más accesibles como Semi-Cama, diseñamos cada
                        experiencia pensando en tu comodidad. Con conexión a más de 30 destinos nacionales.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-orange-600">Suite</div>
                            <div className="text-sm text-gray-600">Máximo lujo</div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-blue-600">Cama</div>
                            <div className="text-sm text-gray-600">Gran confort</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-green-600">Semi-Cama</div>
                            <div className="text-sm text-gray-600">Accesible</div>
                        </div>
                    </div>
                    {/*
                    <button className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors">
                        Conocer servicios
                        <ArrowRight size={20} />
                    </button>
                    */}
                </div>
            </div>
        </section>
    )
}
