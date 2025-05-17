'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import Image from "next/image";

const images: string[] = [
    '/img/01.png',
    '/img/02.png',
    // Podés agregar más imágenes si querés
]

export default function PromotionsSlider() {
    return (
        <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={image}
                            width={800}
                            height={400}
                            alt={`Promoción ${index + 1}`}
                            className="w-full h-full object-cover" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
