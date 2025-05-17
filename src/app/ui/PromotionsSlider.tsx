'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

interface Promotion {
    title: string
    description: string
}

const promotions: Promotion[] = [
    {
        title: '20% de descuento en pasajes a Tucumán',
        description: 'Válido hasta el 30 de junio.',
    },
    {
        title: 'Nuevo servicio Suite 8x2',
        description: 'Máximo confort en tu viaje.',
    },
]

export default function PromotionsSlider() {
    return (
        <div className="bg-white/80 text-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={true}
            >
                {promotions.map((promo, index) => (
                    <SwiperSlide key={index}>
                        <div className="p-4">
                            <p className="text-sm uppercase text-orange-500 mb-2">Promoción</p>
                            <h3 className="text-lg font-semibold mb-1">{promo.title}</h3>
                            <p className="text-sm">{promo.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
