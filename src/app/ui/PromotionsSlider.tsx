'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

interface Promotion {
    title: string
    description: string
    highlight?: string
    extra?: string
}

const promotions: Promotion[] = [
    {
        highlight: 'OFERTA EXCLUSIVA',
        title: '30% OFF en destinos seleccionados',
        description: 'Con todos los medios de pago.',
        extra: 'Solo por tiempo limitado.',
    },
    {
        highlight: 'NUEVO SERVICIO',
        title: 'Suite 8x2 con máximo confort',
        description: 'Butacas reclinables 180º, catering y atención personalizada.',
        extra: 'Descubrilo en viajes desde Buenos Aires a Tucumán.',
    },
    {
        highlight: 'PROMOCIÓN BANCARIA',
        title: '20% de descuento con tarjetas VISA',
        description: 'Pagá en cuotas sin interés.',
        extra: 'Válido hasta el 30 de junio.',
    },
]

export default function PromotionsSlider() {
    return (
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-r from-orange-50 via-white to-orange-50 text-gray-800">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >
                {promotions.map((promo, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center justify-center text-center py-12 px-6 md:py-20 md:px-12 h-[300px] md:h-[400px]">
                            {promo.highlight && (
                                <p className="uppercase text-sm md:text-base text-orange-600 font-bold mb-3 tracking-widest">
                                    {promo.highlight}
                                </p>
                            )}
                            <h3 className="text-2xl md:text-4xl font-extrabold mb-3 text-gray-900">
                                {promo.title}
                            </h3>
                            <p className="text-base md:text-lg text-gray-700 mb-1">{promo.description}</p>
                            {promo.extra && (
                                <p className="text-sm md:text-base text-gray-500 italic">{promo.extra}</p>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
