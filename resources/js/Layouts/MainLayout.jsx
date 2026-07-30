import { Head } from '@inertiajs/react';

import Footer from '@/Components/layout/Footer';
import Navbar from '@/Components/layout/Navbar';
import WhatsAppFloatButton from '@/Components/layout/WhatsAppFloatButton';

export default function MainLayout({ children, title, description }) {
    return (
        <div className="min-h-screen overflow-x-hidden bg-brand-offwhite text-brand-gray">
            <Head title={title || 'Company Profile'}>
                {description ? <meta name="description" content={description} /> : null}
            </Head>

            <Navbar />

            <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">{children}</main>

            <Footer />
            <WhatsAppFloatButton />
        </div>
    );
}