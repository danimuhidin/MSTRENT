import { ChevronRight, House } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Breadcrumb({ items = [] }) {
    if (!items.length) {
        return null;
    }

    return (
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-brand-gray">
            <Link href="/" className="inline-flex items-center gap-1.5 font-medium text-brand-gray hover:text-brand-navy">
                <House className="h-4 w-4" />
                Home
            </Link>

            {items.map((item) => (
                <div key={item.label} className="inline-flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-brand-silver" />
                    {item.href ? (
                        <Link href={item.href} className="font-medium text-brand-gray hover:text-brand-navy">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="font-medium text-brand-navy">{item.label}</span>
                    )}
                </div>
            ))}
        </nav>
    );
}