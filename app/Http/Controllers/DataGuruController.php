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
    { {
            return Inertia::render('Home/Utama', [
                "title" => "Halaman Utama",
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
     * @param  \App\Models\DataGuru  $dataGuru
     * @return \Illuminate\Http\Response
     */
    public function show(DataGuru $dataGuru)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DataGuru  $dataGuru
     * @return \Illuminate\Http\Response
     */
    public function edit(DataGuru $dataGuru)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DataGuru  $dataGuru
     * @return \Illuminate\Http\Response
     */
    public function destroy(DataGuru $dataGuru)
    {
        //
    }
}
