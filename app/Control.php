<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Control extends Model
{
    	public function users(){
		return $this->belongsTo('App\User');
	}
    
    protected $table = "control" ;
}
