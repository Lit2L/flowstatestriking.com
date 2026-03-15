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

function Card({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<div className='rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8'>
			<h3 className='text-base font-semibold text-white/90'>{title}</h3>
			<div className='mt-3 text-sm leading-relaxed text-white/70'>{children}</div>
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

function PhotoCard({ src, alt, caption }: { src?: string; alt?: string; caption?: string }) {
	return (
		<div className='rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]'>
			<div className='overflow-hidden rounded-2xl border border-white/10 bg-black/10'>
				{src ? (
					// eslint-disable-next-line @next/next/no-img-element
					<img
						src={src}
						alt={alt || 'Coach Larry'}
						className='h-[340px] w-full object-cover md:h-[420px] opacity-90'
					/>
				) : (
					<div className='grid h-[340px] w-full place-items-center text-sm text-white/45 md:h-[420px]' />
				)}
			</div>
			{caption && <div className='mt-3 px-1 text-xs text-white/55'>{caption}</div>}
		</div>
	)
}

export default function AboutPage() {
	const PHONE_HREF = 'tel:+19497852991'
	const SMS_HREF = 'sms:+19497852991'
	const TRAINING = '/training'
	const METHOD = '/method'
	const COACH_PHOTO = '/images/profile.png'

	return (
		<main className='relative min-h-screen bg-[#070A0F] text-white'>
			<div aria-hidden className='pointer-events-none absolute inset-0 overflow-hidden'>
				<div className='absolute -top-24 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl' />
				<div className='absolute top-[35%] right-[-10%] h-[420px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl' />
				<div className='absolute bottom-[-15%] left-[-10%] h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-3xl' />
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
					<div className='grid gap-10 md:grid-cols-2 md:items-start'>
						<div className='max-w-xl'>
							<p className='text-xs font-semibold tracking-[0.22em] text-white/60'>ABOUT</p>
							<h1 className='mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl'>
								Meet Coach Larry
							</h1>
							<p className='mt-5 text-base leading-relaxed text-white/70 md:text-lg'>
								I help kids, teens, and adults learn Muay Thai, kickboxing, and boxing through
								structured coaching, clean fundamentals, and a supportive environment.
							</p>
							<p className='mt-4 text-base leading-relaxed text-white/70'>
								My goal is to help students build confidence, discipline, body control, and real
								skill in a way that feels clear, approachable, and built to last.
							</p>

							<div className='mt-8 flex flex-col gap-3 sm:flex-row'>
								<PrimaryButton href={SMS_HREF} external>
									Text to Get Started
								</PrimaryButton>
								<SecondaryButton href={PHONE_HREF} external>
									Call for Training Info
								</SecondaryButton>
							</div>

							<div className='mt-10 grid gap-3 md:grid-cols-3'>
								<MiniPill text='22+ years experience' />
								<MiniPill text='Kids • Teens • Adults' />
								<MiniPill text='Coaching @ Williams MMA' />
							</div>
						</div>

						<PhotoCard
							src={COACH_PHOTO || undefined}
							alt='Coach Larry'
							caption='Flow State Striking • Coaching at Williams MMA'
						/>
					</div>
				</div>
			</section>

			<section className='relative z-10 border-t border-white/5'>
				<div className='mx-auto max-w-5xl px-4 py-14 md:py-18'>
					<div className='max-w-3xl'>
						<p className='text-xs font-semibold tracking-[0.22em] text-white/60'>MY APPROACH</p>
						<h2 className='mt-3 text-2xl font-semibold text-white md:text-4xl'>
							Simple, structured, and supportive.
						</h2>
						<p className='mt-4 text-sm leading-relaxed text-white/70 md:text-base'>
							I believe students learn best when coaching is clear, progress is steady, and the
							environment is positive. Good training should challenge people without overwhelming
							them.
						</p>
					</div>

					<div className='mt-8 grid gap-4 md:grid-cols-3'>
						<Card title='Structure'>
							Students need a strong foundation. I focus on posture, balance, clean technique, and
							good habits that make progress easier.
						</Card>
						<Card title='Timing'>
							Training is not just about throwing strikes. It is about learning when to move, when
							to strike, and how to stay composed.
						</Card>
						<Card title='Control'>
							I want students to feel organized and confident, not rushed or chaotic. Control is a
							big part of building real skill.
						</Card>
					</div>
				</div>
			</section>

			<section className='relative z-10 border-t border-white/5'>
				<div className='mx-auto max-w-5xl px-4 py-14 md:py-18'>
					<div className='grid gap-6 md:grid-cols-2'>
						<Card title='My background'>
							<ul className='space-y-2'>
								<li>• 22+ years of martial arts experience</li>
								<li>• Background in Muay Thai, kickboxing, and boxing</li>
								<li>• Years of competition experience</li>
								<li>• Coaching kids, teens, adults, and private students</li>
								<li>• Focused on long-term development and intelligent training</li>
							</ul>
						</Card>

						<Card title='Why I coach'>
							I love helping people grow. Martial arts can build confidence, discipline, focus, and
							self-belief in a way that carries into everyday life.
							<br />
							<br />
							Whether someone is brand new or more experienced, I enjoy helping them understand
							their movement, improve their skills, and feel proud of their progress.
						</Card>
					</div>
				</div>
			</section>

			<section className='relative z-10 border-t border-white/5'>
				<div className='mx-auto max-w-5xl px-4 py-14 md:py-18'>
					<div className='max-w-3xl'>
						<p className='text-xs font-semibold tracking-[0.22em] text-white/60'>WHO I WORK WITH</p>
						<h2 className='mt-3 text-2xl font-semibold text-white md:text-4xl'>
							A good fit for families, beginners, and students who want real guidance.
						</h2>
						<p className='mt-4 text-sm leading-relaxed text-white/70 md:text-base'>
							I work best with students who want to learn the right way and parents looking for a
							structured, positive environment for their child.
						</p>
					</div>

					<div className='mt-8 grid gap-3 md:grid-cols-2'>
						{[
							'Kids who need confidence, coordination, and discipline',
							'Teens who want skill, self-belief, and athletic development',
							'Adults who want practical training and personal growth',
							'Beginners who want a clean, supportive introduction',
							'Parents looking for a professional and structured environment',
							'Families interested in parent + child private training together'
						].map((t) => (
							<MiniPill key={t} text={t} />
						))}
					</div>
				</div>
			</section>

			<section className='relative z-10 border-t border-white/5'>
				<div className='mx-auto max-w-5xl px-4 py-14 md:py-18'>
					<div className='grid gap-4 md:grid-cols-2'>
						<Card title='For parents'>
							If you are looking for the right place for your child to start, I aim to create a
							class environment that is safe, respectful, engaging, and focused on real growth.
						</Card>
						<Card title='For students'>
							If you are ready to start training, you do not need to have everything figured out
							first. Reach out and I&apos;ll help you find the best next step.
						</Card>
					</div>

					<div className='mt-8'>
						<SecondaryButton href={METHOD}>View the Method</SecondaryButton>
					</div>
				</div>
			</section>

			<section className='relative z-10 border-t border-white/5'>
				<div className='mx-auto max-w-5xl px-4 py-16'>
					<div className='rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 md:p-10 text-center'>
						<h2 className='text-2xl font-semibold text-white md:text-3xl'>
							Ready to start training?
						</h2>
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
							<SecondaryButton href={TRAINING}>View Training</SecondaryButton>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
