<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Author extends Model
{
    use SoftDeletes;
    protected $primaryKey = 'id';
	protected $table = 'authors';
    protected $fillable=['name'];
    
    public function comics(){
        return $this->hasMany('App\Comic');
    }
}
