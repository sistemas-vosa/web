'use client'

import { useEffect, useRef } from 'react'
import gsap from '@/lib/gsap'
import Image from "next/image";

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
                <Image
                    src={"/img/service-suite.jpg"}
                    width={800}
                    height={600}
                    alt={"Servicio Suite"}
                    className="w-full md:w-1/2 rounded-lg object-cover"/>
                <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-semibold">Servicio Suite</h3>
                    <p>
                        Un servicio exclusivo con butacas que se reclinan 180°, servicio de catering, bebidas, mantas, almohadas y atención a bordo. Viajes directos sin paradas uniendo Buenos Aires, Santiago del Estero y Tucumán.
                    </p>
                </div>
            </div>

            {/* Servicio Cama */}
            <div ref={sectionRefs[1]} className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white p-6 rounded-lg shadow-md">
                <Image
                    src={"/img/service-cama.jpg"}
                    width={800}
                    height={600}
                    alt={"Servicio Cama"}
                    className="w-full md:w-1/2 rounded-lg object-cover"/>
                <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-semibold">Servicio Cama</h3>
                    <p>
                        Butacas con reclinación de 160°, servicio de comida a bordo y atención personalizada. Conectamos ciudades como La Banda, Tucumán, Salta y Santiago del Estero con Buenos Aires y otras provincias.
                    </p>
                </div>
            </div>

            {/* Servicio Semi-Cama */}
            <div ref={sectionRefs[2]} className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-lg shadow-md">
                <Image
                    src={"/img/service-semicama.jpg"}
                    width={800}
                    height={600}
                    alt={"Servicio Semi-Cama"}
                    className="w-full md:w-1/2 rounded-lg object-cover"/>
                <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-semibold">Servicio Semi-Cama</h3>
                    <p>
                        Opciones accesibles para viajar cómodamente a más de 200 destinos en todo el país. Unidades con butacas reclinables, climatización, TV y música funcional.
                    </p>
                </div>
            </div>
        </section>
    )
}
