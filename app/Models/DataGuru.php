<?php

namespace App\Models;

use Database\Factories\GuruFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class DataGuru extends Model
{
    use HasFactory;

    protected $guarded = [''];
    protected $primaryKey = 'nik';
    protected $keyType = 'string';

    protected static function newFactory()
    {
        return GuruFactory::new();
    }
}
