@extends('layouts.mainApp')
@section('header')
<style>
.col-sm-12.app {
    border: solid 1px;
    padding-top: 5px;
    padding-bottom: 5px;
    background: black;
    color: white;
    margin-bottom: 6px;
    font-weight: bold ;
}
.col-sm-12.group {
    border: solid 1px;
    padding-top: 5px;
    padding-bottom: 5px;
    background: aliceblue;
    margin-bottom: 6px;
    font-weight: bold ;
}
.col-sm-12.page {
    border: solid 1px;
    padding-top: 5px;
    padding-bottom: 5px;
    background: aliceblue;
    width: 95%;
    margin-left: 29px;
    margin-bottom: 6px;
    font-weight: bold ;
}
    .col-sm-10.compo {
    margin-left: 66px;
    width: 70%;
    font-weight: bold ;
}
    span.col-sm-10.span {
    border-top: solid 1px;
    margin-left: 90px;
    width: 73%;
    margin-bottom: 6px;
    margin-top: 6px;
}
.col-sm-12.value {
       border: solid 1px;
    padding-top: 5px;
    padding-bottom: 5px;
    background: beige;
    width: 90%;
    margin-left: 55px;
    margin-top: 12px;
    font-weight: bold;
    margin-bottom: 6px;
}
    div#cover {
    border: 1px solid;
    height: 400px;
}
    div#app_name {
    margin-top: 50px;
    font-size: 26px;
    font-weight: bold;
    text-decoration: underline;
    margin-bottom: 256px;
}
div#user_name {
    font-weight: bold;
    font-size: 18px;
}
fieldset.scheduler-border {
    border: 1px groove #ddd !important;
    padding: 0 1.4em 1.4em 1.4em !important;
    margin: 0 0 1.5em 0 !important;
    -webkit-box-shadow:  0px 0px 0px 0px #000;
            box-shadow:  0px 0px 0px 0px #000;
}

legend.scheduler-border {
    width:inherit; /* Or auto */
    padding:0 10px; /* To give a bit of padding on the left and right */
    border-bottom:none;
}
.row.inp {
    margin-bottom: 10px;
}
.col-sm-2.in {
    margin-right: 24px;
}
</style>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
  <script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>

 
@endsection
@section('content')
<form  action="{{url('ReportsData')}}" method="post"  >
 {{ csrf_field() }}
<div class="row">
<div class="col-sm-4"><h3 style="margin-top:60px ; text-align:center">Report Page</h3></div>

<div class="col-sm-4" style="margin-top:94px;">
<h3 style="margin-left:150px">Choose App</h3>
<select name="app" class="form-control" >
<option selected disabled>Choose App</option>
@foreach($app as $apps)
    <option <?php if($app_id == $apps->id) echo"selected"; ?>  value="{{$apps->id}}">{{ $apps->name }}</option>
    @endforeach 
</select>
    
</div> 
</div>
    <div class="row">
    <div class="col-sm-4"></div>
    <div class="col-sm-4" style="margin-top:15px;text-align:center"> <button id="but" class="btn btn-primary added" >Select</button></div>
    </div>
 </form>

@if(!empty($raw))
<form action="{{url('FilterData')}}" method="post">
{{ csrf_field() }}
<div class="container">
<fieldset class="scheduler-border">
<legend class="scheduler-border">Filters</legend>
<div class="row">
<div class="col-sm-2">
  <input autocomplete="off" name="user" list="users" class="form-control" placeholder="Write username" value="{{@$u_name}}">
<datalist id="users">
<option selected disabled>Choose user </option>
@foreach($users as $user)
    <option >{{ $user->name }}</option>
    @endforeach
