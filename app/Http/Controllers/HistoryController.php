<?php

namespace App\Http\Controllers;

use App\Models\Belanja;
use App\Models\DataGuru;
use App\Models\Deposit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HistoryController extends Controller
{
    public function index($nik)
    {
        $dataGuru = DataGuru::where('nik', $nik)->first();
        $dataDeposit = Deposit::latest()->where('nik', $nik)->get();
        $dataBelanja = Belanja::latest()->where('nik', $nik)->get();
        return Inertia::render('Data/History', [
            'title' => 'History',
            'dataDeposit' => $dataDeposit,
            'dataBelanja' => $dataBelanja,
            'dataGuru' => $dataGuru,
        ]);
    }

    public function depositUpdate(Request $request, $id)
    {
        $deposit = Deposit::where('id', $id)->first();

        $deposit->update([
            'saldo' => $request->saldo ?? $deposit->saldo,
            'tanggalSaldo' => $request->tanggalSaldo ?? $deposit->tanggalSaldo,
        ]);
        return back()->with('message', 'Berhasil diubah');
    }

    public function belanjaUpdate(Request $request, $id)
    {
        $belanja = Belanja::where('id', $id)->first();

        if ($request->belanja > $belanja->sisaSaldo) {
            return back()->with('error', 'Belanja yang diubah lebih dari sisa saldo');
        }

        $belanja->update([
            'belanja' => $request->belanja ?? $belanja->belanja,
            'tanggalBelanja' => $request->tanggalBelanja ?? $belanja->tanggalBelanja,
        ]);
        return back()->with('message', 'Berhasil diubah');
    }
}
