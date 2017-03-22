<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class mobile extends Model
{
    public function users(){
		return $this->belongsTo('App\User');
	}
    
    protected $table = "mobile" ;
}
