import { useState } from 'react';

import { ChevronDown, Menu, PhoneCall, X } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';

import { buildCompanyWhatsAppLink } from '@/lib/whatsapp';

const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Produk', href: '/produk' },
    { label: 'Tentang Kami', href: '/tentang-kami' },
    { label: 'Cara Sewa', href: '/cara-sewa' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Kontak', href: '/kontak' },
];

const productCategories = [
    { label: 'Laptop', href: '/produk?kategori=laptop' },
    { label: 'Komputer / PC', href: '/produk?kategori=komputer-pc' },
    { label: 'Tablet', href: '/produk?kategori=tablet' },
    { label: 'TV Plasma / Layar Besar', href: '/produk?kategori=tv-plasma-layar-besar' },
];

function BrandLogo() {
    return (
        <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl  shadow-sm sm:h-12 sm:w-12">
                <img
                    src="/images/brand/mst.svg"
                    alt="Logo perusahaan"
                    className="h-full w-full object-contain p-1"
                    onError={(event) => {
                        event.currentTarget.style.visibility = 'hidden';
                    }}
                />
            </span>
            <span className="min-w-0 truncate text-sm font-semibold text-white sm:text-base">
                Metro Smart Technology
            </span>
        </Link>
    );
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { company } = usePage().props;

    const whatsappLink = buildCompanyWhatsAppLink(
        company,
        'Halo, saya ingin konsultasi untuk sewa peralatan.'
    );

    return (
        <header className="sticky top-0 z-50 border-b border-brand-navy/80 bg-brand-navy/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
                <BrandLogo />

                <nav className="hidden items-center gap-2 lg:flex">
                    <Link
                        href="/"
                        className="rounded-full px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                    >
                        Home
                    </Link>

                    <div className="group relative">
                        <button
                            type="button"
                            className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                        >
                            Produk
                            <ChevronDown className="h-4 w-4" />
                        </button>

                        <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
                            <div className="min-w-56 rounded-2xl border border-brand-silver bg-white p-2 shadow-lg shadow-slate-900/5">
                                {productCategories.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="block rounded-xl px-4 py-2 text-sm text-brand-gray transition hover:bg-brand-offwhite hover:text-brand-navy"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {navigationItems
                        .filter((item) => item.label !== 'Home' && item.label !== 'Produk')
                        .map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="rounded-full px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                            >
                                {item.label}
                            </Link>
                        ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="hidden items-center gap-2 rounded-full bg-brand-cyan px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-brand-cyan/20 transition hover:bg-brand-teal sm:inline-flex"
                    >
                        <PhoneCall className="h-4 w-4" />
                        WhatsApp
                    </a>

                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen((value) => !value)}
                        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-silver bg-white text-brand-navy transition hover:bg-brand-offwhite lg:hidden"
                        aria-label="Toggle navigation menu"
                    >
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {mobileMenuOpen ? (
                <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-brand-silver bg-white px-4 py-4 shadow-lg shadow-slate-900/5 lg:hidden sm:px-6">
                    <div className="space-y-2">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block rounded-2xl px-4 py-3 text-sm font-medium text-brand-gray transition hover:bg-brand-offwhite hover:text-brand-navy"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-4 rounded-2xl border border-dashed border-brand-silver bg-brand-offwhite p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">
                            Kategori Produk
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {productCategories.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="rounded-full border border-brand-silver bg-white px-3 py-2 text-xs font-medium text-brand-gray transition hover:bg-brand-offwhite hover:text-brand-navy"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            ) : null}
        </header>
    );
}