</datalist>
</div>
<div class="col-sm-2 in">
<div class="row inp" >
<select name="re1" id="refer"  class="form-control">
<option selected disabled>Choose referance </option>
    <option <?php if(@$re1 == 'r1') echo 'selected' ; ?> >r1 </option>
    <option <?php if(@$re1 == 'r2') echo 'selected' ; ?> >r2 </option>
    <option <?php if(@$re1 == 'r3') echo 'selected' ; ?> >r3 </option>
    <option <?php if(@$re1 == 'r4') echo 'selected' ; ?> >r4 </option>
    <option <?php if(@$re1 == 'r5') echo 'selected' ; ?> >r5 </option>
    <option <?php if(@$re1 == 'r6') echo 'selected' ; ?> >r6 </option>
    <option <?php if(@$re1 == 'r7') echo 'selected' ; ?> >r7 </option>
    <option <?php if(@$re1 == 'r8') echo 'selected' ; ?> >r8 </option>
    </select>
</div>
<div class="row" >
  <input id="inr0" name="referance" list="Rs" class="form-control" placeholder="Write data" value="{{@$u_ref1}}">
<datalist id="Rs">

  
</datalist>
</div>
</div>
<div class="col-sm-2 in">
<div class="row inp" >
<select name="re2" id="refe"  class="form-control">
<option selected disabled>Choose referance </option>
  <option <?php if(@$re2 == 'r1') echo 'selected' ; ?> >r1 </option>
    <option <?php if(@$re2 == 'r2') echo 'selected' ; ?> >r2 </option>
    <option <?php if(@$re2 == 'r3') echo 'selected' ; ?> >r3 </option>
    <option <?php if(@$re2 == 'r4') echo 'selected' ; ?> >r4 </option>
    <option <?php if(@$re2 == 'r5') echo 'selected' ; ?> >r5 </option>
    <option <?php if(@$re2 == 'r6') echo 'selected' ; ?> >r6 </option>
    <option <?php if(@$re2 == 'r7') echo 'selected' ; ?> >r7 </option>
    <option <?php if(@$re2 == 'r8') echo 'selected' ; ?> >r8 </option>
    </select>
</div>
<div class="row" >
  <input id="inr1" name="referance1" list="Rs1" class="form-control" placeholder="Write data" value="{{@$u_ref2}}">
<datalist id="Rs1">

  
</datalist>
</div>
</div>
<div class="col-sm-2 in">
<div class="row inp" >
<select name="re3" id="refera"  class="form-control">
<option selected disabled>Choose referance </option>
    <option <?php if(@$re3 == 'r1') echo 'selected' ; ?> >r1 </option>
    <option <?php if(@$re3 == 'r2') echo 'selected' ; ?> >r2 </option>
    <option <?php if(@$re3 == 'r3') echo 'selected' ; ?> >r3 </option>
    <option <?php if(@$re3 == 'r4') echo 'selected' ; ?> >r4 </option>
    <option <?php if(@$re3 == 'r5') echo 'selected' ; ?> >r5 </option>
    <option <?php if(@$re3 == 'r6') echo 'selected' ; ?> >r6 </option>
    <option <?php if(@$re3 == 'r7') echo 'selected' ; ?> >r7 </option>
    <option <?php if(@$re3 == 'r8') echo 'selected' ; ?> >r8 </option>
    </select>
</div>

<div class="row" >
  <input id="inr2" name="referance2" list="Rs2" class="form-control" placeholder="Write data" value="{{@$u_ref3}}">
<datalist id="Rs2">

  
</datalist>
    
</div>
</div>
<div class="col-sm-2">
<div class="row inp">
 <input placeholder="Date From" name="dat_f" type="text"class="form-control" id="datepicker" value="{{@$date1}}">
</div>
    <div class="row">  
<input  placeholder="Date To" name="dat_t" type="text"class="form-control" id="datepick" value="{{@$date2}}">
</div>
    </div>
<div class="col-sm-2">
    <button class="btn btn-info">Apply</button>
    </div>
</div>
</fieldset>
</div>
<input type="hidden" name="app" value="{{$app_id}}" id="app">
</form>  

