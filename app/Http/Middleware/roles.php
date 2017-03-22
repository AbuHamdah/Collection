<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
class roles
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(Auth::user()->role != '1'){
        if(Auth::user()->role == '2'){
            return redirect('/company');
        }
        else{
            return view('login');
        }
    }
        return $next($request);
    }
}
