<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $products = require app_path('Data/Products.php');
        $activeCategory = $request->query('kategori');

        if ($activeCategory) {
            $products = array_values(array_filter($products, function ($product) use ($activeCategory) {
                return $product['category'] === $activeCategory;
            }));
        }

        return Inertia::render('Products/Index', [
            'products' => $products,
            'activeCategory' => $activeCategory,
            'categories' => [
                ['label' => 'Semua', 'value' => null],
                ['label' => 'Laptop', 'value' => 'laptop'],
                ['label' => 'Komputer / PC', 'value' => 'komputer-pc'],
                ['label' => 'Tablet', 'value' => 'tablet'],
                ['label' => 'TV Plasma / Layar Besar', 'value' => 'tv-plasma-layar-besar'],
            ],
        ]);
    }

    public function show(string $slug)
    {
        $products = require app_path('Data/Products.php');
        $product = collect($products)->firstWhere('slug', $slug);

        abort_if(! $product, 404);

        $relatedProducts = array_values(array_filter($products, function ($item) use ($product) {
            return $item['slug'] !== $product['slug'] && $item['category'] === $product['category'];
        }));

        return Inertia::render('Products/Show', [
            'product' => $product,
            'relatedProducts' => $relatedProducts,
        ]);
    }
}