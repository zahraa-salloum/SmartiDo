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
        Schema::create('hours', function (Blueprint $table) {
            $table->id();
            $table->integer("hours_count");
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id') -> references('id') -> on('users')->onUpdate('cascade')->onDelete('cascade');
            $table->unsignedBigInteger('plan_id');
            $table->foreign('plan_id') -> references('id') -> on('plans')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hours');
    }
};
