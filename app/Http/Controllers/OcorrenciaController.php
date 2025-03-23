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
    public function index(Request $request)
    {
        $query = Ocorrencia::query();

        if ($request->filled('rodovia')) {
            $query->where('nome_rodovia', 'like', "%{$request->rodovia}%");
        }

        if ($request->filled('tipo_problema')) {
            $query->where('tipo_problema', $request->tipo_problema);
        }

        if ($request->filled('data_ocorrencia')) {
            $query->whereDate('data_ocorrencia', $request->data_ocorrencia);
        }

        return response()->json($query->get());
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
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'descricao' => 'nullable|string',
            'imagem' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
        ]);

        $imagemPath = null;
        if ($request->hasFile('imagem')) {
            $imagemPath = $request->file('imagem')->store('ocorrencias', 'public');
        }

        Ocorrencia::create([
            'nome_rodovia' => $request->nome_rodovia,
            'trecho' => $request->trecho,
            'tipo_problema' => $request->tipo_problema,
            'data_ocorrencia' => $request->data_ocorrencia,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'descricao' => $request->descricao,
            'imagem' => $imagemPath,
        ]);

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
    public function destroy($id)
    {
        $ocorrencia = Ocorrencia::findOrFail($id);
        $ocorrencia->delete();

        return redirect()->route('dashboard')->with('success', 'Ocorrência excluída com sucesso!');
    }
}
