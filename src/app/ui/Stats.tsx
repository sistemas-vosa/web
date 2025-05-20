export default function Stats() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 text-center gap-10">
                <div>
                    <h3 className="text-5xl font-bold text-orange-600">+200</h3>
                    <p className="mt-2 text-gray-700">Destinos en todo el país</p>
                </div>
                <div>
                    <h3 className="text-5xl font-bold text-orange-600">+25 años</h3>
                    <p className="mt-2 text-gray-700">De experiencia en transporte</p>
                </div>
                <div>
                    <h3 className="text-5xl font-bold text-orange-600">+300K</h3>
                    <p className="mt-2 text-gray-700">Pasajeros transportados</p>
                </div>
            </div>
        </section>
    )
}
