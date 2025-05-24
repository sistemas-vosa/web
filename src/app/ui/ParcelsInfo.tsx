'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function ParcelsInfo() {
    const sectionRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (sectionRef.current) {
                gsap.fromTo(
                    sectionRef.current,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 80%',
                        },
                    }
                )
            }
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="bg-white text-gray-800 py-20 px-4 md:px-6 max-w-7xl mx-auto"
        >
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-5/12">
                    <Image
                        src="/img/parcels/parcels-service.jpeg"
                        alt="Servicio de Encomiendas"
                        width={500}
                        height={350}
                        className="rounded-lg shadow-lg w-full object-cover"
                    />
                </div>

                <div className="w-full md:w-7/12 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
                        Servicio de Encomiendas
                    </h2>
                    <p className="text-lg">
                        La seriedad, la seguridad y el seguimiento de la carga son nuestros pilares. Contamos con
                        unidades modernas, depósitos controlados y una red conectada las 24 hs.
                    </p>
                    <ul className="list-disc list-inside text-base text-gray-700 space-y-2">
                        <li>Cuentas corporativas</li>
                        <li>Retiro y entrega a domicilio</li>
                        <li>Pago en destino</li>
                        <li>Seguro adicional de carga</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
