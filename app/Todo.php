<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Todo extends Model
{
    use SoftDeletes;
    protected $primaryKey = 'id';
	protected $table = 'todos';
    protected $fillable=['title','body'];
}
