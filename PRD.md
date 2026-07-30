# PRD.md — Website Company Profile Rental Peralatan (MST RENT)

## 1. Ringkasan Produk
Website static company profile untuk perusahaan penyewaan peralatan elektronik (laptop, iPad/tablet, proyektor, printer, dll). Tujuan utama: menyampaikan informasi produk, cara sewa, dan mengarahkan calon pelanggan untuk menghubungi via WhatsApp (wa.me) — bukan transaksi/checkout online.

## 2. Tujuan
- Memberi informasi lengkap seputar layanan sewa (kategori barang, harga, syarat, prosedur).
- Membangun kepercayaan (testimoni, portofolio, legalitas).
- Memaksimalkan konversi lead melalui CTA WhatsApp di setiap titik strategis.
- Tidak memerlukan database — semua data produk bersifat statis (hardcoded/JSON/props dari controller Laravel).

## 3. Target Pengguna
- Individu/karyawan yang butuh sewa jangka pendek (event, kebutuhan mendadak).
- Perusahaan/EO yang butuh sewa dalam jumlah besar (korporat/tender).

## 4. Stack Teknologi
- **Backend**: Laravel (routing + Inertia response, tanpa database/Eloquent model aktif)
- **Frontend**: Inertia.js + React
- **Styling**: Tailwind CSS
- **Icon**: Lucide React
- **Data**: Static data di `resources/js/data/*.js` atau `config/*.php`, dilempar ke halaman via Inertia props

## 5. Daftar Halaman & Fitur

### 5.1 Home (`/`)
- Hero section + CTA utama ke WhatsApp
- Section keunggulan (3-4 poin ikon: gratis antar, garansi, harga bersaing, respon cepat)
- Kategori produk unggulan (grid card → link ke `/produk?kategori=...`)
- Cara sewa (4 langkah singkat)
- Testimoni klien (carousel/grid)
- Logo klien/perusahaan partner
- CTA banner akhir → WhatsApp
- Footer global

### 5.2 Tentang Kami (`/tentang-kami`)
- Sejarah singkat perusahaan
- Visi & misi
- Keunggulan kompetitif
- Statistik (jumlah unit, klien, tahun beroperasi) — counter animasi opsional
- Legalitas (jika ada, untuk kebutuhan B2B/tender)

### 5.3 Produk (`/produk`)
- Filter kategori (tab/sidebar: Laptop, Komputer/PC, Tablet, TV Plasma/Layar Besar)
- List produk per kategori (card: nama, spesifikasi singkat, harga per hari/minggu/bulan, badge stok)
- **Tanpa form/CTA per-item** — klik card langsung ke detail produk

### 5.4 Detail Produk (`/produk/{slug}`)
- Galeri foto produk
- Spesifikasi lengkap (tabel)
- Info harga sewa (harian/mingguan/bulanan)
- Status ketersediaan (statis, misal badge "Tersedia"/"Terbatas")
- **CTA "Sewa via WhatsApp"** → `https://wa.me/62xxxx?text=Halo, saya ingin sewa {nama produk}`
- Produk terkait (related items)

### 5.5 Cara Sewa & Syarat Ketentuan (`/cara-sewa`)
- Alur sewa step-by-step (ilustrasi/timeline)
- Syarat sewa (KTP, deposit, minimal durasi)
- Metode pembayaran
- Kebijakan pengiriman & pengambilan
- Kebijakan kerusakan/kehilangan
- Kebijakan pembatalan/refund

### 5.6 Harga/Paket (`/harga`)
- Tabel harga per kategori & durasi
- Paket bundling (misal: laptop + proyektor untuk seminar)
- Info diskon sewa jangka panjang/korporat
- CTA ke WhatsApp untuk konsultasi harga custom

### 5.7 Untuk Bisnis/Korporat (`/korporat`)
- Skema kontrak & harga volume besar
- Studi kasus penggunaan korporat
- CTA khusus WhatsApp tim sales korporat (nomor berbeda opsional)

### 5.8 Portofolio/Klien (`/portofolio`)
- Studi kasus (event, kantor, sekolah)
- Galeri dokumentasi (grid/lightbox)
- List logo klien korporat

### 5.9 FAQ (`/faq`)
- Accordion pertanyaan umum (proses sewa, garansi, area layanan, dll)

### 5.10 Kontak (`/kontak`)
- Info nomor WA/telepon, email
- Alamat kantor + Google Maps embed
- Jam operasional
- Link sosial media
- Tidak ada form kontak submit ke server — cukup link `mailto:` dan `wa.me`

## 6. Komponen Global
- Navbar (dengan dropdown Produk per kategori)
- Footer (kontak, sosmed, quick links, copyright)
- Floating WhatsApp Button (persisten di semua halaman)
- Breadcrumb (untuk halaman produk & detail)

## 7. Non-Functional Requirements
- Fully static — tidak ada auth, tidak ada database/migration aktif
- SEO-friendly (meta tag per halaman via Inertia `<Head>`)
- Responsive (mobile-first, karena banyak trafik dari WA share)
- Performa cepat (asset dioptimasi, lazy load gambar)
- Semua data produk/harga mudah diedit developer (single source file)

## 8. Out of Scope
- Sistem booking/checkout online
- Login/akun user
- Payment gateway
- Admin panel/CMS (versi awal)