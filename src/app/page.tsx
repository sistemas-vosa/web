import Logo from "./ui/Layout/Logo";


export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50 text-center text-gray-800">
            <main className="flex flex-col gap-8 row-start-2 items-center max-w-xl">
                <Logo />
                <h1 className="text-3xl font-semibold text-red-500">Web en mantenimiento</h1>
                <p className="text-lg text-gray-600">
                    Estamos realizando mejoras para brindarte una mejor experiencia.
                    <br />
                    Vuelve a visitarnos en breve. ¡Gracias por tu paciencia!
                </p>
            </main>
            <footer className="row-start-3 text-sm text-gray-500 text-center">
                &copy; {new Date().getFullYear()} Vosa. Todos los derechos reservados.
            </footer>
        </div>
    );
}
