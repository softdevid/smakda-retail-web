<?php

namespace App\Http\Controllers;

use App\Models\DataGuru;
use App\Models\DataKeuangan;
use App\Models\Deposit;
use App\Models\Belanja;


use Illuminate\Http\Request;
use Inertia\Inertia;

class DataKeuanganController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($nik)
    {
        $dataKeuangan = DataGuru::where('nik', $nik)->first();
        return Inertia::render('Data/DepoBelanja', [
            "title" => "Deposit dan Pengeluaran",
            "dataKeuangan" => $dataKeuangan,
        ]);
    }

    public function saldo(Request $request)
    {
        // dd($request->all());

        $nik = $request->nik;
        $saldo = DataGuru::where('nik', $nik)->first();

        if ($request->deposit && $request->belanja == null) {
            return back()->with('message', 'Deposit / Jumlah Belanja harus diisi');
        }

        if ($request->belanja > $saldo->sisaSaldo && $request->deposit == '') {
            return back()->with('message', 'Saldo kurang');
        }


        if ($request->belanja != null) {
            Belanja::create([
                'nik' => $request->nik,
                'belanja' => $request->deposit,
                'tanggalBelanja' => $request->tanggalBelanja,
            ]);
        }

        if ($request->deposit !== null) {
            Deposit::create([
                'nik' => $request->nik,
                'saldo' => $request->deposit,
                'tanggalSaldo' => $request->tanggalSaldo,
            ]);
        }


        return back()->with('message', 'Berhasil');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DataKeuangan  $dataKeuangan
     * @return \Illuminate\Http\Response
     */
    public function show(DataKeuangan $dataKeuangan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DataKeuangan  $dataKeuangan
     * @return \Illuminate\Http\Response
     */
    public function edit(DataKeuangan $dataKeuangan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DataKeuangan  $dataKeuangan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DataKeuangan $dataKeuangan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DataKeuangan  $dataKeuangan
     * @return \Illuminate\Http\Response
     */
    public function destroy(DataKeuangan $dataKeuangan)
    {
        //
    }
}
