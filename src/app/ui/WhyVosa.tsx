'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Bus from "@/app/ui/icons/Bus"
import Route from "@/app/ui/icons/Route"
import Package from "@/app/ui/icons/Package"
import Headset from "@/app/ui/icons/Headset"

gsap.registerPlugin(ScrollTrigger)

export default function WhyVosa() {
    const sectionRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const elements = sectionRef.current?.querySelectorAll('div > div');
            if (elements && elements.length > 0) {
                gsap.fromTo(
                    elements,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        stagger: 0.2,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 85%',
                        },
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-10">¿Por qué elegir Vosa?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <Bus />
                        <h3 className="font-semibold text-lg">Flota moderna</h3>
                        <p className="text-sm text-gray-600">Unidades nuevas y seguras para mayor confort.</p>
                    </div>
                    <div>
                        <Route />
                        <h3 className="font-semibold text-lg">Cobertura nacional</h3>
                        <p className="text-sm text-gray-600">Más de 200 destinos en todo el país.</p>
                    </div>
                    <div>
                        <Package />
                        <h3 className="font-semibold text-lg">Seguimiento de carga</h3>
                        <p className="text-sm text-gray-600">Trazabilidad de tus encomiendas.</p>
                    </div>
                    <div>
                        <Headset />
                        <h3 className="font-semibold text-lg">Atención 24 hs</h3>
                        <p className="text-sm text-gray-600">Soporte constante en todas nuestras rutas.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
