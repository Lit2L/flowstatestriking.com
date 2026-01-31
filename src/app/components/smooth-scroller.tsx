// components/SmoothScroller.tsx
'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * SmoothScroller
 * - Premium smooth scrolling using Lenis
 * - Respects prefers-reduced-motion
 * - Plays nicely with fixed navbar + scrollspy
 */
export default function SmoothScroller() {
	useEffect(() => {
		const prefersReducedMotion =
			window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false

		if (prefersReducedMotion) return

		const lenis = new Lenis({
			// Smooth but not “floaty”
			duration: 1.15,
			easing: (t: number) => 1 - Math.pow(1 - t, 3), // cubic-out
			smoothWheel: true,
			// smoothTouch: false, // keep touch native (feels more premium)
			wheelMultiplier: 0.9,
			touchMultiplier: 1,
			infinite: false
		})

		let rafId = 0
		const raf = (time: number) => {
			lenis.raf(time)
			rafId = requestAnimationFrame(raf)
		}
		rafId = requestAnimationFrame(raf)

		// Keep anchor jumps smooth (e.g., /#method)
		const onHashChange = () => {
			const id = window.location.hash.replace('#', '')
			if (!id) return
			const el = document.getElementById(id)
			if (!el) return
			// Use scroll-margin-top on your sections (already set via [data-scroll-section="true"])
			lenis.scrollTo(el, { offset: 0, immediate: false })
		}

		window.addEventListener('hashchange', onHashChange)

		// If you land on a hash directly (fresh load), scroll once after mount
		if (window.location.hash) {
			setTimeout(onHashChange, 50)
		}

		return () => {
			window.removeEventListener('hashchange', onHashChange)
			cancelAnimationFrame(rafId)
			lenis.destroy()
		}
	}, [])

	return null
}
