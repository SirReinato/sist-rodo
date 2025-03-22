<?php

namespace App\Http\Controllers;

use App\Models\Ocorrencia;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
        $request->validate([
            'nome_rodovia' => 'required|string|max:255',
            'trecho' => 'required|string|max:255',
            'tipo_problema' => 'required|string|max:255',
            'data_ocorrencia' => 'required|date',
            'descricao' => 'nullable|string',
        ]);

        Ocorrencia::create($request->all());

        return redirect()->route('dashboard')->with('success', 'Ocorrência cadastrada com sucesso!');
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
    public function edit($id)
    {
        $ocorrencia = Ocorrencia::findOrFail($id);
        return Inertia::render('EditarOcorrencia', ['ocorrencia' => $ocorrencia]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $ocorrencia = Ocorrencia::findOrFail($id);

        $request->validate([
            'nome_rodovia' => 'required|string|max:255',
            'trecho' => 'required|string|max:255',
            'tipo_problema' => 'required|string|max:255',
            'data_ocorrencia' => 'required|date',
            'descricao' => 'nullable|string',
        ]);

        $ocorrencia->update($request->all());

        return redirect()->route('dashboard')->with('success', 'Ocorrência atualizada com sucesso!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ocorrencia $ocorrencia)
    {
        //
    }
}
