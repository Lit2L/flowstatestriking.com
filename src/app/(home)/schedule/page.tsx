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
		'inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold',
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
		'inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold',
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

function StepCard({
	number,
	title,
	children
}: {
	number: string
	title: string
	children: React.ReactNode
}) {
	return (
		<div className='rounded-2xl border border-white/10 bg-white/[0.03] p-6'>
			<div className='text-xs font-semibold tracking-[0.22em] text-white/55'>STEP {number}</div>
			<div className='mt-2 text-base font-semibold text-white/90'>{title}</div>
			<div className='mt-2 text-sm leading-relaxed text-white/70'>{children}</div>
		</div>
	)
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<div className='rounded-2xl border border-white/10 bg-white/[0.03] p-6'>
			<div className='text-base font-semibold text-white/90'>{title}</div>
			<div className='mt-3 text-sm leading-relaxed text-white/70'>{children}</div>
		</div>
	)
}

export default function SchedulePage() {
	const PHONE_HREF = 'tel:+17145551234'
	const SMS_HREF = 'sms:+17145551234'

	return (
		<main className='relative min-h-screen bg-[#070A0F] text-white'>
			<div aria-hidden className='pointer-events-none absolute inset-0 overflow-hidden'>
				<div className='absolute -top-24 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl' />
				<div className='absolute top-[40%] right-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl' />
			</div>

			<div className='relative z-10 mx-auto max-w-5xl px-4 py-12 md:py-20'>
				<div className='max-w-3xl'>
					<p className='text-xs font-semibold tracking-[0.22em] text-white/60'>GET STARTED</p>

					<h1 className='mt-6 text-3xl font-semibold md:text-5xl'>
						Text or call to schedule training.
					</h1>

					<p className='mt-5 text-base leading-relaxed text-white/70 md:text-lg'>
						We keep scheduling simple. Reach out directly and we&apos;ll help you find the right fit
						for kids, teens, adults, or private training.
					</p>

					<div className='mt-8 flex flex-col gap-3 sm:flex-row'>
						<PrimaryButton href={SMS_HREF} external>
							Text to Get Started
						</PrimaryButton>
						<SecondaryButton href={PHONE_HREF} external>
							Call for Training Info
						</SecondaryButton>
					</div>

					<p className='mt-4 text-sm text-white/55'>
						30-minute, 45-minute, and 60-minute private sessions are available.
					</p>
				</div>

				<div className='mt-16 grid gap-4 md:grid-cols-3'>
					<StepCard number='1' title='Reach out'>
						Text or call and let us know if you are asking about kids, teens, adults, or private
						training.
					</StepCard>
					<StepCard number='2' title='Talk through your goals'>
						We&apos;ll help you find the best option based on age, level, schedule, and what you
						want from training.
					</StepCard>
					<StepCard number='3' title='Choose a time'>
						Once we know the best fit, we&apos;ll coordinate a time directly with you.
					</StepCard>
				</div>

				<div className='mt-16 grid gap-4 md:grid-cols-2'>
					<InfoCard title='Great for parents and families'>
						If you are asking about training for your child or teen, just send a message and
						we&apos;ll help you understand the best next step.
					</InfoCard>
					<InfoCard title='Good for new adult students too'>
						Adults who are new to training or returning after time away can reach out directly and
						get guided toward the right option.
					</InfoCard>
				</div>

				<div className='mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 text-center'>
					<h2 className='text-2xl font-semibold md:text-3xl'>Ready to schedule?</h2>
					<p className='mt-4 mx-auto max-w-2xl text-sm text-white/70 md:text-base'>
						Text or call to ask questions, check availability, and get started.
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
		</main>
	)
}
