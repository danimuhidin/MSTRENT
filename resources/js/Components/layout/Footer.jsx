import { Mail, MapPin, PhoneCall } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';

import { buildCompanyWhatsAppLink } from '@/lib/whatsapp';

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Produk', href: '/produk' },
    { label: 'Cara Sewa', href: '/cara-sewa' },
    { label: 'Harga', href: '/harga' },
    { label: 'Kontak', href: '/kontak' },
];

function BrandLogo() {
    return (
        <div className="flex items-center gap-3">
            <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-dashed border-white/20 bg-white/10">
                <img
                    src="/images/brand/logo-white.svg"
                    alt="Logo perusahaan versi putih"
                    className="h-full w-full object-contain p-2"
                    onError={(event) => {
                        event.currentTarget.style.visibility = 'hidden';
                    }}
                />
            </span>
            <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">MST RENT</p>
                <p className="text-lg font-semibold text-white">MST RENT</p>
            </div>
        </div>
    );
}

export default function Footer() {
    const { company } = usePage().props;

    const whatsappLink = buildCompanyWhatsAppLink(
        company,
        'Halo, saya ingin bertanya mengenai layanan sewa.'
    );

    return (
        <footer className="border-t border-brand-navy bg-brand-navy text-white">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[1.3fr_0.8fr_0.9fr] lg:px-8">
                <div>
                    <BrandLogo />
                    <p className="mt-5 max-w-xl text-sm leading-6 text-white/75">
                        MST RENT melayani sewa perangkat teknologi untuk kebutuhan pribadi, acara, dan
                        korporat di Bandung dan Jakarta.
                    </p>

                    <div className="mt-6 space-y-3 text-sm text-white/75">
                        <div className="flex items-start gap-3">
                            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                            <span>{company?.address || 'Bandung & Jakarta'}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <PhoneCall className="h-4 w-4 shrink-0 text-brand-cyan" />
                            <span>{company?.phone || '0813 2164 2630'}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="h-4 w-4 shrink-0 text-brand-cyan" />
                            <span>{company?.email || 'mstrent.official@gmail.com'}</span>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Quick Links</p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                        {quickLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm text-white/75 transition hover:text-white"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Kontak Cepat</p>
                    <p className="mt-5 text-sm leading-6 text-white/75">
                        Jam operasional: {company?.operational_hours || 'Senin-Sabtu, 09.00-16.00 WIB'}
                    </p>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-cyan px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-teal"
                    >
                        <PhoneCall className="h-4 w-4" />
                        Chat WhatsApp
                    </a>
                </div>
            </div>

            <div className="border-t border-white/10 py-5">
                <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 text-center text-xs text-white/55 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:text-left">
                    <p>Copyright {new Date().getFullYear()} MST RENT. All rights reserved.</p>
                    <p>Sewa laptop, komputer, tablet, dan TV plasma untuk Bandung & Jakarta.</p>
                </div>
            </div>
        </footer>
    );
}