<?php

namespace App\Http\Controllers;
use App\User;
use App\Control;
use App\Data;
use Illuminate\Http\Request;
use Auth;
use DB ;
use App\c_collect_data ;
class compController extends Controller
{
     public function index()
    {
        $app =  Auth::user()->controls;
        $mysql1 = DB::connection('mysql1');
        $mobile = $mysql1->table('collect_data')->where('user_id', Auth::user()->id)->get();
        return view('comp.dashboard' , compact('app', 'mobile'));
    }
         public function appIndex()
    {
        $app =  Auth::user()->controls;
        return view('comp.appPage' , compact('app'));
    }
       public function Page(Request $request)
    {
         $data = new Data;
		 $data->user_id = Auth::user()->id;
		 $data->group_code = '1';
         $data->page_code = '1';
         $data->page_name = 'page1';
         $data->group_name = 'group1';
         $data->app_id = $request->apId;
         $data->value = '';
         $data->app_name = '';
         $data->save();
        $control = new Control ;
        $control->user_id = Auth::user()->id;
         $control->logo_size = '';
         $control->logo_path = '';
         $control->name = '';
         $control->app_id = $request->apId;
         $control->save();
    }
    public function Array(Request $request)
    {
  $t =0; $b=0; $r=0 ; $l=0; $io="1"; $is=0; $cu=0;$x=0;
$post =array();
$header = array();
$response = $request->except(['submit', '_token' ] );
if($response){
	foreach($response as $i=>$value) {
		if (strpos($i, 'code') !== false) {
 $cu = $value;
	
}

$responses[$cu][$i] = $value;	

}
}
	//print_r($responses);
foreach($responses as $i=>$v){
	foreach($v as $in=>$va){
		$post[$i]['Assisment']='H1';
		$post[$i]['Page_code']='P1';
if (strpos($in, 'hint') !== false) {
	
 $post[$i]['hint_EN']= $va;
$header[$i]['hint'] = $va ;
	
}
if (strpos($in, 'type') !== false) {
	
 $post[$i]['ID_component']=$va;
 $header[$i]['ID_component'] = $va ;
}
if (strpos($in, 'code') !== false) {
	
 $post[$i]['Code']='P'.$request->page.'C'.$va;
 $header[$i]['Code']=$post[$i]['Code'];
}
if (strpos($in, 'lab') !== false) {
	
 $post[$i]['Data_EN']=$va;
$header[$i]['label']=$va;	
}
if (strpos($in, 'option') !== false) {
	
 $post[$i]['Option_EN']=$va;
	
}
if (strpos($in, 'bold') !== false) {
	if($va=='bold'){
$post[$i]['Font_b']=$x+1;
$x+=1;
	
}}
if (strpos($in, 'italic') !== false) {
if($va=='italic'){	
$post[$i]['Font_b']=$x+2;
	$x+=2;
}}
if (strpos($in, 'underline') !== false) {
if($va=='underline'){	
$post[$i]['Font_b']=$x+3;
	$x+=3;
}}
if (strpos($in, 'size') !== false) {
	
$post[$i]['Font_s']=$va;
	
}
if (strpos($in, 'back') !== false) {
	
 $post[$i]['Background_c']=$va;
}
if (strpos($in, 'color') !== false) {

$post[$i]['Color_c']=$va;
}
if (strpos($in, 'hide') !== false) {

$post[$i]['Visibilty_component']=$va;
}
if (strpos($in, 'ref') !== false) {
    
if($va == "1"){
    
$mysql1 = DB::connection('mysql1');
$mobile = $mysql1->table('collect_data')->where('app_id', $request->app_id)->where('user_id', Auth::user()->id)->get();
    
$mobile = $mobile->toArray() ;
    //print_r($mobile) ;
if(!empty($mobile)){
foreach($mobile as $mo){
    if(empty($mo->r1)){
        
    $post[$i]['As_Referance']= "r1"; 
    }
    elseif(empty($mo->r2)){
     $post[$i]['As_Referance']="r2";   
    }
    elseif(empty($mo->r3)){
     $post[$i]['As_Referance']="r3";   
    }
     elseif(empty($mo->r4)){
     $post[$i]['As_Referance']="r4";   
    }
     elseif(empty($mo->r5)){
     $post[$i]['As_Referance']="r5";   
    }
     elseif(empty($mo->r6)){
     $post[$i]['As_Referance']="r6";   
    }
     elseif(empty($mo->r7)){
     $post[$i]['As_Referance']="r7";   
    }
     elseif(empty($mo->r8)){
     $post[$i]['As_Referance']="r8";   
    }
}}
    else{
       $post[$i]['As_Referance']= "r1";   
    }
}
else{
$post[$i]['As_Referance']=$va;
    }
}

if (strpos($in, 'must') !== false) {

$post[$i]['Must']=$va;
}

if (strpos($in, 'align') !== false) {
if($va!='undefined'){
$post[$i]['allighment']=$va;
}	
	else{
		$post[$i]['allighment']='';
	}}
if (strpos($in, 'group') !== false) {
if($va){
$post[$i]['Grouping']='G'.$va;
}
	else{
		$post[$i]['Grouping']=' ';
	}
}}
$x=0;
}
$ic=1;
	$postOrder = array();
foreach($post as $oopo => $yyyy){
	$postOrder[$ic] = $yyyy;
	$ic++;
}
        foreach($header as $hear => $val){{
            if(isset($val['ID_component']))
            if($val['ID_component'] == 1){
                $header[$hear]['ID_component'] = 'label' ;
            }
            elseif($val['ID_component'] == 6){
                $header[$hear]['ID_component'] = 'yes/no' ;
            }
            elseif($val['ID_component'] == 7){
                $header[$hear]['ID_component'] = 'checkbox' ;
            }
             elseif($val['ID_component'] == 3){
                $header[$hear]['ID_component'] = 'text' ;
            }
             elseif($val['ID_component'] == 11){
                $header[$hear]['ID_component'] = 'multiple' ;
            }
             elseif($val['ID_component'] == 8){
                $header[$hear]['ID_component'] = 'single' ;
            }
             elseif($val['ID_component'] == 10){
                $header[$hear]['ID_component'] = 'section' ;
            }}
            $code = explode("C",$val['Code']) ;
            $pa = explode("P",$code[0]) ;
            $data = DB::table('data')->where('app_id', $request->app_id)->where('user_id', Auth::user()->id)->where('page_code', $pa[1])->get();
            $header[$hear]['page'] = $data[0]->page_name ;
            $header[$hear]['group'] = $data[0]->group_name ; 
        }
        //print_r($header) ;
	DB::table('data')
            ->where('user_id',  Auth::user()->id)
            ->where('page_code', $request->page)
            ->where('app_id', $request->app_id)
            ->update(["value" =>  json_encode($postOrder)]);
        foreach($header as $in => $va){
         $hea = DB::connection('mysql1');
        $head = $hea->table('c_collect_data')->where('app_id', $request->app_id)->where('user_id', Auth::user()->id)->where('code', $va['Code'])->where('page_id', $request->page)->get();
        $head = $head->toArray();
        if(empty($head)){
        $collect = new c_collect_data ;
        $collect->code = $va['Code'];
        $collect->type = @$va['ID_component'];
        $collect->group_name = $va['group'];
        $collect->page_name = $va['page'];
        if(!empty($va['label'])){
          $collect->heder = $va['label'];  
        }
        elseif(!empty($va['hint'])){
             $collect->heder = $va['hint']; 
        }
         else{
             $collect->heder = ''; 
        }
          $collect->user_id = Auth::user()->id;
          $collect->app_id = $request->app_id; 
          $collect->project_id = '' ;
          $collect->page_id = $request->page ;
        $collect->save();
    }
      else{
          if(!empty($va['label'])){
          $x = $va['label'];  
        }
        elseif(!empty($va['hint'])){
             $x = $va['hint']; 
        }
         else{
             $x = ''; 
        }
       $hea->table('c_collect_data')
            ->where('user_id',  Auth::user()->id)
            ->where('page_id', $request->page)
            ->where('app_id', $request->app_id)
            ->where('code', $va['Code'])
            ->update(["heder" => $x ]);  
      }  
        }
        
        }
     public function Submit(Request $request)
    {
        
        if ($request->hasFile('image')){
		$file =$request->file('image');
        $destinationPath = 'logo/';
        $filename = $file->getClientOriginalName();
        $size = $file->getSize();
        $file->move($destinationPath, $filename);
	   // $parent->image = "logo/{$filename}";
		}
        
        $name = $request->name;
        if($name == null){
            $name  = "" ;
        }
        if(!isset($size)){
            $size  = "" ;
        }
        $app_id = $request->app_id;
        $data = Array(
		"name" => $name,
		"logo_path" => "logo/".@$filename,
		"logo_size" => @$size,
    );
     DB::table('control')
            ->where('user_id',  Auth::user()->id)
            ->where('app_id', $request->app_id)
            ->update($data);   
     DB::table('data')
            ->where('user_id',  Auth::user()->id)
            ->where('app_id', $request->app_id)
            ->update(["app_name" =>  $name]);  
        return back();
    }
   public function choseApps(Request $request) {
       $user = DB::table('data')->where('app_id', $request->app)->where('user_id', Auth::user()->id)->get();
       $arr = DB::table('control')->where('app_id', $request->app)->where('user_id', Auth::user()->id)->get();
	$user['con'] = $arr;
echo json_encode($user);
   }
    public function fetch(Request $request){
         $user = DB::table('data') ->where('app_id', $request->app_id)->where('page_code', $request->page) ->where('user_id', Auth::user()->id)->get();
        echo json_encode($user);
    }
   public function pageAdd(Request $request){ 
        $data = new Data;
		 $data->user_id = Auth::user()->id;
		 $data->group_code = $request->gid;
         $data->page_code = $request->code;
         $data->page_name = 'page'.$request->code;
         $data->group_name =  'group'.$request->gid;
         $data->app_id = $request->appId;
         $data->value = '';
         $data->app_name = '';
         $data->save();
}
    public function pageName(Request $request){ 
        DB::table('data')
            ->where('user_id',  Auth::user()->id)
            ->where('app_id', $request->id)
            ->where('page_code', $request->cod)
            ->update(["page_name" =>  $request->name]);   
        
    }
    public function pageDelete(Request $request){
       
        DB::table('data')->where('page_code', $request->deltcode)->where('app_id', $request->id)->where('user_id', Auth::user()->id)->delete();
    }
    public function groupAdd(Request $request){
        $data = new Data;
		 $data->user_id = Auth::user()->id;
		 $data->group_code = $request->group;
         $data->page_code = $request->coe;
         $data->page_name = 'page'.$request->coe;
         $data->group_name =  'group'.$request->group;
         $data->app_id = $request->appId;
         $data->value = '';
         $data->app_name = '';
         $data->save();
        
    }
     public function GroupName(Request $request){ 
          DB::table('data')
            ->where('user_id',  Auth::user()->id)
            ->where('app_id', $request->id)
            ->where('group_code', $request->gcod)
            ->update(["group_name" =>  $request->gname]); 
     }
    public function GroupDelete(Request $request){   
        
       DB::table('data')->where('group_code', $request->gdeltcode)->where('app_id', $request->id)->where('user_id', Auth::user()->id)->delete(); 
    }
     public function ReportPage(Request $request){  
         $i=0;
        $app =  Auth::user()->controls;
        $row = array() ; 
        $app_id = $request->app ;
        $mysql1 = DB::connection('mysql1');
        $mobile = $mysql1->table('collect_data')->where('app_id', $request->app)->where('user_id', Auth::user()->id)->get();
       
        $raw = $mysql1->table('c_collect_data')->where('app_id', $request->app)->where('user_id', Auth::user()->id)->get();
         if(isset($mobile[0])){
        $users = DB::table('users')->where('role', '0')->where('project_id', $mobile[0]->project_id)->get();
         }
        $raw = $raw->toArray() ;
        $mobile = $mobile->toArray();
         foreach($mobile as $mob){
             $json = json_decode($mob->json); 
             foreach($json as $js => $val){
                 $row[$mob->id][$js]= $val ;
                
             }
             $row[$mob->id]['id'] = $mob->id ;
              $i++;
         }
         //print_r($row) ;
        return view('comp.report' , compact('app', 'row' , 'raw' , 'app_id' , 'users')); 
     }
       public function reportajax(Request $request){  
         $app_id = $request->app ;
         $row_id = $request->row ;
         $mysql1 = DB::connection('mysql1');
         $raw = $mysql1->table('c_collect_data')->where('app_id', $app_id)->where('user_id', Auth::user()->id)->orderBy('page_id' , 'asc')->get();
         $mobile = $mysql1->table('collect_data')->where('id', $row_id)->where('app_id', $request->app)->where('user_id', Auth::user()->id)->get();
            $users = DB::table('users')->where('id', $mobile[0]->uuid)->first(); 
           $mob = (array)json_decode($mobile[0]->json) ;
           
          foreach($raw as $ra => $val){
               if(isset($mob[$val->code])){
               $raw[$ra]->value = $mob[$val->code] ; 
           }
           else{
               $raw[$ra]->value = "Data is not set yet !"; 
           }
            $page = explode('C' , $val->code) ;
            $pag = explode('P' , $page[0]) ;
            $raw[$ra]->paginate = $pag[1].".".$page[1] ;   
            $raw[$ra]->name = $users->name ; 
           }
           
           echo json_encode($raw) ;
         }
      
