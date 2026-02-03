// app/method/page.tsx
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

function Feature({ title, desc }: { title: string; desc: string }) {
	return (
		<div className='rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]'>
			<div className='text-base font-semibold text-white/90'>{title}</div>
			<div className='mt-2 text-sm leading-relaxed text-white/70'>{desc}</div>
		</div>
	)
}

function PillarCard({
	label,
	headline,
	bullets,
	note
}: {
	label: string
	headline: string
	bullets: string[]
	note: string
}) {
	return (
		<div className='rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-7 md:p-8'>
			<p className='text-xs font-semibold tracking-[0.22em] text-white/60'>{label}</p>
			<h3 className='mt-2 text-xl font-semibold text-white md:text-2xl'>{headline}</h3>
			<ul className='mt-4 space-y-2 text-sm text-white/70 md:text-base'>
				{bullets.map((b) => (
					<li key={b}>• {b}</li>
				))}
			</ul>
			<p className='mt-5 text-sm text-white/70'>{note}</p>
		</div>
	)
}

function QuoteBlock({ quote, byline }: { quote: string; byline: string }) {
	return (
		<div className='rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8'>
			<p className='text-sm leading-relaxed text-white/75 md:text-base'>“{quote}”</p>
			<p className='mt-4 text-xs font-semibold tracking-[0.18em] text-white/55'>{byline}</p>
		</div>
	)
}

