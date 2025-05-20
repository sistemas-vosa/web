'use client'

import { useEffect, useRef } from 'react'
import gsap from '@/lib/gsap'
import Image from 'next/image'

export default function Services() {
    const sectionRefs = [useRef(null), useRef(null), useRef(null)]

    useEffect(() => {
        sectionRefs.forEach(ref => {
            if (ref.current) {
                gsap.fromTo(
                    ref.current,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
                )
            }
        })
    }, [])

    return (
        <section className="bg-gray-50 text-gray-800 py-16 px-4 space-y-16 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>

            {/* Servicio Suite */}
            <div ref={sectionRefs[0]} className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-lg shadow-md">
                <div className="md:w-1/2 max-h-[240px] overflow-hidden rounded-lg">
                    <Image
                        src="/img/services/service-suite.jpg"
                        width={600}
                        height={400}
                        alt="Servicio Suite"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-semibold">Servicio Suite</h3>
                    <p>
                        Butacas 180°, catering, bebidas y atención a bordo. Viajes directos Buenos Aires – Tucumán – Santiago del Estero.
                    </p>
                </div>
            </div>

            {/* Servicio Cama */}
            <div ref={sectionRefs[1]} className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white p-6 rounded-lg shadow-md">
                <div className="md:w-1/2 max-h-[240px] overflow-hidden rounded-lg">
                    <Image
                        src="/img/services/service-cama.jpg"
                        width={600}
                        height={400}
                        alt="Servicio Cama"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-semibold">Servicio Cama</h3>
                    <p>
                        Reclinación de 160°, comida a bordo y ciudades conectadas del norte al centro del país.
                    </p>
                </div>
            </div>

            {/* Servicio Semi-Cama */}
            <div ref={sectionRefs[2]} className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-lg shadow-md">
                <div className="md:w-1/2 max-h-[240px] overflow-hidden rounded-lg">
                    <Image
                        src="/img/services/service-semicama.jpg"
                        width={600}
                        height={400}
                        alt="Servicio Semi-Cama"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-semibold">Servicio Semi-Cama</h3>
                    <p>
                        Comodidad accesible para más de 200 destinos con butacas 145°, climatización, TV y música.
                    </p>
                </div>
            </div>
        </section>
    )
}
