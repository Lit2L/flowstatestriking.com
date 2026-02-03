// app/about/page.tsx
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
				'rounded-3xl border p-7 md:p-8',
				emphasis
					? 'border-emerald-400/25 bg-gradient-to-b from-emerald-400/10 to-white/[0.02]'
					: 'border-white/10 bg-white/[0.03]'
			)}
		>
			<h3 className='text-base font-semibold text-white/90'>{title}</h3>
			<div className='mt-2 text-sm leading-relaxed text-white/70'>{children}</div>
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

function ManifestoLine({ title, desc }: { title: string; desc: string }) {
	return (
		<div className='rounded-2xl border border-white/10 bg-white/[0.02] p-5'>
			<div className='text-sm font-semibold text-white/90'>{title}</div>
			<div className='mt-2 text-sm leading-relaxed text-white/70'>{desc}</div>
		</div>
	)
}

function PhotoCard({ src, alt, caption }: { src?: string; alt?: string; caption?: string }) {
	return (
		<div className='rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]'>
			<div className='overflow-hidden rounded-2xl border border-white/10 bg-black/10'>
				{src ? (
					// eslint-disable-next-line @next/next/no-img-element
					<img
						src={src}
						alt={alt || 'Coach Larry'}
						className='h-[340px] w-full object-cover scale-110  md:h-[420px] opacity-90'
					/>
				) : (
					<div className='grid h-[340px] w-full place-items-center text-sm text-white/45 md:h-[420px]'></div>
				)}
			</div>
			{caption && <div className='mt-3 px-1 text-xs text-white/55'>{caption}</div>}
		</div>
	)
}

