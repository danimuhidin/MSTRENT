<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/tentang-kami', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/cara-sewa', function () {
    return Inertia::render('HowToRent');
})->name('how-to-rent');

Route::get('/produk', [ProductController::class, 'index'])->name('products.index');

Route::get('/produk/{slug}', [ProductController::class, 'show'])->name('products.show');

Route::get('/faq', function () {
    return Inertia::render('Faq');
})->name('faq');

Route::get('/kontak', function () {
    return Inertia::render('Contact');
})->name('contact');
