export default function Card({
	title,
	desc,
	meta
}: {
	title: string
	desc: string
	meta?: string
}) {
	return (
		<div className='rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7 shadow-[0_20px_70px_rgba(0,0,0,0.35)]'>
			<div className='flex items-start justify-between gap-4'>
				<h3 className='text-lg font-medium tracking-wide text-neutral-100'>{title}</h3>
				{meta ? <span className='text-xs tracking-[0.18em] text-neutral-500'>{meta}</span> : null}
			</div>
			<p className='mt-3 text-neutral-400 leading-relaxed'>{desc}</p>
		</div>
	)
}
