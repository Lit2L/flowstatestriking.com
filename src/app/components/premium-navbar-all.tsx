// components/PremiumNavbarAll.tsx
'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItem = { label: string; href: string; sectionId?: string; description?: string }
type MegaGroup = {
	title: string
	items: Array<{ label: string; href: string; description?: string }>
}

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

/**
 * Scrollspy for a single-page landing.
 * - Pass section ids (e.g. hero, method, training, pricing, about).
 * - Only activates on the home route ("/") by default.
 */
function useScrollSpy(sectionIds: string[], enabled: boolean) {
	const [activeId, setActiveId] = useState<string | null>(null)

	useEffect(() => {
		if (!enabled || sectionIds.length === 0) return

		const els = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]

		if (els.length === 0) return

		const io = new IntersectionObserver(
			(entries) => {
				// Pick the most visible intersecting section
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))
				if (visible[0]?.target?.id) setActiveId(visible[0].target.id)
			},
			{
				root: null,
				// activate when section is in the "middle band"
				rootMargin: '-35% 0px -55% 0px',
				threshold: [0.12, 0.2, 0.35, 0.5, 0.75]
			}
		)

		els.forEach((el) => io.observe(el))
		return () => io.disconnect()
	}, [sectionIds.join('|'), enabled])

	return activeId
}

function smoothScrollToId(id: string, prefersReducedMotion: boolean) {
	const el = document.getElementById(id)
	if (!el) return

	// If you have a fixed header of 64px, add scroll-mt-20 on sections OR do offset here.
	// We'll rely on CSS `scroll-margin-top` to keep this simple + robust.
	el.scrollIntoView({
		behavior: prefersReducedMotion ? 'auto' : 'smooth',
		block: 'start',
		inline: 'nearest'
	})
}

function useOutsideClick(
	refs: React.RefObject<HTMLElement>[],
	handler: () => void,
	enabled: boolean
) {
	useEffect(() => {
		if (!enabled) return
		const onPointerDown = (e: PointerEvent) => {
			const target = e.target as Node
			const inside = refs.some((r) => r.current && r.current.contains(target))
			if (!inside) handler()
		}
		window.addEventListener('pointerdown', onPointerDown)
		return () => window.removeEventListener('pointerdown', onPointerDown)
	}, [enabled, handler, refs])
}

/**
 * PremiumNavbarAll
 * Includes:
 * - Desktop + mobile
 * - Glass-on-scroll
 * - Scrollspy (Home one-page sections) + route active for inner pages
 * - Subtle logo mark animation (breathing ring) respecting reduced motion
 * - Mega-menu (desktop) that remains restrained + premium
 */
