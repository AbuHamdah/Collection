<!DOCTYPE html>
<html lang="en">
<head>
<title>Hightik | App</title> 
<!-- For-Mobile-Apps-and-Meta-Tags -->
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="Matchmaking Responsive, Login Form Web Template, Flat Pricing Tables, Flat Drop-Downs, Sign-Up Web Templates, Flat Web Templates, Login Sign-up Responsive Web Template, SmartPhone Compatible Web Template, Free Web Designs for Nokia, Samsung, LG, Sony Ericsson, Motorola Web Design" />
    <style>
    #data { text-indent: 220px; }
    .col-sm-12.url {
    background: white;
    border: solid 1px;
    text-align: center;
}
        .row.r3 {
    margin-top: 9px;
}
        div#main , div#component , #pageFrame{
    background-color: black;
    margin-right: 40px ;
}
        #pageFrame , #main{
            width: 22%
        }
        div#main {
    margin-left: 20px;
  
}
div#logoaPP {
    background: black;
    margin-left: 22px;
}
        .main-row{
            margin: 0 !important;
        }
.col-lg-2.col-md-4.par {
    margin: 0 !important;
    padding: 0 !important;
}
 .frame-border.pag {
    overflow-y: scroll;
     width: 92%;
}
 .col-lg-4.col-md-4.mob {
    margin-top: -6px;
    width: 25%;
}
        .row.bul {
    margin-top: 13px;
}
.frame-border.pag.j {
    overflow-y: hidden;
    overflow-x: hidden;
}
label.custom-file-input.btn.btn-default {
    margin-left: 43px;
}
    </style>
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!-- //For-Mobile-Apps-and-Meta-Tags -->
<!-- Custom Theme files -->
 {!! Html::style('mobile/css/bootstrap.css')!!}
 {!! Html::style('mobile/css/style.css')!!}
 {!! Html::style('mobile/css/font-awesome.css')!!}
 {!! Html::style('mobile/style.css')!!}
 {!! Html::script('mobile/js/jquery-2.2.3.min.js')!!}
{!! Html::style('start/css/bootstrap.min.css')!!}
    {!! Html::style('start/css/metisMenu.min.css')!!}
    {!! Html::style('start/css/timeline.css')!!}
    {!! Html::style('start/style.css')!!}
    {!! Html::style('start/css/startmin.css')!!}
    {!! Html::style('start/css/morris.css')!!}
    {!! Html::style('start/css/font-awesome.min.css')!!}
   
    {!! Html::style('assets/css/style.css')!!}
 <!-- web-fonts --> 
    
<link href='//fonts.googleapis.com/css?family=Courgette' rel='stylesheet' type='text/css'>
<link href='//fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- //web-fonts -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
    <div class="container-fluid">
    <div class="col-sm-12">
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div class="navbar-header">
                    <a class="navbar-brand" href="{{ url('/company') }}">Hightik</a>
                </div>

                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <ul class="nav navbar-right navbar-top-links">
                   
                       @if (Auth::guest())
                        <li><a href="{{ url('/login') }}">Login</a></li>
                        
                    @else
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i class="fa fa-user fa-fw"></i>  {{ Auth::user()->name }} <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu dropdown-user">
                            <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                            </li>
                            <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                        <a href="{{ route('logout') }}"
                                            onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
        ,                                    Logout
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            {{ csrf_field() }}
                                        </form>
                                    </li>
                        </ul>
                    </li>
                   
                </ul>
          @endif
                <!-- /.navbar-top-links -->
            </nav>
    <div class="row bul">
        <div class="col-sm-6 bul"><select id="data"  name='su' class="btn btn-info" style="width:100% ; ">
                             
                    <option selected disabled value="te" style="text-align:center">Select Existing App</option>
                 @foreach($app as $apps)
						    <option  value="{{$apps->app_id}}">{{$apps->name}}</option>
					@endforeach
                    </select>
        </div>
        <div class="col-sm-6 bul"><button id='new' class='btn btn-info' style="width:100%">Create New app</button></div>
        </div>
    <div class="row"><div class="col-sm-12 url"><span class="AppName2">APP</span> / <span class="GroupName2">Group</span> / <span class="PagepName2">Page</span> </div></div>
    <div class="row r3">
        <div class="col-sm-3 btn btn-info" id="main"> Pages </div>
        <div class="col-sm-2 btn btn-info" id="component"> Component</div>
        <div class="col-sm-3  btn btn-info" id="pageFrame"> Main Page </div>
        <div class="col-sm-2 btn btn-info" id="logoaPP"> Logo & App Name </div>
        </div>
   <div class="row">

