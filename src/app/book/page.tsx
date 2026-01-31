// app/book/page.tsx
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

function Card({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<div className='rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]'>
			<div className='text-base font-semibold text-white/90'>{title}</div>
			<div className='mt-2 text-sm leading-relaxed text-white/70'>{children}</div>
		</div>
	)
}

export default function BookPage() {
	// Replace these with your actual booking/payment destinations.
	const CALENDLY_URL = 'https://calendly.com/flowstatestriking/flow-state-assessment'
	const STRIPE_URL = 'https://buy.stripe.com/28EfZg0yW85DgBJ8RU1VK08'

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
					<p className='text-xs font-semibold tracking-[0.22em] text-white/60'>BOOKING</p>
					<h1 className='mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl'>
						Book your Assessment
					</h1>
					<p className='mt-4 text-base leading-relaxed text-white/70 md:text-lg'>
						Choose your booking method. If you’re unsure, start with the standard option.
					</p>

					<div className='mt-7 flex flex-col gap-3 sm:flex-row'>
						{/* For immediate testing without external links */}
						<PrimaryButton href='/assessment/confirmed'>Complete Booking (Test)</PrimaryButton>
						<SecondaryButton href='/assessment'>Back to Assessment</SecondaryButton>
					</div>

					<p className='mt-4 text-xs text-white/55'>
						{/* Swap these links to your real Calendly / Stripe URLs when ready. */}
					</p>
				</div>

				<div className='mt-10 grid gap-4 md:grid-cols-3'>
					<Card title='Option 1: Schedule (Calendly)'>
						<p className='mb-4'>Pick a time on the calendar and lock it in.</p>
						<a
							href={CALENDLY_URL}
							target='_blank'
							rel='noreferrer'
							className='inline-flex rounded-xl border border-white/15 bg-white/[0.02] px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/[0.05] transition'
						>
							Open Calendly
						</a>
					</Card>

					<Card title='Option 2: Pay (Stripe)'>
						<p className='mb-4'>
							Pay first, then schedule. Best for commitment and fast follow-through.
						</p>
						<a
							href={STRIPE_URL}
							target='_blank'
							rel='noreferrer'
							className='inline-flex rounded-xl border border-white/15 bg-white/[0.02] px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/[0.05] transition'
						>
							Open Stripe Checkout
						</a>
					</Card>

					<Card title='What happens next'>
						<p>
							After booking, you’ll receive a short confirmation with what to bring and what to
							expect. The session is focused, safe, and designed for clarity.
						</p>
					</Card>
				</div>

				<div className='mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10'>
					<h2 className='text-xl font-semibold text-white md:text-2xl'>What to bring</h2>
					<ul className='mt-4 space-y-2 text-sm text-white/70 md:text-base'>
						<li>• Comfortable training clothes</li>
						<li>• Water</li>
						<li>• Hand wraps (if you have them)</li>
						<li>• A simple goal: “What keeps happening to me?”</li>
					</ul>
				</div>
			</div>
		</main>
	)
}