export default function PremiumNavbarAll({
	brand = 'Flow State Striking',
	ctaLabel = 'Assessment',
	ctaHref = '/assessment',
	enableScrollSpyOnHome = true
}: {
	brand?: string
	ctaLabel?: string
	ctaHref?: string
	enableScrollSpyOnHome?: boolean
}) {
	const pathname = usePathname()
	const prefersReducedMotion = usePrefersReducedMotion()

	// If your home page is a single landing with sections, include sectionIds here.
	const HOME_SECTIONS = useMemo(() => ['hero', 'method', 'training', 'pricing', 'about'], [])

	// Top-level nav: supports either route links OR scroll-to section ids on Home.
	const NAV_ITEMS: NavItem[] = useMemo(
		() => [
			{
				label: 'Method',
				href: '/method',
				sectionId: 'method',
				description: 'Pillars govern technique.'
			},
			{
				label: 'Training',
				href: '/training',
				sectionId: 'training',
				description: 'Paths, not random sessions.'
			},
			{
				label: 'Pricing',
				href: '/pricing',
				sectionId: 'pricing',
				description: 'Calm, finite, deliberate.'
			},
			{ label: 'About', href: '/about', sectionId: 'about', description: 'Why this system exists.' }
		],
		[]
	)

	const MEGA: MegaGroup[] = useMemo(
		() => [
			{
				title: 'Start Here',
				items: [
					{ label: 'Assessment', href: '/assessment', description: 'Clarity and direction first.' },
					{
						label: 'Competency Path',
						href: '/training#competency',
						description: '8–12 sessions, transferable skill.'
					}
				]
			},
			{
				title: 'The System',
				items: [
					{
						label: 'Structure',
						href: '/method#structure',
						description: 'Alignment that removes urgency.'
					},
					{
						label: 'Position',
						href: '/method#position',
						description: 'Distance & angles that reduce effort.'
					},
					{
						label: 'Timing',
						href: '/method#timing',
						description: 'Act early instead of rushing late.'
					}
				]
			},
			{
				title: 'For Parents',
				items: [
					{
						label: 'Youth Training',
						href: '/training#youth',
						description: 'Composed skill, not chaos.'
					},
					{
						label: 'Small Groups',
						href: '/training#groups',
						description: '3–5 people, high attention.'
					}
				]
			}
		],
		[]
	)

	const [menuOpen, setMenuOpen] = useState(false) // mobile
	const [scrolled, setScrolled] = useState(false)
	const [megaOpen, setMegaOpen] = useState(false) // desktop mega menu

	const megaPanelRef = useRef<HTMLDivElement>(null)
	const megaButtonRef = useRef<HTMLButtonElement>(null)

	// Scroll state for glass header
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8)
		onScroll()
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	// Close mobile menu on route change
	useEffect(() => {
		setMenuOpen(false)
		setMegaOpen(false)
	}, [pathname])

	// Lock body scroll when mobile is open
	useEffect(() => {
		if (!menuOpen) return
		const original = document.body.style.overflow
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = original
		}
	}, [menuOpen])

	// ESC closes any open panels
	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setMenuOpen(false)
				setMegaOpen(false)
			}
		}
		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
	}, [])

	// Outside click closes mega menu
	useOutsideClick([megaPanelRef, megaButtonRef], () => setMegaOpen(false), megaOpen)

	const isHome = pathname === '/'
	const scrollSpyActiveId = useScrollSpy(HOME_SECTIONS, enableScrollSpyOnHome && isHome)

	const isActiveRoute = (href: string) => {
		if (href === '/') return pathname === '/'
		return pathname === href || pathname.startsWith(href + '/')
	}

	// On home, nav highlight uses scrollspy (sectionId). Otherwise uses route.
	const isActive = (item: NavItem) => {
		if (isHome && enableScrollSpyOnHome && item.sectionId) {
			return scrollSpyActiveId === item.sectionId
		}
		return isActiveRoute(item.href)
	}

	const onNavClick = (e: React.MouseEvent, item: NavItem) => {
		if (!isHome || !enableScrollSpyOnHome || !item.sectionId) return
		// On home, intercept and smooth-scroll instead of route change
		e.preventDefault()
		setMegaOpen(false)
		setMenuOpen(false)
		smoothScrollToId(item.sectionId, prefersReducedMotion)
	}

	return (
		<header className='fixed inset-x-0 top-0 z-50'>
			<div
				className={cx(
					'relative transition-all',
					scrolled
						? 'bg-neutral-950/70 backdrop-blur-xl border-b border-white/10'
						: 'bg-transparent'
				)}
			>
				<div className='mx-auto max-w-6xl px-5 sm:px-8'>
					<div className='h-16 flex items-center justify-between'>
						{/* Brand */}
						<Link
							href='/'
							className='group inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 rounded-lg'
							aria-label='Go to home'
							onClick={() => {
								setMenuOpen(false)
								setMegaOpen(false)
							}}
						>
							{/* Mark with subtle ring "breathing" animation */}
							<span className='relative grid place-items-center h-9 w-9 rounded-xl border border-white/10 bg-white/5 overflow-hidden'>
								<span className='h-2.5 w-2.5 rounded-full bg-emerald-400/90' />
								{/* Ring */}
								<span
									className={cx(
										'pointer-events-none absolute inset-0 rounded-xl',
										'ring-1 ring-white/5'
									)}
								/>
								{/* Breathing glow (motion-safe) */}
								<span
									aria-hidden='true'
									className={cx(
										'pointer-events-none absolute inset-0 rounded-xl',
										prefersReducedMotion
											? 'opacity-0'
											: 'opacity-100 motion-safe:animate-[pulse_3.2s_ease-in-out_infinite]'
									)}
									style={{
										boxShadow: '0 0 0 0 rgba(52,211,153,0.0)'
									}}
								/>
								{/* Micro gradient sweep (very subtle, motion-safe) */}
								<span
									aria-hidden='true'
									className={cx(
										'pointer-events-none absolute -inset-10 opacity-0',
										prefersReducedMotion
											? ''
											: 'motion-safe:opacity-100 motion-safe:animate-[spin_10s_linear_infinite]'
									)}
									style={{
										background:
											'conic-gradient(from 180deg, rgba(52,211,153,0.10), rgba(255,255,255,0.04), rgba(52,211,153,0.10))',
										filter: 'blur(14px)'
									}}
								/>
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

						{/* Desktop Nav */}
						<nav className='hidden md:flex items-center gap-2'>
							{/* Mega-menu button */}
							<div className='relative'>
								{/* <button
									ref={megaButtonRef}
									type='button'
									onClick={() => setMegaOpen((v) => !v)}
									className={cx(
										'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm',
										'border border-white/10 bg-white/5 text-neutral-300',
										'hover:bg-white/10 hover:text-neutral-200 transition',
										'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60'
									)}
									aria-expanded={megaOpen}
									aria-controls='mega-panel'
								>
									Explore
									<span className={cx('text-neutral-500 transition', megaOpen ? 'rotate-180' : '')}>
										⌄
									</span>
								</button> */}

								{/* Mega panel */}
								<div
									ref={megaPanelRef}
									id='mega-panel'
									className={cx(
										'absolute left-0 top-[52px] w-[680px] max-w-[75vw]',
										'rounded-2xl border border-white/10 bg-neutral-950/90 backdrop-blur-xl',
										'shadow-[0_30px_90px_rgba(0,0,0,0.6)]',
										prefersReducedMotion ? '' : 'transition-all duration-200',
										megaOpen
											? 'opacity-100 translate-y-0 pointer-events-auto'
											: 'opacity-0 -translate-y-2 pointer-events-none'
									)}
								>
									<div className='p-5'>
										{/* <div className='grid grid-cols-3 gap-5'>
											{MEGA.map((group) => (
												<div key={group.title}>
													<div className='text-xs tracking-[0.18em] text-neutral-500 mb-3'>
														{group.title.toUpperCase()}
													</div>
													<div className='flex flex-col gap-1'>
														{group.items.map((it) => (
															<Link
																key={it.href}
																href={it.href}
																className={cx(
																	'rounded-xl px-3 py-2 border border-transparent',
																	'hover:bg-white/5 hover:border-white/10 transition',
																	'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60'
																)}
																onClick={() => setMegaOpen(false)}
															>
																<div className='text-sm text-neutral-200'>{it.label}</div>
																{it.description ? (
																	<div className='text-xs text-neutral-500 mt-0.5'>
																		{it.description}
																	</div>
																) : null}
															</Link>
														))}
													</div>
												</div>
											))}
										</div> */}

										<div className='mt-5 flex items-center justify-between border-t border-white/10 pt-4'>
											<div className='text-xs text-neutral-500'>
												Calm Structure. Clear paths. Limited availability.
											</div>
											<Link
												href={ctaHref}
												onClick={() => setMegaOpen(false)}
												className={cx(
													'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm',
													'border border-emerald-400/20 bg-emerald-400/10 text-emerald-200',
													'hover:bg-emerald-400/15 hover:border-emerald-400/30 transition',
													'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60'
												)}
											>
												{ctaLabel}
											</Link>
										</div>
									</div>
								</div>
							</div>

							{/* Primary pills */}
							<div className='flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1.5 py-1'>
								{NAV_ITEMS.map((item) => {
									const active = isActive(item)
									return (
										<Link
											key={item.href}
											href={
												isHome && enableScrollSpyOnHome && item.sectionId
													? `/#${item.sectionId}`
													: item.href
											}
											onClick={(e) => onNavClick(e, item)}
											className={cx(
												'relative px-4 py-2 text-sm rounded-full transition',
												'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60',
												active ? 'text-neutral-100' : 'text-neutral-400 hover:text-neutral-200'
											)}
											aria-current={active ? 'page' : undefined}
										>
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
						prefersReducedMotion ? '' : 'transition-[opacity] duration-200',
						menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
					)}
				>
					{/* Backdrop */}
					<button
						aria-label='Close menu backdrop'
						onClick={() => setMenuOpen(false)}
						className='fixed inset-0 z-40 bg-neutral-950/60 backdrop-blur-sm'
					/>

					{/* Panel */}
					<div
						id='mobile-menu'
						className='fixed left-0 right-0 top-16 z-50 mx-auto max-w-6xl px-5 sm:px-8'
					>
						<div className='rounded-2xl border border-white/10 bg-neutral-950/90 backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.55)] overflow-hidden'>
							<div className='p-3'>
								{/* Mobile "Explore" condensed */}
								<div className='px-2 pt-2 pb-3'>
									<div className='text-xs tracking-[0.18em] text-neutral-500 mb-2 text-center'>
										EXPLORE
									</div>
									<div className='grid grid-cols-2 gap-2'>
										<Link
											href={ctaHref}
											className={cx(
												'inline-flex items-center justify-center rounded-xl px-3 py-3 text-sm',
												'border border-emerald-400/20 bg-emerald-400/10 text-emerald-200',
												'hover:bg-emerald-400/15 hover:border-emerald-400/30 transition',
												'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60'
											)}
										>
											{ctaLabel}
										</Link>
										<Link
											href='/method'
											className={cx(
												'inline-flex items-center justify-center rounded-xl px-3 py-3 text-sm',
												'border border-white/10 bg-white/5 text-neutral-300',
												'hover:bg-white/10 transition',
												'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60'
											)}
										>
											The Method
										</Link>
									</div>
								</div>

								<div className='flex flex-col'>
									{NAV_ITEMS.map((item) => {
										const active = isActive(item)
										const href =
											isHome && enableScrollSpyOnHome && item.sectionId
												? `/#${item.sectionId}`
												: item.href

										return (
											<Link
												key={item.href}
												href={href}
												onClick={(e) => onNavClick(e, item)}
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

								<div className='mt-3 px-1 pb-2'>
									<p className='text-xs tracking-[0.18em] text-neutral-500 text-center'>
										CLARITY • CONTROL • LONGEVITY
									</p>
								</div>
							</div>
						</div>

						<div className='h-6' />
					</div>
				</div>
			</div>
		</header>
	)
}
