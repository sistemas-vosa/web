"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules"
import { Star, Quote } from "lucide-react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"

gsap.registerPlugin(ScrollTrigger)

interface Testimonial {
    id: number
    name: string
    location: string
    service: string
    rating: number
    comment: string
    avatar: string
    route: string
    date: string
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Luciana Gómez",
        location: "Salta",
        service: "Suite",
        rating: 5,
        comment:
            "Viajé de Salta a Buenos Aires en servicio Suite y fue una experiencia increíble. Las butacas son súper cómodas, el catering excelente y la atención del personal impecable. Realmente se siente como viajar en primera clase.",
        avatar: "/img/testimonials/avatar-1.jpg",
        route: "Salta → Buenos Aires",
        date: "Marzo 2024",
    },
    {
        id: 2,
        name: "Martín Cáceres",
        location: "Resistencia, Chaco",
        service: "Encomiendas",
        rating: 5,
        comment:
            "Mandé una encomienda urgente a Chaco y llegó en menos de 48 horas, tal como me prometieron. El seguimiento online es muy útil y el precio súper competitivo. Sin dudas vuelvo a elegir Vosa.",
        avatar: "/img/testimonials/avatar-2.jpg",
        route: "Buenos Aires → Resistencia",
        date: "Febrero 2024",
    },
    {
        id: 3,
        name: "Ana María Rodríguez",
        location: "Tucumán",
        service: "Cama",
        rating: 5,
        comment:
            "Viajo seguido por trabajo y Vosa siempre cumple. Los horarios son puntuales, los micros están impecables y el servicio Cama es muy cómodo para viajes largos. El personal siempre muy amable y profesional.",
        avatar: "/img/testimonials/avatar-3.jpg",
        route: "Buenos Aires → Tucumán",
        date: "Enero 2024",
    },
    {
        id: 4,
        name: "Carlos Mendoza",
        location: "Santiago del Estero",
        service: "Semi-Cama",
        rating: 4,
        comment:
            "Excelente relación precio-calidad. El servicio Semi-Cama es muy bueno para el precio que pagás. Viajé cómodo, llegué a horario y el micro estaba en perfectas condiciones. Recomendable 100%.",
        avatar: "/img/testimonials/avatar-4.jpg",
        route: "Santiago del Estero → Buenos Aires",
        date: "Abril 2024",
    },
    {
        id: 5,
        name: "María Elena Vega",
        location: "La Banda",
        service: "Suite",
        rating: 5,
        comment:
            "Fue mi primera vez viajando en Suite y superó todas mis expectativas. La comida deliciosa, las butacas súper cómodas y hasta pude dormir perfecto. Vale cada peso invertido. Una experiencia de lujo.",
        avatar: "/img/testimonials/avatar-5.jpg",
        route: "La Banda → Buenos Aires",
        date: "Mayo 2024",
    },
    {
        id: 6,
        name: "Roberto Silva",
        location: "Buenos Aires",
        service: "Encomiendas",
        rating: 5,
        comment:
            "Envío encomiendas regularmente por mi negocio y Vosa nunca me falló. Siempre llegan en tiempo y forma, el seguro adicional me da tranquilidad y el servicio de retiro a domicilio es muy conveniente.",
        avatar: "/img/testimonials/avatar-6.jpg",
        route: "Buenos Aires → Interior",
        date: "Marzo 2024",
    },
]

export default function Testimonials() {
    const sectionRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (sectionRef.current) {
                gsap.fromTo(
                    sectionRef.current.querySelector("h2"),
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 85%",
                        },
                    },
                )
            }
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star key={i} size={16} className={`${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
        ))
    }

    return (
        <section ref={sectionRef} className="bg-gradient-to-br from-gray-50 to-white py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Lo que dicen nuestros <span className="text-orange-600">pasajeros</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Miles de clientes satisfechos respaldan nuestra calidad de servicio. Leé sus experiencias reales viajando
                        con Vosa.
                    </p>
                </div>

                {/* Testimonials Slider */}
                <div className="relative">
                    <Swiper
                        modules={[Autoplay, Pagination, EffectCoverflow]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            bulletClass: "swiper-pagination-bullet !bg-orange-500",
                            bulletActiveClass: "swiper-pagination-bullet-active !bg-orange-600",
                        }}
                        effect="coverflow"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="pb-12"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                                    {/* Quote Icon */}
                                    <div className="text-orange-500 mb-4">
                                        <Quote size={32} />
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center gap-1 mb-4">
                                        {renderStars(testimonial.rating)}
                                        <span className="ml-2 text-sm text-gray-600">({testimonial.rating}/5)</span>
                                    </div>

                                    {/* Comment */}
                                    <p className="text-gray-700 leading-relaxed mb-6 italic">&quot;{testimonial.comment}&quot;</p>

                                    {/* User Info */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-600">{testimonial.location}</p>
                                        </div>
                                    </div>

                                    {/* Service Info */}
                                    <div className="mt-4 pt-4 border-t border-gray-200">
                                        <div className="flex justify-between items-center text-sm">
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">
                        {testimonial.service}
                      </span>
                                            <span className="text-gray-500">{testimonial.date}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-2">{testimonial.route}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="text-3xl font-bold text-orange-600 mb-2">4.8/5</div>
                        <div className="text-gray-600">Calificación promedio</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
                        <div className="text-gray-600">Clientes satisfechos</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="text-3xl font-bold text-orange-600 mb-2">15K+</div>
                        <div className="text-gray-600">Reseñas positivas</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                        <div className="text-gray-600">Recomiendan Vosa</div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">¿Querés ser parte de estas historias?</h3>
                        <p className="mb-6 text-orange-100">
                            Viví tu propia experiencia Vosa y descubrí por qué somos la elección preferida de miles de pasajeros
                        </p>
                        <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                            Reservar mi viaje
                        </button>
                    </div>
                </div>
            </div>

            {/* Custom pagination styles */}
            <style jsx global>{`
        .swiper-pagination {
          bottom: 0 !important;
        }
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
        }
      `}</style>
        </section>
    )
}
