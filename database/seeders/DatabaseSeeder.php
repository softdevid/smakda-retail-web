<?php

namespace Database\Seeders;

use App\Models\DataGuru;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        User::create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('admin'),
        ]);
        DataGuru::create([
            'nik' => '3303056903930002',
            'nama' => 'Reti Safitri',
            'alamat' => 'Jalan Gunung Sumbul RT 04 RW 01, Purbalingga Kulon',
            'jabatan' => 'Karyawan',
            'jenisKelamin' => 'Wanita',
            'sisaSaldo' => '0',
        ]);
        DataGuru::create([
            'nik' => '3303036606950002',
            'nama' => 'Rizqi Nefi Marlufi',
            'alamat' => 'Sokanegara RT 02 RW 02, Kejobong, Purbalingga',
            'jabatan' => 'Guru',
            'jenisKelamin' => 'Wanita',
            'sisaSaldo' => '0',
        ]);
        DataGuru::create([
            'nik' => '33032102605870002',
            'nama' => 'Giantama Adhy Prima',
            'alamat' => 'Kalicupak Kidul RT 01 RW 01, Kecamatan Kallibagor, Kabupaten Banyumas',
            'jabatan' => 'Karyawan',
            'jenisKelamin' => 'Pria',
            'sisaSaldo' => '0',
        ]);
        DataGuru::create([
            'nik' => '3303061708840003',
            'nama' => 'Agus Setyadi',
            'alamat' => 'Babakan RT 16 RW 04, Kalimanah, Purbalingga',
            'jabatan' => 'Karyawan',
            'jenisKelamin' => 'Pria',
            'sisaSaldo' => '0',
        ]);
        DataGuru::create([
            'nik' => '33032112302880001',
            'nama' => 'Suyanto',
            'alamat' => 'Dawuhan RT 05 RW 03, Banyumas, Kabupaten Banyumas',
            'jabatan' => 'Karyawan',
            'jenisKelamin' => 'Pria',
            'sisaSaldo' => '0',
        ]);
        DataGuru::create([
            'nik' => '3303080606780003',
            'nama' => 'Susilo Adi Wibowo',
            'alamat' => 'Selaganggeng RT 05 RW 01, Kecamatan Mrebet, Kabupaten Purbalingga',
            'jabatan' => 'Karyawan',
            'jenisKelamin' => 'Pria',
            'sisaSaldo' => '0',
        ]);
    }
}
