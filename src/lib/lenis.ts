'use client'
import Lenis from '@studio-freight/lenis'

export const initLenis = () => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.5 * t),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true
    })

    function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}
