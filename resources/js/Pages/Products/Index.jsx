import { Link, usePage } from '@inertiajs/react';
import { ArrowRight, BadgeCheck, Filter, Search } from 'lucide-react';

import Breadcrumb from '@/Components/layout/Breadcrumb';
import MainLayout from '@/Layouts/MainLayout';

function ProductCard({ product }) {
    return (
        <Link
            href={`/produk/${product.slug}`}
            className="group overflow-hidden rounded-3xl border border-brand-silver bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5"
        >
            <span className="relative block aspect-[4/3] overflow-hidden border-b border-brand-silver bg-brand-offwhite">
                <img
                    src={product.images?.[0]}
                    alt={product.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    onError={(event) => {
                        event.currentTarget.style.visibility = 'hidden';
                    }}
                />
            </span>

            <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-brand-offwhite px-3 py-1 text-xs font-semibold text-brand-cyan">
                        {product.category_label}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">
                        {product.status}
                    </span>
                </div>
                <h2 className="mt-4 text-lg font-semibold text-brand-navy">{product.name}</h2>
                <p className="mt-2 text-sm leading-6 text-brand-gray">{product.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {product.specs.map((spec) => (
                        <span key={spec} className="rounded-full bg-brand-offwhite px-3 py-1 text-xs font-medium text-brand-gray">
                            {spec}
                        </span>
                    ))}
                </div>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-brand-cyan">
                    Lihat detail
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    );
}

export default function ProductsIndex() {
    const { products, categories, activeCategory } = usePage().props;

    return (
        <MainLayout title="Produk | MST RENT" description="Daftar produk sewa MST RENT untuk Bandung dan Jakarta.">
            <Breadcrumb items={[{ label: 'Produk' }]} />

            <section className="rounded-[2rem] border border-brand-silver bg-white p-6 shadow-sm sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">Produk</p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
                    Pilih perangkat sesuai kebutuhan kerja, acara, atau operasional Anda.
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-7 text-brand-gray">
                    Katalog ini masih berupa data statis awal. Anda bisa menambahkan unit baru kapan saja sesuai
                    kategori dan kebutuhan klien.
                </p>
            </section>

            <section className="mt-10 rounded-[2rem] border border-brand-silver bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-center gap-3 overflow-x-auto pb-1 sm:pb-0">
                    <div className="inline-flex items-center gap-2 rounded-full bg-brand-offwhite px-4 py-2 text-sm font-semibold text-brand-navy">
                        <Filter className="h-4 w-4" />
                        Filter kategori
                    </div>
                    {categories.map((category) => (
                        <Link
                            key={category.label}
                            href={category.value ? `/produk?kategori=${category.value}` : '/produk'}
                                className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeCategory === category.value || (!activeCategory && !category.value)
                                    ? 'bg-brand-cyan text-white'
                                    : 'bg-brand-offwhite text-brand-gray hover:bg-white'
                                }`}
                        >
                            {category.label}
                        </Link>
                    ))}
                </div>
            </section>

            <section className="mt-10">
                {products.length ? (
                    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        {products.map((product) => (
                            <ProductCard key={product.slug} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-[2rem] border border-dashed border-brand-silver bg-white p-10 text-center shadow-sm">
                        <Search className="mx-auto h-10 w-10 text-brand-silver" />
                        <h2 className="mt-4 text-xl font-semibold text-brand-navy">Tidak ada produk untuk kategori ini</h2>
                        <p className="mt-2 text-sm leading-6 text-brand-gray">
                            Silakan pilih kategori lain atau tambahkan data produk baru ke sumber statis.
                        </p>
                    </div>
                )}
            </section>
        </MainLayout>
    );
}