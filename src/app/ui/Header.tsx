'use client'

import Image from 'next/image'
import { Phone } from 'lucide-react'

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200">
            <div className="mx-auto max-w-screen-lg flex items-center justify-center md:justify-between px-6 py-4">
                {/* Logo centrado en mobile */}
                <div className="flex items-center gap-3">
                    <Image src="/img/logo.png" alt="Vosa Logo" width={150} height={150} />
                </div>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
                    <a
                        href="tel:08003338672"
                        className="flex items-center gap-2 hover:text-orange-500 transition"
                    >
                        <Phone size={18} />
                        0800-333-8672
                    </a>
                </nav>
            </div>
        </header>
    )
}