<input type="hidden" value="{{$app[0]->name}}" id="name">
<div class="row">
    

                    <div class="col-lg-12">
                        <button id="export" class="pull-right btn btn-primary">Export</button>
                        <div class="panel panel-default">
                            
                            <div class="panel-heading">
                                Report Data
                            </div>
                            <!-- /.panel-heading -->
                            <div class="panel-body">
                                <div class="dataTable_wrapper">
                                    <table class="table table-striped table-bordered table-hover table-condensed" id="dataTables-example">
                                        <thead>
                                            <tr class="noExl">
                                                <th></th>
                                                <?php $x = array();
                                                $i=0;
                                                
                                           foreach($raw as $ra){
                                               
                                                if(strlen($ra->heder) > 15) { ?>
                                                <th class="text-nowrap ForUser"><a href="#" data-toggle="tooltip" title="<?php echo $ra->heder ; ?>"><?php echo  trim(substr($ra->heder, 0, 15))  ; ?></a></th>
                                                
                                                <?php } 
                                                else { ?>
                                                <th class="text-nowrap ForUser"><a href="#" data-toggle="tooltip" data-placement="top" title="<?php echo $ra->heder ; ?>"><?php echo trim($ra->heder)  ; ?></a></th>
                                                <?php } ?>
                                                <?php $x[$i] = $ra->code; 
                                                $i++; ?>
                                               <th class="ForExcel hide" ><?php echo $ra->heder ; ?> </th>
                                               <?php  }
                                                ?>
                                             
                                            </tr>
                                        </thead>
                                        <tbody>
                                
                                     <?php $arr = array() ; 
                                     $y = 0 ;
                                     ?>
                                     
                                     @foreach($row as $in => $va) 
                                     @foreach($x as $ind => $val)
                                     @if(isset($va["$val"]))
                                            
                                    <?php $arr[$y][$val] = $va[$val]; ?>
                                     @eLse
                                    <?php  $arr[$y][$val] = "" ; ?>
                                     @endif
                                     <?php $arr[$y]['id'] = $va['id']; ?>
                                     @endforeach
                                     <?php $y++; ?>
                                     @endforeach
                                            
                                    @foreach($arr as $ar =>$va)
                                            <tr>
                                                 <td><i onclick = "myFunction('{{$va['id']}}') ;" class="fa fa-file-text-o fa-2x" aria-hidden="true"></i></td>
                                     @foreach($va as $in => $v)
                                    @if($in != 'id')
                                     <td>{{$v}}</td>
                                     @endif
                                     @endforeach
                                                </tr>
                                     @endforeach
                               
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div id="myModal" class="modal fade" role="dialog" >
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    
                </div>
                <form  action="{{ route('pdfview',['download'=>'pdf']) }}" method="post"  enctype="multipart/form-data"> 
                    {{ csrf_field() }}
                    <input type="hidden" name="pdf" id="pdf">
                    <input type="hidden" name="name" value="{{$app[0]->name}}" >
                      <button id="rep" class="btn btn-info">Download PDF</button>
                     </form>
                <div class="modal-body">
                   
                </div>
                  <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
                    </div>
        </div>
        
    </div>
</div>
          @endif         
@endsection
@section('footer')
     <script>
         
    $( "#datepicker" ).datepicker({ dateFormat: 'yy-mm-dd' });
	  $( "#datepick" ).datepicker({ dateFormat: 'yy-mm-dd' });
  </script>	
              <script>
           
                $('#dataTables-example').DataTable({
                        "sScrollX": "100%"   ,
                        "responsive": true  ,
                         "aoColumnDefs": [
            { "sWidth": "10%", "aTargets": [ -1 ] }
        ]
                    
        
                });
            
        </script> 
         <script>
$("#export").click(function(e){
    $('.ForUser').hide();
    $('.ForExcel').removeClass('hide');
    e.preventDefault();
    $('#dataTables-example').tableExport({type:'excel',escape:'false' , Worksheet:'Report'});
    $('.ForUser').show();
    $('.ForExcel').addClass('hide');
});


