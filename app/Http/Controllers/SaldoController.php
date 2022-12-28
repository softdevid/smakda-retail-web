<?php

namespace App\Http\Controllers;

use App\Models\Belanja;
use App\Models\DataGuru;
use App\Models\Deposit;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SaldoController extends Controller
{
    public function index()
    {
        return Inertia::render('Data/CekSaldo', [
            "title" => "Cek Saldo",
        ]);
    }

    public function saldo(Request $request, $nik)
    {
        $saldo = DataGuru::where('nik', $nik)->first();

        if ($request->deposit && $request->belanja == '') {
            return back()->with('message', 'Deposit / Jumlah Belanja harus diisi');
        }

        if ($request->belanja > $saldo->sisaSaldo && $request->deposit == '') {
            return back()->with('message', 'Saldo kurang');
        }


        if ($request->belanja != '') {
            Belanja::create([
                'nik' => $request->nik,
                'belanja' => $request->deposit,
                'tanggalBelanja' => $request->tanggalBelanja,
            ]);
        }

        if ($request->deposit != '') {
            Deposit::create([
                'nik' => $request->nik,
                'saldo' => $request->deposit,
                'tanggalSaldo' => $request->tanggalSaldo,
            ]);
        }


        return back()->with('message', 'Berhasil');
    }

    public function cekSaldoBulan(Request $request, $nik, $bulan)
    {
        $date = date('Y-m', strtotime($bulan));

        $data = [
            // 'deposit' => Deposit::where(['nik' => $nik, 'tanggalSaldo' => $date])->get(),
            'deposit' => Deposit::whereMonth('created_at', $date)
                ->where('nik', $nik)
                ->get(),
            'belanja' => Belanja::where(['tanggalBelanja' => $date, 'nik' => $nik])->get(),
        ];

        // dd($data);
        return Inertia::render('CekSaldo/CekBulan', [
            'title' => 'Cek Saldo berdasarkan bulan',
            'date' => $date,
            'data' => $data,
        ]);
    }
}
