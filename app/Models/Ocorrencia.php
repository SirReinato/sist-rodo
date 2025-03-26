<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ocorrencia extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome_rodovia',
        'trecho',
        'tipo_problema',
        'data_ocorrencia',
        'descricao',
        'latitude',
        'longitude',
        'imagem',
    ];
}
