import Link from 'next/link'
import Card from './card'
import CTAButton from './cta-button'
import Pillar from './pillars'
import Section from './section'

export default function LandingPage() {
	return (
		<div className='min-h-screen'>
			{/* HERO */}
			<section
				id='hero'
				data-scroll-section='true'
				className='relative min-h-[92vh] flex items-center'
			>
				{/* Background */}
				<div className='absolute inset-0 -z-10'>
					<div className='absolute inset-0 bg-[radial-gradient(900px_500px_at_15%_20%,rgba(52,211,153,0.10),transparent_55%),radial-gradient(700px_450px_at_80%_25%,rgba(255,255,255,0.05),transparent_60%),linear-gradient(to_bottom,rgba(10,10,10,0.0),rgba(10,10,10,0.85))]' />
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
								<span className='text-neutral-200'>Timing</span>—so your skill holds up when things
								speed up.
							</p>

							<div className='mt-10 flex flex-col sm:flex-row gap-3'>
								<CTAButton href='/assessment'>Start with an Assessment</CTAButton>
								<CTAButton href='/method' variant='ghost'>
									View the Method
								</CTAButton>
							</div>

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

						{/* Right: Premium hero video card */}
						<div className='md:col-span-5'>
							<div className='rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.55)]'>
								<div className='p-4 border-b border-white/10 flex items-center justify-between'>
									<div className='text-xs tracking-[0.22em] text-neutral-500'>PRIVATE STUDIO</div>
									<div className='text-xs text-neutral-500'>LIMITED AVAILABILITY</div>
								</div>

								{/* VIDEO */}
								<div className='relative aspect-[4/5] bg-neutral-950'>
									<video
										className='absolute inset-0 h-full w-full object-cover'
										autoPlay
										muted
										loop
										playsInline
										preload='metadata'
										poster='/videos/hero-poster.jpg'
										// controls={false} // optional, default is no controls
									>
										<source src='/videos/hero.mp4' type='video/mp4' />
										{/* Fallback text */}
										Your browser does not support the video tag.
									</video>

									{/* Soft overlay for premium readability */}
									<div className='absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.10),rgba(0,0,0,0.55))]' />

									{/* Optional corner label */}
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
									<p className='text-sm text-neutral-300'>
										“Speed covers mistakes. Structure removes them.”
									</p>
									<p className='mt-2 text-xs text-neutral-500 tracking-[0.16em]'>
										FLOW STATE PRINCIPLE
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='mt-14 text-center text-xs tracking-[0.22em] text-neutral-600'>SCROLL</div>
				</div>
			</section>

			{/* REFRAME */}
			<Section
				id='reframe'
				eyebrow='Why most people feel rushed'
				title='Urgency isn’t a personality. It’s a structure problem.'
			>
				<div className='grid md:grid-cols-3 gap-6'>
					<Card
						title='Fast feels busy'
						meta='OBSERVATION'
						desc='When structure and distance are inconsistent, you spend speed to correct mistakes. You feel rushed even when you’re athletic.'
					/>
					<Card
						title='Position reduces motion'
						meta='PRINCIPLE'
						desc='Shorter distance to travel means fewer emergencies. You’re not reacting late—you’re already there.'
					/>
					<Card
						title='Calm is trained'
						meta='OUTCOME'
						desc='Composure comes from reliable alignment and repeatable decisions. Not hype. Not adrenaline.'
					/>
				</div>
			</Section>

			{/* METHOD */}
			<Section id='method' eyebrow='The Method' title='Pillars govern technique.'>
				<div className='grid md:grid-cols-3 gap-6'>
					<Pillar
						meaning='ALIGNMENT'
						name='Structure'
						detail='A stable frame that keeps you balanced, protected, and efficient under pressure.'
					/>
					<Pillar
						meaning='SPACE'
						name='Position'
						detail='Distance and angles that reduce effort and remove urgency from exchanges.'
					/>
					<Pillar
						meaning='DECISION'
						name='Timing'
						detail='Acting early instead of rushing late—because your body is already organized.'
					/>
				</div>
				<div className='mt-10'>
					<CTAButton href='/method'>Go deeper on the Method</CTAButton>
				</div>
			</Section>

			{/* TRAINING */}
			<Section id='training' eyebrow='Training' title='Paths, not random sessions.'>
				<div className='grid lg:grid-cols-3 gap-6'>
					<Card
						title='Assessment Session'
						meta='75 MIN'
						desc='We evaluate structure, distance, and decision-making. You leave with clarity and a recommended path.'
					/>
					<Card
						title='Competency Path'
						meta='8–12 SESSIONS'
						desc='Designed to make you calm and capable anywhere—without relying on speed or toughness.'
					/>
					<Card
						title='Small Group Training'
						meta='3–5 PEOPLE'
						desc='Shared learning with individual correction. High signal, lower fatigue, strong retention.'
					/>
				</div>
			</Section>

			{/* PRICING */}
			<Section id='pricing' eyebrow='Pricing' title='Premium pricing should feel appropriate.'>
				<div className='rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8'>
					<p className='text-neutral-300 leading-relaxed'>
						Training is done in short, focused paths. Availability is intentionally limited to
						preserve quality.
					</p>
					<div className='mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
						{[
							{ k: 'ASSESSMENT', v: '$95', d: 'Assessment first, Direction first. No guessing.' },
							{
								k: 'BEGINNER PATH',
								v: '$500–$1000',
								d: '8 sessions, Foundations and competancy.'
							},
							{ k: 'SMALL GROUP', v: '$60 / session', d: '3–5 people, high attention.' }
							// { k: 'INTENSIVE', v: '$275', d: '90 minutes, one problem solved.' }
						].map((x) => (
							<div key={x.k} className='rounded-2xl border border-white/10 bg-white/[0.03] p-5'>
								<div className='text-xs tracking-[0.22em] text-neutral-500'>{x.k}</div>
								<div className='mt-2 text-lg text-neutral-100'>{x.v}</div>
								<p className='mt-2 text-sm text-neutral-400'>{x.d}</p>
							</div>
						))}
					</div>
					<div className='mt-8'>
						<CTAButton href='/assessment'>Request an Assessment</CTAButton>
					</div>
				</div>
			</Section>

			{/* ABOUT */}
			<Section id='about' eyebrow='About' title='Longevity is a skill.'>
				<div className='grid md:grid-cols-12 gap-6 items-start'>
					<div className='md:col-span-7 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8'>
						<p className='text-neutral-300 leading-relaxed'>
							Flow State Striking is built for people who want skill that lasts—not habits that
							break when pressure comes forward.
						</p>
						<p className='mt-4 text-neutral-400 leading-relaxed'>
							The goal isn’t to make you tired. It’s to make you organized—so your timing appears
							naturally and your decisions stay clear.
						</p>
						<div className='mt-8 flex gap-3 flex-wrap'>
							<CTAButton href='/about'>Read the full story</CTAButton>
							<CTAButton href='/assessment' variant='ghost'>
								Start with an Assessment
							</CTAButton>
						</div>
					</div>
					<div className='md:col-span-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8'>
						<div className='text-xs tracking-[0.22em] text-neutral-500'>THE STANDARD</div>
						<p className='mt-4 text-neutral-400 leading-relaxed'>
							If a movement increases urgency, reduces awareness, or depends on athleticism
							alone—it’s incomplete.
						</p>
						<div className='mt-6 text-xs tracking-[0.22em] text-neutral-500'>END STATE</div>
						<p className='mt-3 text-neutral-300 leading-relaxed'>Calm. Early. Efficient.</p>
					</div>
				</div>
			</Section>

			{/* FOOTER */}
			<footer className='border-t border-white/5 py-14'>
				<div className='mx-auto max-w-6xl px-5 sm:px-8'>
					<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-8'>
						<div>
							<div className='text-sm tracking-wide text-neutral-200'>Flow State Striking</div>
							<div className='mt-2 text-xs tracking-[0.18em] text-neutral-500'>
								STRUCTURE • POSITION • TIMING
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