<div class="col-lg-3 col-md-4 par">
    <div class="frame-border pag">
		  <div class="panel panel-default all">
 </div>
  </div>    

       </div>
<div class="col-lg-2 col-md-4 fram ">
<div class="com">
 <div id="text" class="element text-field basic ui-draggable text" draggable="true" ondragstart="drag(event)">
<h5>
<i class="fa fa-text-height pull-left  "></i>
Text
<i class="fa fa-plus pull-right here"></i>
</h5>
</div>

  <div id="label" class="element text-field basic ui-draggable labe" draggable="true" ondragstart="drag(event)">
<h5>
<i class="fa fa-file pull-left  "></i>
Label
<i class="fa fa-plus pull-right here"></i>

</h5>
</div>
      
 <div id="radio" class="element text-field basic ui-draggable radi" draggable="true" ondragstart="drag(event)">
<h5>
<i class="fa fa-circle-o pull-left  "></i>
Yes/No
<i class="fa fa-plus pull-right here"></i>

</h5>
</div>
 <div id="box" class="element text-field basic ui-draggable box" draggable="true" ondragstart="drag(event)">
<h5>
<i class="fa fa-square-o pull-left  "></i>
Checkbox
<i class="fa fa-plus pull-right here"></i>
</h5>
</div>
 <div id="select" class="element text-field basic ui-draggable select" draggable="true" ondragstart="drag(event)">

<h5>
<i class="fa fa-caret-square-o-down pull-left "></i>
Multiple choice
<i class="fa fa-plus pull-right here "></i>
</h5>
</div>
 <div id="section" class="element text-field basic ui-draggable section" draggable="true" ondragstart="drag(event)">

<h5>
<i class="fa fa-search pull-left "></i>
Single choice
<i class="fa fa-plus pull-right here"></i>
</h5>
</div>
<div id="group" class="element text-field basic ui-draggable group" draggable="true" ondragstart="drag(event)">
<h5>
<i class="fa fa-address-book-o pull-left "></i>
Section
<i class="fa fa-plus pull-right here"></i>
</h5>
</div> 
</div>
</div>
<div class="col-lg-4 col-md-4 mob">
<div class="main-row">
		<div class="main_frame w3layouts_frame">
			<div class="frame-border scroll-pane" >
            
            <div class="build">
<form  action="array.php" method="post" id="for" >
<div class="paging" id="P"></div>
<img id="loading-imag" src="ajax-loader.gif" alt="Loading..." style="display:none" />
<div class="form-builder elements ui-sortable clearfix sortable" id="elements" ondragleave="dragLeave(event)" ondragenter="dragEnter(event)" ondrop="drop(event)" ondragover="allowDrop(event)">

  

	</div>

	</form>
	
	</div>

            </div>
		</div>
	</div>
 </div>
<div class="col-lg-3 col-md-4">
  <div class="frame-border pag j">
					 <div class="blah">
						<img id="blah" src="#" alt="logo app" />
		</div>
						  
						<div class="region">
						<form  action="{{url('submit')}}" method="post"  enctype="multipart/form-data">
                        <input type="hidden" name="_token" id="token" value="{{ csrf_token() }}">
                            <label class="custom-file-input btn btn-default" for="imgInp" >Select File Logo</label>
							<input value="jhk" name="image" type='file' id="imgInp" style="visibility: hidden" />
							<input id="appId" type="hidden" name="app_id" value='1'>
							<input id="appName" name="name" type='text' placeholder='name app' class='form-control name'/>
							<input id="up" value="Save" name="submit" type="submit" class="btn btn-success" style="text-align:center;margin-left: 83px;margin-top: 19px;">
							</form>
		</div>     
    </div>
