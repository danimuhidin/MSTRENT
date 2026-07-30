import { usePage } from '@inertiajs/react';
import { BadgeCheck, Building2, HandHeart, MapPin, Sparkles, Users2 } from 'lucide-react';

import Breadcrumb from '@/Components/layout/Breadcrumb';
import MainLayout from '@/Layouts/MainLayout';

const commitments = [
    {
        icon: BadgeCheck,
        title: 'Unit selalu prima dan terawat',
        description: 'Setiap laptop melalui seleksi ketat, perawatan rutin, dan pengecekan performa menyeluruh.',
    },
    {
        icon: Users2,
        title: 'Melayani beragam kebutuhan',
        description: 'MST RENT melayani pelajar, profesional, UMKM, perusahaan besar, hingga instansi.',
    },
    {
        icon: HandHeart,
        title: 'Konsultasi yang jujur dan menyeluruh',
        description: 'Tim siap membantu memilih perangkat yang paling sesuai dengan kebutuhan dan anggaran.',
    },
    {
        icon: Building2,
        title: 'Dukungan pengantaran dan pengambilan',
        description: 'Layanan mencakup Bandung dan Jakarta agar proses sewa tetap praktis dan tepat waktu.',
    },
];

function HeroImage() {
    return (
        <div className="overflow-hidden rounded-[2rem] border border-brand-silver bg-white p-3 shadow-xl shadow-slate-900/5">
            <span className="relative block h-[360px] overflow-hidden rounded-[1.5rem] border border-dashed border-brand-silver bg-brand-offwhite">
                <img
                    src="/images/hero/about-hero.jpg"
                    alt="Hero tentang MST RENT"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    onError={(event) => {
                        event.currentTarget.style.visibility = 'hidden';
                    }}
                />
            </span>
        </div>
    );
}

export default function About() {
    const { company } = usePage().props;

    return (
        <MainLayout title="Tentang Kami | MST RENT" description="Profil MST RENT sebagai penyedia sewa perangkat teknologi di Bandung dan Jakarta.">
            <Breadcrumb items={[{ label: 'Tentang Kami' }]} />

            <section className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 rounded-full border border-brand-silver bg-white px-4 py-2 text-sm font-medium text-brand-navy">
                        <Sparkles className="h-4 w-4" />
                        Tentang Kami
                    </div>
                    <h1 className="text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
                        Penyedia jasa penyewaan perangkat teknologi terpercaya di Bandung dan Jakarta.
                    </h1>
                    <p className="max-w-2xl text-base leading-7 text-brand-gray sm:text-lg">
                        Kami hadir untuk memberikan solusi yang lebih fleksibel, efisien, dan tepat sasaran bagi
                        setiap kebutuhan Anda, tanpa harus selalu membeli perangkat sendiri.
                    </p>
                    <p className="max-w-2xl text-base leading-7 text-brand-gray">
                        Selama bertahun-tahun, MST RENT telah melayani pelajar, pekerja profesional, usaha mikro,
                        perusahaan besar, dan instansi pemerintah dengan standar pelayanan yang tinggi.
                    </p>
                </div>

                <HeroImage />
            </section>

            <section className="mt-20 grid gap-5 lg:grid-cols-2">
                <div className="rounded-[2rem] border border-brand-silver bg-white p-8 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">Visi</p>
                    <p className="mt-4 text-lg leading-8 text-brand-gray">
                        Menjadi mitra teknologi yang dapat diandalkan untuk kebutuhan sewa perangkat yang fleksibel,
                        aman, dan bernilai guna bagi pelanggan di Bandung dan Jakarta.
                    </p>
                </div>

                <div className="rounded-[2rem] border border-brand-silver bg-white p-8 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">Misi</p>
                    <ul className="mt-4 space-y-4 text-sm leading-7 text-brand-gray">
                        <li>Memberikan unit yang selalu prima, bersih, dan siap pakai.</li>
                        <li>Menyediakan pilihan perangkat yang beragam sesuai kebutuhan dan anggaran.</li>
                        <li>Memberikan konsultasi jujur, cepat, dan ramah selama proses sewa berlangsung.</li>
                        <li>Menjaga ketepatan waktu pengantaran dan pengambilan di area layanan utama.</li>
                    </ul>
                </div>
            </section>

            <section className="mt-20 space-y-8">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">Keunggulan Utama</p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-brand-navy">
                        Mengapa MST RENT dipercaya banyak pelanggan.
                    </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    {commitments.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article key={item.title} className="rounded-3xl border border-brand-silver bg-white p-6 shadow-sm">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-offwhite text-brand-cyan">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="mt-5 text-lg font-semibold text-brand-navy">{item.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-brand-gray">{item.description}</p>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="mt-20 rounded-[2rem] border border-brand-silver bg-brand-offwhite p-8 shadow-sm">
                <div className="grid gap-5 md:grid-cols-3">
                    {[
                        { label: 'Wilayah layanan', value: company?.service_area || 'Bandung & Jakarta' },
                        { label: 'Kontak WhatsApp', value: company?.whatsapp_display || '0813 2164 2630' },
                        { label: 'Jam operasional', value: company?.operational_hours || 'Senin-Sabtu, 09.00-16.00 WIB' },
                    ].map((item) => (
                        <div key={item.label} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-brand-silver">
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gray">{item.label}</p>
                            <p className="mt-2 text-base font-semibold text-brand-navy">{item.value}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex items-start gap-3 rounded-2xl bg-white p-5 text-sm leading-7 text-brand-gray shadow-sm ring-1 ring-brand-silver">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-cyan" />
                    <p>
                        Kami memberikan layanan pengantaran dan pengambilan ke lokasi untuk menjaga proses sewa tetap
                        praktis, tepat waktu, dan nyaman untuk pelanggan.
                    </p>
                </div>
            </section>
        </MainLayout>
    );
}