</script>
<script>
function myFunction(x){
    $('#myModal').modal();
$('.modal-body').text('');
    var app = $('#app').val() ;
    var name = $('#name').val() ;
    
    $.ajax({
           type: "GET",
           url: "/reportajax",
           data: "app="+app+"&row="+x , // serializes the form's elements.
           success: function(data)
           {
               
               var group = " " ;
                var page = " " ;
			 var obj = JSON.parse(data);
               $('.modal-body').append('<style>div#cover {border: 1px solid;height: 930px;} div#app_name { margin-top: 50px; font-size: 26px; font-weight: bold;text-decoration: underline;margin-bottom: 256px;}div#user_name {font-weight: bold;font-size: 23px;}</style><div id="cover" class="hide"><div class="row"><div id="app_name" style="text-align:center" class="col-sm-12"><span>'+name+'</span></div><div id="user_name" class="col-sm-12" style="text-align:center"><span > by '+obj[0].name+'</span></div> </div></div>');
     $('.modal-body').append('  <div class="col-sm-12 app" style="text-align:center"> <span id="appname">'+name+'</span> </div>');

			for(js in obj){
                if(group != obj[js].group_name ){
                $('.modal-body').append('<div class="col-sm-12 group" style="text-align:center">'+obj[js].group_name+'</div>');
                 group = obj[js].group_name ;
                }
                if(page != obj[js].page_name ){
                $('.modal-body').append('<div class="col-sm-12 page" style="text-align:center">'+obj[js].page_name+'</div>');
                page = obj[js].page_name ;    
                }
                if(obj[js].type == "checkbox"){
                    if(+obj[js].value == "1"){
                     $('.modal-body').append('<div class="row"><span class="col-sm-10 span" ></span><div class="col-sm-10 compo" >'+obj[js].paginate+' .<input type="checkbox" checked> '+obj[js].heder+'<span class="col-sm-10 span" ></span></div></div>');   
                    }
                    else if(+obj[js].value == "0"){
                       $('.modal-body').append('<div class="row"><span class="col-sm-10 span" ></span><div class="col-sm-10 compo" >'+obj[js].paginate+' .<input type="checkbox"> '+obj[js].heder+'<span class="col-sm-10 span" ></span></div></div>');  
                    }
                    else{
                       $('.modal-body').append('<div class="row"><span class="col-sm-10 span" ></span><div class="col-sm-10 compo" >'+obj[js].paginate+' .<input type="checkbox"> '+obj[js].heder+'<span class="col-sm-10 span" > || This not set yet! ||</span></div></div>');    
                    }
                }
                else if(obj[js].type == "yes/no"){
                   if(+obj[js].value == "1"){
                     $('.modal-body').append('<div class="row"><span class="col-sm-10 span" ></span><div class="col-sm-10 compo" >'+obj[js].paginate+' '+obj[js].heder+'<div ><div><input type="radio" checked>Yes</div><div ><input type="radio">No</div></div><span class="col-sm-10 span" ></span></div></div>');   
                    }
                    else if(+obj[js].value == "0"){
                       $('.modal-body').append('<div class="row"><span class="col-sm-10 span" ></span><div class="col-sm-10 compo" >'+obj[js].paginate+' '+obj[js].heder+'<div ><div><input type="radio">Yes</div><div ><input type="radio" checked>No</div></div><span class="col-sm-10 span" ></span></div></div>');    
                    }
                    else{
                        $('.modal-body').append('<div class="row"><span class="col-sm-10 span" ></span><div class="col-sm-10 compo" >'+obj[js].paginate+' '+obj[js].heder+'<div ><div><input type="radio">Yes</div><div ><input type="radio" >No</div></div><span class="col-sm-10 span" > || This not set yet! ||</span></div></div>');
                    }
                    
                }
                else{
                $('.modal-body').append('<div class="row"><span class="col-sm-10 span" ></span><div class="col-sm-10 compo" >'+obj[js].paginate+' '+obj[js].heder+'</div></div>');
				console.log(obj[js]);
                $('.modal-body').append('<div class="col-sm-12 value" style="text-align:center">'+obj[js].value+'</div>');
			}}}
           
           });
}
</script>
    <script>
        $('#cover').removeClass('hide') ;
        $('#rep').click(function(){
        var html = $('.modal-body').html()  ;
        $('#pdf').val('<style>.col-sm-12.app {border: solid 1px;padding-top: 5px;padding-bottom: 5px;background: black;color: white;margin-bottom: 6px;font-weight: bold ;}.col-sm-12.group {border: solid 1px;padding-top: 5px;padding-bottom: 5px;background: aliceblue;margin-bottom: 6px;font-weight: bold ;}.col-sm-12.page {border: solid 1px;padding-top: 5px;padding-bottom: 5px; background: aliceblue; width: 95%; margin-left: 29px; margin-bottom: 6px;font-weight: bold ;} .col-sm-10.compo { margin-left: 66px; width: 70%; font-weight: bold ;}span.col-sm-10.span {border-top: solid 1px;margin-left: 90px;width: 73%;margin-bottom: 6px; margin-top: 6px;}.col-sm-12.value { border: solid 1px; padding-top: 5px;padding-bottom: 5px;background: beige;width: 90%;margin-left: 55px;margin-top: 12px;font-weight: bold;margin-bottom: 6px;}</style>'+html) ;
        });
    </script>
    <script>
        $('#refer').change(function(){
            $('#Rs').html('') ;
            var ref = $(this).val() ;
            var app = $('#app').val() ;
            $('#Rs').append('<option selected disabled>Choose data </option>');
           $.ajax({
           type: "GET",
           url: "/referance",
           data: "ref="+ref+"&app="+app , // serializes the form's elements.
           success: function(data)
           {
                var obj = JSON.parse(data);
               for(x in obj){
                   for( y in obj[x])
                        if(obj[x][y] != null){
               $('#Rs').append('<option>'+obj[x][y]+'</option>');
                $('#inr0').attr('placeholder' , 'Write data');
                 $('#inr0').attr('disabled' , false);
               }
               else{
                   $('#inr0').attr('placeholder' , 'No data is set in this referance yet !!');
                    $('#inr0').attr('disabled' , true);
               }}}
               //<option selected disabled>Choose data </option>
       
           });
        });
         $('#refe').change(function(){
             $('#Rs1').html('') ;
            var ref = $(this).val() ;
            var app = $('#app').val() ;
            $('#Rs1').append('<option selected disabled>Choose data </option>');
           $.ajax({
           type: "GET",
           url: "/referance",
           data: "ref="+ref+"&app="+app , // serializes the form's elements.
           success: function(data)
           {
                var obj = JSON.parse(data);
               console.log(obj)
               for(x in obj){
                   for( y in obj[x])
                       if(obj[x][y] != null){
               $('#Rs1').append('<option>'+obj[x][y]+'</option>');
                $('#inr1').attr('placeholder' , 'Write data');
                 $('#inr1').attr('disabled' , false);
               }
               else{
                   $('#inr1').attr('placeholder' , 'No data is set in this referance yet !!');
                    $('#inr1').attr('disabled' , true);
               }
               //<option selected disabled>Choose data </option>
               
           }}
           });
        });
         $('#refera').change(function(){
             $('#Rs2').html('') ;
            var ref = $(this).val() ;
            var app = $('#app').val() ;
            $('#Rs2').append('<option selected disabled>Choose data </option>');
           $.ajax({
           type: "GET",
           url: "/referance",
           data: "ref="+ref+"&app="+app , // serializes the form's elements.
           success: function(data)
           {
                var obj = JSON.parse(data);
               console.log(obj)
               for(x in obj){
                   for( y in obj[x])
                       if(obj[x][y] != null){
               $('#Rs2').append('<option>'+obj[x][y]+'</option>');
                $('#inr2').attr('placeholder' , 'Write data');
                 $('#inr2').attr('disabled' , false);
               }
               else{
                   $('#inr2').attr('placeholder' , 'No data is set in this referance yet !!');
                    $('#inr2').attr('disabled' , true);
               }
               //<option selected disabled>Choose data </option>
               
           }}
           });
        });
        
    </script>
   
@endsection