'use client'
// app/pricing/page.tsx
import Link from 'next/link'

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

function PriceCard({
	title,
	price,
	subtitle,
	bullets,
	ctaLabel,
	ctaHref,
	emphasized,
	badge
}: {
	title: string
	price: string
	subtitle: string
	bullets: string[]
	ctaLabel: string
	ctaHref: string
	emphasized?: boolean
	badge?: string
}) {
	return (
		<div
			className={cx(
				'relative rounded-3xl border p-7 md:p-8',
				emphasized
					? 'border-emerald-400/30 bg-gradient-to-b from-emerald-400/10 to-white/[0.02]'
					: 'border-white/10 bg-white/[0.03]'
			)}
		>
			{badge && (
				<div className='absolute -top-3 left-6 rounded-full border border-white/10 bg-[#070A0F] px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-white/70'>
					{badge}
				</div>
			)}

			<div className='flex items-start justify-between gap-4'>
				<div>
					<h3 className='text-lg font-semibold text-white/90'>{title}</h3>
					<p className='mt-2 text-sm leading-relaxed text-white/70'>{subtitle}</p>
				</div>

				<div className='text-right'>
					<div className='text-2xl font-semibold text-white'>{price}</div>
					<div className='mt-1 text-xs text-white/55'>per session / pack</div>
				</div>
			</div>

			<ul className='mt-6 space-y-2 text-sm text-white/70'>
				{bullets.map((b) => (
					<li key={b}>• {b}</li>
				))}
			</ul>

			<div className='mt-7'>
				{emphasized ? (
					<PrimaryButton href={ctaHref}>{ctaLabel}</PrimaryButton>
				) : (
					<SecondaryButton href={ctaHref}>{ctaLabel}</SecondaryButton>
				)}
			</div>
		</div>
	)
}

function FAQ({ q, a }: { q: string; a: string }) {
	return (
		<div className='rounded-2xl border border-white/10 bg-white/[0.03] p-6'>
			<div className='text-sm font-semibold text-white/90'>{q}</div>
			<div className='mt-2 text-sm leading-relaxed text-white/70'>{a}</div>
		</div>
	)
}

