import { useState } from 'react';

import { usePage } from '@inertiajs/react';
import {
    BadgeCheck,
    Building2,
    CalendarClock,
    CheckCircle2,
    CreditCard,
    FileText,
    MessageSquareMore,
    PackageSearch,
    ShieldCheck,
    Truck,
    User,
} from 'lucide-react';

import Breadcrumb from '@/Components/layout/Breadcrumb';
import MainLayout from '@/Layouts/MainLayout';
import { buildCompanyWhatsAppLink } from '@/lib/whatsapp';

const rentalFlow = [
    {
        step: '01',
        title: 'Pilih produk',
        description: 'Lihat daftar produk lalu hubungi kami untuk memastikan ketersediaan barang yang Anda butuhkan.',
        icon: PackageSearch,
    },
    {
        step: '02',
        title: 'Konfirmasi pesanan',
        description: 'Tentukan durasi sewa, tanggal pengambilan, atau jadwal pengiriman yang paling pas.',
        icon: MessageSquareMore,
    },
    {
        step: '03',
        title: 'Serahkan dokumen',
        description: 'Siapkan dokumen persyaratan yang diminta agar proses administrasi berjalan cepat dan rapi.',
        icon: FileText,
    },
    {
        step: '04',
        title: 'Lakukan pembayaran',
        description: 'Bayar biaya sewa dan uang jaminan sesuai kesepakatan yang sudah disetujui bersama.',
        icon: CreditCard,
    },
    {
        step: '05',
        title: 'Ambil atau kirim barang',
        description: 'Barang bisa diambil sendiri atau kami kirim langsung ke lokasi Anda sesuai perjanjian.',
        icon: Truck,
    },
];

const requirementTabs = [
    {
        key: 'perorangan',
        label: 'Persyaratan Perorangan',
        icon: User,
        requirements: [
            'Menunjukkan KTP asli yang masih berlaku',
            'Menyerahkan fotokopi KTP 1 lembar',
            'Membayar uang jaminan yang akan dikembalikan saat barang diterima kembali dalam kondisi baik',
            'Membayar biaya sewa di muka sesuai durasi yang dipilih',
        ],
    },
    {
        key: 'instansi',
        label: 'Persyaratan Perusahaan / Instansi',
        icon: Building2,
        requirements: [
            'Menyerahkan surat permohonan sewa resmi dari instansi',
            'Menunjukkan fotokopi SIUP, TDP, atau Surat Tanda Daftar Perusahaan',
            'Menunjukkan identitas pengambil barang yang ditunjuk perusahaan',
            'Pembayaran dapat dilakukan via transfer atau faktur sesuai kesepakatan',
        ],
    },
];

