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
        $dataGuru = DataGuru::all();
        return Inertia::render('Home/Utama', [
            "title" => "Halaman Utama",
            'dataGuru' => $dataGuru,
        ]);
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
        $dataGuru = DataGuru::where('nik', $nik)->first();
        return Inertia::render('Data/Rincian', [
            "title" => "Detail guru",
            'dataGuru' => $dataGuru,
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DataGuru  $dataGuru
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $nik)
    {
        // dd($nik);
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
    public function update(Request $request, DataGuru $dataGuru)
    {
        // $nik = $request->nikLama;
        // dd($request->all());
        if($request->nik !== $request->nikLama) {
            DataGuru::where('nik', $request->nikLama)->update([
                'nik' => $request->nikLama,
                'nama' => $request->nama,
                'alamat' => $request->alamat,
                'jabatan' => $request->jabatan,
                'jenisKelamin' => $request->jenisKelamin,
            ]);
        } else {
            DataGuru::where('nik', $request->nikLama)->update([
                'nik' => $request->nik,
                'nama' => $request->nama,
                'alamat' => $request->alamat,
                'jabatan' => $request->jabatan,
                'jenisKelamin' => $request->jenisKelamin,
            ]);
        }

        return redirect()->to('/');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DataGuru  $dataGuru
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $nik)
    {
        // $nik = $request->nik;
        DataGuru::where('nik', $nik)->delete();
        return redirect()->back()->with('message', 'Data guru berhasil dihapus');
    }
}
