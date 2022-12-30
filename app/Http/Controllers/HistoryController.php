<?php

namespace App\Http\Controllers;

use App\Models\Belanja;
use App\Models\DataGuru;
use App\Models\Deposit;
use Illuminate\Http\Request;
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
}
