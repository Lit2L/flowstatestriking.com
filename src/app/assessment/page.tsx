// app/assessment/page.tsx
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

function Pill({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<div className='rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]'>
			<div className='text-sm font-semibold tracking-wide text-white/90'>{title}</div>
			<div className='mt-2 text-sm leading-relaxed text-white/70'>{children}</div>
		</div>
	)
}

export default function AssessmentPage() {
	const BOOKING_HREF = '/book' // swap to your real route later (Stripe/Calendly)

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
							<SecondaryButton href='/method'>View the Method</SecondaryButton>
							<PrimaryButton href={BOOKING_HREF}>Book Assessment</PrimaryButton>
						</div>
					</div>
				</div>
			</div>

			{/* Hero */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 pb-10 pt-10 md:pb-16 md:pt-16'>
					<div className='max-w-3xl'>
						<p className='text-xs font-semibold tracking-[0.22em] text-white/60'>START HERE</p>
						<h1 className='mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl'>
							Start with an Assessment.
						</h1>
						<p className='mt-4 text-base leading-relaxed text-white/70 md:text-lg'>
							You don’t need to prove anything before you train here.
							<br className='hidden md:block' />
							This is a focused 1-on-1 session to identify where your{' '}
							<span className='text-white/90'>Structure</span>,{' '}
							<span className='text-white/90'>Position</span>, and{' '}
							<span className='text-white/90'>Timing</span> break down — and what to fix first.
						</p>

						<div className='mt-7 flex flex-col gap-3 sm:flex-row'>
							<PrimaryButton href={BOOKING_HREF}>Book Your Assessment</PrimaryButton>
							<SecondaryButton href='/method'>View the Method</SecondaryButton>
						</div>

						<p className='mt-4 text-xs text-white/55'>Private • Focused • No experience required</p>
					</div>

					<div className='mt-10 grid gap-3 md:grid-cols-3'>
						<Pill title='Clarity first'>
							This isn’t random training. It’s a diagnostic session that shows you what’s actually
							happening.
						</Pill>
						<Pill title='Immediate corrections'>
							You leave with 1–2 concrete fixes that improve control right away.
						</Pill>
						<Pill title='A real path forward'>
							After the session, you’ll know exactly what to train next — without pressure.
						</Pill>
					</div>
				</div>
			</section>

			{/* What happens */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 py-10 md:py-14'>
					<div className='max-w-3xl'>
						<h2 className='text-2xl font-semibold text-white md:text-3xl'>
							What happens in the assessment
						</h2>
						<p className='mt-3 text-sm leading-relaxed text-white/70 md:text-base'>
							Simple inputs. Clear feedback. Pressure added lightly—just enough to reveal what
							breaks when things speed up.
						</p>
					</div>

					<div className='mt-8 grid gap-4 md:grid-cols-2'>
						<Card title='1) Movement & posture check'>
							We look at how you stand, move, and recover balance — not how hard you hit.
						</Card>
						<Card title='2) Connection & mechanics'>
							We check whether your strikes are connected to the ground or forced through the
							shoulders and arms.
						</Card>
						<Card title='3) Position & distance'>
							How you enter, exit, and manage space so you stop getting caught reaching or crowded.
						</Card>
						<Card title='4) Timing & decision-making'>
							Do you rush, freeze, chase… or stay ready and choose clean moments?
						</Card>
					</div>
				</div>
			</section>

			{/* What you leave with */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 py-10 md:py-14'>
					<div className='rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10'>
						<h3 className='text-xl font-semibold text-white md:text-2xl'>What you leave with</h3>

						<ul className='mt-4 grid gap-3 text-sm text-white/70 md:grid-cols-2 md:text-base'>
							<li className='rounded-xl border border-white/10 bg-white/[0.02] p-4'>
								Clarity on <span className='text-white/90'>what’s holding you back</span>
							</li>
							<li className='rounded-xl border border-white/10 bg-white/[0.02] p-4'>
								1–2 fixes that improve control <span className='text-white/90'>immediately</span>
							</li>
							<li className='rounded-xl border border-white/10 bg-white/[0.02] p-4'>
								A simple focus for your next 2–4 weeks
							</li>
							<li className='rounded-xl border border-white/10 bg-white/[0.02] p-4'>
								A recommended training path forward —{' '}
								<span className='text-white/90'>no pressure</span>
							</li>
						</ul>

						<div className='mt-7 flex flex-col gap-3 sm:flex-row'>
							<PrimaryButton href={BOOKING_HREF}>Book Your Assessment</PrimaryButton>
							<SecondaryButton href='/method'>View the Method</SecondaryButton>
						</div>
					</div>
				</div>
			</section>

			{/* Who this is for */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 py-10 md:py-14'>
					<div className='grid gap-8 md:grid-cols-2 md:items-start'>
						<div>
							<h3 className='text-2xl font-semibold text-white md:text-3xl'>Who this is for</h3>
							<p className='mt-3 text-sm leading-relaxed text-white/70 md:text-base'>
								Beginners, experienced students, and anyone who feels pressure makes them lose
								themselves.
							</p>
							<ul className='mt-5 space-y-3 text-sm text-white/70 md:text-base'>
								<li>• Beginners who want a clean foundation</li>
								<li>• People who feel fast but inconsistent</li>
								<li>• Anyone who gets hit more than they should</li>
								<li>• Adults who want longevity, not damage</li>
								<li>• Parents who want structure and safety</li>
							</ul>
						</div>

						<div className='rounded-3xl border border-white/10 bg-white/[0.03] p-7'>
							<h4 className='text-base font-semibold text-white/90'>What this is not</h4>
							<ul className='mt-4 space-y-3 text-sm text-white/70'>
								<li>• Not a beatdown</li>
								<li>• Not random pad work</li>
								<li>• Not a toughness test</li>
								<li>• Not chaos disguised as intensity</li>
							</ul>

							<div className='mt-6 border-t border-white/10 pt-6'>
								<p className='text-sm text-white/70'>
									If you’re unsure where to begin, this session will tell us exactly what you need.
								</p>
								<div className='mt-4'>
									<PrimaryButton href={BOOKING_HREF}>Book Your Assessment</PrimaryButton>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Closing CTA */}
			<section className='relative z-10'>
				<div className='mx-auto max-w-6xl px-4 pb-16 pt-8'>
					<div className='rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 md:p-10'>
						<h3 className='text-2xl font-semibold text-white md:text-3xl'>
							The fastest way to understand the method is to feel it.
						</h3>
						<p className='mt-3 text-sm text-white/70 md:text-base'>
							Start with an assessment. Walk out with clarity.
						</p>
						<div className='mt-6 flex flex-col gap-3 sm:flex-row'>
							<PrimaryButton href={BOOKING_HREF}>Book Your Assessment</PrimaryButton>
							<SecondaryButton href='/method'>View the Method</SecondaryButton>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
