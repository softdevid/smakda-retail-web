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
        $dataDeposit = Deposit::where('nik', $nik)->get();
        $dataBelanja = Belanja::where('nik', $nik)->get();
        return Inertia::render('Data/History', [
            'title' => 'History',
            'dataDeposit' => $dataDeposit,
            'dataBelanja' => $dataBelanja,
            'dataGuru' => $dataGuru,
        ]);
    }

    // public function dataHistoryDeposit(Request $request, $nik)
    // {
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
    // }
}
