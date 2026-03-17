'use client'

import Link from 'next/link'
import CTAButton from './cta-button'

export default function LandingRedo() {
	return (
		<div className='min-h-screen bg-[#0A0A0A] text-neutral-100'>
			<section className='relative overflow-hidden border-b border-white/5'>
				<div className='absolute inset-0 -z-10'>
					<div className='absolute inset-0 bg-[radial-gradient(900px_500px_at_15%_20%,rgba(52,211,153,0.10),transparent_55%),radial-gradient(700px_450px_at_80%_25%,rgba(255,255,255,0.04),transparent_60%),linear-gradient(to_bottom,rgba(10,10,10,0.0),rgba(10,10,10,0.92))]' />
				</div>

				<div className='mx-auto max-w-5xl px-5 sm:px-8 py-24 md:py-32'>
					<div className='max-w-3xl'>
						<p className='text-xs tracking-[0.22em] text-neutral-500'>FLOW STATE STRIKING</p>

						<h1 className='mt-5 text-4xl md:text-6xl font-medium tracking-tight text-neutral-100'>
							Muay Thai, Kickboxing, and Boxing Coaching That Builds Real Skill.
						</h1>

						<p className='mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-neutral-400'>
							Train with structure, timing, and control at Williams MMA. Private coaching for kids,
							teens, and adults.
						</p>

						<div className='mt-8 flex flex-col sm:flex-row gap-3'>
							<CTAButton href='/assessment'>Book an Assessment</CTAButton>
							<CTAButton href='/training' variant='ghost'>
								View Training Options
							</CTAButton>
						</div>

						<div className='mt-8 flex flex-wrap gap-3 text-xs tracking-[0.16em] text-neutral-500'>
							{['COACHING @ WILLIAMS MMA', 'KIDS • TEENS • ADULTS', 'PRIVATE SESSIONS'].map(
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
					</div>
				</div>
			</section>
			<section className='py-16 md:py-20'>
				<div className='mx-auto max-w-5xl px-5 sm:px-8'>
					<div className='grid md:grid-cols-3 gap-4'>
						{[
							{
								title: 'Structured coaching',
								desc: 'Learn with a clear system instead of random combinations and guesswork.'
							},
							{
								title: 'Built for all levels',
								desc: 'Whether you are new or experienced, training is adjusted to your level and goals.'
							},
							{
								title: 'Skill with longevity',
								desc: 'Develop confidence, timing, and technique without relying on chaos or ego.'
							}
						].map((item) => (
							<div
								key={item.title}
								className='rounded-3xl border border-white/10 bg-white/[0.03] p-6'
							>
								<h2 className='text-lg text-neutral-100'>{item.title}</h2>
								<p className='mt-3 text-sm leading-relaxed text-neutral-400'>{item.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className='py-16 md:py-20 border-t border-white/5'>
				<div className='mx-auto max-w-5xl px-5 sm:px-8'>
					<div className='max-w-2xl'>
						<p className='text-xs tracking-[0.22em] text-neutral-500'>WHO IT&apos;S FOR</p>
						<h2 className='mt-4 text-3xl md:text-4xl font-medium tracking-tight'>
							Training for kids, teens, and adults.
						</h2>
						<p className='mt-4 text-neutral-400 leading-relaxed'>
							This is for beginners who want a clean foundation, students who want sharper timing
							and technique, and adults who want practical training in a professional environment.
						</p>
					</div>

					<div className='mt-10 grid md:grid-cols-3 gap-4'>
						{[
							{
								title: 'Kids',
								desc: 'Build confidence, focus, discipline, and coordination in a structured setting.'
							},
							{
								title: 'Teens',
								desc: 'Develop real skill, athleticism, self-belief, and composure under pressure.'
							},
							{
								title: 'Adults',
								desc: 'Improve striking, fitness, and confidence through intelligent coaching.'
							}
						].map((item) => (
							<div
								key={item.title}
								className='rounded-3xl border border-white/10 bg-white/[0.02] p-6'
							>
								<div className='text-sm text-neutral-100'>{item.title}</div>
								<p className='mt-3 text-sm leading-relaxed text-neutral-400'>{item.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className='py-16 md:py-20 border-t border-white/5'>
				<div className='mx-auto max-w-5xl px-5 sm:px-8'>
					<div className='grid lg:grid-cols-[1.2fr_0.8fr] gap-6 items-start'>
						<div className='rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8'>
							<p className='text-xs tracking-[0.22em] text-neutral-500'>START HERE</p>
							<h2 className='mt-4 text-3xl md:text-4xl font-medium tracking-tight'>
								Book an assessment.
							</h2>
							<p className='mt-4 text-neutral-400 leading-relaxed max-w-2xl'>
								The assessment is the best first step. We identify where you are, what needs work,
								and the right training path for you.
							</p>

							<div className='mt-8 grid sm:grid-cols-3 gap-3'>
								{[
									{
										step: '1',
										title: 'Book',
										desc: 'Reserve your assessment session.'
									},
									{
										step: '2',
										title: 'Train',
										desc: 'Get coached and evaluated in real time.'
									},
									{
										step: '3',
										title: 'Get a plan',
										desc: 'Leave with clear next steps.'
									}
								].map((item) => (
									<div
										key={item.step}
										className='rounded-2xl border border-white/10 bg-white/[0.02] p-4'
									>
										<div className='text-[10px] tracking-[0.22em] text-emerald-400'>
											STEP {item.step}
										</div>
										<div className='mt-2 text-sm text-neutral-100'>{item.title}</div>
										<p className='mt-2 text-sm text-neutral-400'>{item.desc}</p>
									</div>
								))}
							</div>

							<div className='mt-8 flex flex-col sm:flex-row gap-3'>
								<CTAButton href='/assessment'>Book an Assessment</CTAButton>
								<CTAButton href='/pricing' variant='ghost'>
									View Pricing
								</CTAButton>
							</div>
						</div>

						<div className='rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8'>
							<p className='text-xs tracking-[0.22em] text-neutral-500'>COACH</p>
							<h3 className='mt-4 text-2xl font-medium text-neutral-100'>Coach Larry</h3>
							<p className='mt-4 text-neutral-400 leading-relaxed'>
								Muay Thai, kickboxing, and boxing coaching built around structure, timing, and calm
								decision-making.
							</p>

							<div className='mt-6 space-y-3 text-sm text-neutral-400'>
								<div className='rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3'>
									<Link href='https://www.williamsmma.com/'>Coaching at Williams MMA</Link>
								</div>
								<div className='rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3'>
									Private coaching available
								</div>
								<div className='rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3'>
									Kids • Teens • Adults
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='py-16 md:py-20 border-t border-white/5'>
				<div className='mx-auto max-w-5xl px-5 sm:px-8'>
					<div className='rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 text-center'>
						<p className='text-xs tracking-[0.22em] text-neutral-500'>READY TO START?</p>
						<h2 className='mt-4 text-3xl md:text-4xl font-medium tracking-tight'>
							Start training with a clear first step.
						</h2>
						<p className='mt-4 max-w-2xl mx-auto text-neutral-400 leading-relaxed'>
							Book your assessment and get pointed in the right direction from day one.
						</p>

						<div className='mt-8 flex flex-col sm:flex-row gap-3 justify-center'>
							<CTAButton href='/assessment'>Book an Assessment</CTAButton>
							<CTAButton href='/training' variant='ghost'>
								Explore Training
							</CTAButton>
						</div>
					</div>
				</div>
			</section>
			<footer className='border-t border-white/5 py-10'>
				<div className='mx-auto max-w-5xl px-5 sm:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8'>
					{/* Brand */}
					<div>
						<div className='text-sm tracking-wide text-neutral-200'>Flow State Striking</div>

						<div className='mt-2 text-xs tracking-[0.18em] text-neutral-500'>
							COACHING @ WILLIAMS MMA
							<p>8780 Warner Ave, suite 7 Fountain Valley, CA 92708</p>
						</div>

						<div className='mt-3 text-sm text-neutral-400'>Fountain Valley, CA</div>

						<div className='mt-3 text-sm text-neutral-400'>
							Text or Call:{' '}
							<a href='tel:+19497852991' className='text-neutral-200 hover:text-white transition'>
								949-785-2991
							</a>
						</div>
					</div>

					{/* Navigation */}
					<div className='flex flex-wrap gap-4 text-sm'>
						<Link className='text-neutral-400 hover:text-neutral-200 transition' href='/method'>
							Method
						</Link>

						<Link className='text-neutral-400 hover:text-neutral-200 transition' href='/training'>
							Training
						</Link>

						<Link className='text-neutral-400 hover:text-neutral-200 transition' href='/pricing'>
							Pricing
						</Link>

						<Link className='text-neutral-400 hover:text-neutral-200 transition' href='/about'>
							About
						</Link>
					</div>

					{/* Social */}
					<div className='flex flex-col gap-2 text-sm'>
						<a
							href='https://instagram.com/flowstate_striking'
							target='_blank'
							rel='noopener noreferrer'
							className='text-neutral-400 hover:text-neutral-200 transition'
						>
							Instagram
						</a>

						<a
							href='sms:+19497852991'
							className='text-neutral-400 hover:text-neutral-200 transition'
						>
							Text to Start
						</a>
					</div>
				</div>
			</footer>{' '}
		</div>
	)
}
