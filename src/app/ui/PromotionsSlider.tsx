'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

interface Promotion {
    image: string
    title: string
    description: string
}

const promotions: Promotion[] = [
    {
        image: '/img/promo-tucuman.jpg',
        title: '20% de descuento en pasajes a Tucumán',
        description: 'Válido hasta el 30 de junio.',
    },
    {
        image: '/img/suite-8x2.jpg',
        title: 'Nuevo servicio Suite 8x2',
        description: 'Máximo confort en tu viaje.',
    },
]

export default function PromotionsSlider() {
    return (
        <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >
                {promotions.map((promo, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="w-full h-full bg-cover bg-center relative flex items-end"
                            style={{ backgroundImage: `url('${promo.image}')` }}
                        >
                            <div className="absolute inset-0 bg-black/50"></div>
                            <div className="relative z-10 p-6 text-white">
                                <p className="text-sm uppercase text-orange-400 mb-1">Promoción</p>
                                <h3 className="text-xl font-bold">{promo.title}</h3>
                                <p className="text-sm">{promo.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
