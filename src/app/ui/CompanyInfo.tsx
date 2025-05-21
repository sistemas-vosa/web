'use client'

import { useEffect, useRef } from 'react'
import gsap from '@/lib/gsap'
import Image from 'next/image'

export default function CompanyInfo() {
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
        <section className="bg-white text-gray-800 py-16 px-4 space-y-16 max-w-7xl mx-auto">
            {/* Bloque 1 */}
            <div ref={sectionRefs[0]} className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 max-h-[250px] overflow-hidden rounded-lg shadow-md">
                    <Image
                        src="/img/company/company-1997.jpg"
                        alt="Historia Vosa"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold">Desde 1997, conectando destinos</h2>
                    <p>
                        Desde nuestros comienzos, tenemos la iniciativa y la proyección de progreso constante,
                        incorporando nuevas unidades y logrando la máxima expresión de confort, calidad y seguridad.
                    </p>
                </div>
            </div>

            {/* Bloque 2 */}
            <div ref={sectionRefs[1]} className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2 max-h-[250px] overflow-hidden rounded-lg shadow-md">
                    <Image
                        src="/img/company/company-safety.jpg"
                        alt="Seguridad Vosa"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold">Compromiso con la seguridad y tecnología</h2>
                    <p>
                        Capacitación continua y flota moderna nos posicionan como líderes en transporte seguro.
                        Buscamos certificar la norma IRAM 3810 para ofrecer lo mejor a nuestros usuarios.
                    </p>
                </div>
            </div>

            {/* Bloque 3 */}
            <div ref={sectionRefs[2]} className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 max-h-[250px] overflow-hidden rounded-lg shadow-md">
                    <Image
                        src="/img/company/company-services.jpg"
                        alt="Servicios Vosa"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold">Nuestros servicios</h2>
                    <p>
                        Servicios Suite, Cama y Semi-Cama en más de 200 destinos. Comodidad y atención personalizada en cada viaje.
                    </p>
                </div>
            </div>
        </section>
    )
}