export default function HowToRent() {
    const [activeTab, setActiveTab] = useState('perorangan');
    const { company } = usePage().props;
    const whatsappLink = buildCompanyWhatsAppLink(company, 'Halo, saya ingin bertanya soal syarat & cara sewa di MST RENT');

    const activeRequirementTab = requirementTabs.find((tab) => tab.key === activeTab) ?? requirementTabs[0];

    return (
        <MainLayout title="Cara Sewa | MST RENT" description="Alur sewa dan syarat ketentuan MST RENT untuk Bandung dan Jakarta.">
            <Breadcrumb items={[{ label: 'Cara Sewa' }]} />

            <section className="rounded-[2rem] border border-brand-silver bg-brand-offwhite p-8 shadow-sm sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">Cara Sewa & Syarat Ketentuan</p>
                <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
                    Alur sewa yang ringkas, persyaratan yang jelas, dan dukungan yang responsif.
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-7 text-brand-gray">
                    Halaman ini merangkum syarat sewa untuk perorangan maupun perusahaan/instansi, lalu menampilkan
                    langkah proses sewa yang bisa langsung diikuti sampai pengembalian barang.
                </p>
            </section>

            <section className="mt-20 space-y-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">Syarat Sewa</p>
                        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-brand-navy">Pilih jenis pelanggan untuk melihat dokumen yang dibutuhkan.</h2>
                    </div>
                    <div className="inline-flex rounded-full border border-brand-silver bg-white p-1 shadow-sm">
                        {requirementTabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = tab.key === activeTab;

                            return (
                                <button
                                    key={tab.key}
                                    type="button"
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${isActive
                                            ? 'bg-brand-navy text-white shadow-sm'
                                            : 'text-brand-gray hover:text-brand-navy'
                                        }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="rounded-[2rem] border border-brand-silver bg-white p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-offwhite text-brand-cyan">
                                <activeRequirementTab.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-cyan">{activeRequirementTab.label}</p>
                                <h3 className="text-2xl font-semibold tracking-tight text-brand-navy">Dokumen yang perlu disiapkan</h3>
                            </div>
                        </div>

                        <div className="mt-6 space-y-3">
                            {activeRequirementTab.requirements.map((item) => (
                                <div key={item} className="flex items-start gap-3 rounded-2xl bg-brand-offwhite p-4">
                                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-cyan" />
                                    <p className="text-sm leading-6 text-brand-gray">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {requirementTabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = tab.key === activeTab;

                            return (
                                <button
                                    key={tab.key}
                                    type="button"
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`rounded-[2rem] border p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${isActive
                                            ? 'border-brand-cyan bg-brand-navy text-white'
                                            : 'border-brand-silver bg-white text-brand-navy'
                                        }`}
                                >
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${isActive ? 'bg-white/10 text-brand-cyan' : 'bg-brand-offwhite text-brand-cyan'}`}>
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-5 text-lg font-semibold">{tab.label}</h3>
                                    <p className={`mt-2 text-sm leading-6 ${isActive ? 'text-white/75' : 'text-brand-gray'}`}>
                                        Buka tab ini untuk melihat daftar persyaratan yang relevan sebelum pengajuan sewa.
                                    </p>
                                </button>
                            );
                        })}

                        <div className="rounded-[2rem] border border-brand-silver bg-brand-offwhite p-6 shadow-sm sm:col-span-2">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="h-5 w-5 text-brand-cyan" />
                                <p className="font-semibold text-brand-navy">Catatan singkat</p>
                            </div>
                            <p className="mt-2 text-sm leading-6 text-brand-gray">
                                Persyaratan di atas disusun supaya proses verifikasi lebih cepat dan transaksi tetap aman untuk kedua belah pihak.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-20 space-y-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">Alur Sewa</p>
                    <h2 className="text-3xl font-semibold tracking-tight text-brand-navy">Lima langkah sederhana dari pemilihan produk sampai serah terima.</h2>
                </div>

                <div className="grid gap-4 xl:grid-cols-5">
                    {rentalFlow.map((item) => (
                        <article key={item.step} className="rounded-3xl border border-brand-silver bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                            <div className="flex items-center justify-between gap-4">
                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-cyan">{item.step}</p>
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-offwhite text-brand-cyan">
                                    <item.icon className="h-5 w-5" />
                                </div>
                            </div>
                            <h3 className="mt-5 text-lg font-semibold text-brand-navy">{item.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-brand-gray">{item.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mt-20 rounded-[2rem] border border-brand-silver bg-white p-8 shadow-sm sm:p-10">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-offwhite text-brand-cyan">
                        <CalendarClock className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">Pengembalian</p>
                        <h2 className="mt-1 text-3xl font-semibold tracking-tight text-brand-navy">Kembalikan tepat waktu agar proses jaminan berjalan lancar.</h2>
                    </div>
                </div>

                <div className="mt-6 rounded-[1.75rem] border border-brand-cyan/20 bg-brand-offwhite p-6">
                    <div className="flex items-start gap-3">
                        <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-brand-cyan" />
                        <p className="text-sm leading-7 text-brand-gray">
                            Kembalikan barang tepat waktu sesuai perjanjian. Uang jaminan akan dikembalikan setelah kondisi barang diperiksa.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mt-20 rounded-[2rem] border border-brand-navy bg-brand-navy p-8 text-white shadow-sm sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">Konsultasi</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">Masih ada pertanyaan sebelum sewa? Hubungi kami langsung.</h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/75">
                    Tim MST RENT siap bantu cek ketersediaan, syarat dokumen, dan skema sewa yang paling sesuai untuk kebutuhan Anda.
                </p>

                <a
                    href={whatsappLink}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-cyan px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-teal"
                >
                    Konsultasi via WhatsApp
                    <CheckCircle2 className="h-4 w-4" />
                </a>

                <p className="mt-4 text-sm text-white/75">Kontak resmi: {company?.whatsapp_display || '0813 2164 2630'}</p>
            </section>
        </MainLayout>
    );
}