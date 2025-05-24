'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Stats() {
    const sectionRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (sectionRef.current) {
                gsap.fromTo(
                    sectionRef.current.querySelectorAll('div > h3'),
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        stagger: 0.2,
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
        <section ref={sectionRef} className="bg-gray-100 py-16">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 text-center gap-10">
                <div>
                    <h3 className="text-5xl font-bold text-orange-600">+200</h3>
                    <p className="mt-2 text-gray-700">Destinos en todo el país</p>
                </div>
                <div>
                    <h3 className="text-5xl font-bold text-orange-600">+25 años</h3>
                    <p className="mt-2 text-gray-700">De experiencia en transporte</p>
                </div>
                <div>
                    <h3 className="text-5xl font-bold text-orange-600">+300K</h3>
                    <p className="mt-2 text-gray-700">Pasajeros transportados</p>
                </div>
            </div>
        </section>
    )
}
