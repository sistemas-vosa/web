'use client'

import { useEffect } from 'react'
import { initLenis } from '@/lib/lenis'
import Hero from "./ui/Hero"

export default function Home() {
    useEffect(() => {
        initLenis()
    }, [])

    return (
        <main className="bg-white text-gray-800">
            <Hero />
        </main>
    )
}

