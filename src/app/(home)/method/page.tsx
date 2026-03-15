import Link from 'next/link'

function cx(...classes: Array<string | false | null | undefined>) {
	return classes.filter(Boolean).join(' ')
}

function PrimaryButton({
	href,
	children,
	external
}: {
	href: string
	children: React.ReactNode
	external?: boolean
}) {
	const className = cx(
		'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold',
		'bg-white text-black hover:bg-white/90',
		'shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition'
	)

	if (external) {
		return (
			<a href={href} target='_blank' rel='noreferrer' className={className}>
				{children}
			</a>
		)
	}

	return (
		<Link href={href} className={className}>
			{children}
		</Link>
	)
}

function SecondaryButton({
	href,
	children,
	external
}: {
	href: string
	children: React.ReactNode
	external?: boolean
}) {
	const className = cx(
		'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold',
		'border border-white/15 bg-white/[0.02] text-white/90 hover:bg-white/[0.05]',
		'transition'
	)

	if (external) {
		return (
			<a href={href} target='_blank' rel='noreferrer' className={className}>
				{children}
			</a>
		)
	}

	return (
		<Link href={href} className={className}>
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
	return (
		<section className='relative z-10 border-t border-white/5'>
			<div className='mx-auto max-w-5xl px-4 py-14 md:py-18'>
				<div className='max-w-3xl'>
					{kicker && (
						<p className='text-xs font-semibold tracking-[0.22em] text-white/60'>{kicker}</p>
					)}
					<h2 className='mt-3 text-2xl font-semibold text-white md:text-4xl'>{title}</h2>
					{subtitle && (
						<p className='mt-4 text-sm leading-relaxed text-white/70 md:text-base'>{subtitle}</p>
					)}
				</div>
				<div className='mt-8'>{children}</div>
			</div>
		</section>
	)
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<div className='rounded-2xl border border-white/10 bg-white/[0.03] p-6'>
			<h3 className='text-base font-semibold text-white/90'>{title}</h3>
			<p className='mt-3 text-sm leading-relaxed text-white/70'>{children}</p>
		</div>
	)
}

