'use client'

import { useEffect, useRef } from 'react'
import gsap from '@/lib/gsap'
import Image from "next/image";

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
                <Image
                    src={"/img/company-1997.jpg"}
                    width={800}
                    height={600}
                    alt={"Historia Vosa"}
                    className="w-full md:w-1/2 rounded-lg shadow-md" />
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold">Desde 1997, conectando destinos</h2>
                    <p>
                        Desde nuestros comienzos, tenemos la iniciativa y la proyección de progreso constante, incorporando nuevas unidades y logrando la máxima expresión de confort, calidad y seguridad en todos nuestros recorridos nacionales e internacionales.
                    </p>
                </div>
            </div>

            {/* Bloque 2 */}
            <div ref={sectionRefs[1]} className="flex flex-col md:flex-row-reverse items-center gap-8">
                <Image
                    src={"/img/company-safety.jpg"}
                    width={800}
                    height={600}
                    alt={"Seguridad Vosa"}
                    className="w-full md:w-1/2 rounded-lg shadow-md" />
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold">Compromiso con la seguridad y la tecnología</h2>
                    <p>
                        Contamos con un plan de Capacitación para conductores y una de las flotas más modernas y seguras. Avanzamos hacia la certificación IRAM 3810 de Seguridad Vial, renovando unidades y ofreciendo el mejor mantenimiento del mercado.
                    </p>
                </div>
            </div>

            {/* Bloque 3 */}
            <div ref={sectionRefs[2]} className="flex flex-col md:flex-row items-center gap-8">
                <Image
                    src={"/img/company-services.jpg"}
                    width={800}
                    height={600}
                    alt={"Servicios Vosa"}
                    className="w-full md:w-1/2 rounded-lg shadow-md" />
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold">Nuestros servicios</h2>
                    <p>
                        Ofrecemos servicios Suite, Cama y Semi-Cama, conectando más de 200 destinos en todo el país. Nuestras unidades cuentan con climatización, mantas, almohadas, servicio de catering y atención personalizada a bordo.
                    </p>
                </div>
            </div>
        </section>
    )
}
