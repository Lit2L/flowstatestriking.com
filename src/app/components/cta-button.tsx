'use client'

import Link from 'next/link'

export default function CTAButton({
	href,
	children,
	variant = 'primary'
}: {
	href: string
	children: React.ReactNode
	variant?: 'primary' | 'ghost'
}) {
	const base =
		'inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold tracking-wide transition ' +
		'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60'

	// Primary = real action (solid)
	const primary =
		'bg-emerald-300 text-neutral-950 hover:bg-emerald-200 ' +
		'shadow-[0_18px_50px_rgba(16,185,129,0.18)]'

	// Ghost = secondary action (not a pill)
	const ghost = 'border border-white/12 bg-white/[0.02] text-neutral-200 hover:bg-white/[0.06]'

	return (
		<Link href={href} className={`${base} ${variant === 'primary' ? primary : ghost}`}>
			{children}
		</Link>
	)
}
