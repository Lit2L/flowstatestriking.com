// hooks/useLenisScrollTo.ts
'use client'

import { useCallback } from 'react'
import { scrollToTarget } from '@/lib/lenis'

/**
 * useLenisScrollTo
 * Usage:
 *   const scrollTo = useLenisScrollTo();
 *   scrollTo("#pricing");
 *   scrollTo("top");
 */
export function useLenisScrollTo() {
	return useCallback(
		(
			target: string | HTMLElement,
			opts?: { offset?: number; immediate?: boolean; lock?: boolean }
		) => {
			scrollToTarget(target, opts)
		},
		[]
	)
}
