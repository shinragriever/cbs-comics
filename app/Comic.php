<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comic extends Model
{
    use softDeletes;
    protected $primaryKey = 'id';
	protected $table = 'comics';
    protected $fillable=['title','publishyear','stock','author_id','serie_id','publisher_id','genre_id','price','description'];
    
    public function author(){
        return $this->belongsTo('App\Author');
    }
    public function publisher(){
        return $this->belongsTo('App\Publisher');
    }
    public function serie(){
        return $this->belongsTo('App\Serie');
    }

    public function genres(){
       return $this->belongsToMany('App\Genre');
    }

    public function orders(){
        return $this->hasMany('App\Order');
    }
}
