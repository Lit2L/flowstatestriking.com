// import Container from './container'
// import Section from './section'

// export default function Pillars() {
// 	return (
// 		<Section>
// 			<Container>
// 				<div className='grid md:grid-cols-3 gap-12'>
// 					<div>
// 						<h3 className='text-xl mb-2'>Structure</h3>
// 						<p className='text-neutral-400'>
// 							Alignment that keeps you balanced, protected, and efficient.
// 						</p>
// 					</div>
// 					<div>
// 						<h3 className='text-xl mb-2'>Position</h3>
// 						<p className='text-neutral-400'>
// 							Distance and angles that reduce urgency and wasted motion.
// 						</p>
// 					</div>
// 					<div>
// 						<h3 className='text-xl mb-2'>Timing</h3>
// 						<p className='text-neutral-400'>Acting early instead of rushing late.</p>
// 					</div>
// 				</div>
// 			</Container>
// 		</Section>
// 	)
// }
export default function Pillar({
	name,
	meaning,
	detail
}: {
	name: string
	meaning: string
	detail: string
}) {
	return (
		<div className='rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-7'>
			<p className='text-xs tracking-[0.22em] text-neutral-500'>{meaning}</p>
			<h3 className='mt-2 text-xl font-medium tracking-wide text-neutral-100'>{name}</h3>
			<p className='mt-3 text-neutral-400 leading-relaxed'>{detail}</p>
		</div>
	)
}
