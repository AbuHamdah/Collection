<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    	public function users(){
		return $this->belongsTo('App\User');
	}
    
    protected $table = "data" ;
}
