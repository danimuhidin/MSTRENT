export default function RentalFlowTimeline({ items, compact = false, className = '' }) {
    return (
        <div className={`grid gap-4 lg:grid-cols-5 ${className}`}>
            {items.map((item, index) => {
                const Icon = item.icon;
                const stepNumber = item.step || String(index + 1).padStart(2, '0');

                return (
                    <article
                        key={item.step || item.title}
                        className={`rounded-3xl border border-brand-silver bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${compact ? 'p-5 sm:p-6' : 'p-6 sm:p-7'}`}
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-semibold text-white shadow-sm">
                                    {stepNumber}
                                </div>
                                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-offwhite text-brand-cyan ${compact ? 'sm:h-10 sm:w-10' : ''}`}>
                                    <Icon className={compact ? 'h-5 w-5' : 'h-6 w-6'} />
                                </div>
                            </div>
                        </div>

                        <h3 className={`mt-5 font-semibold text-brand-navy ${compact ? 'text-base' : 'text-lg'}`}>{item.title}</h3>
                        <p className={`mt-2 text-sm leading-6 text-brand-gray ${compact ? 'sm:pr-1' : ''}`}>{item.description}</p>
                    </article>
                );
            })}
        </div>
    );
}