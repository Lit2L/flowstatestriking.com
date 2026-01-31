// components/PremiumNavbar.tsx
'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItem = { label: string; href: string }

const NAV_ITEMS: NavItem[] = [
	{ label: 'Method', href: '/method' },
	{ label: 'Training', href: '/training' },
	{ label: 'Pricing', href: '/pricing' },
	{ label: 'About', href: '/about' }
]

function cx(...classes: Array<string | false | undefined | null>) {
	return classes.filter(Boolean).join(' ')
}

function usePrefersReducedMotion() {
	const [reduced, setReduced] = useState(false)
	useEffect(() => {
		const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
		const onChange = () => setReduced(mq.matches)
		onChange()
		mq.addEventListener?.('change', onChange)
		return () => mq.removeEventListener?.('change', onChange)
	}, [])
	return reduced
}

export default function PremiumNavbar({
	brand = 'Flow State Striking',
	ctaLabel = 'Assessment',
	ctaHref = '/assessment'
}: {
	brand?: string
	ctaLabel?: string
	ctaHref?: string
}) {
	const pathname = usePathname()
	const prefersReducedMotion = usePrefersReducedMotion()

	const [menuOpen, setMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const lastActiveRef = useRef<HTMLAnchorElement | null>(null)

	const items = useMemo(() => NAV_ITEMS, [])

	// Subtle "premium" scroll state: glass + border when user scrolls
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8)
		onScroll()
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	// Close mobile menu on route change
	useEffect(() => {
		setMenuOpen(false)
	}, [pathname])

	// Lock body scroll when mobile menu is open
	useEffect(() => {
		if (!menuOpen) return
		const original = document.body.style.overflow
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = original
		}
	}, [menuOpen])

	// ESC to close
	useEffect(() => {
		if (!menuOpen) return
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setMenuOpen(false)
		}
		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
	}, [menuOpen])

	const isActive = (href: string) => {
		if (href === '/') return pathname === '/'
		return pathname === href || pathname.startsWith(href + '/')
	}

	return (
		<header className='fixed inset-x-0 top-0 z-50'>
			{/* Top hairline + glass */}
			<div
				className={cx(
					'relative transition-all',
					scrolled
						? 'bg-neutral-950/70 backdrop-blur-xl border-b border-white/10'
						: 'bg-transparent'
				)}
			>
				{/* Outer container */}
				<div className='mx-auto max-w-6xl px-5 sm:px-8'>
					<div className='h-16 flex items-center justify-between'>
						{/* Brand */}
						<Link
							href='/'
							className='group inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 rounded-lg'
							aria-label='Go to home'
						>
							{/* Minimal mark */}
							<span className='relative grid place-items-center h-9 w-9 rounded-xl border border-white/10 bg-white/5'>
								<span className='h-2.5 w-2.5 rounded-full bg-emerald-400/90' />
								<span className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5' />
							</span>

							<span className='flex flex-col leading-tight'>
								<span className='text-[13px] sm:text-sm tracking-wide text-neutral-200'>
									{brand}
								</span>
								<span className='text-[11px] tracking-[0.16em] text-neutral-500'>
									STRUCTURE • POSITION • TIMING
								</span>
							</span>
						</Link>

						{/* Desktop nav */}
						<nav className='hidden md:flex items-center gap-2'>
							<div className='flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1.5 py-1'>
								{items.map((item) => {
									const active = isActive(item.href)
									return (
										<Link
											key={item.href}
											href={item.href}
											ref={(el) => {
												if (active && el) lastActiveRef.current = el
											}}
											className={cx(
												'relative px-4 py-2 text-sm rounded-full transition',
												'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60',
												active ? 'text-neutral-100' : 'text-neutral-400 hover:text-neutral-200'
											)}
											aria-current={active ? 'page' : undefined}
										>
											{/* Active pill */}
											<span
												className={cx(
													'absolute inset-0 rounded-full -z-10 transition',
													active ? 'bg-white/10 border border-white/10' : 'bg-transparent'
												)}
											/>
											{item.label}
										</Link>
									)
								})}
							</div>

							{/* CTA */}
							<Link
								href={ctaHref}
								className={cx(
									'ml-3 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm',
									'border border-emerald-400/20 bg-emerald-400/10 text-emerald-200',
									'hover:bg-emerald-400/15 hover:border-emerald-400/30 transition',
									'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60'
								)}
							>
								{ctaLabel}
							</Link>
						</nav>

						{/* Mobile toggle */}
						<button
							type='button'
							className={cx(
								'md:hidden inline-flex items-center justify-center rounded-xl h-10 w-10',
								'border border-white/10 bg-white/5',
								'hover:bg-white/10 transition',
								'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60'
							)}
							aria-label={menuOpen ? 'Close menu' : 'Open menu'}
							aria-expanded={menuOpen}
							aria-controls='mobile-menu'
							onClick={() => setMenuOpen((v) => !v)}
						>
							<span className='sr-only'>Menu</span>
							{/* Crisp hamburger -> X */}
							<div className='relative h-4 w-5'>
								<span
									className={cx(
										'absolute left-0 top-0 h-[2px] w-5 bg-neutral-200 rounded-full',
										prefersReducedMotion ? '' : 'transition-transform duration-200',
										menuOpen ? 'translate-y-[7px] rotate-45' : ''
									)}
								/>
								<span
									className={cx(
										'absolute left-0 top-[7px] h-[2px] w-5 bg-neutral-200 rounded-full',
										prefersReducedMotion ? '' : 'transition-opacity duration-200',
										menuOpen ? 'opacity-0' : 'opacity-100'
									)}
								/>
								<span
									className={cx(
										'absolute left-0 bottom-0 h-[2px] w-5 bg-neutral-200 rounded-full',
										prefersReducedMotion ? '' : 'transition-transform duration-200',
										menuOpen ? '-translate-y-[7px] -rotate-45' : ''
									)}
								/>
							</div>
						</button>
					</div>
				</div>

				{/* Mobile menu overlay */}
				<div
					className={cx(
						'md:hidden',
						prefersReducedMotion ? '' : 'transition-[max-height,opacity] duration-300',
						menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
					)}
				>
					{/* Backdrop */}
					<button
						aria-label='Close menu backdrop'
						onClick={() => setMenuOpen(false)}
						className={cx('fixed inset-0 z-40', 'bg-neutral-950/60 backdrop-blur-sm')}
					/>

					{/* Panel */}
					<div
						id='mobile-menu'
						className={cx('fixed left-0 right-0 top-16 z-50', 'mx-auto max-w-6xl px-5 sm:px-8')}
					>
						<div className='rounded-2xl border border-white/10 bg-neutral-950/90 backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.55)] overflow-hidden'>
							<div className='p-3'>
								<div className='flex flex-col'>
									{items.map((item) => {
										const active = isActive(item.href)
										return (
											<Link
												key={item.href}
												href={item.href}
												className={cx(
													'flex items-center justify-between rounded-xl px-4 py-3 text-base',
													'border border-transparent',
													'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60',
													active
														? 'bg-white/10 text-neutral-100 border-white/10'
														: 'text-neutral-300 hover:bg-white/5'
												)}
												aria-current={active ? 'page' : undefined}
											>
												<span>{item.label}</span>
												<span className='text-neutral-500'>↗</span>
											</Link>
										)
									})}
								</div>

								<div className='mt-3'>
									<Link
										href={ctaHref}
										className={cx(
											'w-full inline-flex items-center justify-center rounded-xl px-4 py-3 text-base',
											'border border-emerald-400/20 bg-emerald-400/10 text-emerald-200',
											'hover:bg-emerald-400/15 hover:border-emerald-400/30 transition',
											'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60'
										)}
									>
										{ctaLabel}
									</Link>
								</div>

								<div className='mt-3 px-1 pb-1'>
									<p className='text-xs tracking-[0.18em] text-neutral-500 text-center'>
										CLARITY • CONTROL • LONGEVITY
									</p>
								</div>
							</div>
						</div>

						{/* Spacer so panel doesn't feel cramped */}
						<div className='h-6' />
					</div>
				</div>
			</div>

			{/* Optional: page offset helper (add padding-top: 64px on main content) */}
		</header>
	)
}
