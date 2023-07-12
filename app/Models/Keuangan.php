<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Keuangan extends Model
{
    use HasFactory, HasUlids, SoftDeletes;

    protected $table = 'keuangan';
    protected $primaryKey = 'id_keuangan';
    protected $fillable = [
        'id_proyek',
        'keperluan',
    ];
    
    public $autoIncrement = false;
}
