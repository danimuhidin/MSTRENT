import { Link, usePage } from '@inertiajs/react';
import { ArrowRight, BadgeCheck, CheckCircle2, PhoneCall } from 'lucide-react';

import Breadcrumb from '@/Components/layout/Breadcrumb';
import MainLayout from '@/Layouts/MainLayout';
import { buildCompanyWhatsAppLink } from '@/lib/whatsapp';

function ProductImage({ src, alt }) {
    return (
        <span className="relative block aspect-[4/3] overflow-hidden rounded-[2rem] border border-dashed border-brand-silver bg-brand-offwhite">
            <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover"
                loading="lazy"
                onError={(event) => {
                    event.currentTarget.style.visibility = 'hidden';
                }}
            />
        </span>
    );
}

export default function ProductsShow() {
    const { product, relatedProducts, company } = usePage().props;
    const whatsappLink = buildCompanyWhatsAppLink(
        company,
        `Halo, saya ingin sewa ${product.name}. Apakah masih tersedia?`
    );

    return (
        <MainLayout title={`${product.name} | MST RENT`} description={product.description}>
            <Breadcrumb items={[{ label: 'Produk', href: '/produk' }, { label: product.name }]} />

            <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                <div className="space-y-4">
                    <ProductImage src={product.images?.[0]} alt={product.name} />
                    <div className="grid gap-4 sm:grid-cols-2">
                        {product.images?.slice(1).map((image) => (
                            <ProductImage key={image} src={image} alt={product.name} />
                        ))}
                    </div>
                </div>

                <div className="h-fit rounded-[2rem] border border-brand-silver bg-white p-6 shadow-sm sm:p-8">
                    <span className="rounded-full bg-brand-offwhite px-3 py-1 text-xs font-semibold text-brand-cyan">
                        {product.category_label}
                    </span>
                    <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-navy">{product.name}</h1>
                    <p className="mt-4 text-base leading-7 text-brand-gray">{product.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {product.specs.map((spec) => (
                            <span key={spec} className="rounded-full bg-brand-offwhite px-3 py-1 text-xs font-medium text-brand-gray">
                                {spec}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 rounded-3xl border border-brand-silver bg-brand-offwhite p-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gray">Harga Sewa</p>
                        <div className="mt-4 space-y-3 text-sm text-brand-gray">
                            <div className="flex items-center justify-between gap-4">
                                <span>Harian</span>
                                <span className="font-semibold text-brand-navy">{product.price.daily}</span>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <span>Mingguan</span>
                                <span className="font-semibold text-brand-navy">{product.price.weekly}</span>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <span>Bulanan</span>
                                <span className="font-semibold text-brand-navy">{product.price.monthly}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center gap-3 rounded-2xl bg-brand-offwhite p-4 text-brand-navy">
                        <CheckCircle2 className="h-5 w-5 text-brand-cyan" />
                        <span className="text-sm font-semibold">Status: {product.status}</span>
                    </div>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-cyan px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-teal"
                    >
                        <PhoneCall className="h-4 w-4" />
                        Sewa via WhatsApp
                    </a>
                </div>
            </section>

            <section className="mt-20 space-y-6">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">Spesifikasi Lengkap</p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-brand-navy">Ringkasan fitur unit yang disewakan.</h2>
                </div>

                <div className="rounded-[2rem] border border-brand-silver bg-white p-5 shadow-sm sm:p-6">
                    <ul className="grid gap-3 md:grid-cols-2">
                        {product.specs.map((spec) => (
                            <li key={spec} className="flex items-center gap-3 rounded-2xl bg-brand-offwhite p-4 text-sm text-brand-gray">
                                <BadgeCheck className="h-5 w-5 shrink-0 text-brand-cyan" />
                                {spec}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {relatedProducts.length ? (
                <section className="mt-20 space-y-6">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">Produk Terkait</p>
                        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-brand-navy">Rekomendasi lain dalam kategori yang sama.</h2>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        {relatedProducts.map((item) => (
                            <Link
                                key={item.slug}
                                href={`/produk/${item.slug}`}
                                className="group rounded-3xl border border-brand-silver bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5"
                            >
                                <h3 className="text-lg font-semibold text-brand-navy">{item.name}</h3>
                                <p className="mt-2 text-sm leading-6 text-brand-gray">{item.description}</p>
                                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan">
                                    Lihat detail
                                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>
            ) : null}
        </MainLayout>
    );
}