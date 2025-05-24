'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

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
                        { opacity: 0, y: 60 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            delay: i * 0.2,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: el,
                                start: 'top 80%',
                            },
                        }
                    )
                }
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="bg-white text-gray-800 py-20 px-4 md:px-6 max-w-7xl mx-auto space-y-20"
        >
            {/* BLOQUE 1 */}
            <div
                ref={(el) => (blocksRef.current[0] = el)}
                className="flex flex-col md:flex-row items-center gap-8"
            >
                <Image
                    src="/img/company/company-1997.jpg"
                    alt="Historia de Vosa"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full md:w-1/2 object-cover"
                />
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
                        Desde 1997, conectando destinos
                    </h2>
                    <p className="text-lg">
                        Desde nuestros comienzos, tenemos la iniciativa y la proyección de progreso constante,
                        incorporando nuevas unidades a nuestra flota y manteniéndolas con los más altos estándares
                        de mantenimiento.
                    </p>
                    <p className="text-lg">
                        Nuestra prioridad: confort, seguridad y calidad en cada viaje.
                    </p>
                </div>
            </div>

            {/* BLOQUE 2 */}
            <div
                ref={(el) => (blocksRef.current[1] = el)}
                className="flex flex-col md:flex-row-reverse items-center gap-8"
            >
                <Image
                    src="/img/company/company-safety.jpg"
                    alt="Seguridad vial"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full md:w-1/2 object-cover"
                />
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
                        Comprometidos con la seguridad
                    </h2>
                    <p className="text-lg">
                        Contamos con uno de los planes de capacitación más exigentes para conductores y una flota
                        que busca cumplir los más altos estándares de seguridad vial, como la certificación IRAM 3810.
                    </p>
                    <p className="text-lg">
                        Incorporamos tecnología y plataformas 8x2 de última generación.
                    </p>
                </div>
            </div>

            {/* BLOQUE 3 */}
            <div
                ref={(el) => (blocksRef.current[2] = el)}
                className="flex flex-col md:flex-row items-center gap-8"
            >
                <Image
                    src="/img/company/company-services.jpg"
                    alt="Servicios de Vosa"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full md:w-1/2 object-cover"
                />
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
                        Servicios para cada necesidad
                    </h2>
                    <p className="text-lg">
                        Ofrecemos servicios Suite, Cama y Semi-Cama con atención a bordo, climatización, mantas,
                        catering y conexión nacional con más de 200 destinos.
                    </p>
                    <p className="text-lg">
                        Elegí el servicio ideal para tu próximo viaje.
                    </p>
                </div>
            </div>
        </section>
    )
}
