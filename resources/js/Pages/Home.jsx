import { Link, usePage } from '@inertiajs/react';
import {
    ArrowRight,
    CheckCircle2,
    CreditCard,
    FileText,
    Globe2,
    Handshake,
    Lock,
    Package,
    PackageSearch,
    ShieldCheck,
    Sparkles,
    Users,
    Truck,
} from 'lucide-react';

import RentalFlowTimeline from '@/Components/RentalFlowTimeline';
import MainLayout from '@/Layouts/MainLayout';
import { buildCompanyWhatsAppLink } from '@/lib/whatsapp';

const featuredCategories = [
    {
        label: 'Laptop',
        slug: 'laptop',
        image: '/images/categories/laptop.jpg',
        description: 'Perangkat fleksibel untuk kerja, belajar, dan kebutuhan mendadak.',
    },
    {
        label: 'Komputer / PC',
        slug: 'komputer-pc',
        image: '/images/categories/komputer-pc.jpg',
        description: 'Paket komputer meja lengkap untuk kantor, pelatihan, dan acara.',
    },
    {
        label: 'Tablet',
        slug: 'tablet',
        image: '/images/categories/tablet.jpg',
        description: 'Tablet interaktif untuk pameran, input data, dan presentasi bergerak.',
    },
    {
        label: 'TV Plasma / Layar Besar',
        slug: 'tv-plasma-layar-besar',
        image: '/images/categories/tv-plasma.jpg',
        description: 'Layar besar yang cocok untuk event, presentasi, dan tayangan publik.',
    },
];

const advantages = [
    {
        icon: PackageSearch,
        title: 'Perangkat Berkualitas',
        description: 'Merek ternama seperti Lenovo, Dell, HP, Asus, dan MacBook dengan performa terjamin.',
    },
    {
        icon: ShieldCheck,
        title: 'Harga Kompetitif',
        description: 'Penawaran terbaik yang disesuaikan dengan durasi sewa dan kebutuhan Anda.',
    },
    {
        icon: Handshake,
        title: 'Pelayanan Cepat & Ramah',
        description: 'Tim siap membantu konsultasi hingga pengantaran dengan respons yang sigap.',
    },
    {
        icon: CheckCircle2,
        title: 'Perawatan Rutin',
        description: 'Semua unit dibersihkan dan dicek sebelum diserahkan ke pelanggan.',
    },
    {
        icon: Lock,
        title: 'Transaksi Mudah & Aman',
        description: 'Proses pemesanan simpel dengan jaminan keamanan dan kejelasan proses.',
    },
    {
        icon: Globe2,
        title: 'Solusi Fleksibel untuk Semua Kebutuhan',
        description: 'Pilihan perangkat disesuaikan untuk kerja, desain, editing, hingga seminar.',
    },
];

const serviceCards = [
    {
        title: 'Sewa Harian / Mingguan',
        description: 'Cocok untuk kebutuhan mendadak, tugas sekolah/kuliah, atau kunjungan singkat.',
    },
    {
        title: 'Sewa Bulanan / Jangka Panjang',
        description: 'Solusi hemat untuk karyawan baru, proyek sementara, atau pelatihan.',
    },
    {
        title: 'Sewa Acara & Seminar',
        description: 'Penyediaan dalam jumlah banyak untuk workshop, rapat, pameran, dan pelatihan.',
    },
    {
        title: 'Sewa Laptop Khusus',
        description: 'Unit dengan spesifikasi tinggi untuk desain grafis, editing video, hingga gaming.',
    },
];

const rentalFlow = [
    {
        step: '01',
        title: 'Pilih Produk',
        description: 'Lihat daftar produk & hubungi kami untuk ketersediaan barang.',
        icon: Package,
    },
    {
        step: '02',
        title: 'Konfirmasi Pesanan',
        description: 'Tentukan durasi sewa, tanggal pengambilan, atau pengiriman.',
        icon: CheckCircle2,
    },
    {
        step: '03',
        title: 'Penyerahan Dokumen',
        description: 'Tunjukkan dokumen persyaratan yang diminta.',
        icon: FileText,
    },
    {
        step: '04',
        title: 'Pembayaran',
        description: 'Bayar biaya sewa & uang jaminan sesuai kesepakatan.',
        icon: CreditCard,
    },
    {
        step: '05',
        title: 'Pengambilan/Pengiriman',
        description: 'Barang bisa diambil sendiri atau kami kirim ke lokasi.',
        icon: Truck,
    },
];

