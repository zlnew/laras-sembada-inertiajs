<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('detail_rab', function (Blueprint $table) {
            $table->id('id_detail_rab');
            $table->foreignUlid('id_rab');
            $table->foreignId('id_satuan');
            $table->string('uraian');
            $table->decimal('volume', 3, 0);
            $table->decimal('harga_satuan', 12, 2);
            $table->string('keterangan')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detail_rab');
    }
};