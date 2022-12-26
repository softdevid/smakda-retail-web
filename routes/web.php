<?php

use App\Http\Controllers\DataGuruController;
use App\Http\Controllers\DataKeuanganController;
use App\Http\Controllers\SaldoController;
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

Route::middleware('auth')->group(function () {


    Route::get('/', [DataGuruController::class, 'index'])->name('home.index');

    Route::get('/data-guru/{nik}/edit', [DataGuruController::class, 'edit'])->name('guru.edit');
    Route::get('/data-guru/{nik}', [DataGuruController::class, 'show'])->name('guru.show');
    Route::post('/data-guru/update', [DataGuruController::class, 'update'])->name('guru.update');
    Route::delete('/data-guru/delete/{nik}', [DataGuruController::class, 'destroy'])->name('guru.delete');

    Route::post('/deposit-belanja/store', [DataKeuanganController::class, 'saldo'])->name('saldo.store');


    Route::get('/rincian', [DataGuruController::class, 'rincian'])->name('home.rincian');
    Route::get('/tambahdata', [DataGuruController::class, 'create'])->name('home.create');
    Route::get('/cek-saldo', [SaldoController::class, 'index'])->name('home.index');


    Route::get('/deposit-belanja/{nik}', [DataKeuanganController::class, 'index'])->name('home.index');

    Route::post('/tambahdata/store', [DataGuruController::class, 'store'])->name('home.store');
    Route::get('/deposit', [DataKeuanganController::class, 'index'])->name('home.index');
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
