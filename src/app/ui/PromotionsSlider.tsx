"use client"

import type React from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination } from "swiper/modules"
import { Percent, Gift, CreditCard, Clock, ArrowRight } from "lucide-react"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

interface Promotion {
    id: number
    title: string
    description: string
    highlight?: string
    extra?: string
    icon: React.ReactNode
    bgGradient: string
    ctaText: string
    discount?: string
}

const promotions: Promotion[] = [
    {
        id: 1,
        highlight: "OFERTA EXCLUSIVA",
        title: "30% OFF en destinos seleccionados",
        description: "Con todos los medios de pago. Viajá más por menos.",
        extra: "Solo por tiempo limitado - ¡No te lo pierdas!",
        icon: <Percent className="text-white" size={32} />,
        bgGradient: "from-orange-500 via-red-500 to-pink-500",
        ctaText: "Ver Ofertas",
        discount: "30%",
    },
    {
        id: 2,
        highlight: "NUEVO SERVICIO",
        title: "Suite 8x2 con máximo confort",
        description: "Butacas reclinables 180°, catering gourmet y atención VIP.",
        extra: "Disponible en rutas Buenos Aires - Tucumán - Salta",
        icon: <Gift className="text-white" size={32} />,
        bgGradient: "from-blue-600 via-purple-600 to-indigo-600",
        ctaText: "Conocer Más",
    },
    {
        id: 3,
        highlight: "PROMOCIÓN BANCARIA",
        title: "6 cuotas sin interés con VISA",
        description: "Pagá tu viaje en cuotas y viajá ahora.",
        extra: "Válido hasta el 30 de junio - Todos los servicios",
        icon: <CreditCard className="text-white" size={32} />,
        bgGradient: "from-green-500 via-teal-500 to-cyan-500",
        ctaText: "Aprovechar",
    },
    {
        id: 4,
        highlight: "ÚLTIMA HORA",
        title: "Salidas express disponibles",
        description: "Viajes de último momento con descuentos especiales.",
        extra: "Consultá disponibilidad llamando al 0800-333-8672",
        icon: <Clock className="text-white" size={32} />,
        bgGradient: "from-yellow-500 via-orange-500 to-red-500",
        ctaText: "Consultar",
    },
]

export default function PromotionsSlider() {
    return (
        <div className="w-full bg-gradient-to-r from-gray-50 via-white to-gray-50">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                effect="fade"
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet !bg-orange-500",
                    bulletActiveClass: "swiper-pagination-bullet-active !bg-orange-600",
                }}
                className="h-[350px] md:h-[400px]"
            >
                {promotions.map((promo) => (
                    <SwiperSlide key={promo.id}>
                        <div className={`relative h-full bg-gradient-to-br ${promo.bgGradient} overflow-hidden`}>
                            {/* Patrón de fondo */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
                                <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
                                <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
                            </div>

                            <div className="relative h-full flex items-center justify-center px-6 md:px-12">
                                <div className="text-center text-white max-w-4xl">
                                    {/* Icono y descuento */}
                                    <div className="flex items-center justify-center gap-4 mb-4">
                                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">{promo.icon}</div>
                                        {promo.discount && (
                                            <div className="bg-white text-gray-800 rounded-full px-6 py-2 font-bold text-2xl">
                                                {promo.discount} OFF
                                            </div>
                                        )}
                                    </div>

                                    {/* Highlight */}
                                    {promo.highlight && (
                                        <p className="uppercase text-sm md:text-base font-bold mb-3 tracking-widest bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 inline-block">
                                            {promo.highlight}
                                        </p>
                                    )}

                                    {/* Título */}
                                    <h3 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">{promo.title}</h3>

                                    {/* Descripción */}
                                    <p className="text-lg md:text-xl mb-2 text-white/90">{promo.description}</p>

                                    {/* Extra info */}
                                    {promo.extra && <p className="text-sm md:text-base text-white/80 mb-6 italic">{promo.extra}</p>}

                                    {/* CTA Button */}
                                    <button className="bg-white text-gray-800 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                        {promo.ctaText}
                                        <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Estilos personalizados para la paginación */}
            <style jsx global>{`
        .swiper-pagination {
          bottom: 20px !important;
        }
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
        }
      `}</style>
        </div>
    )
}