export default function PricingPage() {
	// Swap these once you decide the exact destinations:
	const START_HERE = '/assessment'
	const BOOKING = '/book'
	const METHOD = '/method'

	// Replace placeholder prices any time.
	const prices = {
		assessment: '$95',
		beginner8: '$800',
		pack5: '$500',
		pack10: '$1000'
	}

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
							<PrimaryButton href={START_HERE}>Start with an Assessment</PrimaryButton>
						</div>
					</div>
				</div>
			</div>

			{/* Hero */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 pb-10 pt-10 md:pb-16 md:pt-16'>
					<div className='max-w-3xl'>
						<p className='text-xs font-semibold tracking-[0.22em] text-white/60'>PRICING</p>
						<h1 className='mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl'>
							Simple options. Clear next steps.
						</h1>
						<p className='mt-4 text-base leading-relaxed text-white/70 md:text-lg'>
							The goal isn’t to train harder — it’s to train with clarity.
							<br className='hidden md:block' />
							Start with an assessment so you know exactly what to fix first.
						</p>

						<div className='mt-7 flex flex-col gap-3 sm:flex-row'>
							<PrimaryButton href={START_HERE}>Start with an Assessment</PrimaryButton>
							<SecondaryButton href={METHOD}>View the Method</SecondaryButton>
						</div>

						<p className='mt-4 text-xs text-white/55'>Private • Focused • No experience required</p>
					</div>
				</div>
			</section>

			{/* Start here */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 py-10 md:py-14'>
					<div className='max-w-3xl'>
						<h2 className='text-2xl font-semibold text-white md:text-3xl'>Start here</h2>
						<p className='mt-3 text-sm leading-relaxed text-white/70 md:text-base'>
							Most people don’t need more techniques. They need the right first correction.
						</p>
					</div>

					<div className='mt-8 grid gap-4 md:grid-cols-2'>
						<PriceCard
							title='Assessment'
							price={prices.assessment}
							subtitle='A diagnostic session to find what breaks when things speed up.'
							bullets={[
								'Movement + posture check',
								'Connection to the ground',
								'Position & distance awareness',
								'Timing & decision-making',
								'Leave with 1–2 fixes + a plan'
							]}
							ctaLabel='Book an Assessment'
							ctaHref={BOOKING}
							emphasized
							badge='RECOMMENDED START'
						/>

						<div className='rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8'>
							<h3 className='text-lg font-semibold text-white/90'>What happens after</h3>
							<p className='mt-2 text-sm leading-relaxed text-white/70'>
								After the assessment, I’ll recommend the best next step based on your Structure,
								Position, and Timing.
							</p>

							<div className='mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5'>
								<div className='text-sm font-semibold text-white/90'>Typical next step</div>
								<p className='mt-2 text-sm text-white/70'>
									A short structured path to build competence fast — without chaos.
								</p>
								<div className='mt-5'>
									<SecondaryButton href='#beginner-path'>See the Beginner Path</SecondaryButton>
								</div>
							</div>

							<div className='mt-6 border-t border-white/10 pt-6'>
								<p className='text-xs text-white/55'>
									Not sure what to choose? Start with the assessment. It removes guessing.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Beginner Path */}
			<section id='beginner-path' className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 py-10 md:py-14'>
					<div className='max-w-3xl'>
						<h2 className='text-2xl font-semibold text-white md:text-3xl'>Beginner Path</h2>
						<p className='mt-3 text-sm leading-relaxed text-white/70 md:text-base'>
							A structured 8-session path designed to make you competent in any boxing or kickboxing
							gym — calm, balanced, and defensively responsible.
						</p>
					</div>

					<div className='mt-8 grid gap-4 md:grid-cols-3'>
						<PriceCard
							title='Beginner Path (8 Sessions)'
							price={prices.beginner8}
							subtitle='Build a foundation that holds up under pressure.'
							bullets={[
								'Structure: balance, alignment, guard returns',
								'Position: distance, entries, exits, angles',
								'Timing: rhythm, interceptions, clean moments',
								'Constraints that force good habits',
								'Progress checks + next-step plan'
							]}
							ctaLabel='Start with an Assessment'
							ctaHref={START_HERE}
							emphasized
							badge='MOST POPULAR NEXT STEP'
						/>

						<div className='rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8 md:col-span-2'>
							<h3 className='text-lg font-semibold text-white/90'>What you’ll feel first</h3>
							<div className='mt-4 grid gap-3 md:grid-cols-2'>
								{[
									'Less panic under forward pressure',
									'Cleaner connection (strike to ground)',
									'Guard returns without thinking',
									'Less overreaching / fewer counters',
									'Better distance awareness',
									'Calmer decision-making'
								].map((t) => (
									<div
										key={t}
										className='rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm text-white/70'
									>
										{t}
									</div>
								))}
							</div>

							<div className='mt-7 flex flex-col gap-3 sm:flex-row'>
								<PrimaryButton href={START_HERE}>Start with an Assessment</PrimaryButton>
								<SecondaryButton href={METHOD}>View the Method</SecondaryButton>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Private Coaching */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 py-10 md:py-14'>
					<div className='max-w-3xl'>
						<h2 className='text-2xl font-semibold text-white md:text-3xl'>Private coaching</h2>
						<p className='mt-3 text-sm leading-relaxed text-white/70 md:text-base'>
							For people who want focused refinement, faster progression, and a consistent training
							plan.
						</p>
					</div>

					<div className='mt-8 grid gap-4 md:grid-cols-3'>
						<PriceCard
							title='Private Pack (5 Sessions)'
							price={prices.pack5}
							subtitle='Focused improvements with continuity.'
							bullets={[
								'One priority at a time',
								'Drills with constraints',
								'Pressure added progressively',
								'Homework + progress tracking'
							]}
							ctaLabel='Start with an Assessment'
							ctaHref={START_HERE}
						/>

						<PriceCard
							title='Private Pack (10 Sessions)'
							price={prices.pack10}
							subtitle='Best for serious skill building.'
							bullets={[
								'Deeper progression plan',
								'More reps per priority',
								'Better pattern replacement',
								'Best value per session'
							]}
							ctaLabel='Start with an Assessment'
							ctaHref={START_HERE}
						/>

						<div className='rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8'>
							<h3 className='text-lg font-semibold text-white/90'>How to choose</h3>
							<p className='mt-2 text-sm leading-relaxed text-white/70'>
								If you’re unsure, start with the assessment. I’ll recommend the right path based on
								what you actually need.
							</p>
							<div className='mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5'>
								<div className='text-sm font-semibold text-white/90'>Rule of thumb</div>
								<p className='mt-2 text-sm text-white/70'>
									If you want competence fast: Beginner Path. If you want refinement and
									consistency: Private Packs.
								</p>
							</div>
							<div className='mt-7'>
								<PrimaryButton href={START_HERE}>Start with an Assessment</PrimaryButton>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ / Policies */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 py-10 md:py-14'>
					<div className='max-w-3xl'>
						<h2 className='text-2xl font-semibold text-white md:text-3xl'>FAQ</h2>
						<p className='mt-3 text-sm leading-relaxed text-white/70 md:text-base'>
							Clear answers. No guessing.
						</p>
					</div>

					<div className='mt-8 grid gap-4 md:grid-cols-2'>
						<FAQ
							q='Do I need experience?'
							a='No. The assessment and Beginner Path are designed for people starting from scratch.'
						/>
						<FAQ
							q='What should I bring?'
							a='Comfortable training clothes, water, and hand wraps if you have them.'
						/>
						<FAQ
							q='Is this hard sparring?'
							a='No. We build skill through structure, constraints, and progressive pressure. Safety and longevity matter.'
						/>
						<FAQ
							q='What if I’m not sure what to buy?'
							a='Start with an assessment. You’ll leave with clarity and a recommendation.'
						/>
						<FAQ q='Cancellation / reschedule policy?' a='24 hours notice.' />
						<FAQ
							q='Do you train kids/teens?'
							a='Yes. Kids/teens would benefit greatly from this type of training.'
						/>
					</div>
				</div>
			</section>

			{/* Closing CTA */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 pb-16 pt-6'>
					<div className='rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 md:p-10'>
						<h3 className='text-2xl font-semibold text-white md:text-3xl'>
							Train to stay calm under pressure.
						</h3>
						<p className='mt-3 text-sm text-white/70 md:text-base'>
							Start with an assessment so your next step is the right step.
						</p>
						<div className='mt-6 flex flex-col gap-3 sm:flex-row'>
							<PrimaryButton href={START_HERE}>Start with an Assessment</PrimaryButton>
							<SecondaryButton href={METHOD}>View the Method</SecondaryButton>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
