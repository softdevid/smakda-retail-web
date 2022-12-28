<?php

namespace Database\Factories;

use App\Models\DataGuru;
use Illuminate\Database\Eloquent\Factories\Factory;

class GuruFactory extends Factory
{

    protected $model = DataGuru::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "nik" => $this->faker->nik(),
            "nama" => $this->faker->name(),
            "alamat" => $this->faker->address(),
            "jabatan" => $this->faker->randomElement(['Karyawan', 'Guru', 'Kepala Sekolah']),
            "jenisKelamin" => $this->faker->randomElement(['Laki-laki', 'Perempuan']),
            "sisaSaldo" => $this->faker->numberBetween(),
        ];
    }
}
