import { usePage } from '@inertiajs/react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

import Breadcrumb from '@/Components/layout/Breadcrumb';
import MainLayout from '@/Layouts/MainLayout';
import { buildCompanyWhatsAppLink } from '@/lib/whatsapp';

const faqs = [
    {
        question: 'Wilayah layanan MST RENT di mana saja?',
        answer: 'MST RENT melayani Bandung dan Jakarta untuk pengantaran serta pengambilan unit sesuai kebutuhan.',
    },
    {
        question: 'Apakah unit tersedia untuk kebutuhan harian dan bulanan?',
        answer: 'Ya. Layanan tersedia untuk harian, mingguan, bulanan, dan jangka panjang sesuai kebutuhan Anda.',
    },
    {
        question: 'Jenis perangkat apa saja yang disewakan?',
        answer: 'Fokus utama MST RENT adalah laptop, komputer/PC, tablet, dan TV plasma atau layar besar.',
    },
    {
        question: 'Apakah MST RENT melayani sewa untuk acara dan seminar?',
        answer: 'Ya. Kami bisa menyiapkan unit dalam jumlah banyak untuk workshop, rapat, pameran, dan pelatihan.',
    },
    {
        question: 'Bagaimana cara konsultasi awal?',
        answer: 'Anda dapat langsung menghubungi WhatsApp resmi MST RENT untuk menjelaskan kebutuhan dan durasi sewa.',
    },
    {
        question: 'Apakah ada dukungan selama masa sewa?',
        answer: 'Ya. Tim MST RENT siap membantu selama masa sewa bila ada kebutuhan teknis atau penyesuaian unit.',
    },
    {
        question: 'Apakah harga sewa bisa disesuaikan?',
        answer: 'Ya. Penawaran akan disesuaikan dengan jenis perangkat, durasi, dan jumlah unit yang dibutuhkan.',
    },
    {
        question: 'Apakah ada form pemesanan online?',
        answer: 'Tidak. Untuk tahap awal, pemesanan diarahkan langsung ke WhatsApp agar lebih cepat dan fleksibel.',
    },
];

export default function Faq() {
    const { company } = usePage().props;
    const whatsappLink = buildCompanyWhatsAppLink(company, 'Halo, saya ingin bertanya mengenai layanan MST RENT.');

    return (
        <MainLayout title="FAQ | MST RENT" description="Pertanyaan umum seputar layanan sewa MST RENT di Bandung dan Jakarta.">
            <Breadcrumb items={[{ label: 'FAQ' }]} />

            <section className="rounded-[2rem] border border-brand-silver bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">FAQ</p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
                    Pertanyaan yang paling sering ditanyakan pelanggan.
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-7 text-brand-gray">
                    Kami rangkum jawaban singkat untuk membantu Anda memahami layanan MST RENT sebelum menghubungi
                    tim kami.
                </p>
            </section>

            <section className="mt-20 grid gap-4 lg:grid-cols-[1fr_0.8fr]">
                <div className="space-y-4">
                    {faqs.map((item) => (
                        <details key={item.question} className="group rounded-3xl border border-brand-silver bg-white p-6 shadow-sm">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                                <span className="text-base font-semibold text-brand-navy">{item.question}</span>
                                <ChevronDown className="h-5 w-5 shrink-0 text-brand-silver transition group-open:rotate-180" />
                            </summary>
                            <p className="mt-4 text-sm leading-7 text-brand-gray">{item.answer}</p>
                        </details>
                    ))}
                </div>

                <aside className="h-fit rounded-[2rem] border border-brand-navy bg-brand-navy p-8 text-white shadow-sm">
                    <HelpCircle className="h-10 w-10 text-brand-cyan" />
                    <h2 className="mt-5 text-2xl font-semibold tracking-tight">Masih ada pertanyaan?</h2>
                    <p className="mt-3 text-sm leading-7 text-white/75">
                        Hubungi tim MST RENT langsung via WhatsApp untuk mendapatkan jawaban yang lebih spesifik.
                    </p>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-cyan px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-teal"
                    >
                        <PhoneCall className="h-4 w-4" />
                        WhatsApp MST RENT
                    </a>
                </aside>
            </section>
        </MainLayout>
    );
}