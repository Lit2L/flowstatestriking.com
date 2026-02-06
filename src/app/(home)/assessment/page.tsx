// app/assessment/page.tsx
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

function Card({
	kicker,
	title,
	children
}: {
	kicker?: string
	title: string
	children: React.ReactNode
}) {
	return (
		<div className='rounded-2xl border border-white/10 bg-white/[0.03] p-6'>
			{kicker ? (
				<div className='text-xs font-semibold tracking-[0.22em] text-white/55'>{kicker}</div>
			) : null}
			<div className='mt-1 text-base font-semibold text-white/90'>{title}</div>
			<div className='mt-2 text-sm leading-relaxed text-white/70'>{children}</div>
		</div>
	)
}

export default function AssessmentPage() {
	/**
	 * Calendly + Stripe combo (Paid Event)
	 * Replace with your Calendly event link that has Stripe payments enabled.
	 * Example: https://calendly.com/flowstate_striking/assessment
	 */
	const CALENDLY_URL = 'https://calendly.com/flowstatestriking/flow-state-assessment'

	// Optional: support / contact route (adjust to your site)
	const CONTACT_URL = '/contact'

	return (
		<main className='relative min-h-screen bg-[#070A0F] text-white'>
			{/* Background */}
			<div aria-hidden className='pointer-events-none absolute inset-0 overflow-hidden'>
				<div className='absolute -top-24 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl' />
				<div className='absolute top-[40%] right-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl' />
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.06),transparent_45%),radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.10),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(34,211,238,0.08),transparent_45%)]' />
			</div>

			<div className='relative z-10 mx-auto max-w-6xl px-4 py-10 md:py-16'>
				{/* HERO */}
				<div className='max-w-3xl'>
					<p className='text-xs font-semibold tracking-[0.22em] text-white/60'>
						FLOW STATE ASSESSMENT
					</p>

					<h1 className='mt-6 text-3xl font-semibold leading-tight md:text-5xl'>
						Clarity before more training
					</h1>

					<p className='mt-6 text-base leading-relaxed text-white/70 md:text-md'>
						A paid, one-on-one session designed to evaluate posture, stance, balance, and striking
						mechanics under light pressure.
					</p>

					<p className='mt-6 text-base leading-relaxed text-white/70 md:text-md'>
						This is <span className='text-white/85'>not a workout</span> and not a sales session.
						It’s a focused evaluation that gives you a clear next step—whether you continue training
						with me or not.
					</p>

					<div className='mt-12 flex flex-col gap-3 sm:flex-row'>
						<PrimaryButton href={CALENDLY_URL} external>
							Book Assessment (Pay to Confirm)
						</PrimaryButton>

						<SecondaryButton href={CONTACT_URL}>Questions? Contact me</SecondaryButton>
					</div>

					<p className='mt-4 text-xs text-white/55'>
						You’ll choose a time first. Payment happens during booking to confirm the session.
					</p>
				</div>

				{/* GRID */}
				<div className='mt-24 grid gap-4 md:grid-cols-3'>
					<Card kicker='WHAT WE LOOK AT' title='Structure & mechanics'>
						<p>Posture, balance, alignment, and how efficiently force moves through your body.</p>
					</Card>

					<Card kicker='UNDER LIGHT PRESSURE' title='Distance & readiness'>
						<p>How you manage space and stay defensively responsible as pace increases.</p>
					</Card>

					<Card kicker='OUTCOME' title='A clear direction'>
						<p>
							You leave with clarity on what to fix first, what to stop forcing, and the most
							effective path forward.
						</p>
					</Card>
				</div>

				{/* PROCESS */}
				<div className='mt-24 rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10'>
					<h2 className='text-xl font-semibold md:text-2xl'>How it works</h2>

					<ol className='mt-6 space-y-3 text-sm text-white/70 md:text-base'>
						<li>1. Choose an available time</li>
						<li>2. Pay during booking to confirm</li>
						<li>3. Attend the session and get clear direction</li>
					</ol>

					<div className='mt-8 grid gap-4 md:grid-cols-2'>
						<div className='rounded-2xl border border-white/10 bg-white/[0.02] p-5'>
							<div className='text-sm font-semibold text-white/85'>What’s included</div>
							<ul className='mt-3 space-y-1 text-sm text-white/65'>
								<li>• 1 private assessment session</li>
								<li>• Movement + stance evaluation</li>
								<li>• Light technical exchange (no hard sparring)</li>
								<li>• Clear recommendation for next steps</li>
							</ul>
						</div>

						<div className='rounded-2xl border border-white/10 bg-white/[0.02] p-5'>
							<div className='text-sm font-semibold text-white/85'>What to bring</div>
							<ul className='mt-3 space-y-1 text-sm text-white/65'>
								<li>• Comfortable training clothes</li>
								<li>• Water</li>
								<li>• Hand wraps (optional)</li>
								<li>• Gloves (optional)</li>
							</ul>
						</div>
					</div>

					<div className='mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5'>
						<div className='text-sm font-semibold text-white/85'>Cancellation & rescheduling</div>
						<p className='mt-3 text-sm text-white/65'>
							You can reschedule or cancel up to 24 hours in advance using the link in your
							confirmation email. Late cancellations are non-refundable.
						</p>
					</div>
				</div>

				{/* FINAL CTA */}
				<div className='mt-20 flex flex-col gap-3 sm:flex-row'>
					<PrimaryButton href={CALENDLY_URL} external>
						Book Your Assessment
					</PrimaryButton>
					<SecondaryButton href='/pricing'>View pricing</SecondaryButton>
				</div>
			</div>
		</main>
	)
}