const testimonials = [
    {
        name: 'Rina Pratiwi',
        role: 'Event Coordinator',
        quote: 'Prosesnya cepat dan unit datang sesuai jadwal. Sangat membantu untuk kebutuhan event mendadak.',
        image: '/images/testimonials/user-1.jpg',
    },
    {
        name: 'Budi Santoso',
        role: 'Office Manager',
        quote: 'Komunikasi enak, unit rapi, dan tim responsif. Cocok untuk kebutuhan kantor dan tender.',
        image: '/images/testimonials/user-2.jpg',
    },
    {
        name: 'Maya Lestari',
        role: 'Procurement',
        quote: 'Harga kompetitif dan fleksibel. Kami terbantu saat butuh perangkat dalam jumlah besar.',
        image: '/images/testimonials/user-3.jpg',
    },
];

const partnerLogos = [
    { name: 'Client One', image: '/images/clients/client-1.webp' },
    { name: 'Client Two', image: '/images/clients/client-2.webp' },
    { name: 'Client Three', image: '/images/clients/client-3.webp' },
    { name: 'Client Four', image: '/images/clients/client-4.webp' },
    { name: 'Client Five', image: '/images/clients/client-5.webp' },
    { name: 'Client Six', image: '/images/clients/client-6.webp' },
];

