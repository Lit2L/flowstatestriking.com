export default function Section({
	id,
	eyebrow,
	title,
	children
}: {
	id: string
	eyebrow?: string
	title: string
	children: React.ReactNode
}) {
	return (
		<section id={id} data-scroll-section='true' className='py-24 md:py-32 border-t border-white/5'>
			<div className='mx-auto max-w-6xl px-5 sm:px-8'>
				<div className='max-w-3xl'>
					{eyebrow ? (
						<p className='text-xs tracking-[0.22em] text-neutral-500 mb-4'>
							{eyebrow.toUpperCase()}
						</p>
					) : null}
					<h2 className='text-2xl md:text-3xl font-medium tracking-wide text-neutral-100'>
						{title}
					</h2>
				</div>
				<div className='mt-10'>{children}</div>
			</div>
		</section>
	)
}
