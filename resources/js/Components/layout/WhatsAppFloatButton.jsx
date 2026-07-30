import { MessageCircle } from 'lucide-react';
import { usePage } from '@inertiajs/react';

import { buildCompanyWhatsAppLink } from '@/lib/whatsapp';

export default function WhatsAppFloatButton() {
    const { company } = usePage().props;

    const whatsappLink = buildCompanyWhatsAppLink(
        company,
        'Halo, saya ingin konsultasi sewa peralatan.'
    );

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-brand-cyan px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-brand-cyan/30 transition hover:translate-y-[-2px] hover:bg-brand-teal sm:bottom-6 sm:right-6"
            aria-label="Hubungi via WhatsApp"
        >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <MessageCircle className="h-5 w-5" />
            </span>
            <span className="hidden sm:inline">WhatsApp</span>
        </a>
    );
}