export default function MethodPage() {
	const ASSESSMENT_HREF = '/assessment'

	return (
		<main className='relative min-h-screen bg-[#070A0F] text-white'>
			{/* Background */}
			<div aria-hidden className='pointer-events-none absolute inset-0 overflow-hidden'>
				<div className='absolute -top-24 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl' />
				<div className='absolute top-[40%] left-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl' />
				<div className='absolute bottom-[-15%] right-[-10%] h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-3xl' />
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
							<SecondaryButton href={ASSESSMENT_HREF}>Start with an Assessment</SecondaryButton>
						</div>
					</div>
				</div>
			</div>

			{/* Hero */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 pb-10 pt-10 md:pb-16 md:pt-16'>
					<div className='max-w-3xl'>
						<p className='text-xs font-semibold tracking-[0.22em] text-white/60'>THE METHOD</p>
						<h1 className='mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl'>
							A system designed to hold up when things speed up.
						</h1>
						<p className='mt-4 text-base leading-relaxed text-white/70 md:text-lg'>
							Most training looks good in calm conditions.
							<br className='hidden md:block' />
							Flow State is built for pressure — where structure stays intact, position stays
							intelligent, and timing becomes clear.
						</p>

						<div className='mt-7 flex flex-col gap-3 sm:flex-row'>
							<PrimaryButton href={ASSESSMENT_HREF}>Start with an Assessment</PrimaryButton>
							<SecondaryButton href='/about'>Meet Coach Larry</SecondaryButton>
						</div>

						<p className='mt-4 text-xs text-white/55'>Structure • Position • Timing — Governance</p>
					</div>
				</div>
			</section>

			{/* Section 1 — Why most training breaks down */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 py-10 md:py-14'>
					<div className='max-w-3xl'>
						<h2 className='text-2xl font-semibold text-white md:text-3xl'>
							Why most training breaks down
						</h2>
						<p className='mt-3 text-sm leading-relaxed text-white/70 md:text-base'>
							When pressure increases, most people lose structure. When structure breaks, position
							disappears. When position is lost, timing becomes guesswork.
						</p>
					</div>

					<div className='mt-8 grid gap-4 md:grid-cols-3'>
						<Feature
							title='Speed creates debt'
							desc='If you rely on speed to fix problems, you spend energy chasing instead of solving.'
						/>
						<Feature
							title='Chaos hides mistakes'
							desc='High intensity can mask bad position and broken structure — until someone makes you pay for it.'
						/>
						<Feature
							title='Pressure reveals truth'
							desc='When things speed up, your foundations show. Flow State trains what survives.'
						/>
					</div>

					<div className='mt-6 grid gap-4 md:grid-cols-2'>
						<QuoteBlock
							quote='Fast fighters feel busy. Positioned fighters feel calm.'
							byline='FLOW STATE PRINCIPLE'
						/>
						<QuoteBlock quote='Speed fades. Position remains.' byline='FLOW STATE PRINCIPLE' />
					</div>
				</div>
			</section>

			{/* Section 2 — The Three Pillars */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 py-10 md:py-14'>
					<div className='max-w-3xl'>
						<h2 className='text-2xl font-semibold text-white md:text-3xl'>The Three Pillars</h2>
						<p className='mt-3 text-sm leading-relaxed text-white/70 md:text-base'>
							These pillars govern everything. Technique sits on structure. Strategy depends on
							position. Timing reveals itself when both are intact.
						</p>
					</div>

					<div className='mt-8 grid gap-4 md:grid-cols-3'>
						<PillarCard
							label='PILLAR 01'
							headline='Structure'
							bullets={[
								'Balance & alignment',
								'Defensive responsibility',
								'Connected to the ground',
								'Ready to fire again'
							]}
							note='Structure removes urgency. When your body is stacked, you stop rushing to survive.'
						/>

						<PillarCard
							label='PILLAR 02'
							headline='Position'
							bullets={[
								'Distance management',
								'Angles and placement',
								'Shorter travel for strikes',
								'Better exits and resets'
							]}
							note='Position reduces motion. When you’re placed correctly, you don’t need to be fast to be on time.'
						/>

						<PillarCard
							label='PILLAR 03'
							headline='Timing'
							bullets={[
								'Rhythm and beat changes',
								'Interceptions and counters',
								'Decision-making under pressure',
								'Choosing moments, not forcing'
							]}
							note='Timing isn’t speed. Timing is the ability to act without panic.'
						/>
					</div>
				</div>
			</section>

			{/* Section 3 — Governance, not technique */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 py-10 md:py-14'>
					<div className='rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10'>
						<h2 className='text-2xl font-semibold text-white md:text-3xl'>
							Governance, not a list of moves
						</h2>
						<p className='mt-3 text-sm leading-relaxed text-white/70 md:text-base'>
							This isn’t “learn 100 techniques.” It’s building a foundation that makes technique
							work when the pace increases.
						</p>

						<div className='mt-7 grid gap-4 md:grid-cols-3'>
							<div className='rounded-2xl border border-white/10 bg-white/[0.02] p-5'>
								<p className='text-xs font-semibold tracking-[0.2em] text-white/60'>STRUCTURE</p>
								<p className='mt-2 text-sm text-white/75'>
									If structure breaks, you can’t defend, reset, or deliver power cleanly.
								</p>
							</div>
							<div className='rounded-2xl border border-white/10 bg-white/[0.02] p-5'>
								<p className='text-xs font-semibold tracking-[0.2em] text-white/60'>POSITION</p>
								<p className='mt-2 text-sm text-white/75'>
									If position is wrong, you chase, overreach, and get hit for it.
								</p>
							</div>
							<div className='rounded-2xl border border-white/10 bg-white/[0.02] p-5'>
								<p className='text-xs font-semibold tracking-[0.2em] text-white/60'>TIMING</p>
								<p className='mt-2 text-sm text-white/75'>
									If timing is guesswork, you force exchanges instead of choosing moments.
								</p>
							</div>
						</div>

						<p className='mt-6 text-sm leading-relaxed text-white/70'>
							The result is competence that holds up. Fighting starts to feel more like chess —
							decisions, placement, and control — not panic and survival.
						</p>

						<div className='mt-7'>
							<PrimaryButton href={ASSESSMENT_HREF}>Start with an Assessment</PrimaryButton>
						</div>
					</div>
				</div>
			</section>

			{/* Section 4 — What training looks like */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 py-10 md:py-14'>
					<div className='grid gap-8 md:grid-cols-2 md:items-start'>
						<div>
							<h2 className='text-2xl font-semibold text-white md:text-3xl'>
								What training looks like
							</h2>
							<p className='mt-3 text-sm leading-relaxed text-white/70 md:text-base'>
								Clean reps, clear constraints, and feedback that compounds. Minimal chaos. Maximal
								understanding.
							</p>

							<div className='mt-6 space-y-3 text-sm text-white/70 md:text-base'>
								<p>• Skill blocks built around one priority</p>
								<p>• Drills that force alignment, balance, and timing</p>
								<p>• Pressure added progressively — never randomly</p>
								<p>• Emphasis on longevity and defensive responsibility</p>
								<p>• You learn how to self-correct and stay composed</p>
							</div>
						</div>

						<div className='rounded-3xl border border-white/10 bg-white/[0.03] p-7'>
							<h3 className='text-base font-semibold text-white/90'>Who this method is for</h3>
							<p className='mt-3 text-sm leading-relaxed text-white/70'>
								Beginners and experienced students alike — especially if you feel stiff,
								uncoordinated, inconsistent, or like pressure makes you rush.
							</p>

							<div className='mt-6 border-t border-white/10 pt-6'>
								<h4 className='text-sm font-semibold text-white/90'>What changes first</h4>
								<div className='mt-3 space-y-2 text-sm text-white/70'>
									<p>• You stop overreaching and getting countered</p>
									<p>• Your guard starts returning automatically</p>
									<p>• You waste less energy chasing exchanges</p>
									<p>• You see distance earlier</p>
									<p>• You feel calmer under forward pressure</p>
								</div>
							</div>

							<div className='mt-7 flex flex-col gap-3 sm:flex-row'>
								<PrimaryButton href={ASSESSMENT_HREF}>Start with an Assessment</PrimaryButton>
								<SecondaryButton href='/assessment'>See the Assessment</SecondaryButton>
							</div>

							<p className='mt-4 text-xs text-white/55'>
								Private • Focused • No experience required
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Section 5 — Bridge to action */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 pb-16 pt-6'>
					<div className='rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 md:p-10'>
						<h3 className='text-2xl font-semibold text-white md:text-3xl'>
							The fastest way to understand Flow State is to feel it.
						</h3>
						<p className='mt-3 text-sm text-white/70 md:text-base'>
							Start with an assessment. Walk out with clarity — and a simple plan forward.
						</p>
						<div className='mt-6 flex flex-col gap-3 sm:flex-row'>
							<PrimaryButton href={ASSESSMENT_HREF}>Start with an Assessment</PrimaryButton>
							<SecondaryButton href='/pricing'>View Pricing</SecondaryButton>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
