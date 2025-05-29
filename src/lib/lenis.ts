import Lenis from "@studio-freight/lenis"

export const initLenis = () => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        // smoothTouch: false, // Eliminado porque no existe en LenisOptions
        touchMultiplier: 2,
        infinite: false,
        lerp: 0.1
    })

    // Si no usas los parámetros, omítelos
    lenis.on("scroll", () => {
        // console.log({ scroll, limit, velocity, direction, progress })
    })

    function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}