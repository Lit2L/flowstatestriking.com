// lib/lenis.ts
// Tiny, safe Lenis singleton + helpers so any component can call scrollTo()

import Lenis from 'lenis'

declare global {
	// eslint-disable-next-line no-var
	var __lenis: Lenis | undefined
}

export function getLenis(): Lenis | null {
	if (typeof window === 'undefined') return null
	return globalThis.__lenis ?? null
}

export function setLenis(instance: Lenis) {
	if (typeof window === 'undefined') return
	globalThis.__lenis = instance
}

export function destroyLenis() {
	if (typeof window === 'undefined') return
	globalThis.__lenis?.destroy()
	globalThis.__lenis = undefined
}

export function scrollToTarget(
	target: string | HTMLElement,
	opts?: { offset?: number; immediate?: boolean; lock?: boolean }
) {
	const lenis = getLenis()
	const offset = opts?.offset ?? 0
	const immediate = opts?.immediate ?? false
	const lock = opts?.lock ?? false

	if (!lenis) {
		// Fallback: native
		if (typeof target === 'string') {
			const id = target.startsWith('#') ? target.slice(1) : target
			const el = document.getElementById(id)
			el?.scrollIntoView({ behavior: immediate ? 'auto' : 'smooth', block: 'start' })
		} else {
			target.scrollIntoView({ behavior: immediate ? 'auto' : 'smooth', block: 'start' })
		}
		return
	}

	let el: HTMLElement | null = null

	if (typeof target === 'string') {
		if (target === 'top') {
			lenis.scrollTo(0, { offset, immediate, lock })
			return
		}
		if (target.startsWith('#')) {
			el = document.getElementById(target.slice(1))
		} else {
			el = document.getElementById(target)
		}
	} else {
		el = target
	}

	if (!el) return
	lenis.scrollTo(el, { offset, immediate, lock })
}