      public function referance(Request $request){  
         $ref = $request->ref ;
         $mysql1 = DB::connection('mysql1');
         $refe = $mysql1->table('collect_data')->where('app_id', $request->app)->where('user_id', Auth::user()->id)->distinct()->get([$ref]);
          $refe = $refe->toArray() ; 
           echo json_encode($refe) ;
         }
     public function FilterData(Request $request){  
                  $i=0;
        $app =  Auth::user()->controls;
        $row = array() ; 
        $app_id = $request->app ;
         $u_name = $request->user ;
         $u_ref1 = $request->referance ;
         $u_ref2 = $request->referance1 ;
         $u_ref3 = $request->referance2 ;
         $re1 = $request->re1 ;
         $re2 = $request->re2 ;
         $re3 = $request->re3 ;
         $date1 = $request->dat_f ;
         $date2 = $request->dat_t ;
        $mysql1 = DB::connection('mysql1');
         $user = DB::table('users')->where('name', $request->user)->first();
         $mysql1 = DB::connection('mysql1');
          $mobile = $mysql1->table('collect_data');
         if(isset($user->id)){
          $mobile = $mobile->where('uuid', $user->id);   
         }
         if(isset($request->re1)){
        $mobile =  $mobile->where(function ($query) use ($re1 , $u_ref1 , $re2 ,$u_ref2 , $re3 , $u_ref3  ) {
              $x = $query->where($re1, $u_ref1);
         if(isset($re2)){
              $x =  $x->orWhere($re2, $u_ref2);
         }
          if(isset($re3)){
         $x =  $x->orWhere($re3, $u_ref3);
         }
              });
         }
                                  
        elseif(isset($request->re2)){
             $mobile =  $mobile->where(function ($query) use ( $re2 ,$u_ref2 , $re3 , $u_ref3  ) {
              $x = $query->where($re2, $u_ref2);
         if(isset($re3)){
              $x =  $x->orWhere($re3, $u_ref3);
         }
        
              });
         } 
         elseif(isset($request->re3)){
         $mobile = $mobile->where($re3, $request->referance2); 
         }
         if(isset($request->dat_f) and !isset($request->dat_t)){
            $mobile = $mobile->where('server_date', '>=' , $request->dat_f); 
         }
         elseif(isset($request->dat_t) and !isset($request->dat_f)){
            $mobile = $mobile->where('server_date', '<=' , $request->dat_t); 
         }
         elseif(isset($request->dat_t) and isset($request->dat_f)){
            $mobile = $mobile->whereBetween('server_date', [$request->dat_f, $request->dat_t]) ; 
         }
        $mobile = $mobile->where('app_id', $request->app)->get();
      
          $raw = $mysql1->table('c_collect_data')->where('app_id', $request->app)->where('user_id', Auth::user()->id)->get();
         if(isset($mobile[0])){
        $users = DB::table('users')->where('role', '0')->where('project_id', $mobile[0]->project_id)->get();
         }
        $raw = $raw->toArray() ;
          $mobile = $mobile->toArray();
         foreach($mobile as $mob){
             $json = json_decode($mob->json); 
             foreach($json as $js => $val){
                 $row[$mob->id][$js]= $val ;
                
             }
             $row[$mob->id]['id'] = $mob->id ;
              $i++;
         }
         //print_r($mobile);
        return view('comp.report' , compact('app', 'row' , 'raw' , 'app_id' , 'users' , 'u_name' , 'u_ref1' , 'date1' , 'date2' ,'re1' , 're2' ,'re3' , 'u_ref2' , 'u_ref3' )); 
         }
      
  /*public function R(Request $request){   
       $users2 = DB::connection('mysql1');
// Getting data with second DB object.
$u = $users2->table('collect_data')->get();
print_r($u);
     }*/

}