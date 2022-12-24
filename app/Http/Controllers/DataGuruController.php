<?php

namespace App\Http\Controllers;

use App\Models\DataGuru;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DataGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Home/Utama', [
            "title" => "Halaman Utama",
        ]);
    }
    public function rincian()
    { {
            return Inertia::render('Home/Rincian', [
                "title" => "Halaman Rincian",
            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Data/Tambah', [
            "title" => "Tambah Data",
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $data = $request->validate(
            [
                'nik' => 'required|unique:data_gurus,nik',
                'nama' => 'required',
                'alamat' => 'required',
                'jabatan' => 'required',
                'jenisKelamin' => 'required',
            ],
            [
                'nik.required' => 'NIK harus diisi',
                'nik.unique:data_gurus,nik' => 'NIK sudah ada',
                'nama.required' => 'Nama harus diisi',
                'alamat.required' => 'Alamat harus diisi',
                'jabatan.required' => 'Jabatan harus diisi',
                'jenisKelamin.required' => 'Jenis Kelamin harus pilih',
            ]
        );

        DataGuru::create([
            'nik' => $request->nik,
            'nama' => $request->nama,
            'alamat' => $request->alamat,
            'jabatan' => $request->jabatan,
            'jenisKelamin' => $request->jenisKelamin,
            'sisaSaldo' => 0,
        ]);
        return back()->with('message', 'Data guru berhasil ditambah');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DataGuru  $dataGuru
     * @return \Illuminate\Http\Response
     */
    public function show(DataGuru $dataGuru, $nik)
    {
        $dataGuru = DataGuru::where('ink', $nik)->first();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DataGuru  $dataGuru
     * @return \Illuminate\Http\Response
     */
    public function edit(DataGuru $dataGuru, $nik)
    {
        return Inertia::render('Data/Ubah', [
            "title" => "Ubah Data",
            "dataGuru" => DataGuru::where('nik', $nik)->first()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DataGuru  $dataGuru
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DataGuru $dataGuru, $nik)
    {
        $dataGuru = DataGuru::where('nik', $nik)->first();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DataGuru  $dataGuru
     * @return \Illuminate\Http\Response
     */
    public function destroy(DataGuru $dataGuru, $nik)
    {
        $dataGuru = DataGuru::where('nik', $nik)->delete();
        return back()->with('message', 'Data guru berhasil dihapus');
    }
}
