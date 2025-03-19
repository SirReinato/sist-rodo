<?php

namespace App\Http\Controllers;

use App\Models\Ocorrencia;
use Illuminate\Http\Request;

class OcorrenciaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Buscando todas as ocorrências
        $ocorrencias = Ocorrencia::all();

        // Retornando em formato JSON
        return response()->json($ocorrencias);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Ocorrencia $ocorrencia)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ocorrencia $ocorrencia)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ocorrencia $ocorrencia)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ocorrencia $ocorrencia)
    {
        //
    }
}
