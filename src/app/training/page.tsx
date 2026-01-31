// app/training/page.tsx
'use client'

import Link from 'next/link'
import React, { useEffect, useMemo, useRef, useState } from 'react'

function cx(...classes: Array<string | false | null | undefined>) {
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

function useInView<T extends HTMLElement>(threshold = 0.15) {
	const ref = useRef<T | null>(null)
	const [inView, setInView] = useState(false)

	useEffect(() => {
		const el = ref.current
		if (!el) return

		const obs = new IntersectionObserver(
			(entries) => {
				const [e] = entries
				if (e.isIntersecting) setInView(true)
			},
			{ threshold }
		)

		obs.observe(el)
		return () => obs.disconnect()
	}, [threshold])

	return { ref, inView }
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

function Section({
	kicker,
	title,
	subtitle,
	children
}: {
	kicker?: string
	title: string
	subtitle?: string
	children: React.ReactNode
}) {
	const reduced = usePrefersReducedMotion()
	const { ref, inView } = useInView<HTMLDivElement>(0.15)

	return (
		<section className='relative z-10'>
			<div className='mx-auto max-w-6xl px-4 py-12 md:py-14'>
				<div
					ref={ref}
					className={cx(
						'transition duration-700 will-change-transform',
						reduced
							? 'opacity-100 translate-y-0'
							: inView
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-4'
					)}
				>
					<div className='max-w-3xl'>
						{kicker && (
							<p className='text-xs font-semibold tracking-[0.22em] text-white/60'>{kicker}</p>
						)}
						<h2 className='mt-2 text-2xl font-semibold text-white md:text-3xl'>{title}</h2>
						{subtitle && (
							<p className='mt-3 text-sm leading-relaxed text-white/70 md:text-base'>{subtitle}</p>
						)}
					</div>

					<div className='mt-8'>{children}</div>
				</div>
			</div>
		</section>
	)
}

function Card({
	title,
	children,
	emphasis
}: {
	title: string
	children: React.ReactNode
	emphasis?: boolean
}) {
	return (
		<div
			className={cx(
				'rounded-2xl border p-6',
				emphasis
					? 'border-emerald-400/25 bg-gradient-to-b from-emerald-400/10 to-white/[0.02]'
					: 'border-white/10 bg-white/[0.03]'
			)}
		>
			<h3 className='text-base font-semibold text-white/90'>{title}</h3>
			<p className='mt-2 text-sm leading-relaxed text-white/70'>{children}</p>
		</div>
	)
}

function MiniPill({ text }: { text: string }) {
	return (
		<div className='rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/70'>
			{text}
		</div>
	)
}

function VideoFrame({ src, poster, label }: { src?: string; poster?: string; label: string }) {
	return (
		<div className='rounded-3xl border border-white/10 bg-white/[0.03] p-4'>
			<div className='flex items-center justify-between'>
				<p className='text-xs font-semibold tracking-[0.22em] text-white/60'>{label}</p>
				<p className='text-[11px] text-white/45'>Optional clip</p>
			</div>
			<div className='mt-3 overflow-hidden rounded-2xl border border-white/10 bg-black/40'>
				{src ? (
					<video
						className='h-full w-full'
						src={src}
						poster={poster}
						controls
						playsInline
						preload='metadata'
					/>
				) : (
					<div className='grid h-56 place-items-center text-sm text-white/45'>
						Drop a clip here when ready
					</div>
				)}
			</div>
		</div>
	)
}

export default function TrainingPage() {
	const ASSESSMENT = '/assessment'
	const METHOD = '/method'
	const PRICING = '/pricing'
	const BOOK = '/book'

	// If you have actual files, set these to your mp4 paths:
	const videos = useMemo(
		() => ({
			structure: '', // '/videos/structure.mp4'
			position: '', // '/videos/position.mp4'
			timing: '', // '/videos/timing.mp4'
			session: '' // '/videos/session-example.mp4'
		}),
		[]
	)

	return (
		<main className='relative min-h-screen bg-[#070A0F] text-white'>
			{/* Background */}
			<div aria-hidden className='pointer-events-none absolute inset-0 overflow-hidden'>
				<div className='absolute -top-24 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl' />
				<div className='absolute top-[40%] right-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl' />
				<div className='absolute bottom-[-15%] left-[-10%] h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-3xl' />
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.06),transparent_45%),radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.10),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(34,211,238,0.08),transparent_45%)]' />
			</div>

			{/* Top nav-lite */}
			<div className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 py-5'>
					<div className='flex items-center justify-between'>
						<Link href='/' className='text-sm font-semibold tracking-wide text-white/90'>
							Flow State Striking
						</Link>
						<div className='flex items-center gap-3'>
							<SecondaryButton href={METHOD}>View the Method</SecondaryButton>
							<PrimaryButton href={ASSESSMENT}>Start with an Assessment</PrimaryButton>
						</div>
					</div>
				</div>
			</div>

			{/* HERO */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 pb-10 pt-10 md:pb-16 md:pt-16'>
					<div className='max-w-3xl'>
						<p className='text-xs font-semibold tracking-[0.22em] text-white/60'>TRAINING</p>
						<h1 className='mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl'>
							Training that holds up under pressure.
						</h1>
						<p className='mt-4 text-base leading-relaxed text-white/70 md:text-lg'>
							Built on <span className='text-white/90'>Structure</span>,{' '}
							<span className='text-white/90'>Position</span>, and{' '}
							<span className='text-white/90'>Timing</span> — so you stay calm when things speed up.
						</p>

						<div className='mt-7 flex flex-col gap-3 sm:flex-row'>
							<PrimaryButton href={ASSESSMENT}>Start with an Assessment</PrimaryButton>
							<SecondaryButton href={METHOD}>View the Method</SecondaryButton>
						</div>

						<p className='mt-4 text-xs text-white/55'>Private • Focused • No experience required</p>
					</div>

					<div className='mt-10 grid gap-3 md:grid-cols-3'>
						<MiniPill text='Not random intensity. A system.' />
						<MiniPill text='Pressure added progressively.' />
						<MiniPill text='Longevity matters.' />
					</div>
				</div>
			</section>

			{/* WHY TRAINING FAILS */}
			<Section
				kicker='WHY'
				title='Why most training breaks down'
				subtitle='Pressure makes people rush. Rushing breaks structure. Broken structure creates panic. Flow State trains what survives when things speed up.'
			>
				<div className='grid gap-4 md:grid-cols-3'>
					<Card title='Speed creates debt'>
						If you rely on speed to fix problems, you spend energy chasing instead of solving.
					</Card>
					<Card title='Chaos hides mistakes'>
						High intensity can mask bad position and broken structure — until someone makes you pay
						for it.
					</Card>
					<Card title='Pressure reveals truth' emphasis>
						When things speed up, your foundations show. We train what holds.
					</Card>
				</div>
			</Section>

			{/* HOW TRAINING IS STRUCTURED */}
			<Section
				kicker='STRUCTURE'
				title='How training is built'
				subtitle='Not classes. Not workouts. Skill environments with purpose — designed to create calm competence.'
			>
				<div className='grid gap-4 md:grid-cols-4'>
					<Card title='One priority'>
						Each session focuses on a single skill so improvements actually stick.
					</Card>
					<Card title='Constraints'>
						Drills are designed to force correct movement, not allow compensation.
					</Card>
					<Card title='Progressive pressure'>
						Intensity increases only when your structure stays intact.
					</Card>
					<Card title='Clear feedback'>You learn what’s happening and how to self-correct.</Card>
				</div>

				<div className='mt-6 grid gap-4 md:grid-cols-2'>
					<VideoFrame
						label='Training clip: constraints in action'
						src={videos.session || undefined}
					/>
					<div className='rounded-3xl border border-white/10 bg-white/[0.03] p-7'>
						<h3 className='text-base font-semibold text-white/90'>The vibe</h3>
						<p className='mt-2 text-sm leading-relaxed text-white/70'>
							Calm doesn’t mean easy. It means controlled.
							<br />
							You’ll feel challenged — without chaos.
						</p>

						<div className='mt-6 flex flex-col gap-3 sm:flex-row'>
							<SecondaryButton href={METHOD}>View the Method</SecondaryButton>
							<PrimaryButton href={ASSESSMENT}>Start with an Assessment</PrimaryButton>
						</div>
					</div>
				</div>
			</Section>

			{/* WHAT WE TRAIN: PILLARS APPLIED */}
			<Section
				kicker='PILLARS'
				title='What we train'
				subtitle='Technique is downstream. When the pillars are intact, technique shows up under pressure.'
			>
				<div className='grid gap-4 md:grid-cols-3'>
					<Card title='Structure'>
						Balance, alignment, defensive responsibility, and connection to the ground.
					</Card>
					<Card title='Position'>
						Distance, angles, entries, exits, and placement under pressure.
					</Card>
					<Card title='Timing'>Rhythm, interceptions, and decision-making without panic.</Card>
				</div>

				<div className='mt-6 grid gap-4 md:grid-cols-3'>
					<VideoFrame label='Clip: structure' src={videos.structure || undefined} />
					<VideoFrame label='Clip: position' src={videos.position || undefined} />
					<VideoFrame label='Clip: timing' src={videos.timing || undefined} />
				</div>
			</Section>

			{/* WHAT A SESSION LOOKS LIKE */}
			<Section
				kicker='SESSION'
				title='What a session looks like'
				subtitle='Transparent, repeatable, and designed to compound.'
			>
				<div className='rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8'>
					<ol className='space-y-3 text-sm text-white/70 md:text-base'>
						<li>
							<span className='text-white/90 font-semibold'>1.</span> Movement & posture warm-up
						</li>
						<li>
							<span className='text-white/90 font-semibold'>2.</span> Skill block (one priority)
						</li>
						<li>
							<span className='text-white/90 font-semibold'>3.</span> Constraint-based drills
						</li>
						<li>
							<span className='text-white/90 font-semibold'>4.</span> Light pressure application
						</li>
						<li>
							<span className='text-white/90 font-semibold'>5.</span> Reset, takeaway, next focus
						</li>
					</ol>

					<div className='mt-7 flex flex-col gap-3 sm:flex-row'>
						<PrimaryButton href={ASSESSMENT}>Start with an Assessment</PrimaryButton>
						<SecondaryButton href={BOOK}>Book Now</SecondaryButton>
					</div>
				</div>
			</Section>

			{/* WHO THIS IS FOR */}
			<Section
				kicker='FOR YOU'
				title='Who this training is for'
				subtitle='Any level — especially if you feel stiff, uncoordinated, inconsistent, or overwhelmed when pressure increases.'
			>
				<div className='grid gap-4 md:grid-cols-2'>
					<Card title='Common patterns'>
						Aggressive or hesitant. Sloppy or stiff. Fast but disconnected. Working hard but getting
						hit too much.
					</Card>
					<Card title='What we fix first' emphasis>
						Connection to the ground, balance under movement, distance awareness, and timing without
						panic.
					</Card>
				</div>
			</Section>

			{/* WHAT CHANGES FIRST */}
			<Section
				kicker='RESULTS'
				title='What changes first'
				subtitle='These are early signals you’re building real skill — not just moving a lot.'
			>
				<div className='grid gap-3 md:grid-cols-2'>
					{[
						'Less panic under forward pressure',
						'Cleaner connection from ground to strike',
						'Guard returns without thinking',
						'Fewer counters and overreaches',
						'Better distance awareness',
						'Calmer, deliberate decision-making'
					].map((t) => (
						<MiniPill key={t} text={t} />
					))}
				</div>
			</Section>

			{/* ROADMAP (post-assessment) */}
			<Section
				kicker='ROADMAP'
				title='Your path after the assessment'
				subtitle='No guessing. You start with clarity, then follow a path that fits.'
			>
				<div className='grid gap-4 md:grid-cols-3'>
					<Card title='Step 1: Assessment' emphasis>
						Identify what breaks when things speed up. Leave with 1–2 corrections + a clear plan.
					</Card>
					<Card title='Step 2: Beginner Path (8)'>
						Build competence fast — structure, position, timing — so your skill holds up.
					</Card>
					<Card title='Step 3: Private Packs (5 / 10)'>
						Refine, deepen, and pressure-test your skill with continuity.
					</Card>
				</div>

				<div className='mt-6 flex flex-col gap-3 sm:flex-row'>
					<PrimaryButton href={ASSESSMENT}>Start with an Assessment</PrimaryButton>
					<SecondaryButton href={PRICING}>View Pricing</SecondaryButton>
				</div>
			</Section>

			{/* KIDS / TEENS VARIANT */}
			<Section
				kicker='YOUTH'
				title='Kids & teens training'
				subtitle='Same pillars. Safer constraints. Confidence built through coordination, control, and consistency.'
			>
				<div className='grid gap-4 md:grid-cols-3'>
					<Card title='Coordination first'>
						We build balance, rhythm, and posture so movement becomes natural instead of forced.
					</Card>
					<Card title='Control over chaos' emphasis>
						Safety, structure, and clear rules — confidence comes from competence.
					</Card>
					<Card title='Real carryover'>
						Focus, discipline, and self-trust — built through repeatable wins.
					</Card>
				</div>

				<div className='mt-6'>
					<PrimaryButton href={ASSESSMENT}>Start with an Assessment</PrimaryButton>
				</div>
			</Section>

			{/* FINAL CTA */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 pb-16 pt-6'>
					<div className='rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 md:p-10'>
						<h3 className='text-2xl font-semibold text-white md:text-3xl'>
							Train to stay calm under pressure.
						</h3>
						<p className='mt-3 text-sm text-white/70 md:text-base'>
							Start with an assessment so your first correction is the right one.
						</p>
						<div className='mt-6 flex flex-col gap-3 sm:flex-row'>
							<PrimaryButton href={ASSESSMENT}>Start with an Assessment</PrimaryButton>
							<SecondaryButton href={METHOD}>View the Method</SecondaryButton>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