export default function MethodPage() {
	const PHONE_HREF = 'tel:+19497852991'
	const SMS_HREF = 'sms:+19497852991'
	const TRAINING_HREF = '/training'

	return (
		<main className='relative min-h-screen bg-[#070A0F] text-white'>
			<div aria-hidden className='pointer-events-none absolute inset-0 overflow-hidden'>
				<div className='absolute -top-24 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl' />
				<div className='absolute top-[40%] left-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl' />
				<div className='absolute bottom-[-15%] right-[-10%] h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-3xl' />
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.06),transparent_45%),radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.10),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(34,211,238,0.08),transparent_45%)]' />
			</div>

			<div className='relative z-10'>
				<div className='mx-auto max-w-5xl px-4 py-5'>
					<div className='flex items-center justify-between'>
						<Link href='/' className='text-sm font-semibold tracking-wide text-white/90'>
							Flow State Striking
						</Link>
						<div className='flex items-center gap-3'>
							<SecondaryButton href={PHONE_HREF} external>
								Call
							</SecondaryButton>
							<PrimaryButton href={SMS_HREF} external>
								Text to Start
							</PrimaryButton>
						</div>
					</div>
				</div>
			</div>

			<section className='relative z-10'>
				<div className='mx-auto max-w-5xl px-4 pb-14 pt-12 md:pb-20 md:pt-20'>
					<div className='max-w-3xl'>
						<p className='text-xs font-semibold tracking-[0.22em] text-white/60'>THE METHOD</p>
						<h1 className='mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl'>
							A simple, structured way to learn striking.
						</h1>
						<p className='mt-5 text-base leading-relaxed text-white/70 md:text-lg'>
							Flow State Striking is built around clean fundamentals, steady progress, and coaching
							that helps kids, teens, and adults learn with confidence.
						</p>

						<div className='mt-8 flex flex-wrap gap-3 text-xs tracking-[0.16em] text-white/55'>
							{['STRUCTURE', 'TIMING', 'CONTROL', 'BEGINNER FRIENDLY', 'KIDS • TEENS • ADULTS'].map(
								(item) => (
									<span
										key={item}
										className='rounded-full border border-white/10 bg-white/[0.03] px-3 py-2'
									>
										{item}
									</span>
								)
							)}
						</div>

						<div className='mt-8 flex flex-col gap-3 sm:flex-row'>
							<PrimaryButton href={SMS_HREF} external>
								Text to Get Started
							</PrimaryButton>
							<SecondaryButton href={PHONE_HREF} external>
								Call for Training Info
							</SecondaryButton>
						</div>

						<p className='mt-4 text-sm text-white/55'>
							Great for beginners, families, and students who want real guidance.
						</p>
					</div>
				</div>
			</section>

			<Section
				kicker='WHAT MAKES IT DIFFERENT'
				title='We focus on how students actually learn.'
				subtitle='Instead of throwing people into random intensity, we build skill through structure, repetition, and clear coaching.'
			>
				<div className='grid gap-4 md:grid-cols-3'>
					<Card title='Simple fundamentals'>
						Students learn the basics clearly so they can build confidence and improve without
						feeling overwhelmed.
					</Card>
					<Card title='Progress step by step'>
						Training is designed to meet students where they are and help them improve at a steady
						pace.
					</Card>
					<Card title='Supportive coaching'>
						We create a calm, focused environment where students can learn, ask questions, and grow.
					</Card>
				</div>
			</Section>

			<Section
				kicker='THE CORE OF THE METHOD'
				title='Built on structure, timing, and control.'
				subtitle='These ideas shape how we teach, how students move, and how progress is built over time.'
			>
				<div className='grid gap-4 md:grid-cols-3'>
					<Card title='Structure'>
						We help students build balance, posture, and clean movement so their technique has a
						strong foundation.
					</Card>
					<Card title='Timing'>
						Students learn when to move, when to strike, and how to stay composed instead of
						rushing.
					</Card>
					<Card title='Control'>
						Good training is not chaos. We teach students how to stay organized, make good
						decisions, and move with confidence.
					</Card>
				</div>
			</Section>

			<Section
				kicker='WHO IT HELPS'
				title='A good fit for kids, teens, and adults.'
				subtitle='Whether someone is brand new or looking for better guidance, this method is designed to make training more clear and approachable.'
			>
				<div className='grid gap-4 md:grid-cols-3'>
					<Card title='Kids'>
						Kids benefit from structure, discipline, body control, and confidence in a positive
						training environment.
					</Card>
					<Card title='Teens'>
						Teens build skill, self-belief, composure, and athletic development through smart
						coaching.
					</Card>
					<Card title='Adults'>
						Adults get practical training, fitness, confidence, and real martial arts development
						without unnecessary chaos.
					</Card>
				</div>
			</Section>

			<Section
				kicker='WHAT TRAINING FEELS LIKE'
				title='Clear, professional, and welcoming.'
				subtitle='We want students and parents to know what to expect from the start.'
			>
				<div className='grid gap-4 md:grid-cols-2'>
					<Card title='For parents'>
						Classes are structured, respectful, and focused on long-term development, not reckless
						intensity.
					</Card>
					<Card title='For students'>
						Students get guidance, correction, encouragement, and a path that helps them improve
						with confidence.
					</Card>
				</div>

				<div className='mt-8'>
					<SecondaryButton href={TRAINING_HREF}>View Training Options</SecondaryButton>
				</div>
			</Section>

			<Section
				kicker='HOW TO START'
				title='Reach out and we’ll help from there.'
				subtitle='You do not need to know exactly what you need before contacting us.'
			>
				<div className='grid gap-4 md:grid-cols-3'>
					<Card title='1. Text or call'>
						Tell us if you are asking about kids, teens, adults, or private training.
					</Card>
					<Card title='2. Share your goals'>
						We will help you talk through experience, comfort level, and the best fit.
					</Card>
					<Card title='3. Start training'>
						We will guide you toward the right next step so you can begin with clarity.
					</Card>
				</div>

				<div className='mt-8 flex flex-col gap-3 sm:flex-row'>
					<PrimaryButton href={SMS_HREF} external>
						Text to Get Started
					</PrimaryButton>
					<SecondaryButton href={PHONE_HREF} external>
						Call for Training Info
					</SecondaryButton>
				</div>
			</Section>

			<section className='relative z-10 border-t border-white/5'>
				<div className='mx-auto max-w-5xl px-4 py-16'>
					<div className='rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 md:p-10 text-center'>
						<h3 className='text-2xl font-semibold text-white md:text-3xl'>
							Ready to start training?
						</h3>
						<p className='mt-4 mx-auto max-w-2xl text-sm text-white/70 md:text-base'>
							Text or call to ask about classes, private training, or the best fit for you or your
							child.
						</p>
						<div className='mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center'>
							<PrimaryButton href={SMS_HREF} external>
								Text to Get Started
							</PrimaryButton>
							<SecondaryButton href={PHONE_HREF} external>
								Call for Training Info
							</SecondaryButton>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
