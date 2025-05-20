export default function Testimonials() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-10">Opiniones de nuestros pasajeros</h2>
                <div className="space-y-8">
                    <blockquote className="italic text-gray-700 border-l-4 border-orange-400 pl-4">
                        “Viajé de Salta a Buenos Aires en suite. Realmente un lujo, muy puntuales y cómodos.”
                        <footer className="mt-2 text-sm text-gray-500">— Luciana Gómez</footer>
                    </blockquote>
                    <blockquote className="italic text-gray-700 border-l-4 border-orange-400 pl-4">
                        “Mandé encomiendas a Chaco y llegaron en menos de 48hs. ¡Excelente servicio!”
                        <footer className="mt-2 text-sm text-gray-500">— Martín Cáceres</footer>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}
