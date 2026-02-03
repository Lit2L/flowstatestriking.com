// app/page.tsx
import Link from 'next/link'
import CTAButton from './cta-button'
import MicroProof from './micro-pills'
import Section from './section'
import Pillar from './pillars'
import Card from './card'

export default function PremiumLandingPage() {
	return (
		<div className='min-h-screen bg-[#0A0A0A] text-neutral-100'>
			{/* HERO */}
			<section
				id='hero'
				data-scroll-section='true'
				className='relative min-h-[92vh] flex items-center'
			>
				<div className='absolute inset-0 -z-10'>
					<div className='absolute inset-0 bg-[radial-gradient(900px_500px_at_15%_20%,rgba(52,211,153,0.10),transparent_55%),radial-gradient(700px_450px_at_80%_25%,rgba(255,255,255,0.05),transparent_60%),linear-gradient(to_bottom,rgba(10,10,10,0.0),rgba(10,10,10,0.88))]' />
					<div className="absolute inset-0 opacity-[0.06] bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22 x=%220%22 y=%220%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.5%22/%3E%3C/svg%3E')]" />
				</div>

				<div className='mx-auto max-w-6xl px-5 sm:px-8 w-full pt-24 md:pt-28'>
					<div className='grid md:grid-cols-12 gap-10 items-center'>
						{/* Left */}
						<div className='md:col-span-7'>
							<p className='text-xs tracking-[0.22em] text-neutral-500'>FLOW STATE STRIKING</p>

							<h1 className='mt-5 text-4xl md:text-5xl font-medium tracking-wide text-neutral-100'>
								Train to stay calm under pressure.
							</h1>

							<p className='mt-6 text-neutral-400 leading-relaxed max-w-xl'>
								A private training system built on{' '}
								<span className='text-neutral-200'>Structure</span>,{' '}
								<span className='text-neutral-200'>Position</span>, and{' '}
								<span className='text-neutral-200'>Timing</span> — so you stay organized when
								pressure comes forward.
							</p>
							<p className=''></p>
							<div className='mt-10 flex flex-col sm:flex-row gap-3'>
								<CTAButton href='/assessment'>Start with an Assessment</CTAButton>
								<CTAButton href='/method' variant='ghost'>
									View the Method
								</CTAButton>
							</div>

							{/* <MicroProof
								items={[
									'22+ YEARS EXPERIENCE',
									'Refined through 22+ years of boxing, Muay Thai, and kickboxing coaching',

									'FOUNTAIN VALLEY, CA',
									'PRIVATE + SMALL GROUP',
									'BUILT FOR LONGEVITY'
								]}
							/> */}

							<div className='mt-10 flex flex-wrap gap-6 text-xs tracking-[0.18em] text-neutral-500'>
								<span className='inline-flex items-center gap-2'>
									<span className='h-1.5 w-1.5 rounded-full bg-emerald-400/80' />
									CLARITY
								</span>
								<span className='inline-flex items-center gap-2'>
									<span className='h-1.5 w-1.5 rounded-full bg-emerald-400/70' />
									CONTROL
								</span>
								<span className='inline-flex items-center gap-2'>
									<span className='h-1.5 w-1.5 rounded-full bg-emerald-400/60' />
									LONGEVITY
								</span>
							</div>
						</div>

						{/* Right: video card */}
						<div className='md:col-span-5'>
							<div className='rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.55)]'>
								<div className='p-4 border-b border-white/10 flex items-center justify-between'>
									<div className='text-xs tracking-[0.22em] text-neutral-500'>PRIVATE STUDIO</div>
									<div className='text-xs text-neutral-500'>LIMITED AVAILABILITY</div>
								</div>

								<div className='relative aspect-[4/5] bg-neutral-950'>
									<video
										className='absolute inset-0 h-full w-full object-cover'
										autoPlay
										muted
										loop
										playsInline
										preload='metadata'
										poster='/images/hero-poster.jpg'
										src='/videos/hero.mp4'
									>
										Your browser does not support the video tag.
									</video>

									<div className='absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.10),rgba(0,0,0,0.55))]' />

									<div className='absolute bottom-4 left-4 right-4'>
										<div className='rounded-2xl border border-white/10 bg-neutral-950/60 backdrop-blur-xl px-4 py-3'>
											<p className='text-sm text-neutral-200'>Quiet skill. Clean decisions.</p>
											<p className='mt-1 text-[11px] tracking-[0.18em] text-neutral-500'>
												STRUCTURE • POSITION • TIMING
											</p>
										</div>
									</div>
								</div>

								<div className='p-5'>
									<p className='text-sm text-neutral-300'>Pressure doesn’t break structure.</p>
									<p className='mt-2 text-xs text-neutral-500 tracking-[0.16em]'>
										FLOW STATE PRINCIPLE
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='mt-24 mb-3 text-center text-xs tracking-[0.22em] text-neutral-700'>
						SCROLL ↓
					</div>
				</div>
			</section>

			{/* REFRAME (tighter) */}
			<Section id='reframe' eyebrow='Why most people feel rushed' title='Fast isn’t the fix.'>
				<div className='grid md:grid-cols-3 gap-6'>
					<Card
						title='Speed creates debt'
						meta='OBSERVATION'
						desc='When structure and distance are inconsistent, you spend speed to compensate — and panic shows up as “effort.”'
					/>
					<Card
						title='Position reduces motion'
						meta='PRINCIPLE'
						desc='Shorter distance creates cleaner entries and cleaner exits — without forcing pace.'
					/>
					<Card
						title='Calm is the outcome'
						meta='RESULT'
						desc='Composure comes from repeatable alignment and repeatable decisions — not adrenaline.'
					/>
				</div>

				<div className='mt-10'>
					<CTAButton href='/assessment'>Start with an Assessment</CTAButton>
				</div>
			</Section>

			{/* METHOD (compressed) */}
			<Section id='method' eyebrow='The Method' title='Pillars govern technique.'>
				<div className='grid md:grid-cols-3 gap-6'>
					<Pillar
						meaning='ALIGNMENT'
						name='Structure'
						detail='A stable frame that keeps you balanced, protected, and efficient when pressure comes forward.'
					/>
					<Pillar
						meaning='SPACE'
						name='Position'
						detail='Distance and angles that remove urgency — so you stop chasing exchanges.'
					/>
					<Pillar
						meaning='DECISION'
						name='Timing'
						detail='Acting early instead of rushing late — because your body is already organized.'
					/>
				</div>

				<div className='mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6'>
					<p className='text-neutral-400 leading-relaxed'>
						Technique sits on the pillars. The pillars don’t change when the technique changes.
					</p>
				</div>

				<div className='mt-10 flex flex-col sm:flex-row gap-3'>
					<CTAButton href='/method' variant='ghost'>
						View the Method
					</CTAButton>
					<CTAButton href='/assessment'>Start with an Assessment</CTAButton>
				</div>
			</Section>

			{/* WHO IT’S FOR (conversion section) */}
			<Section id='who' eyebrow='Who this is for' title='Competence, not chaos.'>
				<div className='grid md:grid-cols-2 gap-6'>
					<div className='rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8'>
						<div className='text-xs tracking-[0.22em] text-neutral-500'>BEST FOR</div>
						<ul className='mt-4 space-y-2 text-neutral-400 leading-relaxed'>
							<li>• Beginners who want a clean foundation</li>
							<li>• People who feel stiff, rushed, or inconsistent</li>
							<li>• Anyone who gets countered and can’t explain why</li>
							<li>• Adults who care about longevity and safety</li>
							<li>• Students who want calm decision-making under pressure</li>
						</ul>
					</div>

					<div className='rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8'>
						<div className='text-xs tracking-[0.22em] text-neutral-500'>NOT ABOUT</div>
						<ul className='mt-4 space-y-2 text-neutral-400 leading-relaxed'>
							<li>• “Go harder” training</li>
							<li>• Ego sparring</li>
							<li>• Random combos without a system</li>
							<li>• Athleticism replacing structure</li>
						</ul>

						<div className='mt-8'>
							<CTAButton href='/assessment'>Start with an Assessment</CTAButton>
						</div>
					</div>
				</div>
			</Section>

			{/* TRAINING (simplified) */}
			<Section id='training' eyebrow='Training' title='Paths, not random sessions.'>
				<div className='grid lg:grid-cols-3 gap-6'>
					<Card
						title='Assessment'
						meta='75 MIN'
						desc='Identify what breaks under pressure. Leave with 1–2 fixes + a recommended path.'
					/>
					<Card
						title='Beginner Path'
						meta='8 SESSIONS'
						desc='Build structure, balance, and control so you can train confidently in any boxing or kickboxing gym.'
					/>
					<Card
						title='Private Packs'
						meta='5 / 10'
						desc='Focused refinement with continuity: one priority at a time, with pressure added progressively.'
					/>
				</div>

				<div className='mt-10 flex flex-col sm:flex-row gap-3'>
					<CTAButton href='/training' variant='ghost'>
						View Training
					</CTAButton>
					<CTAButton href='/assessment'>Start with an Assessment</CTAButton>
				</div>
			</Section>

			{/* PRICING PREVIEW (no menu, clear next step) */}
			<Section id='pricing' eyebrow='Pricing' title='Simple pricing. Limited availability.'>
				<div className='rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8'>
					<p className='text-neutral-300 leading-relaxed max-w-3xl'>
						Training is delivered in short, focused paths. Availability is intentionally limited to
						preserve quality. Start with an assessment to remove guessing and choose the right next
						step.
					</p>

					<div className='mt-8 grid sm:grid-cols-3 gap-4'>
						{[
							{ k: 'ASSESSMENT', v: '$95', d: 'Direction first. One session, clear plan.' },
							{ k: 'BEGINNER PATH', v: '$800', d: '8 sessions. Foundations that hold up.' },
							{ k: 'PRIVATE PACKS', v: '$500 / $1000', d: '5 or 10 sessions for continuity.' }
						].map((x) => (
							<div key={x.k} className='rounded-2xl border border-white/10 bg-white/[0.03] p-5'>
								<div className='text-xs tracking-[0.22em] text-neutral-500'>{x.k}</div>
								<div className='mt-2 text-lg text-neutral-100'>{x.v}</div>
								<p className='mt-2 text-sm text-neutral-400'>{x.d}</p>
							</div>
						))}
					</div>

					<p className='mt-6 text-xs text-neutral-500 tracking-[0.16em]'>
						PAYMENT RESERVES YOUR SESSION • 24-HOUR RESCHEDULE POLICY
					</p>

					<div className='mt-8 flex flex-col sm:flex-row gap-3'>
						<CTAButton href='/assessment'>Start with an Assessment</CTAButton>
						<CTAButton href='/pricing' variant='ghost'>
							View Full Pricing
						</CTAButton>
					</div>
				</div>
			</Section>

			{/* ABOUT PREVIEW (shorter, more grounded) */}
			<Section id='about' eyebrow='About' title='Longevity is a skill.'>
				<div className='grid md:grid-cols-12 gap-6 items-start'>
					<div className='md:col-span-7 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8'>
						<p className='text-neutral-300 leading-relaxed'>
							Coach Larry • 22+ years in boxing, Muay Thai, and kickboxing.
						</p>
						<p className='mt-4 text-neutral-400 leading-relaxed'>
							I don’t teach people to fight harder. I organize how they move and decide under
							pressure — so calm becomes repeatable.
						</p>

						<div className='mt-8 flex gap-3 flex-wrap'>
							<CTAButton href='/about' variant='ghost'>
								Read the full story
							</CTAButton>
							<CTAButton href='/assessment'>Start with an Assessment</CTAButton>
						</div>
					</div>

					<div className='md:col-span-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8'>
						<div className='text-xs tracking-[0.22em] text-neutral-500'>END STATE</div>
						<p className='mt-4 text-neutral-300 leading-relaxed'>Calm. Early. Efficient.</p>
						<div className='mt-6 text-xs tracking-[0.22em] text-neutral-500'>STANDARD</div>
						<p className='mt-3 text-neutral-400 leading-relaxed'>
							If a movement increases urgency, reduces awareness, or depends on athleticism alone,
							it’s incomplete.
						</p>
					</div>
				</div>
			</Section>

			{/* FINAL CTA */}
			<section className='border-t border-white/5 py-20 md:py-24'>
				<div className='mx-auto max-w-6xl px-5 sm:px-8'>
					<div className='rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12'>
						<h2 className='text-2xl md:text-3xl font-medium tracking-wide text-neutral-100'>
							Start with an Assessment.
						</h2>
						<p className='mt-4 text-neutral-400 leading-relaxed max-w-2xl'>
							If you’re unsure where to begin, I’ll identify what’s breaking down — and what to fix
							first.
						</p>
						<div className='mt-8 flex flex-col sm:flex-row gap-3'>
							<CTAButton href='/assessment'>Start with an Assessment</CTAButton>
							<CTAButton href='/schedule' variant='ghost'>
								Already paid? Schedule
							</CTAButton>
						</div>

						<p className='mt-6 text-xs text-neutral-500 tracking-[0.16em]'>
							PAY FIRST • SCHEDULE AFTER CHECKOUT • BUILT FOR LONGEVITY
						</p>
					</div>

					{/* HOW IT WORKS (conversion lever) */}
					<div className='mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-3 md:p-6'>
						<div className='text-xs tracking-[0.22em] text-neutral-300'>HOW IT WORKS</div>
						<div className='mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3'>
							{[
								{ k: 'STEP 1', t: 'Reserve', d: 'Pay to reserve your assessment session.' },
								{ k: 'STEP 2', t: 'Schedule', d: 'Pick a time immediately after checkout.' },
								{ k: 'STEP 3', t: 'Train', d: 'Leave with 1–2 fixes and a clear next step.' }
							].map((x) => (
								<div key={x.k} className='rounded-2xl border border-white/10 bg-white/[0.02] p-3'>
									<div className='text-[10px] text-emerald-500 tracking-[0.22em] '>{x.k}</div>
									<div className='my-1 text-sm text-neutral-200'>{x.t}</div>
									<div className='mt-1 text-sm text-neutral-400'>{x.d}</div>
								</div>
							))}
						</div>
						<p className='mt-6 text-xs text-neutral-300 tracking-[0.12em]'>
							24-HOUR RESCHEDULE POLICY • PAYMENT RESERVES YOUR SESSION
						</p>
					</div>
				</div>
			</section>

			{/* FOOTER */}
			<footer className='border-t border-white/5 py-14'>
				<div className='mx-auto max-w-6xl px-5 sm:px-8'>
					<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-8'>
						<div>
							<div className='text-sm tracking-wide text-neutral-200'>Flow State Striking</div>
							<div className='mt-2 text-xs tracking-[0.18em] text-neutral-500'>
								STRUCTURE • POSITION • TIMING
								<p className='mt-1 text-[9px]'>FLOW WITH CLARITY & CONTROL</p>
							</div>
						</div>
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
						<div className='text-xs text-neutral-500'>
							Limited availability • Built for longevity
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
