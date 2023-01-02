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

    public function deposit(Request $request)
    {
        $request->validate([
            'nik' => 'required',
            'saldo' => 'required',
            'tanggalSaldo' => 'required',
        ]);

        Deposit::create([
            'nik' => $request->nik,
            'saldo' => $request->saldo,
            'tanggalSaldo' => $request->tanggalSaldo,
        ]);

        return redirect()->back()->with('message', 'Berhasil menambahkan saldo/deposit');
    }

    public function belanja(Request $request)
    {
        $request->validate([
            'nik' => 'required',
            'belanja' => 'required|min:1',
            'tanggalBelanja' => 'required',
        ]);
        $dataGuru = DataGuru::where('nik', $request->nik)->first();

        if ($request->belanja > $dataGuru->sisaSaldo) {
            return back()->with('error', 'Belanja lebih dari sisa saldo');
        } elseif ($request->tanggalBelanja > $dataGuru->tanggalBelanja) {
            return back()->with('error', 'Tanggal kurang dari saldo');
        } else {
            Belanja::create([
                'nik' => $request->nik,
                'belanja' => $request->belanja,
                'tanggalBelanja' => $request->tanggalBelanja,
            ]);
            return back()->with('message', 'Berhasil menambahkan belanja/pengeluaran');
        }
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
