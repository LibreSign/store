<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasTimestamps;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    use HasFactory;
    use HasTimestamps;

    protected $fillable = [
        'type',
        'cost',
        'created_at',
        'validated_at',
        'active',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