</div>
       </div>
    </div>
        
<div id="myModal" class="modal fade" role="dialog" >
        <div class="modal-dialog posi">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
               
                      <div class="form-group">
                           
                             
                            <button type="button"class="fa fa-align-left btn btn-default"  id='align_left'></button>
                            <button type="button"class="fa fa-align-justify btn btn-default"  id='align_just'></button>
                             <button type="button"class="fa fa-align-right btn btn-default"  id='align_right'></button>
                        </div>
                       <div class="form-group">
                            <input name="first"  type="text" class="form-control" id="exampleInputcomment" placeholder="Add label">
                             
                            <button type="button"class="fa fa-bold btn btn-default"  id='bold'></button>
                            <button type="button"class="fa fa-italic btn btn-default"  id='italic'></button>
                             <button type="button"class="fa fa-underline btn btn-default"  id='underline'></button>
                        </div>
                        <div class="form-group">
                            
                            <input name="first"  type="text" class="form-control hide" id="exampleInputhint" placeholder="Add hint">
                        </div>
                              <div class="form-group ">
                            
								
                       <textarea name="labi"  type="text" class="form-control hide" id="exampleInputll" placeholder="Add text"></textarea>
                        </div>
                              <div class="form-group">
                               <label for="exampleInputlass">Font's color</label>
                             <input type="color" id="exampleInputlass">
                              <label for="exampleInputback">Background color</label>
                             <input type="color"  id="exampleInputback" >
                              
                              
                               <select  id='size' name='size' >
                    <option value="dis" selected disabled>Font size</option>
                   
    <option  value="10">10</option>
    <option  value="12">12</option>
    <option  value="14">14</option>
    <option  value="16">16</option>
    <option  value="18">18</option>
    <option  value="20">20</option>
                   <option  value="24">24</option>
                   <option  value="28">28</option>
                    </select>
                        <label ><input id='must' type="checkbox">the Data is must</label>
                         <label ><input id='hiden' type="checkbox">the Data is hidden</label>
                         <label id="as" ><input id='Referance' type="checkbox">As Referance </label>
					</div>
					</div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <span id="saveButton"></span>
                            <button  class="btn btn-default" id="advance">Advance</button>
                        </div>
                    </div>
                
            </div>

        </div>
        
        	<div id="myModal2" class="modal fade" role="dialog" >
        <div class="modal-dialog posi">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                <div class="row">
               
                      <div class="col-sm-10 ">
						  <h4 class="h4" style="text-align:center">Group</h4>
                       <div class="form-group">
                           <label id="ju">Write your text here </label>
                           
                            <button type="button"class="fa fa-align-left btn btn-default"  id='align_left_c'></button>
                            <button type="button"class="fa fa-align-justify btn btn-default"  id='align_just_c'></button>
                             <button type="button"class="fa fa-align-right btn btn-default"  id='align_right_c'></button>
                        
                         
                        </div>
                        <div class="form-group">
                            <input name="first"  type="text" class="form-control" id="text_check" placeholder="Add label">
                            
                            
                        </div>
                            <div class="clearfix"></div>
                              <div class="form-group">
                               <label for="exampleInputlass ">Font's color</label>
                             <input type="color" id="color_check">
                             <label class="pull-right">Font style</label>
                              
					</div>
					<div class="form-group">
                            <label for="exampleInputback">Background color</label>
                             <input type="color"  id="background" >
                             <div class="pull-right">
                               <button type="button"class="fa fa-bold btn btn-default"  id='bold_c'></button>
                            <button type="button"class="fa fa-italic btn btn-default"  id='italic_c'></button>
                             <button type="button"class="fa fa-underline btn btn-default"  id='underline_c'></button>
						  </div>
						  </div>
                              <div class="form-group">
                               <select  id='size_c' name='size' >
                    <option value="dis" selected disabled>Font size</option>
								   
                   
    <option  value="10">10</option>
    <option  value="12">12</option>
    <option  value="14">14</option>
    <option  value="16">16</option>
    <option  value="18">18</option>
    <option  value="20">20</option>
                   <option  value="24">24</option>
                   <option  value="28">28</option>
                    </select>
                        <label class='pull-right'><input id='must_c' type="checkbox">the Data is must</label>
                        <label ><input id='hiden_c' type="checkbox">the Data is hidden</label>
                        </div>
                        <div class="form-group">
                        <span id="submitButton" class="pull-right"></span>
						  </div>
					</div>
                   
                    </div>
                      <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            
                            <button  class="btn btn-default" id="advance">Advance</button>
                        </div>
				</div>
            </div>

        </div>
	</div>
      <div id="myModal3" class="modal fade" role="dialog" >
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
              
                       <div class="form-group">
                            <input name="first_l"  type="text" class="form-control" id="exampleInputlabel" placeholder="Add label for youe section">
                             
                           
                        </div>
                        
                           
					</div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <span id="savButton"></span>
                            <button  class="btn btn-default" id="advance">Advance</button>
                        </div>
                    </div>
                
            </div>

        </div>
	      <div id="confirm" class="modal fade" role='dialog'>

        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">أ—</button>
                    <h4 class="modal-title">Delete </h4>
                </div>
                <div class="modal-body">
                    <p>Do You Really Want to Delete <span id= 'textButton'></span> ?</p>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                    <span id= 'deleteButton'></span>
                </div>

            </div>
        </div>
    </div>
     <div id="edit" class="modal fade" role='dialog'>

        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">أ—</button>
                    <h4 class="modal-title">edit </h4>
                </div>
                <div class="modal-body">
                    <p>Do You Really edit  <span id= 'editButton'></span> ?</p>
                    <input type="text" id="ed" class='form-control'>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                    <span id= 'saveButton'></span>
                </div>

            </div>
        </div>
    </div>
    	{!! Html::script('start/js/jquery.min.js')!!}
    {!! Html::script('start/js/bootstrap.min.js')!!}
    {!! Html::script('start/js/metisMenu.min.js')!!}
    {!! Html::script('start/js/raphael.min.js')!!}
    {!! Html::script('start/js/morris.min.js')!!}
    {!! Html::script('start/js/morris-data.js')!!}
    {!! Html::script('start/js/startmin.js')!!}
  {!! Html::script('assets/components/library/bootstrap/js/bootstrap.min.js?v=v1.0.3-rc2&sv=v0.0.1.1')!!}
    {!! Html::script('assets/components/plugins/nicescroll/jquery.nicescroll.min.js?v=v1.0.3-rc2&sv=v0.0.1.1')!!}
    {!! Html::script('assets/components/plugins/breakpoints/breakpoints.js?v=v1.0.3-rc2&sv=v0.0.1.1')!!}
    {!! Html::script('assets/components/plugins/preload/pace/pace.min.js?v=v1.0.3-rc2&sv=v0.0.1.1')!!}
    {!! Html::script('assets/components/plugins/preload/pace/preload.pace.init.js?v=v1.0.3-rc2&sv=v0.0.1.1')!!}
    {!! Html::script('assets/components/core/js/animations.init.js?v=v1.0.3-rc2')!!}
    {!! Html::script('assets/components/core/js/sidebar.main.init.js?v=v1.0.3-rc2')!!}
    {!! Html::script('assets/components/core/js/sidebar.discover.init.js?v=v1.0.3-rc2')!!}
    {!! Html::script('assets/components/core/js/core.init.js?v=v1.0.3-rc2')!!}
    {!! Html::script('assets/js/sortable-master/Sortable.js')!!}
    {!! Html::script('assets/js/sortable-master/Sortable.min.js')!!}
    {!! Html::script('assets/js/sortable-master/jquery.binding.js')!!}
    {!! Html::script('assets/js/sortable-master/Gruntfile.js')!!}
  {!! Html::script('assets/js/app.js')!!}
<script>
$("#elements").sortable();

</script>

  </div>
</body>
</html>