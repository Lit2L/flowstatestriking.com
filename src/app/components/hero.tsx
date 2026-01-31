import Container from './container'

export default function Hero() {
	return (
		<section className='min-h-screen flex items-center'>
			<Container>
				<h1 className='text-4xl md:text-5xl font-medium tracking-wide mb-6'>
					Train to stay calm under pressure.
				</h1>
				<p className='text-neutral-400 max-w-xl mb-10'>
					Flow State Striking is a private training system focused on structure, position, and
					timing — so your skill holds up when things speed up.
				</p>
				<a href='/assessment' className='text-emerald-400 underline underline-offset-4'>
					Start with an Assessment
				</a>
			</Container>
		</section>
	)
}
