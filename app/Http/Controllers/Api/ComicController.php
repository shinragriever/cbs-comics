<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Comic;
use App\Serie;
use App\Author;
use App\Publisher;

class ComicController extends Controller
{
    public function index(Request $request){
        // return UserResource::collection(User::paginate(10));
        // return Comic::all();
        return  Comic::with('author','serie','publisher')->get();
        
    }
    public function store(Request $request){
        
        $newComic = Comic::create($request->all());
        

        return response($newComic);
    }
}
