'use client'

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

export default function TrainingPage() {
	const PHONE_HREF = 'tel:+19497852991'
	const SMS_HREF = 'sms:+19497852991'
	const PRICING = '/pricing'

	return (
		<main className='relative min-h-screen bg-[#070A0F] text-white'>
			<div aria-hidden className='pointer-events-none absolute inset-0 overflow-hidden'>
				<div className='absolute -top-24 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl' />
				<div className='absolute top-[40%] right-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl' />
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
						<p className='text-xs font-semibold tracking-[0.22em] text-white/60'>TRAINING</p>
						<h1 className='mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl'>
							Muay Thai, kickboxing, and boxing training for kids, teens, and adults.
						</h1>
						<p className='mt-5 text-base leading-relaxed text-white/70 md:text-lg'>
							Train in a structured, supportive environment at Williams MMA. Whether you are a
							parent looking for the right fit for your child or an adult ready to start training,
							we will help you take the right next step.
						</p>

						<div className='mt-8 flex flex-wrap gap-3 text-xs tracking-[0.16em] text-white/55'>
							{['KIDS', 'TEENS', 'ADULTS', 'BEGINNERS WELCOME', 'PRIVATE TRAINING AVAILABLE'].map(
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
							Questions are welcome. Reach out and we&apos;ll help you find the best fit.
						</p>
					</div>
				</div>
			</section>

			<Section
				kicker='WHO WE HELP'
				title='Training for every stage.'
				subtitle='Our coaching is built to help students grow with confidence, discipline, skill, and control.'
			>
				<div className='grid gap-4 md:grid-cols-3'>
					<Card title='Kids'>
						Build focus, coordination, confidence, and discipline in a positive, structured setting.
					</Card>
					<Card title='Teens'>
						Develop real skill, athleticism, self-belief, and composure through smart training.
					</Card>
					<Card title='Adults'>
						Improve striking, fitness, confidence, and technique in a professional environment.
					</Card>
				</div>
			</Section>

			<Section
				kicker='WHAT TO EXPECT'
				title='Simple, clear, and supportive training.'
				subtitle='We focus on clean fundamentals, steady progress, and helping each student build skill the right way.'
			>
				<div className='grid gap-4 md:grid-cols-3'>
					<Card title='Structured coaching'>
						Sessions are organized with purpose so students know what they are learning and why it
						matters.
					</Card>
					<Card title='Beginner friendly'>
						New students are welcome. Training is adjusted to age, level, and comfort.
					</Card>
					<Card title='Built for growth'>
						We help students build confidence, body control, discipline, and real martial arts skill
						over time.
					</Card>
				</div>
			</Section>

			<Section
				kicker='WHY PARENTS AND STUDENTS CHOOSE US'
				title='A better first step into training.'
				subtitle='This is a great fit for families looking for a safe, professional environment and adults who want real coaching without the chaos.'
			>
				<div className='grid gap-4 md:grid-cols-2'>
					<Card title='Good for parents'>
						Parents can feel confident knowing classes are structured, respectful, and focused on
						long-term development.
					</Card>
					<Card title='Good for students'>
						Students get personal guidance, clear coaching, and a path that helps them improve with
						confidence.
					</Card>
				</div>
			</Section>

			<Section
				kicker='HOW TO START'
				title='Reach out and we’ll guide you from there.'
				subtitle='You do not need to figure everything out before contacting us.'
			>
				<div className='grid gap-4 md:grid-cols-3'>
					<Card title='1. Text or call'>
						Tell us whether you are asking about kids, teens, adults, or private training.
					</Card>
					<Card title='2. Share your goals'>
						We&apos;ll help you talk through experience level, schedule, and what you are looking
						for.
					</Card>
					<Card title='3. Start training'>
						We&apos;ll point you toward the best next step and help you get started.
					</Card>
				</div>

				<div className='mt-8 flex flex-col gap-3 sm:flex-row'>
					<PrimaryButton href={SMS_HREF} external>
						Text to Get Started
					</PrimaryButton>
					<SecondaryButton href={PRICING}>View Pricing</SecondaryButton>
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
