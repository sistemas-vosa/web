'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
    const serviceRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            serviceRefs.current.forEach((el, i) => {
                if (el) {
                    gsap.fromTo(
                        el,
                        { opacity: 0, y: 60 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            delay: i * 0.2,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: el,
                                start: 'top 80%',
                            },
                        }
                    )
                }
            })
        })

        return () => ctx.revert()
    }, [])

    const services = [
        {
            title: 'Servicio Suite',
            description:
                'Un servicio exclusivo con butacas que se reclinan 180°, catering a bordo, bebidas, mantas, almohadas y atención personalizada. Viajes directos entre Buenos Aires, Santiago del Estero y Tucumán.',
            image: '/img/services/service-suite.jpg',
        },
        {
            title: 'Servicio Cama',
            description:
                'Butacas reclinables hasta 160°, comidas a bordo, bebidas, climatización, mantas y almohadas. Conectamos Buenos Aires con ciudades como La Banda, Tucumán, Salta y Santiago del Estero.',
            image: '/img/services/service-cama.jpg',
        },
        {
            title: 'Servicio Semi-Cama',
            description:
                'Una opción accesible y cómoda. Butacas reclinables 145°, aire acondicionado, música, TV y una amplia red de destinos en todo el país.',
            image: '/img/services/service-semicama.jpg',
        },
    ]

    return (
        <section className="bg-gray-50 text-gray-800 py-20 px-4 md:px-6 max-w-7xl mx-auto space-y-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">
                Nuestros Servicios
            </h2>

            {services.map((service, index) => (
                <div
                    key={index}
                    ref={(el) => {
                        serviceRefs.current[index] = el
                    }}
                    className={`flex flex-col md:flex-row ${
                        index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                    } items-center gap-8`}
                >
                    <div className="w-full md:w-5/12">
                        <Image
                            src={service.image}
                            alt={service.title}
                            width={500}
                            height={350}
                            className="rounded-lg shadow-lg object-cover w-full h-auto"
                        />
                    </div>
                    <div className="w-full md:w-7/12 space-y-4">
                        <h3 className="text-2xl md:text-3xl font-semibold text-orange-500">
                            {service.title}
                        </h3>
                        <p className="text-base md:text-lg text-gray-700">{service.description}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}
