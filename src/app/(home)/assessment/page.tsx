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

function SimpleCard({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<div className='rounded-2xl border border-white/10 bg-white/[0.03] p-6'>
			<h3 className='text-base font-semibold text-white/90'>{title}</h3>
			<div className='mt-2 text-sm leading-relaxed text-white/70'>{children}</div>
		</div>
	)
}

export default function AssessmentPage() {
	const CONTACT_URL = '/contact'
	const PHONE_HREF = 'tel:+19497852991'
	const SMS_HREF = 'sms:+19497852991'

	return (
		<main className='relative min-h-screen bg-[#070A0F] text-white'>
			<div aria-hidden className='pointer-events-none absolute inset-0 overflow-hidden'>
				<div className='absolute -top-24 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl' />
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.06),transparent_45%),radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.10),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(34,211,238,0.08),transparent_45%)]' />
			</div>

			<div className='relative z-10 mx-auto max-w-5xl px-4 py-12 md:py-20'>
				<section className='max-w-3xl'>
					<p className='text-xs font-semibold tracking-[0.22em] text-white/60'>ASSESSMENT</p>

					<h1 className='mt-6 text-3xl font-semibold leading-tight md:text-5xl'>
						Start with a private assessment.
					</h1>

					<p className='mt-6 text-base leading-relaxed text-white/70 md:text-lg'>
						A simple first step for kids, teens, and adults who want to train the right way. We look
						at your level, movement, and goals, then give you a clear recommendation for what to do
						next.
					</p>

					<div className='mt-8 flex flex-wrap gap-3 text-xs tracking-[0.16em] text-white/55'>
						{['KIDS', 'TEENS', 'ADULTS', 'PRIVATE 1-ON-1'].map((item) => (
							<span
								key={item}
								className='rounded-full border border-white/10 bg-white/[0.03] px-3 py-2'
							>
								{item}
							</span>
						))}
					</div>

					<div className='mt-10 flex flex-col gap-3 sm:flex-row'>
						<PrimaryButton href={SMS_HREF} external>
							Text to Get Started
						</PrimaryButton>
						<SecondaryButton href={PHONE_HREF} external>
							Call for Training Info
						</SecondaryButton>
					</div>

					<p className='mt-4 text-sm text-white/55'>
						Reach out by text or call and I&apos;ll help you choose the right next step.
					</p>
				</section>

				<section className='mt-16 grid gap-4 md:grid-cols-3'>
					<SimpleCard title='For beginners and growing students'>
						Great for people who want a clean starting point, more confidence, and real direction.
					</SimpleCard>

					<SimpleCard title='Clear next steps'>
						You will leave knowing what level you are at, what needs work first, and the best way to
						move forward.
					</SimpleCard>

					<SimpleCard title='No pressure'>
						This is not a hard sparring session and not a sales pitch. It is a focused coaching
						session designed to help you start well.
					</SimpleCard>
				</section>

				<section className='mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10'>
					<h2 className='text-2xl font-semibold'>What happens in the assessment</h2>

					<div className='mt-8 grid gap-4 md:grid-cols-3'>
						{[
							{
								step: '1',
								title: 'We meet and assess',
								desc: 'We go over experience, goals, stance, movement, and basic technique.'
							},
							{
								step: '2',
								title: 'You get coached',
								desc: 'You will be guided through simple drills so I can see what will help you most.'
							},
							{
								step: '3',
								title: 'You get a plan',
								desc: 'I recommend the best next step for you, whether that is kids, teens, adult classes, or private training.'
							}
						].map((item) => (
							<div
								key={item.step}
								className='rounded-2xl border border-white/10 bg-white/[0.02] p-5'
							>
								<div className='text-[10px] font-semibold tracking-[0.22em] text-emerald-400'>
									STEP {item.step}
								</div>
								<div className='mt-2 text-sm font-semibold text-white/90'>{item.title}</div>
								<p className='mt-2 text-sm text-white/65'>{item.desc}</p>
							</div>
						))}
					</div>
				</section>

				<section className='mt-16 grid gap-4 md:grid-cols-2'>
					<div className='rounded-2xl border border-white/10 bg-white/[0.03] p-6'>
						<h3 className='text-base font-semibold text-white/90'>What&apos;s included</h3>
						<ul className='mt-4 space-y-2 text-sm text-white/70'>
							<li>• 1 private assessment session</li>
							<li>• Movement and technique evaluation</li>
							<li>• Coaching and live feedback</li>
							<li>• Clear recommendation for next steps</li>
						</ul>
					</div>

					<div className='rounded-2xl border border-white/10 bg-white/[0.03] p-6'>
						<h3 className='text-base font-semibold text-white/90'>What to bring</h3>
						<ul className='mt-4 space-y-2 text-sm text-white/70'>
							<li>• Comfortable training clothes</li>
							<li>• Water</li>
							<li>• Hand wraps if you have them</li>
							<li>• Gloves if you have them</li>
						</ul>
					</div>
				</section>

				<section className='mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 text-center'>
					<h2 className='text-2xl md:text-3xl font-semibold'>Ready to get started?</h2>
					<p className='mt-4 mx-auto max-w-2xl text-white/70 leading-relaxed'>
						Text or call to ask questions, talk through your goals, and find the right training
						path.
					</p>

					<div className='mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center'>
						<PrimaryButton href={SMS_HREF} external>
							Text to Get Started
						</PrimaryButton>
						<SecondaryButton href={PHONE_HREF} external>
							Call for Training Info
						</SecondaryButton>
					</div>

					<p className='mt-5 text-xs text-white/50'>
						Best for kids, teens, adults, and anyone looking for a clear first step.
					</p>
				</section>
			</div>
		</main>
	)
}
