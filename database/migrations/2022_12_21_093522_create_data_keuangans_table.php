<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDataKeuangansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('data_keuangans', function (Blueprint $table) {
            $table->id();
            $table->foreign('nik');
            $table->date('tanggalPemasukan');
            $table->date('tanggalPengeluaran');
            $table->integer('pemasukan');
            $table->integer('pengeluaran');
            $table->integer('saldo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('data_keuangans');
    }
}
