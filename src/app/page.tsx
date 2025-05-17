'use client'

import { useEffect } from 'react'
import { initLenis } from '@/lib/lenis'
import Hero from '@/app/ui/Hero'
import CompanyInfo from '@/app/ui/CompanyInfo'
import Services from '@/app/ui/Services'
import ParcelsInfo from '@/app/ui/ParcelsInfo'

export default function Home() {
    useEffect(() => {
        initLenis()
    }, [])

    return (
        <main className="bg-white text-gray-800">
            <Hero />
            <CompanyInfo />
            <Services />
            <ParcelsInfo />
        </main>
    )
}
