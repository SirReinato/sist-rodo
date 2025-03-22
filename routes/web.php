<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\OcorrenciaController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/ocorrencias', [OcorrenciaController::class, 'index'])->name('ocorrencias.index');
    Route::post('/ocorrencias', [OcorrenciaController::class, 'store'])->name('ocorrencias.store');
    Route::get('/criar-ocorrencia', function () {
        return Inertia::render('CriarOcorrencia');
    })->name('ocorrencias.create');
    Route::get('/ocorrencias/{id}/editar', [OcorrenciaController::class, 'edit'])->name('ocorrencias.edit');
    Route::put('/ocorrencias/{id}', [OcorrenciaController::class, 'update'])->name('ocorrencias.update');
    Route::delete('/ocorrencias/{id}', [OcorrenciaController::class, 'destroy'])->name('ocorrencias.destroy');
});

require __DIR__ . '/auth.php';


