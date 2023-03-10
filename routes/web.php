<?php

use App\Http\Controllers\DataGuruController;
use App\Http\Controllers\DataKeuanganController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\SaldoController;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
    Route::get('/tambahdata', [DataGuruController::class, 'create'])->name('home.create');
    Route::post('/tambahdata/store', [DataGuruController::class, 'store'])->name('home.store');
    Route::get('/rincian', [DataGuruController::class, 'rincian'])->name('home.rincian');
    Route::get('/cetak-data', [DataGuruController::class, 'excel'])->name('home.excel');

    Route::get('/print-rincian/{nik}', [DataGuruController::class, 'printRincian'])->name('print.rincian');
    Route::get('/print-data', [DataGuruController::class, 'printData'])->name('print.dataguru');

    Route::get('/data-guru/{nik}', [DataGuruController::class, 'show'])->name('guru.show');
    Route::get('/data-guru/{nik}/edit', [DataGuruController::class, 'edit'])->name('guru.edit');
    Route::post('/data-guru/update', [DataGuruController::class, 'update'])->name('guru.update');
    Route::delete('/data-guru/delete/{nik}', [DataGuruController::class, 'destroy'])->name('guru.delete');

    Route::get('/deposit-belanja/{nik}', [DataKeuanganController::class, 'index'])->name('saldo.index');
    Route::post('/deposit-belanja/store', [DataKeuanganController::class, 'saldo'])->name('saldo.store');
    Route::post('/deposit/store', [DataKeuanganController::class, 'deposit'])->name('deposit.store');
    Route::post('/belanja/store', [DataKeuanganController::class, 'belanja'])->name('belanja.store');

    Route::get('/data-guru/history/{nik}', [HistoryController::class, 'index'])->name('history');
    Route::get('/history/deposit', [HistoryController::class, 'dataHistoryDeposit'])->name('dataHistoryDeposit');
    Route::post('/history/deposit/update/{id}', [HistoryController::class, 'depositUpdate'])->name('deposit.update');
    Route::post('/history/belanja/update/{id}', [HistoryController::class, 'belanjaUpdate'])->name('belanja.update');

    // Route::get('/history/deposit', function (Request $request) {
    //     $search = $request->input('search');
    //     $page = $request->input('page');
    //     $limit = 10;
    //     $offset = ($page - 1) * $limit;

    //     $data = DB::table('deposits')
    //         ->where('nik', 'like', '%' . $search . '%')
    //         ->orWhere('tanggalSaldo', 'like', '%' . $search . '%')
    //         ->offset($offset)
    //         ->limit($limit)
    //         ->get();

    //     return response()->json($data);
    // });
});

require __DIR__ . '/auth.php';
