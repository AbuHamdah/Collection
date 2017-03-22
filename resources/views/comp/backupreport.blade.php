@extends('layouts.mainApp')

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

<div class="row">
                    <div class="col-lg-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                Report Data
                            </div>
                            <!-- /.panel-heading -->
                            <div class="panel-body">
                                <div class="dataTable_wrapper">
                                    <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                                        <thead>
                                            <tr>
                                                <?php $x = array();
                                                $i=0;
                                                ?>
                                           @foreach($raw as $ra)
                                                <th style="width:10px;">{{$ra->heder}}</th>
                                                <?php $x[$i] = $ra->code; 
                                                $i++;
                                                ?>
                                                
                                               @endforeach
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
                                     @endforeach
                                     <?php $y++; ?>
                                     @endforeach
                                    @foreach($arr as $ar =>$va)
                                            <tr>
                                     @foreach($va as $in => $v)
                                    
                                     <td>{{$v}}</td>
                                     
                                     @endforeach
                                                </tr>
                                     @endforeach
                               
                                        </tbody>
                                    </table>
                                </div>
                            </div>
          @endif         
@endsection
@section('footer')
              <script>
           
                $('#dataTables-example').DataTable({
                        "sScrollX": "100%"   ,
                        responsive: true      ,
              
        
                });
            
        </script>                               
@endsection