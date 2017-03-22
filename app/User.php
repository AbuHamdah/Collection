<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    public function subjects(){
	return $this->hasMany('App\Data');
	}
    public function controls(){
	return $this->hasMany('App\Control');
	}
    public function mobile(){
	return $this->hasMany('App\mobile');
	}
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','role' , 'project_id' , "api_key" , 'user_div' , 'ftp_div' ,
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}
