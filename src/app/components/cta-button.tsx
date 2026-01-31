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
		'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm tracking-wide transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60'
	const primary =
		'border border-emerald-400/20 bg-emerald-400/10 text-emerald-200 hover:bg-emerald-400/15 hover:border-emerald-400/30'
	const ghost = 'border border-white/10 bg-white/[0.03] text-neutral-200 hover:bg-white/[0.06]'
	return (
		<Link href={href} className={`${base} ${variant === 'primary' ? primary : ghost}`}>
			{children}
		</Link>
	)
}
