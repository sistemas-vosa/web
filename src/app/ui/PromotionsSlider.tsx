'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import Image from 'next/image'

interface PromotionImage {
    desktop: string
    mobile: string
}

const images: PromotionImage[] = [
    {
        desktop: '/img/slider/01-desktop.png',
        mobile: '/img/slider/01-mobile.png',
    }
    // Agregá más promociones si querés
]

export default function PromotionsSlider() {
    return (
        <div className="w-screen h-[300px] md:h-[400px] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
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
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[300px] md:h-[400px]">
                            {/* Mobile image */}
                            <Image
                                src={img.mobile}
                                alt={`Promoción ${index + 1} mobile`}
                                fill
                                className="object-cover md:hidden"
                                priority
                            />
                            {/* Desktop image */}
                            <Image
                                src={img.desktop}
                                alt={`Promoción ${index + 1} desktop`}
                                fill
                                className="object-cover hidden md:block"
                                priority
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
