'use client'

import { useEffect, useRef } from 'react'
import gsap from '@/lib/gsap'
import Image from "next/image";

export default function ParcelsInfo() {
    const sectionRef = useRef(null)

    useEffect(() => {
        if (!sectionRef.current) return
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
        )
    }, [])

    return (
        <section ref={sectionRef} className="bg-white text-gray-800 py-16 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <Image
                    src={"/img/parcels-service.jpeg"}
                    width={800}
                    height={600}
                    alt={"Servicio de Encomiendas"}
                    className="w-full md:w-1/2 rounded-lg shadow-md" />
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold">Servicio de Encomiendas</h2>
                    <p>
                        La seriedad, la seguridad y el seguimiento de la carga son nuestros pilares. Contamos con unidades modernas, depósitos controlados y una red conectada las 24 hs.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
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
