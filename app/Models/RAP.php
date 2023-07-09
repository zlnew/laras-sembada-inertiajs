<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class RAP extends Model
{
    use HasFactory, SoftDeletes, HasUlids;

    protected $table = 'rap';
    protected $primaryKey = 'id_rap';
    protected $fillable = [
        'id_proyek',
        'status_rap',
        'status_aktivitas'
    ];
    
    public $autoIncrement = false;
}