export default function AboutPage() {
	const ASSESSMENT = '/assessment'
	const METHOD = '/method'
	const PRICING = '/pricing'
	const SCHEDULE = '/schedule'

	// Optional: put a real photo in /public/images/coach-larry.jpg then set:
	// const COACH_PHOTO = '/images/coach-larry.jpg'
	const COACH_PHOTO = '/images/profile.png'

	return (
		<main className='relative min-h-screen bg-[#070A0F] text-white'>
			{/* Background */}
			<div aria-hidden className='pointer-events-none absolute inset-0 overflow-hidden'>
				<div className='absolute -top-24 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl' />
				<div className='absolute top-[35%] right-[-10%] h-[420px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl' />
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

			{/* Hero */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 pb-10 pt-10 md:pb-16 md:pt-16'>
					<div className='grid gap-10 md:grid-cols-2 md:items-start'>
						<div className='max-w-xl'>
							<p className='text-xs font-semibold tracking-[0.22em] text-white/60'>ABOUT</p>
							<h1 className='mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl'>
								Coach Larry
							</h1>
							<p className='mt-4 text-base leading-relaxed text-white/70 md:text-lg'>
								I don’t teach people to fight harder.
								<br className='hidden md:block' />I teach them to stay calm under pressure.
							</p>

							<div className='mt-7 flex flex-col gap-3 sm:flex-row'>
								<PrimaryButton href={ASSESSMENT}>Start with an Assessment</PrimaryButton>
								<SecondaryButton href={METHOD}>View the Method</SecondaryButton>
							</div>

							<div className='mt-10 grid gap-3 md:grid-cols-3'>
								<MiniPill text='22+ years experience' />
								<MiniPill text='Structure • Position • Timing' />
								<MiniPill text='Built for longevity' />
							</div>
						</div>

						{/* Photo */}
						<PhotoCard
							src={COACH_PHOTO || undefined}
							alt='Coach Larry'
							caption='Flow State Striking • Fountain Valley, CA'
						/>
					</div>
				</div>
			</section>

			{/* Coaching Philosophy / Manifesto */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 py-10 md:py-14'>
					<div className='rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-7 md:p-10'>
						<p className='text-xs font-semibold tracking-[0.22em] text-white/60'>
							COACHING PHILOSOPHY
						</p>
						<h2 className='mt-2 text-2xl font-semibold text-white md:text-3xl'></h2>
						<p className='mt-3 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base'>
							{/* When structure, position, and timing are trained correctly, calm becomes repeatable.{' '} */}
							I don’t try to make people aggressive or fearless. I organize how their body moves,
							reacts and responds when under pressure. When structure and position are reliable,
							decisions slow down. <br />
							<br />
							Calm isn&apos;t taught. I&apos;s the result.
							<br />
						</p>

						<div className='mt-7 grid gap-4 md:grid-cols-3'>
							<ManifestoLine
								title='Structure removes urgency'
								desc='When your body is stacked and defensively responsible, you don’t rush to survive.'
							/>
							<ManifestoLine
								title='Position reduces motion'
								desc='Good placement shortens distance and gives you choices. You stop chasing.'
							/>
							<ManifestoLine
								title='Timing replaces panic'
								desc='Timing isn’t speed. Timing is acting without forcing — because you’re ready.'
							/>
						</div>

						<div className='mt-7 flex flex-col gap-3 sm:flex-row'>
							<PrimaryButton href={ASSESSMENT}>Start with an Assessment</PrimaryButton>
							<SecondaryButton href={PRICING}>View Pricing</SecondaryButton>
						</div>
					</div>
				</div>
			</section>

			{/* Story */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 py-10 md:py-14'>
					<div className='grid gap-6 md:grid-cols-2 md:items-start'>
						<Card title='The ceiling' emphasis>
							I spent years believing the path to real self-defense was more speed, more power, and
							more aggression.
							<br />
							<br />
							Then I hit the ceiling.
							<br />
							<br />
							Even at my fastest and strongest, I couldn’t consistently compete with professional
							fighters on my team. So I dug deeper for answers.
						</Card>

						<Card title='What I found'>
							What I found wasn’t a new workout or technique.
							<br />
							<br />
							It was the foundation underneath of:
							<br />
							<span className='text-white/90'> Structure</span>,{' '}
							<span className='text-white/90'>Position</span>, and{' '}
							<span className='text-white/90'>Timing</span>.
							<br />
							<br />
							When these pillars are intact, you stay poised and stay ready.
						</Card>
					</div>
				</div>
			</section>

			{/* Problem */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 py-10 md:py-14'>
					<div className='max-w-3xl'>
						<h2 className='text-2xl font-semibold text-white md:text-3xl'>
							The problem I see most
						</h2>
						<p className='mt-3 text-sm leading-relaxed text-white/70 md:text-base'>
							Most people don’t struggle because they’re “not tough enough.” They struggle because
							their body isn’t connected — so under pressure they force, reach, and lose balance.
						</p>
					</div>

					<div className='mt-8 grid gap-4 md:grid-cols-3'>
						<Card title='Disconnected striking'>
							The strike doesn’t connect to the ground. Power gets forced through the shoulders and
							arms.
						</Card>
						<Card title='Out of position'>
							They’re too close, too far, or stepping into exchanges without placement.
						</Card>
						<Card title='Balance breaks under pace'>
							When the punch ends, they’re off-center — and the counter finds them.
						</Card>
					</div>
				</div>
			</section>

			{/* What I teach */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 py-10 md:py-14'>
					<Card title='What I teach' emphasis>
						<p className='text-sm leading-relaxed text-white/70 md:text-base'>
							Flow State is a private training system built to hold up under pressure.
						</p>

						<div className='mt-6 grid gap-4 md:grid-cols-3'>
							<div className='rounded-2xl border border-white/10 bg-white/[0.02] p-5'>
								<p className='text-xs font-semibold tracking-[0.2em] text-white/60'>STRUCTURE</p>
								<p className='mt-2 text-sm text-white/70'>
									Balance, alignment, and defensive responsibility — so you stay connected when
									things speed up.
								</p>
							</div>
							<div className='rounded-2xl border border-white/10 bg-white/[0.02] p-5'>
								<p className='text-xs font-semibold tracking-[0.2em] text-white/60'>POSITION</p>
								<p className='mt-2 text-sm text-white/70'>
									Distance and placement — so you stop chasing exchanges and start choosing them.
								</p>
							</div>
							<div className='rounded-2xl border border-white/10 bg-white/[0.02] p-5'>
								<p className='text-xs font-semibold tracking-[0.2em] text-white/60'>TIMING</p>
								<p className='mt-2 text-sm text-white/70'>
									Rhythm, interceptions, and decision-making — without panic.
								</p>
							</div>
						</div>

						<p className='mt-6 text-sm leading-relaxed text-white/70 md:text-base'>
							When these pillars are solid, fighting stops feeling like panic. It starts feeling
							like chess — decisions, placement, and control.
						</p>

						<div className='mt-7 flex flex-col gap-3 sm:flex-row'>
							<PrimaryButton href={ASSESSMENT}>Start with an Assessment</PrimaryButton>
							<SecondaryButton href={METHOD}>View the Method</SecondaryButton>
						</div>
					</Card>
				</div>
			</section>

			{/* Background + Why I coach */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 py-10 md:py-14'>
					<div className='grid gap-6 md:grid-cols-2 md:items-start'>
						<Card title='Background'>
							<ul className='space-y-2'>
								<li>• 22+ years martial arts experience</li>
								<li>• Boxing, Muay Thai, Kickboxing, Kung Fu</li>
								<li>• Muay Thai bouts, Tournaments, Exhibitions & Smokers fights.</li>
								<li>• About a decade training with a professional fight team</li>
								<li>• Mentored by Colin Oyama (Team Oyama)</li>
							</ul>
						</Card>

						<Card title='Why I love coaching'>
							I like watching people walk in with a problem — and walk out with a solution.
							<br />
							<br />
							Martial arts isn’t easy. That’s what makes it rewarding. Every time you level up, you
							gain understanding, experience, and confidence you keep for life.
							<br />
							<br />
							The real discovery isn’t violence. It’s your body — and what it can do when it’s
							trained correctly.
						</Card>
					</div>
				</div>
			</section>

			{/* Who I work best with */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 py-10 md:py-14'>
					<div className='max-w-3xl'>
						<h2 className='text-2xl font-semibold text-white md:text-3xl'>Who I work best with</h2>
						<p className='mt-3 text-sm leading-relaxed text-white/70 md:text-base'>
							Any level — especially people who want competence, not chaos.
						</p>
					</div>

					<div className='mt-8 grid gap-3 md:grid-cols-2'>
						{[
							'Beginners who want a clean foundation',
							'People who feel stiff, uncoordinated, or inconsistent',
							'Anyone who gets hit a lot and doesn’t know why',
							'Adults who care about long-term health and brain longevity',
							'Students who want calm, deliberate decision-making',
							'People who want fighting to feel like chess — not panic'
						].map((t) => (
							<MiniPill key={t} text={t} />
						))}
					</div>
				</div>
			</section>

			{/* Closing CTA */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 pb-16 pt-6'>
					<div className='rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 md:p-10'>
						<h3 className='text-2xl font-semibold text-white md:text-3xl'>
							Start with an Assessment.
						</h3>
						<p className='mt-3 text-sm text-white/70 md:text-base'>
							If you’re unsure where to begin, I’ll identify what’s breaking down — and what to fix
							first.
						</p>
						<div className='mt-6 flex flex-col gap-3 sm:flex-row'>
							<PrimaryButton href={ASSESSMENT}>Start with an Assessment</PrimaryButton>
							<SecondaryButton href={METHOD}>View the Method</SecondaryButton>
							<SecondaryButton href={SCHEDULE}>Already paid? Schedule</SecondaryButton>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
