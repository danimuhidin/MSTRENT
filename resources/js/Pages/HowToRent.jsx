import { usePage } from '@inertiajs/react';
import { AlertCircle, BadgeCheck, Clock3, ReceiptText, Truck, UserRoundCheck } from 'lucide-react';

import Breadcrumb from '@/Components/layout/Breadcrumb';
import MainLayout from '@/Layouts/MainLayout';

const rentalFlow = [
    {
        step: '01',
        title: 'Konsultasi kebutuhan',
        description: 'Hubungi tim MST RENT untuk menjelaskan jenis perangkat, durasi sewa, dan jumlah unit.',
    },
    {
        step: '02',
        title: 'Pilih unit yang sesuai',
        description: 'Kami bantu mencocokkan spesifikasi dan kategori perangkat dengan kebutuhan Anda.',
    },
    {
        step: '03',
        title: 'Konfirmasi pengantaran',
        description: 'Jadwal pengantaran dan pengambilan disusun agar proses Anda tetap efisien.',
    },
    {
        step: '04',
        title: 'Gunakan selama masa sewa',
        description: 'Unit digunakan sesuai durasi yang disepakati dengan dukungan tim bila dibutuhkan.',
    },
];

// TODO: Isi detail syarat final seperti dokumen identitas, deposit, dan batas minimal durasi sewa.
const rentalRequirements = [
    { title: 'Dokumen identitas', note: 'Detail teknis akan diisi manual sesuai kebijakan final.' },
    { title: 'Deposit / jaminan', note: 'Detail nominal dan ketentuannya belum dicantumkan di materi asli.' },
    { title: 'Minimal durasi sewa', note: 'Sesuaikan dengan kebijakan final tim MST RENT.' },
];

// TODO: Lengkapi aturan kerusakan, kehilangan, dan pembatalan berdasarkan kebijakan resmi yang final.
const policyCards = [
    {
        title: 'Metode pembayaran',
        description: 'Pembayaran dapat disesuaikan setelah konfirmasi order dan rincian kebutuhan disepakati.',
        icon: ReceiptText,
    },
    {
        title: 'Pengiriman dan pengambilan',
        description: 'MST RENT melayani pengantaran dan pengambilan ke lokasi di Bandung dan Jakarta.',
        icon: Truck,
    },
    {
        title: 'Dukungan selama masa sewa',
        description: 'Tim kami siap membantu jika ada kebutuhan teknis saat unit sedang digunakan.',
        icon: UserRoundCheck,
    },
    {
        title: 'Catatan kebijakan',
        description: 'Rincian kerusakan, kehilangan, dan pembatalan perlu diisi manual sebelum dipublikasikan.',
        icon: AlertCircle,
    },
];

export default function HowToRent() {
    const { company } = usePage().props;

    return (
        <MainLayout title="Cara Sewa | MST RENT" description="Alur sewa dan syarat ketentuan MST RENT untuk Bandung dan Jakarta.">
            <Breadcrumb items={[{ label: 'Cara Sewa' }]} />

            <section className="rounded-[2rem] border border-brand-silver bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">Cara Sewa & Syarat Ketentuan</p>
                <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
                    Proses sewa yang singkat, jelas, dan fleksibel untuk kebutuhan harian maupun jangka panjang.
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-7 text-brand-gray">
                    Materi asli menekankan kemudahan konsultasi, pengantaran, dan pengambilan unit. Rincian teknis
                    yang belum tercantum langsung di materi diberi penanda TODO agar dapat diisi manual.
                </p>
            </section>

            <section className="mt-20 space-y-8">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">Alur Sewa</p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-brand-navy">Empat langkah utama untuk mulai sewa.</h2>
                </div>

                <div className="grid gap-4 lg:grid-cols-4">
                    {rentalFlow.map((item) => (
                        <article key={item.step} className="rounded-3xl border border-brand-silver bg-white p-6 shadow-sm">
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-cyan">{item.step}</p>
                            <h3 className="mt-4 text-lg font-semibold text-brand-navy">{item.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-brand-gray">{item.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mt-20 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[2rem] border border-brand-silver bg-white p-8 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">Syarat Sewa</p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-brand-navy">Detail yang perlu Anda isi manual.</h2>

                    <div className="mt-6 space-y-4">
                        {rentalRequirements.map((item) => (
                            <div key={item.title} className="rounded-2xl bg-brand-offwhite p-4">
                                <div className="flex items-center gap-3">
                                    <BadgeCheck className="h-5 w-5 text-brand-cyan" />
                                    <p className="font-semibold text-brand-navy">{item.title}</p>
                                </div>
                                <p className="mt-2 text-sm leading-6 text-brand-gray">{item.note}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 rounded-2xl border border-dashed border-brand-silver bg-brand-offwhite p-4 text-sm leading-6 text-brand-gray">
                        TODO: Tambahkan kebijakan final untuk dokumen identitas, deposit, dan minimal durasi sewa
                        sebelum halaman dipublikasikan.
                    </div>
                </div>

                <div className="space-y-4">
                    {policyCards.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article key={item.title} className="rounded-[2rem] border border-brand-silver bg-white p-6 shadow-sm">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-offwhite text-brand-cyan">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="mt-5 text-lg font-semibold text-brand-navy">{item.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-brand-gray">{item.description}</p>
                            </article>
                        );
                    })}

                    <div className="grid gap-4 sm:grid-cols-2">
                        <span className="relative block h-40 overflow-hidden rounded-[2rem] border border-dashed border-brand-silver bg-brand-offwhite">
                            <img
                                src="/images/misc/how-to-rent-step-1.svg"
                                alt="Ilustrasi langkah sewa satu"
                                className="h-full w-full object-cover"
                                loading="lazy"
                                onError={(event) => {
                                    event.currentTarget.style.visibility = 'hidden';
                                }}
                            />
                        </span>
                        <span className="relative block h-40 overflow-hidden rounded-[2rem] border border-dashed border-brand-silver bg-brand-offwhite">
                            <img
                                src="/images/misc/how-to-rent-step-2.svg"
                                alt="Ilustrasi langkah sewa dua"
                                className="h-full w-full object-cover"
                                loading="lazy"
                                onError={(event) => {
                                    event.currentTarget.style.visibility = 'hidden';
                                }}
                            />
                        </span>
                    </div>
                </div>
            </section>

            <section className="mt-20 rounded-[2rem] border border-brand-navy bg-brand-navy p-8 text-white shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">Wilayah Layanan</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">MST RENT melayani Bandung dan Jakarta.</h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/75">
                    Tim kami siap membantu pengantaran, pengambilan, serta dukungan selama masa sewa agar proses
                    Anda tetap praktis dan efisien.
                </p>
                <p className="mt-4 text-sm text-white/75">Kontak resmi: {company?.whatsapp_display || '0813 2164 2630'}</p>
            </section>
        </MainLayout>
    );
}