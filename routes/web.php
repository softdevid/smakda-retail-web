<?php

use App\Http\Controllers\DataGuruController;
use App\Http\Controllers\DataKeuanganController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [DataGuruController::class, 'index'])->name('home.index');
Route::get('/tambahdata', [DataGuruController::class, 'create'])->name('home.create');
Route::get('/deposit', [DataKeuanganController::class, 'index'])->name('home.index');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
