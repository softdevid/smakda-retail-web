<?php

namespace App\Http\Controllers;

use App\Models\DataGuru;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\DataExport;
use PhpOffice\PhpSpreadsheet\Calculation\Information\ExcelError;

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
    public function excel()
    {
        $dataGuru = DataGuru::all();
        return Excel::download(new DataExport($dataGuru), 'dataguru.xlsx');
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
        $dataGuru = DataGuru::where('nik', $request->nikLama)->first();

        $data = $request->validate([
            // 'nik' => 'required|unique:data_gurus,nik',
            'nama' => 'required',
            'alamat' => 'required',
            'jabatan' => 'required',
            'jenisKelamin' => 'required',
        ]);

        if ($request->nik !== $dataGuru->nik) {
            $data['nik'] = 'required|unique:data_gurus,nik';
        }

        $dataGuru->update([
            'nik' => $request->nik,
            'nama' => $request->nama,
            'alamat' => $request->alamat,
            'jabatan' => $request->jabatan,
            'jenisKelamin' => $request->jenisKelamin,
        ]);
<<<<<<< HEAD

        return redirect()->to('/')->with('message', 'Berhasil diupdate');

        // if($request->nik !== $request->nikLama) {
        //     DataGuru::where('nik', $request->nikLama)->update([
        //         'nik' => $request->nikLama,
        //         'nama' => $request->nama,
        //         'alamat' => $request->alamat,
        //         'jabatan' => $request->jabatan,
        //         'jenisKelamin' => $request->jenisKelamin,
        //     ]);
        //     return redirect()->to('/');
        // } else {
        //     DataGuru::where('nik', $request->nikLama)->update([
        //         'nik' => $request->nik,
        //         'nama' => $request->nama,
        //         'alamat' => $request->alamat,
        //         'jabatan' => $request->jabatan,
        //         'jenisKelamin' => $request->jenisKelamin,
        //     ]);
        //     return redirect()->to('/');
        // }
=======
        
        return redirect()->to('/')->with('message', 'Berhasil diupdate');       
>>>>>>> 19b9dd9 (/)

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

    public function printRincian($nik) {
        return Inertia::render('Data/PrintRincian', [
            'title' => 'Rincian',
            'dataGuru' => DataGuru::where('nik', $nik)->first(),
        ]);
    }
}
