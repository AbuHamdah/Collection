@extends('layouts.app2')

@section('content')

<input type="hidden" name="_token" id="token" value="{{ csrf_token() }}">
<div id="loading" style="display:none">
  <img id="loading-imagedd" src="ajax-loader.gif" alt="Loading..." />
</div>
<div class="col-sm-12">
<div class="row">

	<div class="col-sm-2 we">
		<h3 style='color:white'>Pages control</h3>
		  <div class="panel panel-default all">
      
 
  </div> 
</div>

<div class="col-sm-2 bul " >
<h3 style='margin-bottom:100px;'>Components</h3>
 <div id="text" class="element text-field basic ui-draggable text" draggable="true" ondragstart="drag(event)">

<div class="fa fa-text-height pull-left  "></div>
<h5>
Text
<i class="fa fa-plus pull-right"></i>

</h5>
</div>

  <div id="label" class="element text-field basic ui-draggable labe" draggable="true" ondragstart="drag(event)">

<div class="fa fa-file pull-left  "></div>
<h5>
Label
<i class="fa fa-plus pull-right"></i>

</h5>
</div>
      
 <div id="radio" class="element text-field basic ui-draggable radio" draggable="true" ondragstart="drag(event)">

<div class="fa fa-circle-o pull-left  "></div>
<h5>
Yes/No
<i class="fa fa-plus pull-right"></i>

</h5>
</div>
 <div id="box" class="element text-field basic ui-draggable box" draggable="true" ondragstart="drag(event)">

<div class="fa fa-square-o pull-left  "></div>
<h5>
checkbox
<i class="fa fa-plus pull-right"></i>
</h5>
</div>
 <div id="select" class="element text-field basic ui-draggable select" draggable="true" ondragstart="drag(event)">

<span class="fa fa-caret-square-o-down pull-left "></span>
<h5>
multiple choice
<i class="fa fa-plus pull-right"></i>
</h5>
</div>
 <div id="section" class="element text-field basic ui-draggable section" draggable="true" ondragstart="drag(event)">

<span class="fa fa-search pull-left "></span>
<h5>
single choice
<i class="fa fa-plus pull-right"></i>
</h5>
</div>
<div id="group" class="element text-field basic ui-draggable group" draggable="true" ondragstart="drag(event)">

<span class="fa fa-address-book-o pull-left "></span>
<h5>
section
<i class="fa fa-plus pull-right"></i>
</h5>
</div>
</div>

<div class="col-sm-3 bu" >
<div class="build">
<form  action="array.php" method="post" id="for" >
<div class="paging" id="P1"></div>
<img id="loading-imag" src="ajax-loader.gif" alt="Loading..." style="display:none" />
<div class="form-builder elements ui-sortable clearfix sortable" id="elements" ondragleave="dragLeave(event)" ondragenter="dragEnter(event)" ondrop="drop(event)" ondragover="allowDrop(event)">

  

	</div>
<div class="dow">

<div class="dowe"></div>
<div class="dowl"></div>
<div class="dowr"></div>
<div class="dowc"></div>

	</div>
	</form>
	
	</div>
	</div>
	<div class="col-sm-3 bi">
					 <button id='new' class='btn btn-info'>New app</button>
					 <div class="blah">
						<img id="blah" src="#" alt="logo app" />
		</div>
						  <select id="data"  name='su' class="form-control" style="margin-top:5px">
                             
                    <option selected disabled value="te">Choose app</option>
                 @foreach($app as $apps)
						    <option  value="{{$apps->app_id}}">{{$apps->name}}</option>
					@endforeach
                    </select>
						<div class="region">
						<form  action="{{url('submit')}}" method="post"  enctype="multipart/form-data">
                        <input type="hidden" name="_token" id="token" value="{{ csrf_token() }}">
						<label>upload logo</label>
							<input name="image" type='file' id="imgInp" />
							<input id="appId" type="hidden" name="app_id" value='1'>
							<input id="appName" name="name" type='text' placeholder='name app' class='form-control name'/>
							<input id="up" value="submit" name="submit" type="submit" class="btn btn-success" style="text-align:center;margin-left: 112px;margin-top: 47px;">
							</form>
		</div>
	</div>
	</div>
	</div>
	<div id="hint" class="modal fade" role="dialog" >
        <div class="modal-dialog ">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
               <input type="text">
					</div>
					</div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button  class="btn btn-default" id="advance">Advance</button>
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
                           
                             
                            <button type="button"class="fa fa-align-left"  id='align_left'></button>
                            <button type="button"class="fa fa-align-justify"  id='align_just'></button>
                             <button type="button"class="fa fa-align-right"  id='align_right'></button>
                        </div>
                       <div class="form-group">
                            <input name="first"  type="text" class="form-control" id="exampleInputcomment" placeholder="Add label">
                             
                            <button type="button"class="fa fa-bold"  id='bold'></button>
                            <button type="button"class="fa fa-italic"  id='italic'></button>
                             <button type="button"class="fa fa-underline"  id='underline'></button>
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
                           
                            <button type="button"class="fa fa-align-left"  id='align_left_c'></button>
                            <button type="button"class="fa fa-align-justify"  id='align_just_c'></button>
                             <button type="button"class="fa fa-align-right"  id='align_right_c'></button>
                        
                         
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
                               <button type="button"class="fa fa-bold"  id='bold_c'></button>
                            <button type="button"class="fa fa-italic"  id='italic_c'></button>
                             <button type="button"class="fa fa-underline"  id='underline_c'></button>
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


@endsection