export default function MicroProof({ items }: { items: string[] }) {
	return (
		<div className='mt-6 flex flex-wrap gap-2'>
			{items.map((t) => (
				<div
					key={t}
					className='rounded-full border border-white/50 bg-white/[0.05] px-3 py-0.5 text-[9px] tracking-[0.12em] text-neutral-300 font-semibold opacity-90'
				>
					{t}
				</div>
			))}
		</div>
	)
}
