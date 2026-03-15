import Link from 'next/link'

function cx(...classes: Array<string | false | null | undefined>) {
	return classes.filter(Boolean).join(' ')
}

function Button({
	href,
	children,
	variant = 'primary',
	external
}: {
	href: string
	children: React.ReactNode
	variant?: 'primary' | 'secondary'
	external?: boolean
}) {
	const base =
		'inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition'
	const primary = 'bg-white text-black hover:bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.35)]'
	const secondary = 'border border-white/15 bg-white/[0.02] text-white/90 hover:bg-white/[0.05]'

	const className = cx(base, variant === 'primary' ? primary : secondary)

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

function PriceCard({
	badge,
	title,
	price,
	desc,
	includes,
	highlight
}: {
	badge?: string
	title: string
	price: string
	desc: string
	includes: string[]
	highlight?: boolean
}) {
	return (
		<div
			className={cx(
				'relative rounded-3xl border p-7 md:p-8',
				highlight
					? 'border-emerald-400/30 bg-white/[0.05] shadow-[0_0_0_1px_rgba(16,185,129,0.15)]'
					: 'border-white/10 bg-white/[0.03]'
			)}
		>
			{highlight ? (
				<div className='absolute -top-3 right-5 rounded-full border border-emerald-400/30 bg-emerald-400/15 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-emerald-300'>
					MOST POPULAR
				</div>
			) : null}
			{badge ? (
				<div className='inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-white/60'>
					<span className='h-2 w-2 rounded-full bg-emerald-400/80' />
					{badge}
				</div>
			) : null}
			<div className='mt-3 flex items-start justify-between gap-4'>
				<div>
					<div className='text-xl font-semibold text-white/95'>{title}</div>
				</div>
				<div className='text-right text-2xl font-semibold text-white'>{price}</div>
			</div>

			<p className='mt-5 text-sm leading-relaxed text-white/70'>{desc}</p>

			{highlight ? (
				<p className='mt-3 text-sm font-medium text-emerald-300'>Most students start here.</p>
			) : null}

			<div className='mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5'>
				<div className='text-sm font-semibold text-white/85'>Includes</div>
				<ul className='mt-3 space-y-1 text-sm text-white/65'>
					{includes.map((x) => (
						<li key={x}>• {x}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

function StepCard({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
	return (
		<div className='rounded-2xl border border-white/10 bg-white/[0.03] p-6'>
			<div className='text-xs font-semibold tracking-[0.22em] text-white/55'>STEP {n}</div>
			<div className='mt-2 text-base font-semibold text-white/90'>{title}</div>
			<div className='mt-2 text-sm leading-relaxed text-white/70'>{children}</div>
		</div>
	)
}

export default function PricingPage() {
	const PHONE_HREF = 'tel:+19497852991'
	const SMS_HREF = 'sms:+19497852991'

	return (
		<main className='relative min-h-screen bg-[#070A0F] text-white'>
			<div aria-hidden className='pointer-events-none absolute inset-0 overflow-hidden'>
				<div className='absolute -top-24 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl' />
				<div className='absolute top-[40%] right-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl' />
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.06),transparent_45%),radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.10),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(34,211,238,0.08),transparent_45%)]' />
			</div>

			<div className='relative z-10 mx-auto max-w-5xl px-4 py-10 md:py-16'>
				<div className='max-w-3xl'>
					<p className='text-xs font-semibold tracking-[0.22em] text-white/60'>PRICING</p>
					<h1 className='mt-6 text-3xl font-semibold leading-tight md:text-5xl'>
						Simple pricing. Clear next steps.
					</h1>
					<p className='mt-6 text-base leading-relaxed text-white/70 md:text-lg'>
						Whether you are looking for training for your child, your teen, or yourself, reach out
						by text or call and we&apos;ll help you choose the best fit. Parent + child private
						training is also available for families who want to learn together.
					</p>
					<p className='mt-6 text-sm leading-relaxed text-white/70 md:text-md'>
						Shorter 30-minute and 45-minute private sessions are also available for students who
						prefer quicker or more focused training.
					</p>

					<div className='mt-10 flex flex-col gap-3 sm:flex-row'>
						<Button href={SMS_HREF} external variant='primary'>
							Text to Get Started
						</Button>
						<Button href={PHONE_HREF} external variant='secondary'>
							Call for Training Info
						</Button>
					</div>
				</div>

				<div className='mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10'>
					<h2 className='text-xl font-semibold md:text-2xl'>How to start</h2>
					<div className='mt-6 grid gap-4 md:grid-cols-3'>
						<StepCard n='1' title='Reach out'>
							Text or call and let us know if you are asking about kids, teens, adults, or private
							training.
						</StepCard>
						<StepCard n='2' title='Talk through your goals'>
							We&apos;ll help you figure out the right fit based on age, experience level, and what
							you want from training.
						</StepCard>
						<StepCard n='3' title='Get started'>
							Once we point you in the right direction, you can begin with confidence.
						</StepCard>
					</div>
				</div>

				<div className='mt-16 grid gap-4 lg:grid-cols-3'>
					<PriceCard
						badge='PRIVATE SESSION'
						title='Single Private Session'
						price='$100'
						desc='A focused one-on-one training session with Coach Larry. Great for beginners, skill refinement, or students who want personalized coaching.'
						includes={[
							'60 minute private session',
							'Personal coaching and technical correction',
							'Great for kids, teens, and adults',
							'Parent + child sessions available'
						]}
					/>

					<PriceCard
						badge='⭐ MOST POPULAR'
						title='5 Private Sessions'
						price='$475'
						desc='The most common starting point. Consistent sessions help students build skill, confidence, and real progress.'
						includes={[
							'5 private sessions',
							'Better continuity and progress',
							'Technique development and drills',
							'Great for beginners and intermediate students'
						]}
						highlight
					/>

					<PriceCard
						badge='💎 BEST VALUE'
						title='10 Private Sessions'
						price='$900'
						desc='Best option for students who want the fastest improvement and the most coaching support.'
						includes={[
							'10 private sessions',
							'Best value per session',
							'More reps, correction, and development',
							'Ideal for long-term progress'
						]}
					/>
				</div>

				<div className='rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8'>
					<div className='text-xs font-semibold tracking-[0.22em] text-white/60'>GOOD TO KNOW</div>
					<h2 className='mt-3 text-2xl font-semibold text-white'>
						Who private training is good for
					</h2>
					<div className='mt-5 grid gap-4 md:grid-cols-3'>
						<div className='rounded-2xl border border-white/10 bg-white/[0.02] p-5'>
							<div className='text-sm font-semibold text-white/90'>Parents and kids</div>
							<p className='mt-2 text-sm text-white/70'>
								Great for kids who benefit from extra attention, a slower pace, or more personal
								guidance.
							</p>
						</div>
						<div className='rounded-2xl border border-white/10 bg-white/[0.02] p-5'>
							<div className='text-sm font-semibold text-white/90'>Parent + child together</div>
							<p className='mt-2 text-sm text-white/70'>
								A great option for families who want to train side by side, build confidence
								together, and share the experience.
							</p>
						</div>
						<div className='rounded-2xl border border-white/10 bg-white/[0.02] p-5'>
							<div className='text-sm font-semibold text-white/90'>Teens and adults</div>
							<p className='mt-2 text-sm text-white/70'>
								Great for beginners, busy adults, and students who want faster progress with
								one-on-one coaching.
							</p>
						</div>
					</div>
				</div>

				<div className='rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8'>
					<div className='text-xs font-semibold tracking-[0.22em] text-white/60'>NOT SURE?</div>
					<div className='mt-3 text-xl font-semibold text-white/95'>We can help you choose.</div>
					<p className='mt-4 text-sm leading-relaxed text-white/70'>
						Reach out with questions and we&apos;ll help you decide what makes the most sense for
						you or your child.
					</p>

					<div className='mt-6 flex flex-col gap-3'>
						<Button href={SMS_HREF} external variant='primary'>
							Text to Get Started
						</Button>
						<Button href={PHONE_HREF} external variant='secondary'>
							Call for Training Info
						</Button>
					</div>
				</div>
			</div>

			<div className='mt-16 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 md:p-10 text-center'>
				<h2 className='text-2xl font-semibold md:text-3xl'>Ready to start training?</h2>
				<p className='mt-4 mx-auto max-w-2xl text-sm text-white/70 md:text-base'>
					Text or call to ask about pricing, private sessions, or the best fit for kids, teens, and
					adults.
				</p>
				<div className='mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center'>
					<Button href={SMS_HREF} external variant='primary'>
						Text to Get Started
					</Button>
					<Button href={PHONE_HREF} external variant='secondary'>
						Call for Training Info
					</Button>
				</div>
			</div>
		</main>
	)
}
