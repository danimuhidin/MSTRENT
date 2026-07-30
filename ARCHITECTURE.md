# ARCHITECTURE.md — Website Company Profile Rental Peralatan

## 1. Stack
- Laravel (routing, controller, tanpa database/migration aktif)
- Inertia.js (jembatan Laravel ↔ React, tanpa REST API terpisah)
- React (komponen UI)
- Tailwind CSS (styling)
- Lucide React (icon set)

## 2. Prinsip Arsitektur
- **Static-data-driven**: semua data produk/testimoni/FAQ disimpan sebagai file statis (PHP array/config atau JS constant), bukan dari database.
- **Server hanya sebagai router + data provider**: Controller Laravel mengambil data statis lalu melempar ke Inertia sebagai props.
- **Tidak ada state management kompleks**: cukup React local state/props, tanpa Redux/Zustand.
- **CTA sewa = link langsung**, tidak ada form submit ke backend:
  `https://wa.me/62xxxxxxxxxx?text=<pesan encode>`

## 3. Struktur Direktori Publik (Aset Gambar)

Karena website static, semua gambar disimpan langsung di `public/images/` (bukan lewat storage/upload), dipetakan per kebutuhan halaman agar mudah dikelola developer:

```
public/
  images/
    brand/              # logo perusahaan (untuk navbar, footer, favicon source)
      logo.svg
      logo-white.svg
      favicon.png
    hero/                # gambar hero/banner tiap halaman
      home-hero.jpg
      about-hero.jpg
      corporate-hero.jpg
    products/            # gambar produk, dikelompokkan per slug produk
      laptop-asus-rog-strix/
        1.jpg
        2.jpg
        3.jpg
      ipad-pro-2022/
        1.jpg
        2.jpg
      proyektor-epson-x400/
        1.jpg
    categories/           # thumbnail/ikon representasi tiap kategori produk
      laptop.jpg
      tablet.jpg
      proyektor.jpg
      printer.jpg
      aksesoris.jpg
    clients/               # logo klien/perusahaan partner (untuk Home & Portofolio)
      client-1.png
      client-2.png
    testimonials/          # foto profil pemberi testimoni (opsional, bisa avatar generik)
      user-1.jpg
    portfolio/              # dokumentasi studi kasus/proyek, dikelompokkan per studi kasus
      seminar-xyz-2024/
        1.jpg
        2.jpg
      kantor-abc/
        1.jpg
    misc/                   # gambar pendukung lain (ilustrasi FAQ, cara sewa, dll)
      how-to-rent-step-1.svg
      how-to-rent-step-2.svg
```

**Konvensi penamaan & referensi:**
- Path gambar disimpan sebagai string relatif di data statis backend, contoh: `'images' => ['/images/products/laptop-asus-rog-strix/1.jpg']`.
- Folder produk/portofolio memakai **slug** sebagai nama folder agar 1:1 dengan identitas data (`app/Data/Products.php`, `app/Data/Portfolio.php`), memudahkan mapping otomatis tanpa hardcode nama file satu-satu jika dibutuhkan (misal: `Storage`-like helper yang scan folder berdasarkan slug — opsional, karena ini murni static asset).
- Format disarankan: `.webp`/`.jpg` untuk foto (kompresi lebih ringan), `.svg` untuk logo/ilustrasi agar tajam di semua resolusi.
- Ukuran/rasio disarankan konsisten per kategori (misal semua `hero/` 1920x800, semua `products/*/` 800x800) agar layout tidak "loncat".

## 4. Struktur Folder

```
app/
  Http/
    Controllers/
      HomeController.php
      AboutController.php
      ProductController.php
      PricingController.php
      CorporateController.php
      PortfolioController.php
      FaqController.php
      ContactController.php

config/
  company.php          # info umum: nama, alamat, no WA, jam operasional, sosmed

resources/
  js/
    Pages/
      Home.jsx
      About.jsx
      Products/
        Index.jsx
        Show.jsx
      HowToRent.jsx
      Pricing.jsx
      Corporate.jsx
      Portfolio.jsx
      Faq.jsx
      Contact.jsx
    Components/
      layout/
        Navbar.jsx
        Footer.jsx
        WhatsAppFloatButton.jsx
        Breadcrumb.jsx
      ui/
        ProductCard.jsx
        CategoryFilter.jsx
        TestimonialCard.jsx
        PriceTable.jsx
        FaqAccordion.jsx
        SectionHeading.jsx
        CTABanner.jsx
    Layouts/
      MainLayout.jsx
    data/
      products.js        # atau diambil dari props Inertia (rekomendasi: dari backend)
      testimonials.js
      faqs.js
    lib/
      whatsapp.js         # helper generate link wa.me + pesan
    app.jsx
    ssr.jsx (opsional)

  views/
    app.blade.php

routes/
  web.php
```

