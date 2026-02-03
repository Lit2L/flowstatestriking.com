// app/schedule/page.tsx
'use client'

import Link from 'next/link'
import { useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'

function cx(...classes: Array<string | false | null | undefined>) {
	return classes.filter(Boolean).join(' ')
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
	return (
		<Link
			href={href}
			className={cx(
				'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold',
				'bg-white text-black hover:bg-white/90',
				'shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition'
			)}
		>
			{children}
		</Link>
	)
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
	return (
		<Link
			href={href}
			className={cx(
				'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold',
				'border border-white/15 bg-white/[0.02] text-white/90 hover:bg-white/[0.05]',
				'transition'
			)}
		>
			{children}
		</Link>
	)
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<div className='rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]'>
			<div className='text-base font-semibold text-white/90'>{title}</div>
			<div className='mt-2 text-sm leading-relaxed text-white/70'>{children}</div>
		</div>
	)
}

export default function SchedulePage() {
	const CALENDLY_URL = 'https://calendly.com/flowstatestriking/flow-state-assessment'
	const STRIPE_URL = 'https://buy.stripe.com/28EfZg0yW85DgBJ8RU1VK08'

	const searchParams = useSearchParams()
	const paidFlag = searchParams.get('paid')

	const paid = useMemo(() => paidFlag === '1' || paidFlag === 'true', [paidFlag])

	useEffect(() => {
		const existing = document.querySelector<HTMLScriptElement>(
			'script[src="https://assets.calendly.com/assets/external/widget.js"]'
		)
		if (existing) return

		const script = document.createElement('script')
		script.src = 'https://assets.calendly.com/assets/external/widget.js'
		script.async = true
		document.body.appendChild(script)
	}, [])

	return (
		<main className='relative min-h-screen bg-[#070A0F] text-white'>
			{/* Background */}
			<div aria-hidden className='pointer-events-none absolute inset-0 overflow-hidden'>
				<div className='absolute -top-24 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl' />
				<div className='absolute top-[40%] right-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl' />
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.06),transparent_45%),radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.10),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(34,211,238,0.08),transparent_45%)]' />
			</div>

			<div className='relative z-10 mx-auto max-w-6xl px-4 py-10 md:py-16'>
				<div className='max-w-3xl'>
					<p className='text-xs font-semibold tracking-[0.22em] text-white/60'>SCHEDULING</p>

					<h1 className='mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl'>
						{paid ? 'Payment received. Choose a time.' : 'Choose a time'}
					</h1>

					<p className='mt-4 text-base leading-relaxed text-white/70 md:text-lg'>
						{paid ? (
							<>Your assessment is reserved. Select a time below to lock it in.</>
						) : (
							<>
								This page is for scheduling after payment. If you haven’t paid yet, reserve your
								assessment first.
							</>
						)}
					</p>

					<div className='mt-7 flex flex-col gap-3 sm:flex-row'>
						{paid ? (
							<SecondaryButton href='/assessment'>Back to Assessment</SecondaryButton>
						) : (
							<a
								href={STRIPE_URL}
								target='_blank'
								rel='noreferrer'
								className={cx(
									'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold',
									'bg-white text-black hover:bg-white/90',
									'shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition'
								)}
							>
								Pay to Reserve
							</a>
						)}

						<PrimaryButton href='/assessment'>What is the Assessment?</PrimaryButton>
					</div>

					<p className='mt-4 text-xs text-white/55'>
						Email + text reminders are sent automatically. Please reschedule/cancel at least 24
						hours in advance.
					</p>
				</div>

				<div className='mt-10 grid gap-4 md:grid-cols-3'>
					<Card title='What happens in the assessment'>
						<p>
							This session is not a workout. We evaluate structure, movement, and readiness under
							pressure — then set a simple next step.
						</p>
					</Card>

					<Card title='What to bring'>
						<ul className='space-y-2'>
							<li>• Comfortable training clothes</li>
							<li>• Water</li>
							<li>• Hand wraps (optional)</li>
						</ul>
					</Card>

					<Card title='If you have trouble scheduling'>
						<p className='mb-4'>Open Calendly directly (new tab).</p>
						<a
							href={CALENDLY_URL}
							target='_blank'
							rel='noreferrer'
							className='inline-flex rounded-xl border border-white/15 bg-white/[0.02] px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/[0.05] transition'
						>
							Open Calendly
						</a>
					</Card>
				</div>

				{/* Calendly Embed */}
				<div className='mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-4 md:p-6'>
					<div
						className='calendly-inline-widget'
						data-url={CALENDLY_URL}
						style={{ minWidth: '320px', height: '760px' }}
					/>
				</div>

				<div className='mt-10 flex flex-col gap-3 sm:flex-row sm:items-center'>
					<SecondaryButton href='/assessment'>Back</SecondaryButton>
					<a
						href={CALENDLY_URL}
						target='_blank'
						rel='noreferrer'
						className={cx(
							'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold',
							'border border-white/15 bg-white/[0.02] text-white/90 hover:bg-white/[0.05]',
							'transition'
						)}
					>
						Open Calendly in new tab
					</a>
				</div>
			</div>
		</main>
	)
}
