<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use PDF;
class ItemController extends Controller
{
 public function pdfview(Request $request)
    {
if($request->has('download')){
            $pdf = PDF::loadHtml($request->pdf);
            return $pdf->download($request->name.'.pdf');
        }

    }
}