## 5. Sumber Data Statis (Rekomendasi: di Backend, bukan Frontend)
Agar mudah dikelola developer dan tetap "single source of truth", data produk/testimoni/FAQ sebaiknya disimpan di **PHP** (config atau file array), lalu dikirim ke React via Inertia props. Ini menghindari duplikasi data di frontend.

Contoh: `app/Data/Products.php`
```php
<?php

return [
    [
        'slug' => 'laptop-asus-rog-strix',
        'category' => 'laptop',
        'name' => 'Asus ROG Strix G15',
        'specs' => ['Ryzen 7', '16GB RAM', 'RTX 3060', '512GB SSD'],
        'price' => [
            'daily' => 150000,
            'weekly' => 900000,
            'monthly' => 3000000,
        ],
        'stock_status' => 'available', // available | limited | unavailable
        'images' => ['/images/products/laptop-asus-rog-strix/1.jpg'],
    ],
    // ...
];
```

## 6. Alur Request (Contoh: Halaman Produk)

```
Browser → GET /produk?kategori=laptop
   ↓
routes/web.php → ProductController@index
   ↓
Controller ambil data dari app/Data/Products.php (filter by kategori jika ada)
   ↓
return Inertia::render('Products/Index', [
    'products' => $filteredProducts,
    'categories' => $categories,
    'activeCategory' => $request->query('kategori'),
]);
   ↓
React Pages/Products/Index.jsx render list ProductCard
   ↓
Klik card → Inertia <Link href={`/produk/${slug}`} /> (client-side navigation, tanpa reload)
```

## 7. Halaman Detail Produk & CTA WhatsApp

```jsx
// resources/js/lib/whatsapp.js
export function generateWaLink(productName, phone = '62xxxxxxxxxx') {
  const message = `Halo, saya ingin sewa ${productName}. Apakah masih tersedia?`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
```

```jsx
// Pages/Products/Show.jsx
<a
  href={generateWaLink(product.name)}
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary"
>
  Sewa via WhatsApp
</a>
```

## 8. Routing (`routes/web.php`)

```php
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/tentang-kami', [AboutController::class, 'index'])->name('about');
Route::get('/produk', [ProductController::class, 'index'])->name('products.index');
Route::get('/produk/{slug}', [ProductController::class, 'show'])->name('products.show');
Route::get('/cara-sewa', [HowToRentController::class, 'index'])->name('how-to-rent');
Route::get('/harga', [PricingController::class, 'index'])->name('pricing');
Route::get('/korporat', [CorporateController::class, 'index'])->name('corporate');
Route::get('/portofolio', [PortfolioController::class, 'index'])->name('portfolio');
Route::get('/faq', [FaqController::class, 'index'])->name('faq');
Route::get('/kontak', [ContactController::class, 'index'])->name('contact');
```

Tidak ada route POST/PUT/DELETE karena tidak ada transaksi/form submit ke server.

## 9. Layout Global

`MainLayout.jsx` membungkus semua halaman:
```jsx
<MainLayout>
  <Navbar />
  <Head title={pageTitle} />
  {children}
  <Footer />
  <WhatsAppFloatButton />
</MainLayout>
```

Digunakan di tiap Page via:
```jsx
Page.layout = (page) => <MainLayout>{page}</MainLayout>
```

## 10. Konfigurasi Global Perusahaan

`config/company.php`:
```php
return [
    'name' => 'Nama Perusahaan',
    'whatsapp' => '62xxxxxxxxxx',
    'whatsapp_corporate' => '62xxxxxxxxxx',
    'email' => 'info@perusahaan.com',
    'address' => 'Jl. ...',
    'operational_hours' => 'Senin-Sabtu, 09.00-17.00',
    'social' => [
        'instagram' => 'https://instagram.com/...',
        'tiktok' => 'https://tiktok.com/...',
    ],
];
```
Di-share ke semua halaman via `HandleInertiaRequests` middleware (`shared data`), supaya bisa dipakai di Navbar/Footer/WhatsAppFloatButton tanpa passing manual di tiap controller.

## 11. SEO & Meta
Gunakan `<Head>` dari `@inertiajs/react` di tiap Page untuk title & meta description dinamis:
```jsx
import { Head } from '@inertiajs/react';

<Head title="Sewa Laptop Jakarta | Nama Perusahaan">
  <meta name="description" content="..." />
</Head>
```

## 12. Deployment Notes
- Tidak perlu setup database/migration — cukup `php artisan config:cache` untuk config statis.
- Build asset: `npm run build` (Vite + Laravel plugin).
- Cocok deploy di shared hosting/VPS standar Laravel (tanpa worker/queue).

## 13. Skalabilitas ke Depan (Opsional, di luar scope awal)
- Jika nanti butuh CMS: ganti sumber data statis dengan database + Filament/Nova admin panel, tanpa mengubah struktur halaman/komponen React.
- Jika butuh multi-bahasa: tambahkan Laravel localization + props `locale`.
