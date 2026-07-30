import { usePage } from '@inertiajs/react';
import { Clock3, Mail, MapPin, MessageCircle, PhoneCall, Send } from 'lucide-react';

import Breadcrumb from '@/Components/layout/Breadcrumb';
import MainLayout from '@/Layouts/MainLayout';
import { buildCompanyWhatsAppLink } from '@/lib/whatsapp';

function ContactRow({ icon: Icon, label, value, href }) {
    return (
        <div className="flex items-start gap-4 rounded-3xl border border-brand-silver bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-offwhite text-brand-cyan">
                <Icon className="h-5 w-5" />
            </div>
            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gray">{label}</p>
                {href ? (
                    <a href={href} className="mt-1 block text-sm font-semibold text-brand-navy hover:text-brand-cyan">
                        {value}
                    </a>
                ) : (
                    <p className="mt-1 text-sm font-semibold text-brand-navy">{value}</p>
                )}
            </div>
        </div>
    );
}

export default function Contact() {
    const { company } = usePage().props;
    const whatsappLink = buildCompanyWhatsAppLink(company, 'Halo, saya ingin konsultasi sewa peralatan.');

    return (
        <MainLayout title="Kontak | MST RENT" description="Informasi kontak resmi MST RENT untuk Bandung dan Jakarta.">
            <Breadcrumb items={[{ label: 'Kontak' }]} />

            <section className="rounded-[2rem] border border-brand-silver bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">Kontak</p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
                    Hubungi MST RENT untuk kebutuhan sewa perangkat Anda.
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-7 text-brand-gray">
                    Kami siap membantu konsultasi, pemilihan unit, dan penjadwalan pengantaran untuk Bandung serta
                    Jakarta.
                </p>
            </section>

            <section className="mt-20 grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                <div className="space-y-4">
                    <ContactRow
                        icon={PhoneCall}
                        label="WhatsApp"
                        value={company?.whatsapp_display || '0813 2164 2630'}
                        href={whatsappLink}
                    />
                    <ContactRow
                        icon={Mail}
                        label="Email"
                        value={company?.email || 'mstrent.official@gmail.com'}
                        href={`mailto:${company?.email || 'mstrent.official@gmail.com'}`}
                    />
                    <ContactRow
                        icon={Clock3}
                        label="Jam Operasional"
                        value={company?.operational_hours || 'Senin-Sabtu, 09.00-16.00 WIB'}
                    />
                    <ContactRow
                        icon={MapPin}
                        label="Wilayah Layanan"
                        value={company?.service_area || 'Bandung & Jakarta'}
                    />
                </div>

                <aside className="rounded-[2rem] border border-brand-navy bg-brand-navy p-8 text-white shadow-sm">
                    <MessageCircle className="h-10 w-10 text-brand-cyan" />
                    <h2 className="mt-5 text-2xl font-semibold tracking-tight">Langsung ke WhatsApp</h2>
                    <p className="mt-3 text-sm leading-7 text-white/75">
                        Untuk respon tercepat, gunakan WhatsApp resmi MST RENT. Tim kami akan membantu sesuai
                        kebutuhan sewa Anda.
                    </p>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-cyan px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-teal"
                    >
                        <Send className="h-4 w-4" />
                        Chat Sekarang
                    </a>
                </aside>
            </section>
        </MainLayout>
    );
}