function ImageFrame({ src, alt, className = '' }) {
    return (
        <span className={`relative block overflow-hidden border border-dashed border-slate-300 bg-slate-100 ${className}`}>
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

function SectionLabel({ children }) {
    return <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">{children}</p>;
}

export default function Home() {
    const { company } = usePage().props;
    const whatsappLink = buildCompanyWhatsAppLink(company, 'Halo, saya ingin konsultasi kebutuhan sewa.');

    return (
        <MainLayout
            title={`${company?.short_name || 'MST RENT'} | Sewa Laptop Bandung & Jakarta`}
            description="Solusi teknologi fleksibel untuk setiap kebutuhan Anda di Bandung dan Jakarta."
        >
            <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-brand-silver bg-white px-4 py-2 text-sm font-medium text-brand-navy">
                        <Sparkles className="h-4 w-4" />
                        Metro Smart Technology - Sewa Laptop Bandung & Jakarta
                    </div>

                    <div className="space-y-4">
                        <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
                            Solusi teknologi fleksibel untuk setiap kebutuhan Anda.
                        </h1>
                        <p className="max-w-xl text-sm leading-7 text-brand-gray sm:text-base lg:text-lg">
                            Perlu laptop berkualitas untuk kerja, acara, atau belajar? Dapatkan unit terbaik dengan
                            pelayanan prima di Bandung dan Jakarta.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-cyan px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-cyan/20 transition hover:bg-brand-teal"
                        >
                            Konsultasi via WhatsApp
                            <ArrowRight className="h-4 w-4" />
                        </a>
                        <Link
                            href="/produk"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-silver bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-offwhite"
                        >
                            Lihat Produk
                        </Link>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                        {[
                            { value: 'Bandung', label: 'Wilayah layanan utama' },
                            { value: 'Jakarta', label: 'Wilayah layanan utama' },
                            { value: 'Respon cepat', label: 'Tim konsultasi' },
                        ].map((item) => (
                            <div key={`${item.value}-${item.label}`} className="rounded-2xl border border-brand-silver bg-white p-4 shadow-sm">
                                <p className="text-2xl font-semibold text-brand-navy">{item.value}</p>
                                <p className="mt-1 text-sm text-brand-gray">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-full bg-emerald-200/60 blur-3xl lg:block" />
                    <div className="overflow-hidden rounded-[2rem] border border-brand-silver bg-white p-3 shadow-xl shadow-slate-900/5">
                        <ImageFrame
                            src="/images/hero/home-hero.png"
                            alt="Hero utama layanan sewa peralatan"
                            className="h-[280px] rounded-[1.5rem] sm:h-[360px] lg:h-[420px]"
                        />

                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            <div className="rounded-2xl bg-brand-offwhite p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">Support</p>
                                <p className="mt-2 text-sm font-semibold text-brand-navy">
                                    {company?.operational_hours || 'Senin-Sabtu, 09.00-16.00 WIB'}
                                </p>
                            </div>
                            <div className="rounded-2xl bg-brand-offwhite p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">Contact</p>
                                <p className="mt-2 text-sm font-semibold text-brand-navy">
                                    {company?.whatsapp_display || '0813 2164 2630'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-20 space-y-8">
                <SectionLabel>Mengapa Memilih Kami?</SectionLabel>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {advantages.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article key={item.title} className="rounded-3xl border border-brand-silver bg-white p-6 shadow-sm">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-offwhite text-brand-cyan">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h2 className="mt-5 text-lg font-semibold text-brand-navy">{item.title}</h2>
                                <p className="mt-2 text-sm leading-6 text-brand-gray">{item.description}</p>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="mt-20 space-y-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <SectionLabel>Layanan Kami</SectionLabel>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                            Pilih layanan sewa yang sesuai dengan kebutuhan Anda.
                        </h2>
                    </div>
                    <Link href="/produk" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:text-brand-teal">
                        Lihat kategori produk
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    {serviceCards.map((item) => (
                        <Link
                            key={item.title}
                            href="/cara-sewa"
                            className="group overflow-hidden rounded-3xl border border-brand-silver bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5"
                        >
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-brand-navy">{item.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-brand-gray">{item.description}</p>
                                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan">
                                    Lihat detail layanan
                                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="mt-20 rounded-[2rem] border border-brand-silver bg-white p-6 shadow-sm sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <SectionLabel>Cara Sewa</SectionLabel>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-brand-navy sm:text-3xl">
                            Lima langkah sederhana untuk mulai sewa.
                        </h2>
                    </div>
                    <div className="rounded-full bg-brand-offwhite px-4 py-2 text-sm font-medium text-brand-gray">
                        Panduan singkat sebelum konsultasi
                    </div>
                </div>

                <RentalFlowTimeline items={rentalFlow} compact className="mt-8" />

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm leading-6 text-brand-gray">
                        Untuk syarat lengkap dan detail dokumen, lihat halaman cara sewa kami.
                    </p>
                    <Link
                        href="/cara-sewa"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan transition hover:text-brand-teal"
                    >
                        Lihat Syarat &amp; Ketentuan Lengkap
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>

            <section className="mt-20 space-y-8">
                <div>
                    <SectionLabel>Testimoni Klien</SectionLabel>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                        Beberapa tanggapan dari pengguna layanan.
                    </h2>
                </div>

                <div className="grid gap-5 lg:grid-cols-3">
                    {testimonials.map((item) => (
                        <article key={item.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center gap-4">
                                <ImageFrame src={item.image} alt={`Foto profil ${item.name}`} className="h-14 w-14 rounded-2xl" />
                                <div>
                                    <h3 className="text-base font-semibold text-brand-navy">{item.name}</h3>
                                    <p className="text-sm text-brand-gray">{item.role}</p>
                                </div>
                            </div>
                            <p className="mt-5 text-sm leading-7 text-brand-gray">“{item.quote}”</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mt-20 space-y-8">
                <div>
                    <SectionLabel>Klien / Partner</SectionLabel>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-brand-navy sm:text-3xl">
                        Kepercayaan pelanggan dari berbagai kebutuhan sewa.
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    {partnerLogos.map((item) => (
                        <div key={item.name} className="flex items-center justify-center rounded-2xl border border-brand-silver bg-white p-4 shadow-sm">
                            <ImageFrame
                                src={item.image}
                                alt={`Logo ${item.name}`}
                                className="flex h-20 w-full items-center justify-center rounded-xl bg-brand-offwhite p-3 sm:h-24"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-20 overflow-hidden rounded-[2rem] bg-brand-navy px-6 py-10 text-white shadow-2xl shadow-slate-950/20 sm:px-10 sm:py-12">
                <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">CTA Akhir</p>
                        <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                            Butuh laptop, PC, tablet, atau TV plasma untuk kebutuhan Anda? Hubungi kami sekarang.
                        </h2>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
                            MST RENT siap membantu kebutuhan sewa untuk Bandung dan Jakarta dengan respon yang cepat.
                        </p>
                    </div>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-cyan px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-teal sm:w-auto"
                    >
                        <Users className="h-4 w-4" />
                        Chat tim kami
                    </a>
                </div>
            </section>
        </MainLayout>
    );
}