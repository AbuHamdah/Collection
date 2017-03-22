	$('#elements').bind('DOMNodeInserted DOMNodeRemoved', function() {
		var appName = $('#appId').val();
		var va = $('.paging').attr('id');
		
			var x = va.split('P');
			var num = x[1];
		
		$.ajax({
           type: "POST",
           url: "/array",
           data: $("#for").serialize() +"&page="+num+"&app_id="+appName+"&_token="+$('#token').val() , // serializes the form's elements.
           success: function(data)
           {
			
           }});

});
	
var iop;
var counter = 0;
	
 function allowDrop(ev) {
	
	if (ev.target.classList.contains('darggable') || ev.target.id=='elements' || ev.target.id=='high') {
         ev.preventDefault();
	
    }
}

	function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);	
	iop=ev.target.id;
		

}
	function dragEnter(event) {
		counter++;
		if (event.target.classList.contains('darggable') || event.target.id=='elements' ) {
		if($('#high').length==0){
			
   $('#'+event.target.id).append('<div class="hh" id="high" ondragleave="dragLeave(event)" ondragenter="dragEnter(event)" ondrop="drop(event)" ondragover="allowDrop(event)"></div>');
		
}}}
	function dragLeave(event) {
		  counter--;
        if (counter == 0) { 
        $('#high').remove();
		
    }
}
var it=1;
var h=1;
var il=1;
var ir=1;
var ib=1;
var se=1;
var sec=1;
var gr=1;
var o=1;
var X=0;
var y=0;
var c=0;
var v=0;
var re=0;
var s=0;
var count=0;
var cou=0;
var page=1;
var group=1;
var app=1;
var select=new Array();
var section=new Array();
function drop(ev) {

	 ev.preventDefault();
	
if(ev.target.classList.contains('darggable') || ev.target.className=='hh'){
	
	ev.stopPropagation();
}
	
	var tar = ev.target.id;
	if(tar=='high'){
		tar=$('#high').parent().attr('id');
	}
				  
	if(ev.target.classList.contains('darggable') || ev.target.id=='elements' || ev.target.id=='high'){
var data = ev.dataTransfer.getData("text");
$('#high').remove();
	if(data=="text"){
    $('#as').hide();
	$("#tt").css('background' , 'white')	;
	$("#tt").css('color' , 'black')	;
	$("#bold").removeClass('bold');
	$("#italic").removeClass('bold');
	$("#underline").removeClass('bold');
  $("#"+tar).append('<div draggable="true" ondragstart="drag(event)" class=" mar" id="t'+it+'"><div class="element text-field basic ui-draggable text" id="text'+it+'"><div class="fa fa-text-height pull-left"></div>Main Text</div><i class="che fa fa-cog z pull-right" onclick="text(text'+it+','+it+');"></i></div>');
		$("#exampleInputhint").val('');
		$("#size").val('dis');
		$("#exampleInputcomment").val('');
			$("#exampleInputlass").val('choose color');
			$("#exampleInputback").val('choose color');
		var newdiv = $('.text').attr('id');
		$('#myModal').modal();	
		$("#exampleInputhint").removeClass('hide');
	$('#saveButton').html('<a type="submit" value="Save" name="submit" class="btn btn-primary " onclick="save('+newdiv+it+' ,'+it+');">Save</a>'); 
		
		prev('text'+it , it);
		it++;
	}
	else if(data=="label"){
		$('#as').hide();
	 $("#"+tar).append('<div draggable="true"  ondragstart="drag(event)" class=" clearfix lal mar cancel" id="labb'+il+'"><div class="llll element lal text-field basic ui-draggable pull-left text" id="label'+il+'"><div class="fa fa-file pull-left"></div>Main Label</div><i class="che fa fa-cog pull-right" onclick="text(label'+il+' ,'+il+');"></i></div><div class="clearfix"></div>');
	var newdiv = $('#label'+il).attr('id');
				$('#myModal').modal();$('#saveButton').html('<button type="submit" class="btn btn-default" onclick="save('+newdiv+' ,'+il+');">Save</button>'); 
				prev('label'+il , il);
		il++;
	}
		else if(data=="radio"){
            $('#as').hide();
			//<div class="che clearfix" id="l'+ib+'">
		$("#"+tar).append('<div  draggable="true"  ondragstart="drag(event)" class="che clearfix mar" id="ral'+ir+'"><div class="element text-field basic ui-draggable pull-left text" id="radio'+ir+'"><div class="fa fa-circle-o pull-left"></div>Main Yes/No</div><i class="che fa fa-cog pull-right" onclick="text(radio'+ir+' ,'+ir+');"></i></div><div class="clearfix"></div>');
	var newdiv = $('#radio'+ir).attr('id');
				$('#myModal').modal();$('#saveButton').html('<button type="submit" class="btn btn-default" onclick="save('+newdiv+' ,'+ir+');">Save</button>'); 
				prev('radio'+ir , ir);
				ir++;
	}
		else if(data=="box"){
			$('#as').hide();	
		    $("#"+tar).append('<div  draggable="true"ondragstart="drag(event)"  class="che clearfix mar" id="l'+ib+'"><div class="llll box element text-field basic ui-draggable pull-left text" id="box'+ib+'"><div class="fa fa-square-o pull-left"></div>Main Checkbox</div><i class="che fa fa-cog pull-right" onclick="text(box'+ib+' ,'+ib+');"></i></div><div class="clearfix"></div>');
	var newdiv = $('#box'+ib).attr('id');
				$('#myModal').modal();$('#saveButton').html('<button type="submit" class="btn btn-default" onclick="save('+newdiv+' ,'+ib+');">Save</button>'); 
				prev('box'+ib , ib);
			ib++;
		
	}
	else if(data=="select"){
        $('#as').hide();
		se++;
		$("#"+tar).append('<div  draggable="true" ondragstart="drag(event)" class=" mar clearfix" id="se'+se+'"><div class="element text-field basic ui-draggable pull-left text" id="select'+se+'"><div class="fa fa-caret-square-o-down pull-left"></div>Main Multiple choice</div><i class="che fa fa-cog pull-right" onclick="text(select'+se+' ,'+se+');"></i></div>');
		$("#exampleInputcomment").val('');
			$("#exampleInputlass").val('choose color');
			$("#exampleInputback").val('choose color');
				var newdiv = $('#select'+se).attr('id');
				$('#myModal').modal();$('#saveButton').html('<a type="submit" value="Save" name="submit" class="btn btn-primary " onclick="save('+newdiv+' ,'+se+');">Save</a>'); 
				prev('select'+se , se);
			
		
	}
	else if(data=="section"){
        $('#as').show();
		sec++;
		   $("#"+tar).append('<div  draggable="true" ondragstart="drag(event)" class=" mar clearfix" id="sec'+sec+'"><div class="element text-field basic ui-draggable pull-left text" id="section'+sec+'"><div class="fa fa-search pull-left"></div>Main Single choice</div><i class="che fa fa-cog pull-right" onclick="text(section'+sec+' ,'+sec+');"></i></div>');
		$("#exampleInputcomment").val('');
			$("#exampleInputlass").val('choose color');
			$("#exampleInputback").val('choose color');
            
				var newdiv = $('#section'+sec).attr('id');
				$('#myModal').modal();$('#saveButton').html('<a type="submit" value="Save" name="submit" class="btn btn-primary " onclick="save('+newdiv+' ,'+sec+');">Save</a>'); 
				prev('section'+sec , sec);
			
		
	}
	else if(data=="group"){
        $('#as').hide();
		    $("#"+tar).append('<div class="che mar hoo pa clearfix" id="gec'+gr+'"><div class="element text-field basic ui-draggable pull-left text" id="group'+gr+'"><div class="fa fa-address-book-o pull-left"></div>Main Section</div><i class="che fa f fa-cog pull-right" onclick="text(group'+gr+' ,'+gr+');"></i><i class="che fa f fa-trash k pull-right" onclick="delsection(this ,'+gr+');"></i></div>');
		$("#exampleInputcomment").val('');
			$("#exampleInputlass").val('choose color');
			$("#exampleInputback").val('choose color');
				var newdiv = $('#group'+gr).attr('id');
				$('#myModal2').modal();$('#submitButton').html('<a type="submit" value="Save" name="submit" class="btn btn-primary " onclick="save('+newdiv+' ,'+gr+');">Save</a>'); 
				prev('group'+gr , gr);
			gr++;
		
	}
		else{
	$('#'+ev.target.id).append($('#'+iop));
		}

}
else{
	
}

}
	
$(function(){
		$(".fa-pencil").hide();
			$(".fa-trash").hide();
		$(".fa-cog").hide();
	});	
	var i=0;
		var l=0;
		var r=0;
		var c=0;
			function text(i , il){
				
				if(i.id == "box"+il){
$("#exampleInputll").addClass('hide');
		$("#exampleInputhint").addClass('hide');
				  $('#myModal').modal();$('#saveButton').html('<button type="submit" class="btn btn-default" onclick="save('+i.id+','+il+');">Save</button>'); 
					$('#exampleInputcomment').unbind('keyup');
		$("#exampleInputhint").unbind('keyup');
		$("#exampleInputback").unbind( "change");
		$("#exampleInputlass").unbind( "change");
		$("#size").unbind('change');
		$("#bold").unbind('click');
		$("#italic").unbind('click');
		$("#underline").unbind('click');
		$("#align_left").unbind('click');
		$("#align_just").unbind('click');
		$("#align_right").unbind('click');
					$(".box"+il).keyup(function() {
			var val = $(this).val();
  $('#'+i.id+' .prev'+il+' span').text(val)
	var ba = $(".ceback"+il).val();
});
	
	$( ".ceback"+il).change(function() {
 var val = $(this).val();
$('#'+i.id+' .prev'+il+' div').css('background' , val);

});
$( ".ce"+il).change(function() {
 var val = $(this).val();
  $('#'+i.id+' .prev'+il+' div').css('color' , val);
});
$( ".cesize"+il).change(function() {
 var val = $(this).val();
  $('#'+i.id+' .prev'+il+' div').css('font-size' , val+'px');
});
	$('.bold_c'+il).click(function() {
		$('#bold').toggleClass('bold');
 if($('.bold_c'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il+' label').css('font-weight' ,'bold');
			}
		else{
			$('#'+i.id+' .prev'+il+' label').css('font-weight' ,'normal');
		}
});
		$('.italic_c'+il).click(function() {
			$('#italic').toggleClass('bold');
 if($('.italic_c'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il+' label').css('font-style' ,'italic');
			}
			else{
			$('#'+i.id+' .prev'+il+' label').css('font-style' ,'normal');	
			}
});
	$('.underline_c'+il).click(function() {
		$('#underline').toggleClass('bold');
 if($('.underline_c'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il+' label').css('text-decoration' ,'underline');
			}
			else{
			$('#'+i.id+' .prev'+il+' label').css('text-decoration' ,'normal');	
			}
});	
			$('.alf_c'+il).click(function() {
				$('#align_left').addClass('bold');
 if($('.alf_c'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il+' div').css('text-align' ,'left');
	 $('.alr_c'+il).removeClass('bold');
	 $('.alj_c'+il).removeClass('bold');
			}
			
});
			$('.alr_c'+il).click(function() {
				$('#align_right').addClass('bold');
 if($('.alr_c'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il+' div').css('text-align' ,'right');
	 	 $('.alf_c'+il).removeClass('bold');
	 $('.alj_c'+il).removeClass('bold');
			}
			
});
			$('.alj_c'+il).click(function() {
				$('#align_just').addClass('bold');
 if($('.alj_c'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il+' div').css('text-align' ,'center');
	 	 $('.alr_c'+il).removeClass('bold');
	 $('.alf_c'+il).removeClass('bold');
			}
		
	});
					var text = $("#box"+il+' .labt').val();
					console.log(text);
				$(".box"+il).val(text);
					var color = $("#"+i.id+' .color').val();
				$(".ce"+il).val(color);
				var backg = $("#"+i.id+' .back').val();
			    $(".ceback"+il).val(backg);
				var size = $("#"+i.id+' .size').val();
				if(size !='null'){
				
				$(".cesize"+il).val(size);
				}
				else{
					$(".cesize"+il).val('dis');
				}
					var bol = $("#"+i.id+' .bold').val();
				if(bol == 'bold'){
					$(".bold_c"+il).addClass('bold');
				}
				else{
					$(".bold_c"+il).removeClass('bold');
				}
				var it = $("#"+i.id+' .italic').val();
				if(it == 'italic'){
					$(".italic_c"+il).addClass('bold');
				}
				else{
					$(".italic_c"+il).removeClass('bold');
				}
				var under = $("#"+i.id+' .underline').val();
				if(under == 'underline'){
					$(".underline_c"+il).addClass('bold');
				}
				else{
					$(".underline_c"+il).removeClass('bold');
				}
				var ali = $("#"+i.id+' .align').val();
				if(ali == '1'){
					$(".alf_c"+il).addClass('bold');
					$(".alr_c"+il).removeClass('bold');
					$(".alj_c"+il).removeClass('bold');
				}
				else if(ali == '3'){
					$(".alr_c"+il).addClass('bold');
					$(".alf_c"+il).removeClass('bold');
					$(".alj_c"+il).removeClass('bold');
				}
				else if(ali == '2'){
					$(".alj_c"+il).addClass('bold');
					$(".alr_c"+il).removeClass('bold');
					$(".alf_c"+il).removeClass('bold');
				}
				var must = $("#"+i.id+' .must').val();
					if(must=='*'){
						$('#must').prop('checked', true);
					}
					else{
						$('#must').prop('checked', false);
					}
					var hidd = $("#"+i.id+' .must').val();
					if(hidd=='0'){
						$('#hiden').prop('checked', true);
					}
					else{
						$('#hiden').prop('checked', false);
					}
				   }
				else if(i.id == "radio"+il){
					$('#myModal').modal();$('#saveButton').html('<button type="submit" class="btn btn-default" onclick="save('+i.id+','+il+');">Save</button>');
					$('#exampleInputcomment').unbind('keyup');
		$("#exampleInputhint").unbind('keyup');
		$("#exampleInputback").unbind( "change");
		$("#exampleInputlass").unbind( "change");
		$("#size").unbind('change');
		$("#bold").unbind('click');
		$("#italic").unbind('click');
		$("#underline").unbind('click');
		$("#align_left").unbind('click');
		$("#align_just").unbind('click');
		$("#align_right").unbind('click');
$("#exampleInputll").addClass('hide');
		$("#exampleInputhint").addClass('hide');
					
		$(".radio"+il).keyup(function() {
			var val = $(this).val();
  $('#'+i.id+' .prev'+il+' label').text(val)
	var ba = $(".reback"+il).val();
});
	
	$( ".reback"+il).change(function() {
 var val = $(this).val();
$('#'+i.id+' .prev'+il).css('background' , val);

});
$( ".re"+il).change(function() {
 var val = $(this).val();
  $('#'+i.id+' .prev'+il).css('color' , val);
});
$( ".resize"+il).change(function() {
 var val = $(this).val();
  $('#'+i.id+' .prev'+il).css('font-size' , val+'px');
});
	$('.bold_r'+il).click(function() {
		$('#bold').toggleClass('bold');
 if($('.bold_r'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il).css('font-weight' ,'bold');
	 $('#'+i.id+' .prev'+il+' label').css('font-weight' ,'bold');
			}
		else{
	$('#'+i.id+' .prev'+il).css('font-weight' ,'normal');
	 $('#'+i.id+' .prev'+il+' label').css('font-weight' ,'normal');
		}
});
		$('.italic_r'+il).click(function() {
			$('#italic').toggleClass('bold');
 if($('.italic_r'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il).css('font-style' ,'italic');
	  $('#'+i.id+' .prev'+il+' label').css('font-style' ,'italic');
			}
			else{
			$('#'+i.id+' .prev'+il).css('font-style' ,'normal');
			$('#'+i.id+' .prev'+il+' label').css('font-style' ,'normal');	
			}
});
	$('.underline_r'+il).click(function() {
		$('#underline').toggleClass('bold');
 if($('.underline_r'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il).css('text-decoration' ,'underline');
	 $('#'+i.id+' .prev'+il+' label').css('text-decoration' ,'underline');
			}
			else{
			$('#'+i.id+' .prev'+il).css('text-decoration' ,'normal');
				$('#'+i.id+' .prev'+il+' label').css('text-decoration' ,'normal');
			}
});	
			$('.alf_r'+il).click(function() {
				$('#align_left').addClass('bold');
 if($('.alf_r'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il).css('text-align' ,'left');
	 $('.alr_c'+il).removeClass('bold');
	 $('.alj_c'+il).removeClass('bold');
			}
			
});
			$('.alr_r'+il).click(function() {
				$('#align_right').addClass('bold');
 if($('.alr_r'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il).css('text-align' ,'right');
	 	 $('.alf_r'+il).removeClass('bold');
	 $('.alj_r'+il).removeClass('bold');
			}
		
});
			$('.alj_r'+il).click(function() {
				$('#align_just').addClass('bold');
 if($('.alj_r'+ide).hasClass('bold')){
		$('#'+i.id+' .prev'+il).css('text-align' ,'center');
	 	 $('.alr_r'+il).removeClass('bold');
	 $('.alf_r'+il).removeClass('bold');
			}
			
	});
	
					var text = $("#radio"+il+' .labt').val();
					
				$(".radio"+il).val(text);
					var color = $("#"+i.id+' .color').val();
				$(".re"+il).val(color);
				var backg = $("#"+i.id+' .back').val();
			    $(".reback"+il).val(backg);
				var size = $("#"+i.id+' .size').val();
				if(size !='null'){
				
				$(".resize"+il).val(size);
				}
				else{
					$(".resize"+il).val('dis');
				}
					var bol = $("#"+i.id+' .bold').val();
				if(bol == 'bold'){
					$(".bold_r"+il).addClass('bold');
				}
				else{
					$(".bold_r"+il).removeClass('bold');
				}
				var it = $("#"+i.id+' .italic').val();
				if(it == 'italic'){
					$(".italic_r"+il).addClass('bold');
				}
				else{
					$(".italic_r"+il).removeClass('bold');
				}
				var under = $("#"+i.id+' .underline').val();
				if(under == 'underline'){
					$(".underline_r"+il).addClass('bold');
				}
				else{
					$(".underline_r"+il).removeClass('bold');
				}
				var ali = $("#"+i.id+' .align').val();
				if(ali == '1'){
					$(".alf_r"+il).addClass('bold');
					$(".alr_r"+il).removeClass('bold');
					$(".alj_r"+il).removeClass('bold');
				}
				else if(ali == '3'){
					$(".alr_r"+il).addClass('bold');
					$(".alf_r"+il).removeClass('bold');
					$(".alj_r"+il).removeClass('bold');
				}
				else if(ali == '2'){
					$(".alj_r"+il).addClass('bold');
					$(".alr_r"+il).removeClass('bold');
					$(".alf_r"+il).removeClass('bold');
				}
				var must = $("#"+i.id+' .must').val();
					if(must=='*'){
						$('#must').prop('checked', true);
					}
					else{
						$('#must').prop('checked', false);
					}
					var hidd = $("#"+i.id+' .must').val();
					if(hidd=='0'){
						$('#hiden').prop('checked', true);
					}
					else{
						$('#hiden').prop('checked', false);
					}
				   }
				else if(i.id == "label"+il){
$("#exampleInputll").addClass('hide');
		$("#exampleInputhint").addClass('hide');
				  $('#myModal').modal();$('#saveButton').html('<button type="submit" class="btn btn-default" onclick="save('+i.id+','+il+');">Save</button>'); 
		$('#exampleInputcomment').unbind('keyup');
		$("#exampleInputhint").unbind('keyup');
		$("#exampleInputback").unbind( "change");
		$("#exampleInputlass").unbind( "change");
		$("#size").unbind('change');
		$("#bold").unbind('click');
		$("#italic").unbind('click');
		$("#underline").unbind('click');
		$("#align_left").unbind('click');
		$("#align_just").unbind('click');
		$("#align_right").unbind('click');
					$(".label"+il).keyup(function() {
			var val = $(this).val();
  $('#'+i.id+' .prev'+il+' span').text(val)
});
	
	$( ".leback"+il).change(function() {
 var val = $(this).val();
$('#'+i.id+' .prev'+il+' div').css('background' , val);

});
$( ".le"+il).change(function() {
 var val = $(this).val();
  $('#'+i.id+' .prev'+il+' div').css('color' , val);
});
$( ".lesize"+il).change(function() {
 var val = $(this).val();
  $('#'+i.id+' .prev'+il+' div').css('font-size' , val+'px');
});
	$('.bold_l'+il).click(function() {
		$('#bold').toggleClass('bold');
 if($('.bold_l'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il+' label').css('font-weight' ,'bold');
			}	
		else{
			$('#'+i.id+' .prev'+il+' label').css('font-weight' ,'normal');
		}
});
		$('.italic_l'+il).click(function() {
			$('#italic').toggleClass('bold');
 if($('.italic_l'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il+' label').css('font-style' ,'italic');
			}
			else{
			$('#'+i.id+' .prev'+il+' label').css('font-style' ,'normal');	
			}
});
	$('.underline_l'+il).click(function() {
		$('#underline').toggleClass('bold');
 if($('.underline_l'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il+' label').css('text-decoration' ,'underline');
			}
			else{
			$('#'+i.id+' .prev'+il+' label').css('text-decoration' ,'normal');	
			}
});	
			$('.alf_l'+il).click(function() {
				$('#align_left').addClass('bold');	
 if($('.alf_l'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il+' div').css('text-align' ,'left');
	 $('.alr_l'+il).removeClass('bold');
	 $('.alj_l'+il).removeClass('bold');
			}
		
});
			$('.alr_l'+il).click(function() {
				$('#align_right').addClass('bold');	
 if($('.alr_l'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il+' div').css('text-align' ,'right');
	 	 $('.alf_l'+il).removeClass('bold');
	 $('.alj_l'+il).removeClass('bold');
			}
			
});
			$('.alj_l'+il).click(function() {
				$('#align_just').addClass('bold');	
 if($('.alj_l'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il+' div').css('text-align' ,'center');
	 	 $('.alr_l'+il).removeClass('bold');
	 $('.alf_l'+il).removeClass('bold');
			}
			
	});
					var text = $("#label"+il+' .la').val();
					console.log(text);
				$(".label"+il).val(text);
					var color = $("#"+i.id+' .color').val();
				$(".le"+il).val(color);
				var backg = $("#"+i.id+' .back').val();
			    $(".leback"+il).val(backg);
				var size = $("#"+i.id+' .size').val();
				if(size !='null'){
				
				$(".lesize"+il).val(size);
				}
				else{
					$(".lesize"+il).val('dis');
				}
					var bol = $("#"+i.id+' .bold').val();
				if(bol == 'bold'){
					$(".bold_l"+il).addClass('bold');
				}
				else{
					$(".bold_l"+il).removeClass('bold');
				}
				var it = $("#"+i.id+' .italic').val();
				if(it == 'italic'){
					$(".italic_l"+il).addClass('bold');
				}
				else{
					$(".italic_l"+il).removeClass('bold');
				}
				var under = $("#"+i.id+' .underline').val();
				if(under == 'underline'){
					$(".underline_l"+il).addClass('bold');
				}
				else{
					$(".underline_l"+il).removeClass('bold');
				}
				var ali = $("#"+i.id+' .align').val();
				if(ali == '1'){
					$(".alf_l"+il).addClass('bold');
					$(".alr_l"+il).removeClass('bold');
					$(".alj_l"+il).removeClass('bold');
				}
				else if(ali == '3'){
					$(".alr_l"+il).addClass('bold');
					$(".alf_l"+il).removeClass('bold');
					$(".alj_l"+il).removeClass('bold');
				}
				else if(ali == '2'){
					$(".alj_l"+il).addClass('bold');
					$(".alr_l"+il).removeClass('bold');
					$(".alf_l"+il).removeClass('bold');
				}
				var must = $("#"+i.id+' .must').val();
					if(must=='*'){
						$('#must').prop('checked', true);
					}
					else{
						$('#must').prop('checked', false);
					}
					var hidd = $("#"+i.id+' .must').val();
					if(hidd=='0'){
						$('#hiden').prop('checked', true);
					}
					else{
						$('#hiden').prop('checked', false);
					}
				   }
				else if(i.id == "select"+il){
					var selt=0;
					$('#myModal').modal();$('#saveButton').html('<a type="submit" value="Save" name="submit" class="btn btn-primary " onclick="save('+i.id+' ,'+il+');">Save</a>'); 
			
					$("#exampleInputll").removeClass('hide');$("#exampleInputll").removeClass('hide');
		$("#exampleInputhint").removeClass('hide'); 
						$('#exampleInputcomment').unbind('keyup');
		$("#exampleInputhint").unbind('keyup');
		$("#exampleInputll").unbind('keyup');
		$("#exampleInputback").unbind( "change");
		$("#exampleInputlass").unbind( "change");
		$("#size").unbind('change');
		$("#bold").unbind('click');
		$("#italic").unbind('click');
		$("#underline").unbind('click');
		$("#align_left").unbind('click');
		$("#align_just").unbind('click');
		$("#align_right").unbind('click');
			$(".select"+il).keyup(function() {
					var val = $(this).val();
  $('#'+i.id+' .prev_s'+il+' #sel'+il).text(val);
   $('#'+i.id+' .prev_s'+il+' #sel'+il).append('<i class="fa fa-pencil che l pull-right fa-1x" aria-hidden="true" onclick="text(section'+il+','+il+');"></i><i onclick="deli(this ,'+il+');"class="fa fa-trash l fa-1x che pull-right  " aria-hidden="true">')
	
	var ba = $(".seback"+il).val();
		$('#'+i.id+' .prev_s'+il+' #sey'+il).css('background' , ba);
		

});
			$(".sehint"+il).keyup(function() {
			var val= $(this).val();

         $('#'+i.id+' .prev_s'+il+' input').attr('placeholder' ,val);
});	
		$(".sell"+il).keyup(function(ee) {
			var val= $(this).val();
			var sf = val.split("\n");
  if(ee.which == 13) {
         select[il][selt]= sf[v];
	  $('#'+i.id+' .prev_s'+il+' #sey'+il+' .dropdown-menu').append('<li role="presentation" id="dro'+(v)+'"><input role="menuitem" tabindex="-1" type="checkbox">'+sf[v]+'</li>');
	  selt++;
	  v++;
	  console.log(sf);
    }
			
	for( var l =0 ; l<=sf.length; l++){
				$('#'+i.id+' .prev_s'+il+' #sey'+il+" #dro"+l).html('<input role="menuitem" tabindex="-1" type="radio">'+sf[l]);
			}
			
});
		
$("#seo"+il).keyup(function(ee) {
	$('#'+i.id+' .prev_s'+il+' #sey'+il+' .dropdown-menu').html('');
			var val= $(this).val();
        for(var g=0 ; g<=select[il].length ; g++){
			if(select[il][g].match(val)){
				var matv = select[il][g];
	$('#'+i.id+' .prev_s'+il+' #sey'+il+' .dropdown-menu').append('<li role="presentation"><input role="menuitem" tabindex="-1" type="checkbox">'+matv+'</li>');
			}}
});		

		console.log(section[il]);
		$( ".seback"+il).change(function() {
 var val = $(this).val();
  $('#'+i.id+' .prev_s'+il+' #sey'+il).css('background' , val);
$('#'+i.id+' .prev_s'+il+' input').css('background' , val);
$('#'+i.id+' .prev_s'+il+' .dropdown-menu').css('background' , val);
});
	
		$( ".se"+il).change(function() {

 var val = $(this).val();
  $('#'+i.id+' .prev_s'+il+' #sey'+il).css('color' , val);
});
$( ".size_s"+il).change(function() {
 var val = $(this).val();
  $('#'+i.id+' .prev_s'+il+' #sey'+il).css('font-size' , val+'px');
});
	$('.bold_s'+il).click(function() {
		$('#bold').toggleClass('bold');
 if($('.bold_s'+ide).hasClass('bold')){
		$('#'+i.id+' .prev_s'+il+' #sey'+il).css('font-weight' ,'bold');
			}
		else{
			$('#'+i.id+' .prev_s'+il+' #sey'+il).css('font-weight' ,'normal');
		}
});
		$('.italic_s'+il).click(function() {
			$('#itali').toggleClass('bold');
 if($('.italic_s'+il).hasClass('bold')){
		$('#'+i.id+' .prev_s'+il+' #sey'+il).css('font-style' ,'italic');
			}
			else{
			$('#'+i.d+' .prev_s'+il+' #sey'+il).css('font-style' ,'normal');	
			}
});
	$('.underline_s'+il).click(function() {
		$('#underline').toggleClass('bold');
 if($('.underline_s'+il).hasClass('bold')){
		$('#'+i.id+' .prev_s'+il+' #sey'+il).css('text-decoration' ,'underline');
			}
			else{
			$('#'+i.id+' .prev_s'+il+' #sey'+il).css('text-decoration' ,'normal');	
			}
});	
			$('.alf_s'+il).click(function() {
				$('#align_left').addClass('bold');
 if($('.alf_s'+il).hasClass('bold')){
		$('.prev_s'+il+' #sey'+il).css('text-align' ,'left');
	 $('.prev_s'+il+' #sey'+il+' input').css('text-align' ,'left');
	 $('#'+i.id+' .prev_s'+il+' .dropdown-menu').css('text-align' ,'left');
	 $('.alr_sc'+il).removeClass('bold');
	 $('.alj_sc'+il).removeClass('bold');
			}
			
});
			$('.alr_s'+il).click(function() {
				$('#align_right').addClass('bold');
 if($('.alr_s'+il).hasClass('bold')){
		$('#'+i.id+' .prev_s'+il+' #sey'+il).css('text-align' ,'right');
	 $('#'+i.id+' .prev_s'+il+' #sey'+il+' input').css('text-align' ,'right');
	 $('#'+i.id+' .prev_s'+il+' .dropdown-menu').css('text-align' ,'right');
	 	 $('.alf_s'+il).removeClass('bold');
	 $('.alj_s'+il).removeClass('bold');
			}
			
});
			$('.alj_s'+il).click(function() {
				$('#align_just').addClass('bold');
 if($('.alj_s'+il).hasClass('bold')){
		$('#'+i.id+' .prev_s'+il+' #sey'+il).css('text-align' ,'center');
	 $('#'+i.id+' .prev_s'+il+' #sey'+il+' input').css('text-align' ,'center');
	 $('#'+i.id+' .prev_s'+il+' .dropdown-menu').css('text-align' ,'center');
	 	 $('.alr_s'+il).removeClass('bold');
	 $('.alf_s'+il).removeClass('bold');
			}
			
});
				
					$("#exampleInputback").val('#FFFFFF');
				var textarea = $("#"+i.id+' .textarea').val();
				$(".sell"+il).val(textarea);	
			var text = $("#"+i.id+' .label').val();
				$(".select"+il).val(text);	
			var hint = $("#"+i.id+' .hint').val();
				$(".sehint"+il).val(hint);
				var backg = $("#"+i.id+' .back').val();
			    $(".seback"+il).val(backg);
				
				var color = $("#"+i.id+' .color').val();
				$(".se"+il).val(color);
				var size = $("#"+i.id+' .size').val();
				if(size !='null'){
				
				$(".size_s"+il).val(size);
				}
				else{
					$(".size_s"+il).val('dis');
				}
				var bol = $("#"+i.id+' .bold').val();
				if(bol == 'bold'){
					$(".bold_s"+il).addClass('bold');
				}
				else{
					$(".bold_s"+il).removeClass('bold');
				}
				var it = $("#"+i.id+' .italic').val();
				if(it == 'italic'){
					$(".italic_s"+il).addClass('bold');
				}
				else{
					$(".italic_s"+il).removeClass('bold');
				}
				var under = $("#"+i.id+' .underline').val();
				if(under == 'underline'){
					$(".underline_s"+il).addClass('bold');
				}
				else{
					$(".underline_s"+il).removeClass('bold');
				}
					   var ali = $("#"+i.id+' .align').val();
				if(ali == '1'){
					$(".alf_s"+il).addClass('bold');
					$(".alr_s"+il).removeClass('bold');
					$(".alj_s"+il).removeClass('bold');
				}
				if(ali == '3'){
					$(".alr_s"+il).addClass('bold');
					$(".alf_s"+il).removeClass('bold');
					$(".alj_s"+il).removeClass('bold');
				}
				if(ali == '2'){
					$(".alj_s"+il).addClass('bold');
					$(".alr_s"+il).removeClass('bold');
					$(".alf_s"+il).removeClass('bold');
				}
					var must = $("#"+i.id+' .must').val();
					if(must=='*'){
						$('#must').prop('checked', true);
					}
					else{
						$('#must').prop('checked', false);
					}
					var hidd = $("#"+i.id+' .must').val();
					if(hidd=='0'){
						$('#hiden').prop('checked', true);
					}
					else{
						$('#hiden').prop('checked', false);
					}
				}
				else if(i.id == "section"+il){
					var sect=0;
					$("#exampleInputll").removeClass('hide');
		$("#exampleInputhint").removeClass('hide');
					$('#myModal').modal();$('#saveButton').html('<a type="submit" value="Save" name="submit" class="btn btn-primary " onclick="save('+i.id+' ,'+il+');">Save</a>'); 
						$('#exampleInputcomment').unbind('keyup');
		$("#exampleInputhint").unbind('keyup');
		$("#exampleInputll").unbind('keyup');
		$("#exampleInputback").unbind( "change");
		$("#exampleInputlass").unbind( "change");
		$("#size").unbind('change');
		$("#bold").unbind('click');
		$("#italic").unbind('click');
		$("#underline").unbind('click');
		$("#align_left").unbind('click');
		$("#align_just").unbind('click');
		$("#align_right").unbind('click');
			$(".section"+il).keyup(function() {
					var val = $(this).val();
  $('#'+i.id+' .prev_sc'+il+' #sep'+il).text(val);
   $('#'+i.id+' .prev_sc'+il+' #sep'+il).append('<i class="fa fa-pencil che l pull-right fa-1x" aria-hidden="true" onclick="text(section'+il+','+il+');"></i><i onclick="deli(this ,'+il+');"class="fa fa-trash l fa-1x che pull-right  " aria-hidden="true">')
	
	var ba = $(".scback"+il).val();
		$('#'+i.id+' .prev_sc'+il+' #sed'+il).css('background' , ba);
		

});
			$(".selhint"+il).keyup(function() {
			var val= $(this).val();

         $('#'+i.id+' .prev_sc'+il+' input').attr('placeholder' ,val);
});	
		$(".selle"+il).keyup(function(ee) {
			var val= $(this).val();
			var sf = val.split("\n");
  if(ee.which == 13) {
         section[il][sect]= sf[s];
	  $('#'+i.id+' .prev_sc'+il+' #sed'+il+' .dropdown-menu').append('<li role="presentation" id="drope'+(s)+'"><input role="menuitem" tabindex="-1" type="radio">'+sf[s]+'</li>');
	  sect++;
	  s++;
	  console.log(sf);
    }
			
	for( var l =0 ; l<=sf.length; l++){
				$('#'+i.id+' .prev_sc'+il+' #sed'+il+" #drope"+l).html('<input role="menuitem" tabindex="-1" type="radio">'+sf[l]);
			}
			
});
		
$("#sei"+il).keyup(function(ee) {
	$('#'+i.id+' .prev_sc'+il+' #sed'+il+' .dropdown-menu').html('');
			var val= $(this).val();
        for(var g=0 ; g<=section[il].length ; g++){
			if(section[il][g].match(val)){
				var matv = section[il][g];
	$('#'+i.id+' .prev_sc'+il+' #sed'+il+' .dropdown-menu').append('<li role="presentation"><input role="menuitem" tabindex="-1" type="radio">'+matv+'</li>');
			}}
});		

		console.log(section[il]);
		$( ".scback"+il).change(function() {
 var val = $(this).val();
  $('#'+i.id+' .prev_sc'+il+' #sed'+il).css('background' , val);
$('#'+i.id+' .prev_sc'+il+' input').css('background' , val);
$('#'+i.id+' .prev_sc'+il+' .dropdown-menu').css('background' , val);
});
	
		$( ".sc"+il).change(function() {

 var val = $(this).val();
  $('#'+i.id+' .prev_sc'+il+' #sed'+il).css('color' , val);
});
$( ".size_se"+il).change(function() {
 var val = $(this).val();
  $('#'+i.id+' .prev_sc'+il+' #sed'+il).css('font-size' , val+'px');
$('#'+i.id+' .prev_sc'+ide+' input').css('font-size' , val+'px');
$('#'+i.id+' .prev_sc'+ide+' .dropdown-menu').css('font-size' , val+'px');
});
	$('.bold_sc'+il).click(function() {
		$('#bold').toggleClass('bold');
 if($('.bold_sc'+ide).hasClass('bold')){
		$('#'+i.id+' .prev_sc'+il+' #sed'+il).css('font-weight' ,'bold');
			}
		else{
			$('#'+i.id+' .prev_sc'+il+' #sed'+il).css('font-weight' ,'normal');
		}
});
		$('.italic_sc'+il).click(function() {
			$('#italic').toggleClass('bold');
 if($('.italic_sc'+il).hasClass('bold')){
		$('#'+i.id+' .prev_sc'+il+' #sed'+il).css('font-style' ,'italic');
			}
			else{
			$('#'+i.d+' .prev_sc'+il+' #sed'+il).css('font-style' ,'normal');	
			}
});
	$('.underline_sc'+il).click(function() {
		$('#underline').toggleClass('bold');
 if($('.underline_sc'+il).hasClass('bold')){
		$('#'+i.id+' .prev_sc'+il+' #sed'+il).css('text-decoration' ,'underline');
			}
			else{
			$('#'+i.id+' .prev_sc'+il+' #sed'+il).css('text-decoration' ,'normal');	
			}
});	
			$('.alf_sc'+il).click(function() {
				$('#align_left').addClass('bold');
 if($('.alf_sc'+il).hasClass('bold')){
		$('.prev_sc'+il+' #sed'+il).css('text-align' ,'left');
	 $('.prev_sc'+il+' #sed'+il+' input').css('text-align' ,'left');
	 $('#'+i.id+' .prev_sc'+il+' .dropdown-menu').css('text-align' ,'left');
	 $('.alr_sc'+il).removeClass('bold');
	 $('.alj_sc'+il).removeClass('bold');
			}
			
});
			$('.alr_sc'+il).click(function() {
				$('#align_right').addClass('bold');
 if($('.alr_sc'+il).hasClass('bold')){
	 $('.prev_sc'+il+' #sed'+il+' input').css('text-align' ,'right');
		$('#'+i.id+' .prev_sc'+il+' #sed'+il).css('text-align' ,'right');
	 $('#'+i.id+' .prev_sc'+il+' .dropdown-menu').css('text-align' ,'right');
	 	 $('.alf_sc'+il).removeClass('bold');
	 $('.alj_sc'+il).removeClass('bold');
			}
			
});
			$('.alj_sc'+il).click(function() {
				$('#align_just').addClass('bold');
 if($('.alj_sc'+il).hasClass('bold')){
	 $('.prev_sc'+il+' #sed'+il+' input').css('text-align' ,'center');
		$('#'+i.id+' .prev_sc'+il+' #sed'+il).css('text-align' ,'center');
	 $('#'+i.id+' .prev_sc'+il+' .dropdown-menu').css('text-align' ,'center');
	 	 $('.alr_sc'+il).removeClass('bold');
	 $('.alf_sc'+il).removeClass('bold');
			}
			
});
					$("#exampleInputback").val('#FFFFFF');
					
					var textarea = $("#"+i.id+' .textarea').val();
				$(".selle"+il).val(textarea);	
			var text = $("#"+i.id+' .label').val();
				$(".section"+il).val(text);	
					var hint = $("#"+i.id+' .hint').val();
				$(".selhint"+il).val(hint);
				var backg = $("#"+i.id+' .back').val();
			    $(".scback"+il).val(backg);
				
				var color = $("#"+i.id+' .color').val();
				$(".sc"+il).val(color);
				var size = $("#"+i.id+' .size').val();
				if(size !='null'){
				
				$(".size_se"+il).val(size);
				}
				else{
					$(".size_se"+il).val('dis');
				}
				var bol = $("#"+i.id+' .bold').val();
				if(bol == 'bold'){
					$(".bold_sc"+il).addClass('bold');
				}
				else{
					$(".bold_sc"+il).removeClass('bold');
				}
				var it = $("#"+i.id+' .italic').val();
				if(it == 'italic'){
					$(".italic_sc"+il).addClass('bold');
				}
				else{
					$(".italic_sc"+il).removeClass('bold');
				}
				var under = $("#"+i.id+' .underline').val();
				if(under == 'underline'){
					$(".underline_sc"+il).addClass('bold');
				}
				else{
					$(".underline_sc"+il).removeClass('bold');
				}
					   var ali = $("#"+i.id+' .align').val();
				if(ali == '1'){
					$(".alf_sc"+il).addClass('bold');
					$(".alr_sc"+il).removeClass('bold');
					$(".alj_sc"+il).removeClass('bold');
				}
				if(ali == '3'){
					$(".alr_sc"+il).addClass('bold');
					$(".alf_sc"+il).removeClass('bold');
					$(".alj_sc"+il).removeClass('bold');
				}
				if(ali == '2'){
					$(".alj_sc"+il).addClass('bold');
					$(".alr_sc"+il).removeClass('bold');
					$(".alf_sc"+il).removeClass('bold');
				}
					var must = $("#"+i.id+' .must').val();
					if(must=='*'){
						$('#must').prop('checked', true);
					}
					else{
						$('#must').prop('checked', false);
					}
					var hidd = $("#"+i.id+' .must').val();
					if(hidd=='0'){
						$('#hiden').prop('checked', true);
					}
					else{
						$('#hiden').prop('checked', false);
					}
					var ref = $("#"+i.id+' .refe').val();
					if(ref=='1'){
						$('#Referance').prop('checked', true);
					}
					else{
						$('#Referance').prop('checked', false);
					}
				}
				else if(i.id == "group"+il){
					$('#myModal2').modal();$('#submitButton').html('<a type="submit" value="Save" name="submit" class="btn btn-primary " onclick="save('+i.id+' ,'+il+');">Save</a>'); 
					$('#text_check').unbind('keyup');
		$("#color_check").unbind( "change");
		$("#background").unbind( "change");
		$("#size_c").unbind('change');
		$("#bold_c").unbind('click');
		$("#italic_c").unbind('click');
		$("#underline_c").unbind('click');
		$("#align_left_c").unbind('click');
		$("#align_just_c").unbind('click');
		$("#align_right_c").unbind('click');
				$('.lae'+il).keyup(function() {
			var val = $(this).val();
		if(val.length!=0){
  $('#'+i.id+' #div'+il).text(val);
			$('#group'+il+' #div'+il).append('<i onclick="text(group'+il+' ,'+il+');"class="fa fa-pencil ppp  fa-1x che pull-right  " aria-hidden="true"></i><i onclick="delsection(this ,'+il+');"class="fa fa-trash ppp  fa-1x che pull-right  " aria-hidden="true"></i>');
		$('#div'+il).removeClass('hide');	
			}
		else{
			$('#div'+il).addClass('hide');	
		}
});
		
			
$( ".ba"+il).change(function() {
 var val = $(this).val();
  $('#group'+il+' #div'+il).css('background' , val);
});
	
		$( ".ca"+il).change(function() {

 var val = $(this).val();
  $('#group'+il+' #div'+il).css('color' , val);
});
$( ".sa"+il).change(function() {
 var val = $(this).val();
  $('#group'+il+' #div'+il).css('font-size' , val+'px');
});
	$('.ba'+il).click(function() {
		$('#bold_c').toggleClass('bold');
 if($('.ba'+il).hasClass('bold')){
		$('#group'+il+' #div'+il).css('font-weight' ,'bold');
			}
		else{
			$('#group'+il+' #div'+il).css('font-weight' ,'normal');
		}
});
		$('.ia'+il).click(function() {
			$('#italic_c').toggleClass('bold');
 if($('.ia'+il).hasClass('bold')){
		$('#group'+il+' #div'+il).css('font-style' ,'italic');
			}
			else{
			$('#group'+il+' #div'+il).css('font-style' ,'normal');	
			}
});
	$('.ua'+il).click(function() {
		$('#underline_c').toggleClass('bold');
 if($('.ua'+il).hasClass('bold')){
		$('#group'+il+' #div'+il).css('text-decoration' ,'underline');
			}
			else{
			$('#group'+il+' #div'+il).css('text-decoration' ,'normal');	
			}
});	
			$('.ala'+il).click(function() {
				$('#align_left_c').addClass('bold');
 if($('.ala'+ide).hasClass('bold')){
		$('#group'+il+' #div'+il).css('text-align' ,'left');
	 $('.ara'+il).removeClass('bold');
	 $('.aja'+il).removeClass('bold');
			}

});
			$('.ara'+il).click(function() {
				$('#align_right_c').addClass('bold');
 if($('.ara'+il).hasClass('bold')){
		$('#group'+il+' #div'+il).css('text-align' ,'right');
	 
	 	 $('.ala'+il).removeClass('bold');
	 $('.aja'+il).removeClass('bold');
			}
		
});
			$('.aja'+il).click(function() {
				$('#align_just_c').addClass('bold');
 if($('.aja'+il).hasClass('bold')){
		$('#group'+il+' #div'+il).css('text-align' ,'center');
	 	 $('.ara'+il).removeClass('bold');
	 $('.ala'+il).removeClass('bold');
			}
			
			});
			var text = $("#"+i.id+' .labt').val();
	         $(".lae"+il).val(text);	
				var backg = $("#"+i.id+' .back').val();
			    $(".ba"+il).val(backg);
				var color = $("#"+i.id+' .color').val();
				$(".ca"+il).val(color);
				var size = $("#"+i.id+' .size').val();
				if(size !='null'){
				
				$(".sa"+il).val(size);
				}
				else{
					$(".sa"+il).val('dis');
				}
				var bol = $("#"+i.id+' .bold').val();
				if(bol == 'bold'){
					$(".ba"+il).addClass('bold');
				}
				else{
					$(".ba"+il).removeClass('bold');
				}
				var it = $("#"+i.id+' .italic').val();
				if(it == 'italic'){
					$(".ia"+il).addClass('bold');
				}
				else{
					$(".ia"+il).removeClass('bold');
				}
				var under = $("#"+i.id+' .underline').val();
				if(under == 'underline'){
					$(".ua"+il).addClass('bold');
				}
				else{
					$(".ua"+il).removeClass('bold');
				}
					   var ali = $("#"+i.id+' .align').val();
				if(ali == '1'){
					$(".ala"+il).addClass('bold');
					$(".ara"+il).removeClass('bold');
					$(".aja"+il).removeClass('bold');
				}
				if(ali == '3'){
					$(".ara"+il).addClass('bold');
					$(".ala"+il).removeClass('bold');
					$(".aja"+il).removeClass('bold');
				}
				if(ali == '2'){
					$(".aja"+il).addClass('bold');
					$(".ara"+il).removeClass('bold');
					$(".ala"+il).removeClass('bold');
			}
					var must = $("#"+i.id+' .must').val();
					if(must=='*'){
						$('#must_c').prop('checked', true);
					}
					else{
						$('#must_c').prop('checked', false);
					}
					var hidd = $("#"+i.id+' .must').val();
					if(hidd=='0'){
						$('#hiden_c').prop('checked', true);
					}
					else{
						$('#hiden_c').prop('checked', false);
					}
						$("#div"+il).hover(
            function(){
			
				$("#"+$(this).attr('id')+" i.fa.fa-pencil.ppp.fa-1x.che.pull-right").toggle();
				$("#"+$(this).attr('id')+" i.fa.fa-trash.ppp.fa-1x.che.pull-right").toggle();
			}	
        );	
				
				
				}
				   else if(i.id == "text"+il){
$('#exampleInputcomment').unbind('keyup');
		$("#exampleInputhint").unbind('keyup');
		$("#exampleInputback").unbind( "change");
		$("#size").unbind('change');
		$("#bold").unbind('click');
		$("#italic").unbind('click');
		$("#underline").unbind('click');
		$("#align_left").unbind('click');
		$("#align_just").unbind('click');
		$("#underline").unbind('click');
					   $('.select'+il).unbind('keyup');
		$('.section'+il).unbind('keyup');
		$('.radio'+il).unbind('keyup');
		$('.box'+il).unbind('keyup');
					   $("#align_right").unbind('click');
	
					   $('#exampleInputll').addClass('hide');
		$("#exampleInputhint").removeClass('hide');
				
				$('#myModal').modal();$('#saveButton').html('<a type="submit" value="Save" name="submit" class="btn btn-primary " onclick="save('+i.id+' ,'+il+');">Save</a>'); 
					   $("."+i.id).keyup(function() {
			var val = $(this).val();
  $('#'+i.id+' .prev'+il+' label').text(val)
	if(val.length !=0){
		$('#lat'+il).removeClass('hide');
		$('#lai'+il+' .fa-pencil').removeClass('y');
		$('#lai'+il+' .fa-pencil').addClass('i');
			$('#lai'+il+' .fa-trash').removeClass('y');
		$('#lai'+il+' .fa-trash').addClass('i');
		}
	
		else{
			$('#lat'+il).addClass('hide');
			$('#lai'+ide+' .fa-pencil').addClass('y');
		$('#lai'+ide+' .fa-pencil').removeClass('i');
			$('#lai'+ide+' .fa-trash').addClass('y');
		$('#lai'+ide+' .fa-trash').removeClass('i');
		}
});
	$(".tehint"+il).keyup(function() {
			var val = $(this).val();
 var ba = $(".teback"+il).val();
  $('#'+i.id+' .prev'+il+' input').css('background' , ba);
  $('#'+i.id+' .prev'+il+' input').attr('placeholder' , val);
});
					   
		$( ".teback"+il).change(function() {
 var val = $(this).val();
$('#'+i.id+' .prev'+il+' input').css('background' , val);

});		
					   $( ".tesize"+il).change(function() {
 var val = $(this).val();
  $('.prev'+il+' input').css('font-size' , val+'px');
});
	$('.bold'+il).click(function() {
		$('#bold').toggleClass('bold');
 if($('.bold'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il+' input').css('font-weight' ,'bold');
			}
		else{
			$('#'+i.id+' .prev'+il+' input').css('font-weight' ,'normal');
		}
});
		$('.italic'+il).click(function() {
			$('#italic').toggleClass('bold');
 if($('.italic'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il+' input').css('font-style' ,'italic');
			}
			else{
			$('#'+i.id+' .prev'+il+' input').css('font-style' ,'normal');	
			}
});
	$('.underline'+il).click(function() {
		$('#underline').toggleClass('bold');
 if($('.underline'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il+' input').css('text-decoration' ,'underline');
			}
			else{
			$('#'+i.id+' .prev'+il+' input').css('text-decoration' ,'normal');	
			}
});	
			$('.alf'+il).click(function() {
				$('#align_left').addClass('bold');	
 if($('.alf'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il+' input').css('text-align' ,'left');
	 $('.alr'+il).removeClass('bold');
	 $('.alj'+il).removeClass('bold');
			}
			
});
			$('.alr'+il).click(function() {
			$('#align_right').addClass('bold');	
 if($('.alr'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il+' input').css('text-align' ,'right');
	 	 $('.alf'+il).removeClass('bold');
	 $('.alj'+il).removeClass('bold');
			}
			
});
			$('.alj'+il).click(function() {
				$('#align_just').addClass('bold');
 if($('.alj'+il).hasClass('bold')){
		$('#'+i.id+' .prev'+il+' input').css('text-align' ,'center');
	 	 $('.alr'+il).removeClass('bold');
	 $('.alf'+il).removeClass('bold');
			}
			
});
				
				$("#exampleInputback").val('#FFFFFF');
			var text = $("#"+i.id+' .labt').val();
				$("."+i.id).val(text);	
			var hint = $("#"+i.id+' .hint').val();
				$(".tehint"+il).val(hint);
				var backg = $("#"+i.id+' .back').val();
			    $(".teback"+il).val(backg);
				var color = $("#"+i.id+' .color').val();
				$(".te"+il).val(color);
				var size = $("#"+i.id+' .size').val();
				if(size !='null'){
				
				$(".tesize"+il).val(size);
				}
				else{
					$(".tesize"+il).val('dis');
				}
				var bol = $("#"+i.id+' .bold').val();
				if(bol == 'bold'){
					$(".bold"+il).addClass('bold');
				}
				else{
					$(".bold"+il).removeClass('bold');
				}
				var it = $("#"+i.id+' .italic').val();
				if(it == 'italic'){
					$(".italic"+il).addClass('bold');
				}
				else{
					$(".italic"+il).removeClass('bold');
				}
				var under = $("#"+i.id+' .underline').val();
				if(under == 'underline'){
					$(".underline"+il).addClass('bold');
				}
				else{
					$(".underline"+il).removeClass('bold');
				}
					   var ali = $("#"+i.id+' .align').val();
				if(ali == 'left'){
					$(".alf"+il).addClass('bold');
					$(".alr"+il).removeClass('bold');
					$(".alj"+il).removeClass('bold');
				}
				if(ali == 'right'){
					$(".alr"+il).addClass('bold');
					$(".alf"+il).removeClass('bold');
					$(".alj"+il).removeClass('bold');
				}
				if(ali == 'center'){
					$(".alj"+il).addClass('bold');
					$(".alr"+il).removeClass('bold');
					$(".alf"+il).removeClass('bold');
				}
			}}
					
		var z=0;
			
		function save(i ,il){
					
			var val = $("."+i.id).val();
			if(i.id == "group"+il){
			
			var textarea= $(".lae"+il).val();
			var back= $(".ba"+il).val();
			var color= $(".ca"+il).val();
				var size= $(".sa"+il).val();
				if($('#bold_c').hasClass('bold')){
				var bold = 'bold';
			}
				else{
					var bold = 'normal';
				}
			if($('#align_left_c').hasClass('bold')){
				var align = '1';
			}
				
			 if($('#align_right_c').hasClass('bold')){
				var align = '3';
			}
				
				if($('#align_just_c').hasClass('bold')){
				var align = '2';
			}
				
			 if($('#italic_c').hasClass('bold')){
				var italic = 'italic';
			}
				else{
					var italic = 'normal';
				}
				if($('#underline_c').hasClass('bold')){
				var underline = 'underline';
			}
				else{
					var underline = 'normal';
				}
				
				
				$(".fa-pencil").hide();
			$(".fa-trash").hide();	
					$("#div"+il).hover(
            function(){
			
				$("#"+$(this).attr('id')+" i.fa.fa-pencil.ppp.fa-1x.che.pull-right").toggle();
				$("#"+$(this).attr('id')+" i.fa.fa-trash.ppp.fa-1x.che.pull-right").toggle();
			}	
        );
				if($('#'+i.id+' .code').length==0){
				
					if($('#must_c')[0].checked == true){
				$("#"+i.id).prepend("<input class='must' type='hidden' name=groumust"+cou+" value='*'>")
				}
				else{
					$("#"+i.id).prepend("<input class='must' type='hidden' name=groumust"+cou+" value=''>")
				}
					
			if($('#hiden_c')[0].checked == true){
				$("#"+i.id).prepend("<input class='hidden' type='hidden' name=grouhide"+cou+" value='1'>")
				}
				else{
					$("#"+i.id).prepend("<input class='hidden' type='hidden' name=grouhide"+cou+" value='0'>")
				}
	
				$("#"+i.id).prepend("<input class='back' type='hidden' name=grouback"+cou+" value="+back+">");
			$("#"+i.id).prepend("<input class='color' type='hidden' name=groucolor"+cou+" value="+color+">");
			$("#"+i.id).prepend("<input class='bold' type='hidden' name=groubold"+cou+" value="+bold+">")
			$("#"+i.id).prepend("<input class='italic' type='hidden' name=grouitalic"+cou+" value="+italic+">")
			$("#"+i.id).prepend("<input class='underline' type='hidden' name=grouunderline"+cou+" value="+underline+">")
			$("#"+i.id).prepend("<input class='size' type='hidden' name=grousize"+cou+" value="+size+">")
			$("#"+i.id).prepend("<input class='align' type='hidden' name=groualign"+cou+" value="+align+">")
			$("#"+i.id).prepend("<input class='labt' type='hidden' name=groulab"+cou+">")
			$("#"+i.id+' .labt').val(textarea);
			$("#"+i.id).prepend("<input class='lab' type='hidden' name=groutype"+cou+" value='10'>")
					if($("#"+i.id).parent().parent().hasClass('darggable')){
				var ig= $("#"+i.id).parent().parent().attr('id').split('darggable');
				$("#"+i.id).prepend("<input class='group' type='hidden' name=grougroup"+cou+" value="+ig[1]+">")
			}
				else{
				$("#"+i.id).prepend("<input class='group' type='hidden' name=grougroup"+cou+" value=''>")	
				}
					$("#"+i.id).prepend("<input class='code' type='hidden' name=groucode"+cou+" value="+cou+">")
				}
			else{
						$("#"+i.id+' .back').val(back);
						$("#"+i.id+' .size').val(size);
						$("#"+i.id+' .bold').val(bold);
						$("#"+i.id+' .italic').val(italic);
						$("#"+i.id+' .underline').val(underline);
						$("#"+i.id+' .color').val(color);
						$("#"+i.id+' .labt').val(textarea);
						$("#"+i.id+' .align').val(align);
				       
					}
				$('#myModal2').modal('hide');
				
			}
			
			else if(i.id == "text"+il){
	
			var size = $(".tesize"+il).val();
			var hint= $(".tehint"+il).val();
			var color=$(".te"+il).val();
			var back=$(".teback"+il).val();
            if($('.bold'+il).hasClass('bold')){
				var bold = 'bold';
			}
				else{
					var bold = 'normal';
				}
			if($('.alf'+il).hasClass('bold')){
				var alf = 'left';
			}
				
				if($('.alr'+il).hasClass('bold')){
				var alf = 'right';
			}
				
				if($('.alj'+il).hasClass('bold')){
				var alf = 'center';
			}
				
			 if($('#italic').hasClass('bold')){
				var italic = 'italic';
			}
				else{
					var italic = 'normal';
				}
				if($('#underline').hasClass('bold')){
				var underline = 'underline';
			}
				else{
					var underline = 'normal';
				}
				if($('#align_left').hasClass('bold')){
				var align = '1';
			}
				
			 if($('#align_right').hasClass('bold')){
				var align = '3';
			}
				
				if($('#align_just').hasClass('bold')){
				var align = '2';
			}
		$("#t"+il).removeClass('che');
        
				if(val.length !=0){
		$('#lai'+il+' .fa-trash').removeClass('y');
		$('#lai'+il+' .fa-trash').addClass('i');
		$('#lai'+il+' .fa-pencil').removeClass('y');
		$('#lai'+il+' .fa-pencil').addClass('i');
	}
		else{
			$('#lai'+il+' .fa-trash').addClass('y');
		$('#lai'+il+' .fa-trash').removeClass('i');
		$('#lai'+il+' .fa-pencil').addClass('y');
		$('#lai'+il+' .fa-pencil').removeClass('i');
		}

				$("#text"+il+' input[type != "hidden"]').attr('placeholder' , hint);
				if($('#'+i.id+' .code').length==0){
				$("#"+i.id).append("<input class='code' type='hidden' name=texcode"+cou+" value="+cou+">")
			if($('#must')[0].checked == true){
					$("#t").prop('required',true);
				$("#"+i.id).append("<input class='must' type='hidden' name=texmust"+cou+" value='*'>")
				}
				else{
					$("#"+i.id).append("<input class='must' type='hidden' name=texmust"+cou+" value=''>")
				}
					
			if($('#hiden')[0].checked == true){
				$("#"+i.id).append("<input class='hidden' type='hidden' name=texhide"+cou+" value='1'>")
				}
				else{
					$("#"+i.id).append("<input class='hidden' type='hidden' name=texhide"+cou+" value='0'>")
				}
				
			
			$("#"+i.id).append("<input class='back' type='hidden' name=texback"+cou+" value="+back+">")
			$("#"+i.id).append("<input class='color' type='hidden' name=texcolor"+cou+" value="+color+">")
		$("#"+i.id).append("<input class='hint' type='hidden' name=texhint"+cou+" >")
		$("#"+i.id+' .hint').val(hint);
			$("#"+i.id).append("<input class='bold' type='hidden' name=texbold"+cou+" value="+bold+">")
			$("#"+i.id).append("<input class='italic' type='hidden' name=texitalic"+cou+" value="+italic+">")
			$("#"+i.id).append("<input class='underline' type='hidden' name=texunderline"+cou+" value="+underline+">")
			$("#"+i.id).append("<input class='size' type='hidden' name=texsize"+cou+" value="+size+">")
			$("#"+i.id).append("<input class='align' type='hidden' name=texalign"+cou+" value="+align+">")
			$("#"+i.id).append("<input class='labt' type='hidden' name=texlab"+cou+">")
			$("#"+i.id+' .labt').val(val);
			$("#"+i.id).append("<input class='lab' type='hidden' name=textype"+cou+" value='3'>")
				if($("#"+i.id).parent().parent().hasClass('darggable')){
				var ig= $("#"+i.id).parent().parent().attr('id').split('darggable');
				$("#"+i.id).append("<input class='group' type='hidden' name=texgroup"+cou+" value="+ig[1]+">")
			}
				else{
				$("#"+i.id).append("<input class='group' type='hidden' name=textgroup"+cou+" value=''>")	
				}}
				else{
						$("#"+i.id+' .back').val(back);
						$("#"+i.id+' .size').val(size);
						$("#"+i.id+' .bold').val(bold);
						$("#"+i.id+' .italic').val(italic);
						$("#"+i.id+' .underline').val(underline);
						$("#"+i.id+' .color').val(color);
						$("#"+i.id+' .labt').val(val);
						$("#"+i.id+' .align').val(align);
					}
			$('#myModal').modal('hide');
			}
			
			else if(i.id == "label"+il){
			$("#tt").addClass('ppp'+il);
				$("#preview_c #l_t").addClass('lll'+il);
				if($('#bold').hasClass('bold')){
				var bold = 'bold';
			}
				else{
					var bold = 'normal';
				}
			 if($('#italic').hasClass('bold')){
				var italic = 'italic';
			}
				else{
					var italic = 'normal';
				}
				if($('#underline').hasClass('bold')){
				var underline = 'underline';
			}
				else{
					var underline = 'normal';
				}  
				if($('#align_left').hasClass('bold')){
				var align = '1';
			}
				
			 if($('#align_right').hasClass('bold')){
				var align = '3';
			}
				
				if($('#align_just').hasClass('bold')){
				var align = '2';
			}
				
				var val = $(".label"+il).val();
				var size = $(".lesize"+il).val();
            
			var color=$(".le"+il).val();
			var back=$(".leback"+il).val();	
				if($('#'+i.id+' .code').length==0){
				$("#"+i.id).append("<input class='code' type='hidden' name=bcode"+cou+" value="+cou+">")
					if($('#must')[0].checked == true){
					$("#t").prop('required',true);
				$("#"+i.id).append("<input class='must' type='hidden' name=bmust"+cou+" value='*'>")
				}
				else{
					$("#"+i.id).append("<input class='must' type='hidden' name=bmust"+cou+" value=''>")
				}
					
			if($('#hiden')[0].checked == true){
				$("#"+i.id).append("<input class='hidden' type='hidden' name=bhide"+cou+" value='1'>")
				}
				else{
					$("#"+i.id).append("<input class='hidden' type='hidden' name=bhide"+cou+" value='0'>")
				}
				
			$("#"+i.id).append("<input class='back' type='hidden' name=bback"+cou+" value="+back+">");
			$("#"+i.id).append("<input class='color' type='hidden' name=bcolor"+cou+" value="+color+">");
			$("#"+i.id).append("<input class='bold' type='hidden' name=bbold"+cou+" value="+bold+">")
			$("#"+i.id).append("<input class='italic' type='hidden' name=bitalic"+cou+" value="+italic+">")
			$("#"+i.id).append("<input class='underline' type='hidden' name=bunderline"+cou+" value="+underline+">")
			$("#"+i.id).append("<input class='size' type='hidden' name=bsize"+cou+" value="+size+">")
			$("#"+i.id).append("<input class='align' type='hidden' name=balign"+cou+" value="+align+">")
			$("#"+i.id).append("<input class='la' type='hidden' name='blab"+cou+"'>")
			$("#"+i.id).append("<input class='lab' type='hidden' name=btype"+cou+" value='1'>")
			
			$("#"+i.id+' .la').val(val);
					if($("#"+i.id).parent().parent().hasClass('darggable')){
				var ig= $("#"+i.id).parent().parent().attr('id').split('darggable');
				$("#"+i.id).append("<input class='group' type='hidden' name=bgroup"+cou+" value="+ig[1]+">")
			}
				else{
				$("#"+i.id).append("<input class='group' type='hidden' name=bgroup"+cou+" value=''>")	
				}}
					else{
						$("#"+i.id+' .back').val(back);
						$("#"+i.id+' .size').val(size);
						$("#"+i.id+' .bold').val(bold);
						$("#"+i.id+' .italic').val(italic);
						$("#"+i.id+' .underline').val(underline);
						$("#"+i.id+' .color').val(color);
						$("#"+i.id+' .la').val(val);
						$("#"+i.id+' .align').val(align);
					}
				
				
				$("#labb"+il).removeClass('che');
			
			
				
	
			$('#myModal').modal('hide');
			}
			
			else if(i.id == "box"+il){
				$("#tt").addClass('p'+il);
				$("#preview_c #l_t").addClass('l'+il);
				if($('#bold').hasClass('bold')){
				var bold = 'bold';
			}
				else{
					var bold = 'normal';
				}
			 if($('#italic').hasClass('bold')){
				var italic = 'italic';
			}
				else{
					var italic = 'normal';
				}
				if($('#underline').hasClass('bold')){
				var underline = 'underline';
			}
				else{
					var underline = 'normal';
				}  
				if($('#align_left').hasClass('bold')){
				var align = '1';
			}
				
			 if($('#align_right').hasClass('bold')){
				var align = '3';
			}
				
				if($('#align_just').hasClass('bold')){
				var align = '2';
			}
				
				var val = $(".box"+il).val();
				var size = $(".cesize"+il).val();
            
			var color=$(".ce"+il).val();
			var back=$(".ceback"+il).val();	
				if($('#'+i.id+' .code').length==0){
				$("#"+i.id).append("<input class='code' type='hidden' name=boxcode"+cou+" value="+cou+">")
					if($('#must')[0].checked == true){
					$("#t").prop('required',true);
				$("#"+i.id).append("<input class='must' type='hidden' name=boxmust"+cou+" value='*'>")
				}
				else{
					$("#"+i.id).append("<input class='must' type='hidden' name=boxmust"+cou+" value=''>")
				}
					
			if($('#hiden')[0].checked == true){
				$("#"+i.id).append("<input class='hidden' type='hidden' name=boxhide"+cou+" value='1'>")
				}
				else{
					$("#"+i.id).append("<input class='hidden' type='hidden' name=boxhide"+cou+" value='0'>")
				}
			
			$("#"+i.id).append("<input class='back' type='hidden' name=boxback"+cou+" value="+back+">");
			$("#"+i.id).append("<input class='color' type='hidden' name=boxcolor"+cou+" value="+color+">");
			$("#"+i.id).append("<input class='bold' type='hidden' name=boxbold"+cou+" value="+bold+">")
			$("#"+i.id).append("<input class='italic' type='hidden' name=boxitalic"+cou+" value="+italic+">")
			$("#"+i.id).append("<input class='underline' type='hidden' name=boxunderline"+cou+" value="+underline+">")
			$("#"+i.id).append("<input class='size' type='hidden' name=boxsize"+cou+" value="+size+">")
			$("#"+i.id).append("<input class='align' type='hidden' name=boxalign"+cou+" value="+align+">")
			$("#"+i.id).append("<input class='labt' type='hidden' name='boxlab"+cou+"'>")
			$("#"+i.id).append("<input class='lab' type='hidden' name=boxtype"+cou+" value='7'>")
					if($("#"+i.id).parent().parent().hasClass('darggable')){
				var ig= $("#"+i.id).parent().parent().attr('id').split('darggable');
				$("#"+i.id).append("<input class='group' type='hidden' name=boxgroup"+cou+" value="+ig[1]+">")
			}
				else{
				$("#"+i.id).append("<input class='group' type='hidden' name=boxgroup"+cou+" value=''>")	
				}
				$("#"+i.id+' .labt').val(val);
				}
			else{
						$("#"+i.id+' .back').val(back);
						$("#"+i.id+' .size').val(size);
						$("#"+i.id+' .bold').val(bold);
						$("#"+i.id+' .italic').val(italic);
						$("#"+i.id+' .underline').val(underline);
						$("#"+i.id+' .color').val(color);
						$("#"+i.id+' .labt').val(val);
						$("#"+i.id+' .align').val(align);
					}
			
			
			$('#myModal').modal('hide');
			}
			
			else if(i.id == "radio"+il){
				var val = $(".radio"+il).val();
					if(val.length !=0){
				$("#tt").addClass('rp'+il);
				$("#preview_c #l_t").addClass('l'+il);
				if($('#bold').hasClass('bold')){
				var bold = 'bold';
			}
				else{
					var bold = 'normal';
				}
			 if($('#italic').hasClass('bold')){
				var italic = 'italic';
			}
				else{
					var italic = 'normal';
				}
				if($('#underline').hasClass('bold')){
				var underline = 'underline';
			}
				else{
					var underline = 'normal';
				}  
				if($('#align_left').hasClass('bold')){
				var align = '1';
			}
				
			 if($('#align_right').hasClass('bold')){
				var align = '3';
			}
				
				if($('#align_just').hasClass('bold')){
				var align = '2';
			}
				
				
				var size = $(".resize"+il).val();
           
			var color=$(".re"+il).val();
			var back=$(".reback"+il).val();	
						if($('#'+i.id+' .code').length==0){
						$("#"+i.id).append("<input class='code' type='hidden' name=radiocode"+cou+" value="+cou+">")
							if($('#must')[0].checked == true){
					$("#t").prop('required',true);
				$("#"+i.id).append("<input class='must' type='hidden' name=radiomust"+cou+" value='*'>")
				}
				else{
					$("#"+i.id).append("<input class='must' type='hidden' name=radiomust"+cou+" value=''>")
				}
					
			if($('#hiden')[0].checked == true){
				$("#"+i.id).append("<input class='hidden' type='hidden' name=radiohide"+cou+" value='1'>")
				}
				else{
					$("#"+i.id).append("<input class='hidden' type='hidden' name=radiohide"+cou+" value='0'>")
				}
			
			$("#"+i.id).append("<input class='back' type='hidden' name=radioback"+cou+" value="+back+">");
			$("#"+i.id).append("<input class='color' type='hidden' name=radiocolor"+cou+" value="+color+">");
			$("#"+i.id).append("<input class='bold' type='hidden' name=radiobold"+cou+" value="+bold+">")
			$("#"+i.id).append("<input class='italic' type='hidden' name=radioitalic"+cou+" value="+italic+">")
			$("#"+i.id).append("<input class='underline' type='hidden' name=radiounderline"+cou+" value="+underline+">")
			$("#"+i.id).append("<input class='size' type='hidden' name=radiosize"+cou+" value="+size+">")
			$("#"+i.id).append("<input class='align' type='hidden' name=radioalign"+cou+" value="+align+">")
			$("#"+i.id).append("<input class='labt' type='hidden' name='radiolab"+cou+"'>")
			$("#"+i.id).append("<input class='lab' type='hidden' name=radiotype"+cou+" value='6'>")
					if($("#"+i.id).parent().parent().hasClass('darggable')){
				var ig= $("#"+i.id).parent().parent().attr('id').split('darggable');
				$("#"+i.id).append("<input class='group' type='hidden' name=radiogroup"+cou+" value="+ig[1]+">")
			}
				else{
				$("#"+i.id).append("<input class='group' type='hidden' name=radiogroup"+cou+" value=''>")	
				}
			$("#"+i.id+' .labt').val(val);
					}
				else{
						$("#"+i.id+' .back').val(back);
						$("#"+i.id+' .size').val(size);
						$("#"+i.id+' .bold').val(bold);
						$("#"+i.id+' .italic').val(italic);
						$("#"+i.id+' .underline').val(underline);
						$("#"+i.id+' .color').val(color);
						$("#"+i.id+' .labt').val(val);
						$("#"+i.id+' .align').val(align);
					}
			$('#myModal').modal('hide');
			}
			
				
		else{
			alert('label is must');
			
		}}
			else if(i.id == "select"+il){
				
				var la= $(".select"+il).val();
				var textarea= $(".sell"+il).val();
				var size = $(".size_s"+il).val();
			var hint= $(".sehint"+il).val();
			var color=$(".se"+il).val();
			var back=$(".seback"+il).val();
            if($('.bold_s'+il).hasClass('bold')){
				var bold = 'bold';
			}
				else{
					var bold = 'normal';
				}
			if($('#align_left').hasClass('bold')){
				var align = '1';
			}
				
			 if($('#align_right').hasClass('bold')){
				var align = '3';
			}
				
				if($('#align_just').hasClass('bold')){
				var align = '2';
			}
				
			 if($('.italic_s'+il).hasClass('bold')){
				var italic = 'italic';
			}
				else{
					var italic = 'normal';
				}
				if($('.underline_s'+il).hasClass('bold')){
				var underline = 'underline';
			}
				else{
					var underline = 'normal';
				}
			
		$("#se"+il).removeClass('che');
				if($('#'+i.id+' .code').length==0){
				$("#"+i.id).append("<input class='code' type='hidden' name=selecode"+cou+" value="+cou+">")
					if($('#must')[0].checked == true){
					$("#t").prop('required',true);
				$("#"+i.id).append("<input class='must' type='hidden' name=selemust"+cou+" value='*'>")
				}
				else{
					$("#"+i.id).append("<input class='must' type='hidden' name=selemust"+cou+" value=''>")
				}
					
			if($('#hiden')[0].checked == true){
				$("#"+i.id).append("<input class='hidden' type='hidden' name=selehide"+cou+" value='1'>")
				}
				else{
					$("#"+i.id).append("<input class='hidden' type='hidden' name=selehide"+cou+" value='0'>")
				}

			$("#"+i.id).append("<input class='back' type='hidden' name=selecback"+cou+" value="+back+">")
			$("#"+i.id).append("<input  class='color' type='hidden' name=seleccolor"+cou+" value="+color+">")
			$("#"+i.id).append("<input class='bold' type='hidden' name=selebold"+cou+" value="+bold+">")
			$("#"+i.id).append("<input class='italic' type='hidden' name=seleitalic"+cou+" value="+italic+">")
			$("#"+i.id).append("<input class='underline' type='hidden' name=seleunderline"+cou+" value="+underline+">")
			$("#"+i.id).append("<input class='size' type='hidden' name=selesize"+cou+" value="+size+">")
			$("#"+i.id).append("<input class='align' type='hidden' name=selealign"+cou+" value="+align+">")
			$("#"+i.id).append("<input class='label' type='hidden' name=selelab"+cou+" value="+la+">")
			$("#"+i.id).append("<input class='hint' type='hidden' name=selehint"+cou+" value="+hint+">")
			$("#"+i.id).append("<input class='textarea' type='hidden' >")
						$("#"+i.id+' .label').val(la);
					    $("#"+i.id+' .hint').val(hint);
			$("#"+i.id).append("<input class='opton' type='hidden' name=seleoption"+cou+" >")
			$("#"+i.id).append("<input class='lab' type='hidden' name=seletype"+cou+" value='11'>")
				if($("#"+i.id).parent().parent().hasClass('darggable')){
				var ig= $("#"+i.id).parent().parent().attr('id').split('darggable');
				$("#"+i.id).append("<input class='group' type='hidden' name=selegroup"+cou+" value="+ig[1]+">")
			}
				else{
					
				$("#"+i.id).append("<input class='group' type='hidden' name=selegroup"+cou+" value=''>")	
				}
$('#'+i.id+' .textarea').val(textarea);
					$('#'+i.id+' .opton').val(JSON.stringify(textarea.split("\n")));
			}
			else{
						$("#"+i.id+' .back').val(back);
						$("#"+i.id+' .size').val(size);
						$("#"+i.id+' .bold').val(bold);
						$("#"+i.id+' .italic').val(italic);
						$("#"+i.id+' .underline').val(underline);
						$("#"+i.id+' .color').val(color);
						$("#"+i.id+' .label').val(val);
						$("#"+i.id+' .align').val(align);
				        $('#'+i.id+' .textarea').val(textarea);
					}
		
			
				$('#myModal').modal('hide');
			}
			
			else if(i.id == "section"+il){
				var hint= $('.selhint'+il).val();
				var size = $(".size_se"+il).val();
			var la= $(".section"+il).val();
			var color=$(".sc"+il).val();
			var back=$(".scback"+il).val();
				var textarea= $(".selle"+il).val();
            if($('.bold_sc'+il).hasClass('bold')){
				var bold = 'bold';
			}
				else{
					var bold = 'normal';
				}
				if($('#align_left').hasClass('bold')){
				var align = '1';
			}
				
			 if($('#align_right').hasClass('bold')){
				var align = '3';
			}
				
				if($('#align_just').hasClass('bold')){
				var align = '2';
			}
				
			 if($('.italic_sc'+il).hasClass('bold')){
				var italic = 'italic';
			}
				else{
					var italic = 'normal';
				}
				if($('.underline_sc'+il).hasClass('bold')){
				var underline = 'underline';
			}
				else{
					var underline = 'normal';
				}
					
				if($('#'+i.id+' .code').length==0){
				$("#"+i.id).append("<input class='code' type='hidden' name=sectcode"+cou+" value="+cou+">")
			if($('#must')[0].checked == true){
					$("#t").prop('required',true);
				$("#"+i.id).append("<input class='must' type='hidden' name=sectmust"+cou+" value='*'>")
				}
				else{
					$("#"+i.id).append("<input class='must' type='hidden' name=sectmust"+cou+" value=''>")
				}
					
			if($('#hiden')[0].checked == true){
				$("#"+i.id).append("<input class='hidden' type='hidden' name=secthide"+cou+" value='1'>")
				}
				else{
					$("#"+i.id).append("<input class='hidden' type='hidden' name=secthide"+cou+" value='0'>")
				}
		if($('#Referance')[0].checked == true){
				$("#"+i.id).append("<input class='refe' type='hidden' name=sectref"+cou+" value='1'>")
				}
				else{
					$("#"+i.id).append("<input class='refe' type='hidden' name=sectref"+cou+" value='0'>")
				}
				$("#"+i.id).append("<input class='back' type='hidden' name=sectback"+cou+" value="+back+">");
			$("#"+i.id).append("<input class='color' type='hidden' name=sectcolor"+cou+" value="+color+">");
			$("#"+i.id).append("<input class='bold' type='hidden' name=sectbold"+cou+" value="+bold+">")
			$("#"+i.id).append("<input class='label' type='hidden' name=sectlab"+cou+" value="+la+">")
			$("#"+i.id+' .label').val(la);
			$("#"+i.id).append("<input class='italic' type='hidden' name=sectitalic"+cou+" value="+italic+">")
			$("#"+i.id).append("<input class='underline' type='hidden' name=sectunderline"+cou+" value="+underline+">")
			$("#"+i.id).append("<input class='size' type='hidden' name=sectsize"+cou+" value="+size+">")
			$("#"+i.id).append("<input class='align' type='hidden' name=sectalign"+cou+" value="+align+">")
			$("#"+i.id).append("<input class='hint' type='hidden' name=secthint"+cou+" value="+hint+">")
			$("#"+i.id+' .hint').val(hint);
			$("#"+i.id).append("<input class='textarea' type='hidden' >")
			$("#"+i.id).append("<input class='opton' type='hidden' name=sectoption"+cou+" >")
			$("#"+i.id).append("<input class='lab' type='hidden' name=secttype"+cou+" value='8'>")
					if($("#"+i.id).parent().parent().hasClass('darggable')){
				var ig= $("#"+i.id).parent().parent().attr('id').split('darggable');
				$("#"+i.id).append("<input class='group' type='hidden' name=sectgroup"+cou+" value="+ig[1]+">")
			}
				else{
				$("#"+i.id).append("<input class='group' type='hidden' name=sectgroup"+cou+" value=''>")	
				}
			$('#'+i.id+' .textarea').val(textarea);
				$('#'+i.id+' .opton').val(JSON.stringify(textarea.split("\n")));
			}
			else{
						$("#"+i.id+' .back').val(back);
						$("#"+i.id+' .size').val(size);
						$("#"+i.id+' .bold').val(bold);
						$("#"+i.id+' .italic').val(italic);
						$("#"+i.id+' .underline').val(underline);
						$("#"+i.id+' .color').val(color);
						$("#"+i.id+' .label').val(val);
						$("#"+i.id+' .align').val(align);
				        $('#'+i.id+' .textarea').val(textarea);
					}
				$('#myModal').modal('hide');
		}
		var appName = $('#appId').val();
		var va = $('.paging').attr('id');
		
			var x = va.split('P');
			var num = x[1];
		
		$.ajax({
           type: "POST",
           url: "/array",
           data: $("#for").serialize() +"&page="+num+"&app_id="+appName+"&_token="+$('#token').val() , // serializes the form's elements.
           success: function(data)
           {
		
           }});
		}	
		$('#bold').click(function() {
					
$('#bold').toggleClass('bold');
			
	$("#font_style").append("<input type='hidden'value='bold'>")
});
		
				$('#align_left').click(function() {
					
$('#align_left').toggleClass('bold');

});
				$('#align_right').click(function() {
					
$('#align_right').toggleClass('bold');
			
});
				$('#align_just').click(function() {
					
$('#align_just').toggleClass('bold');
});
						$('#align_left_c').click(function() {
					
$('#align_left_c').toggleClass('bold');

});
				$('#align_right_c').click(function() {
					
$('#align_right_c').toggleClass('bold');
			
});
				$('#align_just_c').click(function() {
					
$('#align_just_c').toggleClass('bold');
});
		
			$('#italic').click(function() {
					
$('#italic').toggleClass('bold');
			
	$("#font_style").append("<input type='hidden'value='bold'>")
});
					$('#underline').click(function() {
					
$('#underline').toggleClass('bold');
			
	$("#font_style").append("<input type='hidden'value='bold'>")
});
		$('#bold_c').click(function() {
					
$('#bold_c').toggleClass('bold');
			
	$("#font_style").append("<input type='hidden'value='bold'>")
});
			$('#italic_c').click(function() {
					
$('#italic_c').toggleClass('bold');
			
	$("#font_style").append("<input type='hidden'value='bold'>")
});
					$('#underline_c').click(function() {
					
$('#underline_c').toggleClass('bold');
			
	$("#font_style").append("<input type='hidden'value='bold'>")
});
		  $('#modal').submit(function() {
  return false;
});
		
		
		
		
function prev(e , ide){
	$("#size_c").val("dis");
	$("#size").val("dis");
	$('#text_check').val('');
	$('#bold').removeClass('bold');
	$('#underline').removeClass('bold');
	$('#italic').removeClass('bold');
	$('#bold_c').removeClass('bold');
	$('#underline_c').removeClass('bold');
	$('#italic_c').removeClass('bold');
	$('#align_left').removeClass('bold');
	$('#align_left_c').removeClass('bold');
	$('#align_right').removeClass('bold');
	$('#align_right_c').removeClass('bold');
	$('#align_just').removeClass('bold');
	$('#align_just_c').removeClass('bold');
	$('#must').prop('checked', false);
	$('#hiden').prop('checked', false);
	cou++
if($('#'+e).parent().parent().attr('id')== 'darggable'){
	count++;
$('#gec'+ide+' i.che.fa.f.fa-trash.k.pull-right').attr('id' , count);	
}
if(e == 'group'+ide){
	if($('#'+e).parent().parent().attr('id')== 'elements'){
	count=0;
}}
$(".hover").unbind("hover");
	$("#elements").animate({ scrollTop: 513 }, 2000);
	
	if(e == "box"+ide){
		$('#exampleInputcomment').unbind('keyup');
		$("#exampleInputhint").unbind('keyup');
		$("#exampleInputback").unbind( "change");
		$("#exampleInputlass").unbind( "change");
		$("#size").unbind('change');
		$("#bold").unbind('click');
		$("#italic").unbind('click');
		$("#underline").unbind('click');
		$("#align_left").unbind('click');
		$("#align_just").unbind('click');
		$("#align_right").unbind('click');
		$("#exampleInputll").addClass('hide');
		$("#exampleInputhint").addClass('hide');
		$(".fa-cog").hide();
					$("#l"+ide).hover(
            function(){
			
                $("#"+$(this).attr('id')+" .fa-cog").toggle();
				
            }
        );	
	$('#'+e).text('');
    $('#'+e).append('<label id="tt"></label>')
	$("#exampleInputcomment").val('');
	$("#preview .lab span").text('');
	$("#exampleInputback").val('#FFFFFF');
	$("#size").addClass("cesize"+ide);
	$("#exampleInputcomment").addClass('box'+ide);
	$("#exampleInputback").addClass("ceback"+ide);
	$("#exampleInputlass").addClass("ce"+ide);
	$("#bold").addClass("bold_c"+ide);
	$("#italic").addClass("italic_c"+ide);
	$("#underline").addClass("underline_c"+ide);
	$("#align_left").addClass("alf_c"+ide);
	$("#align_right").addClass("alr_c"+ide);
	$("#align_just").addClass("alj_c"+ide);
	$("#"+e+" #tt").addClass('prev'+ide);
	$("#align_left").removeClass('bold');
	$("#align_just").removeClass('bold');
	$("#align_right").removeClass('bold');
	$('#'+e+' .prev'+ide).html('<div class="hover bhh che" id="po'+ide+'"><label class="lab"><input type="checkbox" class="op"><span  class="op"></span><i class="fa fa-pencil fa-1x co che pull-right" aria-hidden="true" onclick="text(box'+ide+' ,'+ide+');"></i><i onclick="delee(this ,'+ide+');"class="fa fa-trash fa-1x pull-right che co " aria-hidden="true"></i></label></div>');
	$(".box"+ide).keyup(function() {
			var val = $(this).val();
  $('#'+e+' .prev'+ide+' span').text(val)
	var ba = $(".ceback"+ide).val();
});
	
	$( ".ceback"+ide).change(function() {
 var val = $(this).val();
$('#'+e+' .prev'+ide+' div').css('background' , val);

});
$( ".ce"+ide).change(function() {
 var val = $(this).val();
  $('#'+e+' .prev'+ide+' div').css('color' , val);
});
$( ".cesize"+ide).change(function() {
 var val = $(this).val();
  $('#'+e+' .prev'+ide+' div').css('font-size' , val+'px');
});
	$('.bold_c'+ide).click(function() {
		$('#bold').toggleClass('bold');
 if($('.bold_c'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide+' label').css('font-weight' ,'bold');
			}
		else{
			$('#'+e+' .prev'+ide+' label').css('font-weight' ,'normal');
		}
});
		$('.italic_c'+ide).click(function() {
			$('#italic').toggleClass('bold');
 if($('.italic_c'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide+' label').css('font-style' ,'italic');
			}
			else{
			$('#'+e+' .prev'+ide+' label').css('font-style' ,'normal');	
			}
});
	$('.underline_c'+ide).click(function() {
		$('#underline').toggleClass('bold');
 if($('.underline_c'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide+' label').css('text-decoration' ,'underline');
			}
			else{
			$('#'+e+' .prev'+ide+' label').css('text-decoration' ,'normal');	
			}
});	
			$('.alf_c'+ide).click(function() {
				$('#align_left').addClass('bold');
 if($('.alf_c'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide+' div').css('text-align' ,'left');
	 $('.alr_c'+ide).removeClass('bold');
	 $('.alj_c'+ide).removeClass('bold');
			}
			
});
			$('.alr_c'+ide).click(function() {
				$('#align_right').addClass('bold');
 if($('.alr_c'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide+' div').css('text-align' ,'right');
	 	 $('.alf_c'+ide).removeClass('bold');
	 $('.alj_c'+ide).removeClass('bold');
			}
			
});
			$('.alj_c'+ide).click(function() {
				$('#align_just').addClass('bold');
 if($('.alj_c'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide+' div').css('text-align' ,'center');
	 	 $('.alr_c'+ide).removeClass('bold');
	 $('.alf_c'+ide).removeClass('bold');
			}
		
	});
	$(".fa-pencil").hide();
			$(".fa-trash").hide();
			$("#l"+ide).removeClass('che');
				$("#po"+ide).hover(
            function(){
			
               $("#"+$(this).attr('id')+" .fa-pencil").toggle();
				$("#"+$(this).attr('id')+" .fa-trash").toggle();
				
			
			}
				
        );		
	
	}
	if(e == "radio"+ide){
		$('#exampleInputcomment').unbind('keyup');
		$("#exampleInputhint").unbind('keyup');
		$("#exampleInputback").unbind( "change");
		$("#exampleInputlass").unbind( "change");
		$("#size").unbind('change');
		$("#bold").unbind('click');
		$("#italic").unbind('click');
		$("#underline").unbind('click');
		$("#align_left").unbind('click');
		$("#align_just").unbind('click');
		$("#align_right").unbind('click');
		$("#exampleInputll").addClass('hide');
		$("#exampleInputhint").addClass('hide');
	$('#'+e).text('');
    $('#'+e).append('<label id="tt"></label>')
		$("#exampleInputll").addClass('hide');
		$("#exampleInputhint").addClass('hide');
		$(".fa-cog").hide();
					$("#ral"+ide).hover(
            function(){
			
                $("#"+$(this).attr('id')+" .fa-cog").toggle();
				
            }
        );	
	$("#exampleInputcomment").val('');
	$("#preview .lab span").text('');
	$("#exampleInputback").val('#FFFFFF');
	$("#size").addClass("resize"+ide);
	$("#exampleInputcomment").addClass('radio'+ide);
	$("#exampleInputback").addClass("reback"+ide);
	$("#exampleInputlass").addClass("re"+ide);
	$("#bold").addClass("bold_r"+ide);
	$("#italic").addClass("italic_r"+ide);
	$("#underline").addClass("underline_r"+ide);
	$("#align_left").addClass("alf_r"+ide);
	$("#align_right").addClass("alr_r"+ide);
	$("#align_just").addClass("alj_r"+ide);
	$("#"+e+" #tt").addClass('prev'+ide);
	$("#align_left").removeClass('bold');
	$("#align_just").removeClass('bold');
	$("#align_right").removeClass('bold');
	$('#'+e+' .prev'+ide).html('<div  id="ra'+ide+'"><label class="bb  " disply:block"></label><i class="fa fa-pencil fa-1x l che pull-right" aria-hidden="true" onclick="text(radio'+ide+','+ide+');"></i><i onclick="delr(this ,'+ide+');"class="fa fa-trash fa-1x l che pull-right " aria-hidden="true"></i><div id="ray'+ide+'"><input type="radio" class=" che " readonly>Yes</div><div id="ran'+ide+'"><input type="radio" class=" che " readonly>No</div></div>');
	$(".radio"+ide).keyup(function() {
			var val = $(this).val();
  $('#'+e+' .prev'+ide+' label').text(val)
	var ba = $(".reback"+ide).val();
});
	
	$( ".reback"+ide).change(function() {
 var val = $(this).val();
$('#'+e+' .prev'+ide).css('background' , val);

});
$( ".re"+ide).change(function() {
 var val = $(this).val();
  $('#'+e+' .prev'+ide).css('color' , val);
});
$( ".resize"+ide).change(function() {
 var val = $(this).val();
  $('#'+e+' .prev'+ide).css('font-size' , val+'px');
});
	$('.bold_r'+ide).click(function() {
		$('#bold').toggleClass('bold');
 if($('.bold_r'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide).css('font-weight' ,'bold');
	 $('#'+e+' .prev'+ide+' label').css('font-weight' ,'bold');
			}
		else{
			$('#'+e+' .prev'+ide).css('font-weight' ,'normal');
			$('#'+e+' .prev'+ide+' label').css('font-weight' ,'normal');
		}
});
		$('.italic_r'+ide).click(function() {
			$('#italic').toggleClass('bold');
 if($('.italic_r'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide).css('font-style' ,'italic');
	 $('#'+e+' .prev'+ide+' label').css('font-style' ,'italic');
			}
			else{
			$('#'+e+' .prev'+ide).css('font-style' ,'normal');	
				$('#'+e+' .prev'+ide+' label').css('font-style' ,'normal');
			}
});
	$('.underline_r'+ide).click(function() {
		$('#underline').toggleClass('bold');
 if($('.underline_r'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide).css('text-decoration' ,'underline');
	 $('#'+e+' .prev'+ide+' label').css('text-decoration' ,'underline');
			}
			else{
			$('#'+e+' .prev'+ide).css('text-decoration' ,'normal');	
				$('#'+e+' .prev'+ide+' label').css('text-decoration' ,'normal');
			}
});	
			$('.alf_r'+ide).click(function() {
				$('#align_left').addClass('bold');
 if($('.alf_r'+ide).hasClass('bold')){
		$('.prev'+ide+' div').css('text-align' ,'left');
	 $('.alr_c'+ide).removeClass('bold');
	 $('.alj_c'+ide).removeClass('bold');
			}
			
});
			$('.alr_r'+ide).click(function() {
				$('#align_right').addClass('bold');
 if($('.alr_r'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide).css('text-align' ,'right');
	 	 $('.alf_r'+ide).removeClass('bold');
	 $('.alj_r'+ide).removeClass('bold');
			}
			
});
			$('.alj_r'+ide).click(function() {
				$('#align_just').addClass('bold');
 if($('.alj_r'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide).css('text-align' ,'center');
	 	 $('.alr_r'+ide).removeClass('bold');
	 $('.alf_r'+ide).removeClass('bold');
			}
			
	});
	$(".fa-pencil").hide();
			$(".fa-trash").hide();
				$("#ra"+ide).hover(
            function(){
			
               $("#"+$(this).attr('id')+" .fa-pencil").toggle();
				$("#"+$(this).attr('id')+" .fa-trash").toggle();
			});	
	}
	if(e == "label"+ide){
		$("#exampleInputll").addClass('hide');
		$("#exampleInputhint").addClass('hide');
		$('#exampleInputcomment').unbind('keyup');
		$("#exampleInputhint").unbind('keyup');
		$("#exampleInputback").unbind( "change");
		$("#exampleInputlass").unbind( "change");
		$("#size").unbind('change');
		$("#bold").unbind('click');
		$("#italic").unbind('click');
		$("#underline").unbind('click');
		$("#align_left").unbind('click');
		$("#align_just").unbind('click');
		$("#align_right").unbind('click');
		$(".fa-cog").hide();
					$("#labb"+ide).hover(
            function(){
			
                $("#"+$(this).attr('id')+" .fa-cog").toggle();
				
            }
        );	
		$('#'+e).text('');
    $('#'+e).append('<label id="tt"></label>')
	$("#exampleInputcomment").val('');
	$("#preview .lab span").text('');
	$("#exampleInputback").val('#FFFFFF');
	$("#size").addClass("lesize"+ide);
	$("#exampleInputcomment").addClass('label'+ide);
	$("#exampleInputback").addClass("leback"+ide);
	$("#exampleInputlass").addClass("le"+ide);
	$("#bold").addClass("bold_l"+ide);
	$("#italic").addClass("italic_l"+ide);
	$("#underline").addClass("underline_l"+ide);
	$("#align_left").addClass("alf_l"+ide);
	$("#align_right").addClass("alr_l"+ide);
	$("#align_just").addClass("alj_l"+ide);
	$("#"+e+" #tt").addClass('prev'+ide);
	$("#align_left").removeClass('bold');
	$("#align_just").removeClass('bold');
	$("#align_right").removeClass('bold');
	$('#'+e+' .prev'+ide).html('<div class="hover bhh che" id="p'+ide+'"><label class="lav bb"><span></span><i class="fa fa-pencil fa-1x co che pull-right" aria-hidden="true" onclick="text(label'+ide+' ,'+ide+');"></i><i onclick="delee(this ,'+ide+');"class="fa fa-trash fa-1x pull-right che co " aria-hidden="true"></i></label></div>');
	$(".label"+ide).keyup(function() {
			var val = $(this).val();
  $('#'+e+' .prev'+ide+' span').text(val)
});
	
	$( ".leback"+ide).change(function() {
 var val = $(this).val();
$('#'+e+' .prev'+ide+' div').css('background' , val);

});
$( ".le"+ide).change(function() {
 var val = $(this).val();
  $('#'+e+' .prev'+ide+' div').css('color' , val);
});
$( ".lesize"+ide).change(function() {
 var val = $(this).val();
  $('#'+e+' .prev'+ide+' div').css('font-size' , val+'px');
});
	$('.bold_l'+ide).click(function() {
		$('#bold').toggleClass('bold');
 if($('.bold_l'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide+' label').css('font-weight' ,'bold');
			}
		else{
			$('#'+e+' .prev'+ide+' label').css('font-weight' ,'normal');
		}
});
		$('.italic_l'+ide).click(function() {
			$('#italic').toggleClass('bold');
 if($('.italic_l'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide+' label').css('font-style' ,'italic');
			}
			else{
			$('#'+e+' .prev'+ide+' label').css('font-style' ,'normal');	
			}
});
	$('.underline_l'+ide).click(function() {
		$('#underline').toggleClass('bold');
 if($('.underline_l'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide+' label').css('text-decoration' ,'underline');
			}
			else{
			$('#'+e+' .prev'+ide+' label').css('text-decoration' ,'normal');	
			}
});	
			$('.alf_l'+ide).click(function() {
				$('#align_left').addClass('bold');	
 if($('.alf_l'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide+' div').css('text-align' ,'left');
	 $('.alr_l'+ide).removeClass('bold');
	 $('.alj_l'+ide).removeClass('bold');
			}
		
});
			$('.alr_l'+ide).click(function() {
				$('#align_right').addClass('bold');	
 if($('.alr_l'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide+' div').css('text-align' ,'right');
	 	 $('.alf_l'+ide).removeClass('bold');
	 $('.alj_l'+ide).removeClass('bold');
			}
			
});
			$('.alj_l'+ide).click(function() {
				$('#align_just').addClass('bold');	
 if($('.alj_l'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide+' div').css('text-align' ,'center');
	 	 $('.alr_l'+ide).removeClass('bold');
	 $('.alf_l'+ide).removeClass('bold');
			}
			
	});
	
	$(" .fa-pencil").hide();
			$(" .fa-trash").hide();
				
			
				$("#p"+il).hover(
            function(){
			
               $("#"+$(this).attr('id')+" .fa-pencil").toggle();
				$("#"+$(this).attr('id')+" .fa-trash").toggle();
				
			
			}
				
        );	
	
	}
	else if(e == "text"+ide){
		
		$('#exampleInputcomment').unbind('keyup');
		$("#exampleInputhint").unbind('keyup');
		$("#exampleInputback").unbind( "change");
		$("#size").unbind('change');
		$("#bold").unbind('click');
		$("#italic").unbind('click');
		$("#underline").unbind('click');
		$("#align_left").unbind('click');
		$("#align_just").unbind('click');
		$("#align_right").unbind('click');
		
		$(".fa-cog").hide();
					$("#t"+ide).hover(
            function(){
			
                $("#"+$(this).attr('id')+" .fa-cog").toggle();
				
            }
        );	
	$('#'+e).text('');
    $('#'+e).append('<label id="tt"></label>')
	$("#exampleInputll").addClass('hide');
    $("#exampleInputhint").removeClass('hide');
	$("#exampleInputback").val('#FFFFFF');
	$("#size").addClass("tesize"+ide);
	$("#exampleInputcomment").addClass('text'+ide);
    $("#exampleInputhint").addClass("tehint"+ide);
	$("#exampleInputback").addClass("teback"+ide);
	$("#exampleInputlass").addClass("te"+ide);
	$("#bold").addClass("bold"+ide);
	$("#italic").addClass("italic"+ide);
	$("#underline").addClass("underline"+ide);
	$("#align_left").addClass("alf"+ide);
	$("#align_right").addClass("alr"+ide);
	$("#align_just").addClass("alj"+ide);
	$("#"+e+" #tt").addClass('prev'+ide);
	$('#'+e+' .prev'+ide).html('<div class="hide" id="lat'+ide+'"><label class="bb che " disply:block"></label><i id="id_ed'+ide+'"class="fa fa-pencil fa-1x l che pull-right" aria-hidden="true" onclick="text(text'+ide+','+ide+');"></i><i onclick="deli(this ,'+ide+');"class="fa fa-trash fa-1x l che pull-right " aria-hidden="true"></i></div><div id="lai'+ide+'"><input id="t" class="form-control che " readonly><i id="id_ed'+ide+'"class="fa fa-pencil fa-1x i che pull-right" aria-hidden="true" onclick="text(text'+ide+','+ide+');"></i><i onclick="deli(this ,'+ide+');"class="fa fa-trash fa-1x i che pull-right " aria-hidden="true"></i></div>');
	$("."+e).keyup(function() {
		
			var val = $(this).val();
  $('#'+e+' .prev'+ide+' label').text(val)
	if(val.length !=0){
		$('#lat'+ide).removeClass('hide');
		$('#lai'+ide+' .fa-trash').removeClass('y');
		$('#lai'+ide+' .fa-trash').addClass('i');
		$('#lai'+ide+' .fa-pencil').removeClass('y');
		$('#lai'+ide+' .fa-pencil').addClass('i');
	}
		else{
			$('#lat'+ide).addClass('hide');
			$('#lai'+ide+' .fa-trash').addClass('y');
		$('#lai'+ide+' .fa-trash').removeClass('i');
		$('#lai'+ide+' .fa-pencil').addClass('y');
		$('#lai'+ide+' .fa-pencil').removeClass('i');
		}
});
		
	$(".tehint"+ide).keyup(function() {
			var val = $(this).val();
 var ba = $(".teback"+ide).val();
  $('#'+e+' .prev'+ide+' input').css('background' , ba);
  $('#'+e+' .prev'+ide+' input').attr('placeholder' , val);
});
	$( ".teback"+ide).change(function() {
 var val = $(this).val();
$('#'+e+' .prev'+ide+' input').css('background' , val);

});
$( ".te"+ide).change(function() {
 var val = $(this).val();
  $('#'+e+' .prev'+ide+' input').css('color' , val);
});
$( ".tesize"+ide).change(function() {
 var val = $(this).val();
  $('.prev'+ide+' input').css('font-size' , val+'px');
});
	$('.bold'+ide).click(function() {
		$('#bold').toggleClass('bold');
 if($('.bold'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide+' input').css('font-weight' ,'bold');
			}	
		else{
			$('#'+e+' .prev'+ide+' input').css('font-weight' ,'normal');
		}
});
		$('.italic'+ide).click(function() {
			$('#italic').toggleClass('bold');
 if($('.italic'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide+' input').css('font-style' ,'italic');
			}
			else{
			$('#'+e+' .prev'+ide+' input').css('font-style' ,'normal');	
			}
});
	$('.underline'+ide).click(function() {
		$('#underline').toggleClass('bold');
 if($('.underline'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide+' input').css('text-decoration' ,'underline');
			}
			else{
			$('#'+e+' .prev'+ide+' input').css('text-decoration' ,'normal');	
			}
});	
			$('.alf'+ide).click(function() {
				$('#align_left').addClass('bold');	
 if($('.alf'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide+' input').css('text-align' ,'left');
	 $('.alr'+ide).removeClass('bold');
	 $('.alj'+ide).removeClass('bold');
			}
			
});
			$('.alr'+ide).click(function() {
			$('#align_right').addClass('bold');	
 if($('.alr'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide+' input').css('text-align' ,'right');
	 	 $('.alf'+ide).removeClass('bold');
	 $('.alj'+ide).removeClass('bold');
			}
			
});
			$('.alj'+ide).click(function() {
				$('#align_just').addClass('bold');
 if($('.alj'+ide).hasClass('bold')){
		$('#'+e+' .prev'+ide+' input').css('text-align' ,'center');
	 	 $('.alr'+ide).removeClass('bold');
	 $('.alf'+ide).removeClass('bold');
			}
			
});
			$(".fa-pencil").hide();
		$(".fa-trash").hide();
				$("#lat"+ide).hover(
            function(){
			
               $("#"+$(this).attr('id')+" .fa-pencil").toggle();
				$("#"+$(this).attr('id')+" .fa-trash").toggle();
				//$(this).css('border' , 'solid 1px rgb(100, 120, 200)')
			});
					$("#lai"+ide).hover(
            function(){
			
               $("#"+$(this).attr('id')+" .fa-pencil").toggle();
				$("#"+$(this).attr('id')+" .fa-trash").toggle();
				
			});
	}
	else if(e == "select"+ide){
var selt=0;
		select[ide]=[];
		$('#exampleInputcomment').unbind('keyup');
		$("#exampleInputhint").unbind('keyup');
		$("#exampleInputll").unbind('keyup');
		$("#exampleInputback").unbind( "change");
		$("#exampleInputlass").unbind( "change");
		$("#size").unbind('change');
		$("#bold").unbind('click');
		$("#italic").unbind('click');
		$("#underline").unbind('click');
		$("#align_left").unbind('click');
		$("#align_just").unbind('click');
		$("#align_right").unbind('click');

		$('#'+e).text('');
    $('#'+e).append('<label id="tt"></label>')
		$("#exampleInputhint").val(" ");
		$("#exampleInputll").val(" ");
		$("#exampleInputlass").val(" ");
		$("#exampleInputll").removeClass('hide');
		$("#exampleInputhint").removeClass('hide');
		$("#exampleInputback").val('#FFFFFF');
		$("#exampleInputhint").attr('placeholder','choose');
		$("#exampleInputlass").addClass("se"+ide);
	    $("#exampleInputback").addClass("seback"+ide);
	$("#size").addClass("size_s"+ide);
	 $("#exampleInputhint").addClass("sehint"+ide);
	$("#exampleInputcomment").addClass('select'+ide);
	$("#exampleInputll").addClass("sell"+ide);
	$("#bold").addClass("bold_s"+ide);
	$("#italic").addClass("italic_s"+ide);
	$("#underline").addClass("underline_s"+ide);
	$("#align_left").addClass("alf_s"+ide);
	$("#align_right").addClass("alr_s"+ide);
	$("#align_just").addClass("alj_s"+ide);
	$("#"+e+" #tt").addClass('prev_s'+ide);
	$("#align_left").removeClass('bold');
	$("#align_just").removeClass('bold');
	$("#align_right").removeClass('bold');
		$(".fa-cog").hide();
					$("#se"+ide).hover(
            function(){
			
                $("#"+$(this).attr('id')+" .fa-cog").toggle();
				
            }
        );	
		$('#'+e+' .prev_s'+ide).html('<div class="che bb" id="sel'+ide+'"></div><div class="che" id="sey'+ide+'"><input id="seo'+ide+'" class="form-control" type="text" data-toggle="dropdown"><i class="fa fa-pencil che pull-right pre fa-1x" aria-hidden="true" onclick="text(select'+ide+','+ide+');"></i><i onclick="deli(this ,'+ide+');"class="fa fa-trash pre fa-1x che pull-right  " aria-hidden="true"></i><ul class="dropdown-menu" role="menu" aria-labelledby="menu1"></ul></div>');
		$(".select"+ide).keyup(function() {
					var val = $(this).val();
  $('#'+e+' .prev_s'+ide+' #sel'+ide).text(val);
   $('#'+e+' .prev_s'+ide+' #sel'+ide).append('<i class="fa fa-pencil che l pull-right fa-1x" aria-hidden="true" onclick="text(section'+ide+','+ide+');" style="display:none"></i><i onclick="deli(this ,'+ide+');"class="fa fa-trash l fa-1x che pull-right  " aria-hidden="true"style="display:none">')
	
	var ba = $(".seback"+ide).val();
		$('#'+e+' .prev_s'+ide+' #sel'+ide).css('background' , ba);
		

});
$(".fa-pencil").hide();
			$(".fa-trash").hide();
			$(".sehint"+ide).keyup(function() {
			var val= $(this).val();

         $('#'+e+' .prev_s'+ide+' input').attr('placeholder' ,val);
});	
		$(".sell"+ide).keyup(function(ee) {
			var val= $(this).val();
			var sf = val.split("\n");
  if(ee.which == 13) {
         select[ide][selt]= sf[v];
	  $('#'+e+' .prev_s'+ide+' #sey'+ide+' .dropdown-menu').append('<li role="presentation" id="dro'+v+'"><input role="menuitem" tabindex="-1" type="checkbox">'+sf[v]+'</li>');
	  selt++;
	  v++;
    }
			
	for( var l =0 ; l<=sf.length; l++){
				$('#'+e+' .prev_s'+ide+' #sey'+ide+" #dro"+l).html('<input role="menuitem" tabindex="-1" type="checkbox">'+sf[l]);
			}		
});
	v=0;	
$("#seo"+ide).keyup(function(ee) {
	$('#'+e+' .prev_s'+ide+' #sey'+ide+' .dropdown-menu').html('');
			var val= $(this).val();
        for(var g=0 ; g<=select[ide].length ; g++){
			if(select[ide][g].match(val)){
				var matv = select[ide][g];
	$('#'+e+' .prev_s'+ide+' #sey'+ide+' .dropdown-menu').append('<li role="presentation"><input role="menuitem" tabindex="-1" type="checkbox">'+matv+'</li>');
			}}
});		

		console.log(select);
		$( ".seback"+ide).change(function() {
 var val = $(this).val();
  $('#'+e+' .prev_s'+ide+' #sey'+ide).css('background' , val);
$('#'+e+' .prev_s'+ide+' input').css('background' , val);
$('#'+e+' .prev_s'+ide+' .dropdown-menu').css('background' , val);
});
	
		$( ".se"+ide).change(function() {

 var val = $(this).val();
  $('#'+e+' .prev_s'+ide+' #sey'+ide).css('color' , val);
			$('#'+e+' .prev_s'+ide+' #sey'+ide+' input:-ms-input-placeholder').css('color' , val);
});
$( ".size_s"+ide).change(function() {
 var val = $(this).val();
  $('#'+e+' .prev_s'+ide+' #sey'+ide).css('font-size' , val+'px');
$('#'+e+' .prev_s'+ide+' input').css('font-size' , val+'px');
$('#'+e+' .prev_s'+ide+' .dropdown-menu').css('font-size' , val+'px');
});
	$('.bold_s'+ide).click(function() {
		$('#bold').toggleClass('bold');
 if($('.bold_s'+ide).hasClass('bold')){
		$('#'+e+' .prev_s'+ide+' #sey'+ide).css('font-weight' ,'bold');
			}
		else{
			$('#'+e+' .prev_s'+ide+' #sey'+ide).css('font-weight' ,'normal');
		}
});
		$('.italic_s'+ide).click(function() {
			$('#italic').toggleClass('bold');
 if($('.italic_s'+ide).hasClass('bold')){
		$('#'+e+' .prev_s'+ide+' #sey'+ide+' input').css('font-style' ,'italic');
			}
			else{
			$('#'+e+' .prev_s'+ide+' #sey'+ide+' input').css('font-style' ,'normal');	
			}
});
	$('.underline_s'+ide).click(function() {
		$('#underline').toggleClass('bold');
 if($('.underline_s'+ide).hasClass('bold')){
	 $('#'+e+' .prev_s'+ide+' .dropdown-menu').css('text-decoration' ,'underline');
	 $('#'+e+' .prev_s'+ide+' #sey'+ide+' input[placeholder]').css('text-decoration' ,'underline');
	
			}
			else{
			$('#'+e+' .prev_s'+ide+' .dropdown-menu').css('text-decoration' ,'normal');	
			$('#'+e+' .prev_s'+ide+' #sey'+ide+' input[placeholder]').css('text-decoration' ,'normal');	
			}
});	
			$('.alf_s'+ide).click(function() {
				$('#align_left').addClass('bold');
 if($('.alf_s'+ide).hasClass('bold')){
		$('.prev_s'+ide+' #sey'+ide).css('text-align' ,'left');
	$('#'+e+' .prev_s'+ide+' #sey'+ide+' input').css('text-align' ,'left');
	 $('#'+e+' .prev_s'+ide+' .dropdown-menu').css('text-align' ,'left');
	 $('.alr_s'+ide).removeClass('bold');
	 $('.alj_s'+ide).removeClass('bold');
			}
			
});
			$('.alr_s'+ide).click(function() {
				$('#align_right').addClass('bold');
 if($('.alr_s'+ide).hasClass('bold')){
		$('#'+e+' .prev_s'+ide+' #sey'+ide).css('text-align' ,'right');
	 $('#'+e+' .prev_s'+ide+' #sey'+ide+' input').css('text-align' ,'right');
	 $('#'+e+' .prev_s'+ide+' .dropdown-menu').css('text-align' ,'right');
	 	 $('.alf_s'+ide).removeClass('bold');
	 $('.alj_s'+ide).removeClass('bold');
			}
			
});
			$('.alj_s'+ide).click(function() {
				$('#align_just').addClass('bold');
 if($('.alj_s'+ide).hasClass('bold')){
		$('#'+e+' .prev_s'+ide+' #sey'+ide).css('text-align' ,'center');
	 $('#'+e+' .prev_s'+ide+' #sey'+ide+' input').css('text-align' ,'center');
	 $('#'+e+' .prev_s'+ide+' .dropdown-menu').css('text-align' ,'center');
	 	 $('.alr_s'+ide).removeClass('bold');
	 $('.alf_s'+ide).removeClass('bold');
			}
			
});
		
		$("#sey"+ide).hover(
            function(){
			
               $("#"+$(this).attr('id')+" .fa-pencil").toggle();
				$("#"+$(this).attr('id')+" .fa-trash").toggle();
				
			
			}
				
        );	
					$("#sel"+ide).hover(
            function(){
			 
               $("#"+$(this).attr('id')+" .fa-pencil").toggle();
				$("#"+$(this).attr('id')+" .fa-trash").toggle();
			});
		
	}
	else if(e == "section"+ide){
		var sect=0;
		section[ide]=[];
		$('#exampleInputcomment').unbind('keyup');
		$("#exampleInputhint").unbind('keyup');
		$("#exampleInputll").unbind('keyup');
		$("#exampleInputback").unbind( "change");
		$("#exampleInputlass").unbind( "change");
		$("#size").unbind('change');
		$("#bold").unbind('click');
		$("#italic").unbind('click');
		$("#underline").unbind('click');
		$("#align_left").unbind('click');
		$("#align_just").unbind('click');
		$("#align_right").unbind('click');

		$('#'+e).text('');
    $('#'+e).append('<label id="tt"></label>')
		$("#exampleInputhint").val(" ");
		$("#exampleInputll").val(" ");
		$("#exampleInputlass").val(" ");
		$("#exampleInputll").removeClass('hide');
		$("#exampleInputhint").removeClass('hide');
		$("#exampleInputhint").attr('placeholder','choose');
		$("#exampleInputlass").addClass("sc"+ide);
	    $("#exampleInputback").addClass("scback"+ide);
		$("#exampleInputback").val('#FFFFFF');
	$("#size").addClass("size_se"+ide);
	 $("#exampleInputhint").addClass("selhint"+ide);
	$("#exampleInputcomment").addClass('section'+ide);
	$("#exampleInputll").addClass("selle"+ide);
	$("#bold").addClass("bold_sc"+ide);
	$("#italic").addClass("italic_sc"+ide);
	$("#underline").addClass("underline_sc"+ide);
	$("#align_left").addClass("alf_sc"+ide);
	$("#align_right").addClass("alr_sc"+ide);
	$("#align_just").addClass("alj_sc"+ide);
	$("#"+e+" #tt").addClass('prev_sc'+ide);
	$("#align_left").removeClass('bold');
	$("#align_just").removeClass('bold');
	$("#align_right").removeClass('bold');
		$(".fa-cog").hide();
					$("#sec"+ide).hover(
            function(){
			
                $("#"+$(this).attr('id')+" .fa-cog").toggle();
				
            }
        );	
		$('#'+e+' .prev_sc'+ide).html('<div class="che bb" id="sep'+ide+'"></div><div class="che" id="sed'+ide+'"><input ondragstart="return false;" ondrop="return false;" id="sei'+ide+'" class="form-control" type="text" data-toggle="dropdown"><i class="fa fa-pencil che pull-right pre fa-1x" aria-hidden="true" onclick="text(section'+ide+','+ide+');"></i><i onclick="deli(this ,'+ide+');"class="fa fa-trash pre fa-1x che pull-right  " aria-hidden="true"></i><ul class="dropdown-menu" role="menu" aria-labelledby="menu1"></ul></div>');
		$("#sei").addClass("si_se"+ide);
		$(".section"+ide).keyup(function() {
					var val = $(this).val();
  $('#'+e+' .prev_sc'+ide+' #sep'+ide).text(val);
   $('#'+e+' .prev_sc'+ide+' #sep'+ide).append('<i class="fa fa-pencil che l pull-right fa-1x" aria-hidden="true" onclick="text(section'+ide+','+ide+');"style="display:none"></i><i onclick="deli(this ,'+ide+');"class="fa fa-trash l fa-1x che pull-right  " aria-hidden="true"style="display:none">')
	
	var ba = $(".scback"+ide).val();
		$('#'+e+' .prev_sc'+ide+' #sed'+ide).css('background' , ba);
		

});

			$(".selhint"+ide).keyup(function() {
			var val= $(this).val();

         $('#'+e+' .prev_sc'+ide+' input').attr('placeholder' ,val);
});	
		$(".selle"+ide).keyup(function(ee) {
			var val= $(this).val();
			var sf = val.split("\n");
  if(ee.which == 13) {
         section[ide][sect]= sf[s];
	  $('#'+e+' .prev_sc'+ide+' #sed'+ide+' .dropdown-menu').append('<li role="presentation" id="drope'+s+'"><input role="menuitem" tabindex="-1" type="radio">'+sf[s]+'</li>');
	  sect++;
	  s++;
    }
			
	for( var l =0 ; l<=sf.length; l++){
				$('#'+e+' .prev_sc'+ide+' #sed'+ide+" #drope"+l).html('<input role="menuitem" tabindex="-1" type="radio">'+sf[l]);
			}		
});
	s=0;	
$("#sei"+ide).keyup(function(ee) {
	$('#'+e+' .prev_sc'+ide+' #sed'+ide+' .dropdown-menu').html('');
			var val= $(this).val();
        for(var g=0 ; g<=section[ide].length ; g++){
			if(section[ide][g].match(val)){
				var matv = section[ide][g];
	$('#'+e+' .prev_sc'+ide+' #sed'+ide+' .dropdown-menu').append('<li role="presentation"><input role="menuitem" tabindex="-1" type="radio">'+matv+'</li>');
			}}
});		

		console.log(section);
		$( ".scback"+ide).change(function() {
 var val = $(this).val();
  $('#'+e+' .prev_sc'+ide+' #sed'+ide).css('background' , val);
$('#'+e+' .prev_sc'+ide+' input').css('background' , val);
$('#'+e+' .prev_sc'+ide+' .dropdown-menu').css('background' , val);
});
	
		$( ".sc"+ide).change(function() {

 var val = $(this).val();
  $('#'+e+' .prev_sc'+ide+' #sed'+ide).css('color' , val);
});
$( ".size_se"+ide).change(function() {
 var val = $(this).val();
  $('#'+e+' .prev_sc'+ide+' #sed'+ide).css('font-size' , val+'px');
	$('#'+e+' .prev_sc'+ide+' input').css('font-size' , val+'px');
$('#'+e+' .prev_sc'+ide+' .dropdown-menu').css('font-size' , val+'px');
});
	$('.bold_sc'+ide).click(function() {
		$('#bold').toggleClass('bold');
 if($('.bold_sc'+ide).hasClass('bold')){
		$('#'+e+' .prev_sc'+ide+' #sed'+ide).css('font-weight' ,'bold');
			}
		else{
			$('#'+e+' .prev_sc'+ide+' #sed'+ide).css('font-weight' ,'normal');
		}
});
		$('.italic_sc'+ide).click(function() {
			$('#italic').toggleClass('bold');
 if($('.italic_sc'+ide).hasClass('bold')){
		$('#'+e+' .prev_sc'+ide+' #sed'+ide).css('font-style' ,'italic');
			}
			else{
			$('#'+e+' .prev_sc'+ide+' #sed'+ide).css('font-style' ,'normal');	
			}
});
	$('.underline_sc'+ide).click(function() {
		$('#underline').toggleClass('bold');
 if($('.underline_sc'+ide).hasClass('bold')){
		$('#'+e+' .prev_sc'+ide+' #sed'+ide).css('text-decoration' ,'underline');
			}
			else{
			$('#'+e+' .prev_sc'+ide+' #sed'+ide).css('text-decoration' ,'normal');	
			}
});	
			$('.alf_sc'+ide).click(function() {
				$('#align_left').addClass('bold');
 if($('.alf_sc'+ide).hasClass('bold')){
		$('.prev_sc'+ide+' #sed'+ide).css('text-align' ,'left');
	 $('#'+e+' .prev_sc'+ide+' #sed'+ide+' input').css('text-align' ,'left');
	 $('#'+e+' .prev_sc'+ide+' .dropdown-menu').css('text-align' ,'left');
	 $('.alr_sc'+ide).removeClass('bold');
	 $('.alj_sc'+ide).removeClass('bold');
			}
			
});
			$('.alr_sc'+ide).click(function() {
				$('#align_right').addClass('bold');
 if($('.alr_sc'+ide).hasClass('bold')){
		$('#'+e+' .prev_sc'+ide+' #sed'+ide).css('text-align' ,'right');
	  $('#'+e+' .prev_sc'+ide+' #sed'+ide+' input').css('text-align' ,'right');
	 $('#'+e+' .prev_sc'+ide+' .dropdown-menu').css('text-align' ,'right');
	 	 $('.alf_sc'+ide).removeClass('bold');
	 $('.alj_sc'+ide).removeClass('bold');
			}
			
});
			$('.alj_sc'+ide).click(function() {
				$('#align_just').addClass('bold');
 if($('.alj_sc'+ide).hasClass('bold')){
	  $('#'+e+' .prev_sc'+ide+' #sed'+ide+' input').css('text-align' ,'center');
		$('#'+e+' .prev_sc'+ide+' #sed'+ide).css('text-align' ,'center');
	 $('#'+e+' .prev_sc'+ide+' .dropdown-menu').css('text-align' ,'center');
	 	 $('.alr_sc'+ide).removeClass('bold');
	 $('.alf_sc'+ide).removeClass('bold');
			}
			
});
			$("#sec"+ide).removeClass('che');
		$(".fa-pencil").hide();
			$(".fa-trash").hide();
			
				$("#"+e+" #sed"+ide).hover(
            function(){
			
               $("#"+$(this).attr('id')+" .fa-pencil").toggle();
				$("#"+$(this).attr('id')+" .fa-trash").toggle();
				
			
			}
				
        );	
					$("#sep"+ide).hover(
            function(){
			 
               $("#"+$(this).attr('id')+" .fa-pencil").toggle();
				$("#"+$(this).attr('id')+" .fa-trash").toggle();
			});
			
	}
	else if(e == "group"+ide){
	$('#text_check').unbind('keyup');
		$("#color_check").unbind( "change");
		$("#background").unbind( "change");
		$("#size_c").unbind('change');
		$("#bold_c").unbind('click');
		$("#italic_c").unbind('click');
		$("#underline_c").unbind('click');
		$("#align_left_c").unbind('click');
		$("#align_just_c").unbind('click');
		$("#align_right_c").unbind('click');
if($("#gec"+ide+"  .f").css('display')=='block'){
$("#gec"+ide+"  .f").css('display' , 'none');
}
		else{
			$("#gec"+ide+"  .f").css('display' , 'block')
		}
					$("#gec"+ide).hover(
            function(){
			
                $("#"+$(this).attr('id')+" .f").toggle();
				
            }
        );	
		$("#text_check").addClass('lae'+ide);
		$("#grc"+ide).removeClass('che');
    $("#background").val('#FFFFFF');
	$("#"+e+" #l_t").addClass('prev_l'+ide);
	$("#background").addClass('ba'+ide);
	$("#color_check").addClass('ca'+ide);
	$("#size_c").addClass('sa'+ide);
	$("#italic_c").addClass('ia'+ide);
		$("#bold_c").addClass('ba'+ide);
		$("#underline_c").addClass('ua'+ide);
		$("#align_left_c").addClass('ala'+ide);
		$("#align_just_c").addClass('aja'+ide);
		$("#align_right_c").addClass('ara'+ide);
		$('#'+e).html('<div id="div'+ide+'" class="che pp hei hide"></div><div ondrop="drop(event)" ondragover="allowDrop(event)" id="darggable'+ide+'" class="che pp sortable darggable "></div>');
					
		$("#darggable"+ide).sortable();
	$('.lae'+ide).keyup(function() {
			var val = $(this).val();
		if(val.length!=0){
  $('#'+e+' #div'+ide).text(val);
			$('#group'+ide+' #div'+ide).append('<i onclick="text(group'+ide+' ,'+ide+');"class="fa fa-pencil ppp  fa-1x che pull-right  " aria-hidden="true"></i><i onclick="delsection(this ,'+ide+');"class="fa fa-trash ppp  fa-1x che pull-right  " aria-hidden="true"></i>');
		$('#div'+ide).removeClass('hide');	
			}
		else{
			$('#div'+ide).addClass('hide');	
		}
});
		
			
$( ".ba"+ide).change(function() {
 var val = $(this).val();
  $('#group'+ide+' #div'+ide).css('background' , val);
});
	
		$( ".ca"+ide).change(function() {

 var val = $(this).val();
  $('#group'+ide+' #div'+ide).css('color' , val);
});
$( ".sa"+ide).change(function() {
 var val = $(this).val();
  $('#group'+ide+' #div'+ide).css('font-size' , val+'px');
});
	$('.ba'+ide).click(function() {
		$('#bold_c').toggleClass('bold');
 if($('.ba'+ide).hasClass('bold')){
		$('#group'+ide+' #div'+ide).css('font-weight' ,'bold');
			}
		else{
			$('#group'+ide+' #div'+ide).css('font-weight' ,'normal');
		}
});
		$('.ia'+ide).click(function() {
			$('#italic_c').toggleClass('bold');
 if($('.ia'+ide).hasClass('bold')){
		$('#group'+ide+' #div'+ide).css('font-style' ,'italic');
			}
			else{
			$('#group'+ide+' #div'+ide).css('font-style' ,'normal');	
			}
});
	$('.ua'+ide).click(function() {
		$('#underline_c').toggleClass('bold');
 if($('.ua'+ide).hasClass('bold')){
		$('#group'+ide+' #div'+ide).css('text-decoration' ,'underline');
			}
			else{
			$('#group'+ide+' #div'+ide).css('text-decoration' ,'normal');	
			}
});	
			$('.ala'+ide).click(function() {
				$('#align_left_c').addClass('bold');
 if($('.ala'+ide).hasClass('bold')){
		$('#group'+ide+' #div'+ide).css('text-align' ,'left');
	 $('.ara'+ide).removeClass('bold');
	 $('.aja'+ide).removeClass('bold');
			}

});
			$('.ara'+ide).click(function() {
				$('#align_right_c').addClass('bold');
 if($('.ara'+ide).hasClass('bold')){
		$('#group'+ide+' #div'+ide).css('text-align' ,'right');
	 
	 	 $('.ala'+ide).removeClass('bold');
	 $('.aja'+ide).removeClass('bold');
			}
		
});
			$('.aja'+ide).click(function() {
				$('#align_just_c').addClass('bold');
 if($('.aja'+ide).hasClass('bold')){
		$('#group'+ide+' #div'+ide).css('text-align' ,'center');
	 	 $('.ara'+ide).removeClass('bold');
	 $('.ala'+ide).removeClass('bold');
			}
			
			});
			
}
	
}
	function vale(ides)	{
		var v= $('#preview_c .group_t'+ides).val();
		$('#preview_c .group_t'+ides).attr('value' , v);
	}
		function delet(thi)	{

		$('#confirm').modal();
		$('#deleteButton').html('<a class="btn btn-danger" onclick="deleteData('+thi+');">Delete</a>');
		$('#textButton').text($('.text .group_t'+thi).val());	
	}
		function delee(c ,thi)	{
			
var i = c.parentElement.parentElement.id;
			
		$('#confirm').modal();
		$('#deleteButton').html('<a class="btn btn-danger" onclick="deleteeData('+c.parentElement.parentElement.id+');">Delete</a>');
		$('#textButton').text($('#'+i+' label span').text());	
	}
		function deleteData(io)	{
		$('.text .group_t'+io).parent().html("");
		$('#confirm').modal('hide');
	}
		function deleteeData(io)	{
		$('#'+io.id).parent().parent().parent().html("");
		$('#confirm').modal('hide');
	}
		function dele(thi)	{
		$('#confirm').modal();
		$('#deleteButton').html('<a class="btn btn-danger" onclick="deletData('+thi+');">Delete</a>');
		$('#textButton').text($('.text #ho'+thi+' label').text());
	}
		
		function deletData(io)	{
		$('.text #ho'+io).html("");
		$('#confirm').modal('hide');
	}
		function deleti(t)	{
		$('#confirm').modal();
		$('#deleteButton').html('<a class="btn btn-danger" onclick="deletiData('+t+');">Delete</a>');
		$('#textButton').text($('.l'+t).text());
	}
		function delsection(x,t)	{
		$('#confirm').modal();
		
		$('#deleteButton').html('<a class="btn btn-danger" onclick="deletisec('+t+');">Delete</a>');
		$('#textButton').text('this '+x.id+' elements');
	}
			function delr(x,t)	{
		$('#confirm').modal();
		
		$('#deleteButton').html('<a class="btn btn-danger" onclick="deler('+t+');">Delete</a>');
		$('#textButton').text('this yes/no element');
	}
		function deli(x,t)	{
			var clas = x.parentElement.id ;
		$('#confirm').modal();
		$('#deleteButton').html('<a class="btn btn-danger" onclick="deliData('+clas+','+t+');">Delete</a>');
			if(clas== 'lat'+t){
		$('#textButton').text($('#lat'+t+' label').text());
			}
			else if(clas== 'oop'+t){
				$('#textButton').text($('#oop'+t).text());
			}
			else if(clas== 'sep'+t){
				$('#textButton').text($('#sep'+t).text());
			}
			else if(clas== 'sel'+t){
				$('#textButton').text($('#sel'+t).text());
			}
			else{
				$('#textButton').text($('#'+clas+' input').attr('placeholder'));
			}
	}
	
		function deliData(ik , io)	{
		$('#confirm').modal('hide');
			if(ik.id == null){
				$('#'+ik[0].id).remove();
		
				
			}
			else{
			$('#'+ik.id).remove();
			
			if(ik.id== 'sey'+io){
					$('#'+ik.id).parent().parent().remove();
				}	
				if(ik.id== 'sed'+io){
					$('#'+ik.id).parent().parent().remove();
				}
			if(ik.id== 'lat'+io){
				$('#text'+io+' .labt').remove();
		$('#lai'+io+' .fa-pencil').addClass('pp');
		$('#lai'+io+' .fa-trash').addClass('pp');
			}
			if(ik.id== 'sep'+io){
				$('#sed'+io+' .pre').addClass('pp');
		$('#sed'+io+' .pre').addClass('pp');
				$('#section'+io+' .label').remove();
			}
				if(ik.id== 'sel'+io){
				$('#sed'+io+' .pre').addClass('pp');
		$('#sey'+io+' .pre').addClass('pp');
				$('#select'+io+' .label').remove();
			}
			}
	}
		function deletiData(io)	{
		$('.l'+io).html("");
		$('#confirm').modal('hide');
	}
		function deler(io)	{
		$('#ral'+io).remove();
			
		$('#confirm').modal('hide');
	}
		function deletisec(io)	{
		$('#gec'+io).html("");
		$('#gec'+io).removeClass("che");
		$('#confirm').modal('hide');
	}
	function edi(ioi)	{
		$('span#saveButton').html('<a class="btn btn-default" onclick="editData('+ioi+');">edit</a>');
        $('span#editButton').text($('.text .group_t'+ioi).val());	
		$('#ed').val($('.text .group_t'+ioi).val());
		$('#edit').modal();

	}	
		function ed(p)	{
		$('span#saveButton').html('<a class="btn btn-default" onclick="ediData('+p+');">edit</a>');
        $('span#editButton').text($('.text #ho'+p+' label').text());	
		$('#ed').val($('.text #ho'+p+' label').text());
		$('#edit').modal();

	}	
		function editData(i)	{
		$('.text .group_t'+i).attr('value' , $('#ed').val());
		$('#edit').modal('hide');
	}
		function ediData(i)	{
		$('.text #ho'+i+' label').text($('#ed').val());
		$('#edit').modal('hide');
	}

	
	$('.panel.panel-default.all').html('');
	
function paged(t){
		
	page++;
	var paid =t.parentElement.parentElement.id;
	var appName = $('#appId').val();
	var groupid = paid.split('collapse');
	$('#'+paid).append('<div class="panel-body part ap" id="P'+page+'" onclick="pagi(this)"><a class="page" >Page'+page+'</a><i class="fa fa-plus pull-right pag" onclick="paged(this)" style="display:none"></i><i onclick="pagedelete(this)" class="glyphicon glyphicon-trash pull-right pag" aria-hidden="true" style="display:none"></i><i onclick="pageedit(this)" class="glyphicon glyphicon-pencil pull-right page " aria-hidden="true" style="display:none"></i></div>')
		$.ajax({
           type: "GET",
           url: "/pageAdd",
           data: { 'code' : page  , 'gid' : groupid[1] , 'appId': appName}, // serializes the form's elements.
           success: function(data)
           {
			
            $("#P"+page).hover(
		
            function(){
				$("#"+$(this).attr('id')+" .glyphicon-trash").toggle();
				$("#"+$(this).attr('id')+" .fa-plus").toggle();
				$("#"+$(this).attr('id')+" .glyphicon-pencil").toggle();
			}	
        );
           }});
	  
}
	function pageedit(t){
			var pid =t.parentElement.id;
	var name = $('#'+pid+' a').text();
		$('#edit').modal();
		$('#ed').val(name)
		$('#editButton').text(name)
		$('span#saveButton').html('<a class="btn btn-danger" onclick="saveName('+pid+');">Edit</a>');
	
		
	}	
		function saveName(t){
		
		if(t[0] ==null){
			var op=t.id.split('P');
			 $('#'+t.id+' a').text($('#ed').val());
		}
			else{
				var op = t[0].id.split('P');
				 $('#'+t[0].id+' a').text($('#ed').val());
			}
			var appName = $('#appId').val();
			$.ajax({
           type: "GET",
           url: "/pageName",
           data: { 'name' : $('#ed').val() , 'cod':op[1] , 'id':appName}, // serializes the form's elements.
           success: function(data)
           {
            
           }});
			$('#edit').modal('hide');
		}
		
		function pagedelete(t)	{
		var ppid= t.parentElement.parentElement.id
			var pid =t.parentElement.id;
	var name = $('#'+pid+' a').text();
		$('#confirm').modal();
		$('#deleteButton').html('<a class="btn btn-danger" onclick="deletepage('+pid+' , '+ppid+');">Delete</a>');
		$('#textButton').text(name);
	}
		function deletepage(t , v)	{
			if(v[0] ==null){
			var coll = v.id;
		}
			else{
				var coll = v[0].id
			}
				var coco =0;
			  $("#"+coll).children().each(function(){
               
           coco++;
                    });
			
			if(t[0] ==null){
			var op=t.id.split('P');
			var hi = t.id;
		}
			else{
				var op = t[0].id.split('P');
				var hi = t[0].id
			}
			var appName = $('#appId').val();
			if(coco !=1){
			$.ajax({
           type: "GET",
           url: "/pageDelete",
           data: { 'deltcode':op[1] , 'id':appName}, // serializes the form's elements.
           success: function(data)
           {
            $('#'+hi).hide();
           }});
			}
			else{
				alert('You cant remove all items in this group')
			}
			$('#confirm').modal('hide');
		}
		
	function groupi(t){
		group++;
		page++;
			t.preventDefault;
			var groupid= t.parentElement.id;
		var appName = $('#appId').val();
			$('#'+groupid).parent().parent().append('<div class="panel-heading active " data-toggle="collapse" data-parent="#accordion" href="#collapse'+group+'"><h4 class="panel-title" id="Group'+group+'"> <a  > Group '+group+'</a><span class="fa fa fa-chevron-down pull-right "></span><i class="fa fa-plus pull-right " onclick="groupi(this)" style="display:none"></i><i onclick="groupdelete(this)"  class="glyphicon glyphicon-trash pull-right " aria-hidden="true" style="display:none"></i><i  class="glyphicon glyphicon-pencil pull-right" onclick="groupedit(this)" style="display:none"></i></h4></div><div id="collapse'+group+'" class="panel-collapse collapse in">  <div class="panel-body part " id="P'+page+'" onclick="pagi(this)" ><a class="page act" >Page'+page+'</a><i class="fa fa-plus pull-right pag" onclick="paged(this)" style="display:none"></i><i onclick="pagedelete(this)" class="glyphicon glyphicon-trash pull-right pag" aria-hidden="true" style="display:none"></i><i  class="glyphicon glyphicon-pencil  pull-right page " aria-hidden="true" style="display:none" onclick="pageedit(this)"></i></div></div>')
			$.ajax({
           type: "GET",
           url: "/GroupAdd",
           data: { 'coe' : page , 'group':group , 'appId':appName }, // serializes the form's elements.
           success: function(data)
           {
              		$('.collapse').on('shown.bs.collapse', function(){
				var col = $(this).attr('id');
				var c = col.split('collapse');
	
$('#Group'+c[1]).find(".fa-chevron-right").removeClass("fa-chevron-right").addClass("fa-chevron-down");
$('.panel-heading[href="#'+col+'"]').addClass("active");
}).on('hidden.bs.collapse', function(){
					var col = $(this).attr('id');
				var c = col.split('collapse');
$('#Group'+c[1]).find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-right");
$('.panel-heading.active.collapsed[href="#'+col+'"]').removeClass("active");
});
		  $("#P"+page).hover(
		
            function(){
				$("#"+$(this).attr('id')+" .glyphicon-trash").toggle();
				$("#"+$(this).attr('id')+" .fa-plus").toggle();
				$("#"+$(this).attr('id')+" .glyphicon-pencil").toggle();
			}	
        );
			     $("#Group"+group).hover(
		
            function(){
				$("#"+$(this).attr('id')+" .glyphicon-trash").toggle();
				$("#"+$(this).attr('id')+" .fa-plus").toggle();
				$("#"+$(this).attr('id')+" .glyphicon-pencil").toggle();
			}	
        );
           }});
			
		}
	function groupedit(t){
		t.preventDefault;
			var pid =t.parentElement.id;
	var name = $('#'+pid+' a').text();
		$('#edit').modal();
		$('#ed').val(name)
		$('#editButton').text(name)
		$('span#saveButton').html('<a class="btn btn-danger" onclick="gName('+pid+');">Edit</a>');
	
		
	}	
		function gName(t){
		
		if(t[0] ==null){
			var op=t.id.split('Group');
			 $('#'+t.id+' a').text($('#ed').val());
		}
			else{
				var op = t[0].id.split('Group');
				 $('#'+t[0].id+' a').text($('#ed').val());
			}
			var appName = $('#appId').val();
			$.ajax({
           type: "GET",
           url: "/GroupName",
           data: { 'gname' : $('#ed').val() , 'gcod':op[1] , 'id':appName}, // serializes the form's elements.
           success: function(data)
           {
            
           }});
			$('#edit').modal('hide');
		}
		function groupdelete(t)	{
			var pid =t.parentElement.id;
	var name = $('#'+pid+' a').text();
		$('#confirm').modal();
		$('#deleteButton').html('<a class="btn btn-danger" onclick="deletegroup('+pid+');">Delete</a>');
		$('#textButton').text(name);
	}
		function deletegroup(t)	{
		
				var goco =0;
			  $(".panel.panel-default.all").children().each(function(){
               
           goco++;
                    });
		
			if(t[0] ==null){
			var op=t.id.split('Group');
			var hi = t.id;
		}
			else{
				var op = t[0].id.split('Group');
				var hi = t[0].id
			}
			var appName = $('#appId').val();
			if(goco !=2){
			$.ajax({
           type: "GET",
           url: "/groupDelete",
           data: { 'gdeltcode':op[1] , 'id':appName}, // serializes the form's elements.
           success: function(data)
           {
            $('#'+hi).hide();
			$('#collapse'+op[1]).hide();
			   $('.panel-heading[href="#collapse'+op[1]+'"]').hide();
           }})
			}
			else{
				alert('You cant remove all groups')
			}
			$('#confirm').modal('hide');
		}
		function pagi(t){
			$('#loading-imag').show();
			gr=1;
			se=1;
			sec=1;
			it=1;
			ib=1;
			il=1;
			cou=0;
			var arr =Array();
			$('#elements').html('')
			var c =0;
			var paid =t.parentElement.id;
            var thi = t.id ;
           var gro1 = t.parentElement.id;
            var gg = gro1.split("collapse");
           
            var groNa = $('#Group'+gg[1]+' a').text(); ;
            $('.GroupName2').text(groNa);
			var appName = $('#appId').val();
            var name = $('#'+thi+" a").text();
            $('.PagepName2').text(name);
			$(".panel.panel-default.all").find('.act').removeClass("act");
			$(".panel.panel-default.all").find('.acti').removeClass("acti");
			var parentId = t.id;
			t.className +=' act';
			$('#'+parentId).addClass('acti');
			var num= parentId.split('P');
			var yu;
	$('.paging').attr('id' , parentId);
			
		$.ajax({
           type: "GET",
           url: "/fetch",
           data: { 'page' : num[1] , 'app_id':appName}, // serializes the form's elements.
           success: function(data)
           {
			   $('#loading-imag').hide();
			   var obj = JSON.parse(data);
			   var js = JSON.parse(obj[0].value);
			for(yu in js){
				console.log(yu);
			}

			   for(yu in js){
				
				   cou++;
				   if(js[yu].ID_component==10){
		
			$("#text_check").addClass('lae'+gr);
		$("#grc"+gr).removeClass('che');
    $("#background").val('#FFFFFF');
	$("#background").addClass('ba'+gr);
	$("#color_check").addClass('ca'+gr);
	$("#size_c").addClass('sa'+gr);
	$("#italic_c").addClass('ia'+gr);
		$("#bold_c").addClass('ba'+gr);
		$("#underline_c").addClass('ua'+gr);
		$("#align_left_c").addClass('ala'+gr);
		$("#align_just_c").addClass('aja'+gr);
		$("#align_right_c").addClass('ara'+gr);

	 if(js[yu].Grouping!=' '){
			var va= js[yu].Grouping ;
		var spili = va.split('G');
				var parent = 'darggable'+spili[1];
			 } 
			else{
				
				var parent = 'elements';
			} 
				$("#"+parent).append('<div class="che mar hoo pa clearfix" id="gec'+gr+'"><div class="element text-field basic ui-draggable pull-left text" id="group'+gr+'"></div><i class="che fa f fa-cog pull-right" onclick="text(group'+gr+' ,'+gr+');"></i><i class="che fa f fa-trash k pull-right" onclick="delsection(this ,'+gr+');"></i></div>');
				$("#group"+gr).html('<div id="div'+gr+'" class="che pp hei hide"></div><div ondrop="drop(event)" ondragover="allowDrop(event)" id="darggable'+gr+'" class="che pp sortable darggable "></div>');
				 if(js[yu].Data_EN.length!=0){
				 $('#group'+gr+' #div'+gr).text(js[yu].Data_EN);
			$('#group'+gr+' #div'+gr).append('<i onclick="text(group'+gr+' ,'+gr+');"class="fa fa-pencil ppp  fa-1x che pull-right  " aria-hidden="true"></i><i onclick="delsection(this ,'+gr+');"class="fa fa-trash ppp  fa-1x che pull-right  " aria-hidden="true"></i>');
		$('#div'+gr).removeClass('hide');	
		 } 
				$('#group'+gr).prepend("<input class='labt' type='hidden' name='groulab"+cou+"' value="+js[yu].Data_EN+">")
				$('#group'+gr+' .labt').val(js[yu].Data_EN);
				$('#group'+gr).prepend("<input class='back' type='hidden' name=grouback"+cou+" value="+js[yu].Background_c+">");
				$('#group'+gr+' #div'+gr).css('background' ,js[yu].Background_c);
				$('#group'+gr).prepend("<input class='color' type='hidden' name=groucolor"+cou+" value="+js[yu].Color_c+">");
				$('#group'+gr+' #div'+gr).css('color' ,js[yu].Color_c);
				$('#group'+gr).prepend("<input class='size' type='hidden' name=grousize"+cou+" value="+js[yu].Font_s+">")
				$('#group'+gr+' #div'+gr).css('font-size' ,js[yu].Font_s+"px" );
			if(js[yu].Font_b ==3){
				
				$('#group'+gr+' #div'+gr).css('font-style' ,"italic" );
				$('#group'+gr+' #div'+gr).css('font-weight' ,"bold" );
				$('#group'+gr).prepend("<input class='bold' type='hidden' name=groubold"+cou+" value='bold'>")
			$('#group'+gr).prepend("<input class='italic' type='hidden' name=grouitalic"+cou+" value='italic'>")
			}
			else if(js[yu].Font_b ==1){
				
	$('#group'+gr+' #div'+gr).css('font-weight' ,"bold" );
			$('#group'+gr).prepend("<input class='bold' type='hidden' name=groubold"+cou+" value='bold'>")
			}
			else if(js[yu].Font_b ==2){
				
	$('#group'+gr+' #div'+gr).css('font-style' ,"italic" );
			$('#group'+gr).prepend("<input class='italic' type='hidden' name=grouitalic"+cou+" value='italic'>")
			}
			else if(js[yu].Font_b==3){
				$('#group'+gr+' #div'+gr).css('text-decoration' ,"underline" );
			$('#group'+gr).prepend("<input class='underline' type='hidden' name=grouunderline"+cou+" value='underline'>")
			}
			else if(js[yu].Font_b ==4){
				
	$('#group'+gr+' #div'+gr).css('font-weight' ,"bold" );
				$('#group'+gr+' #div'+gr).css('text-decoration' ,"underline" );
			$('#group'+gr).prepend("<input class='bold' type='hidden' name=groubold"+cou+" value='bold'>")
			$('#group'+gr).prepend("<input class='underline' type='hidden' name=grouunderline"+cou+" value='underline'>")
			}
			else if(js[yu].Font_b ==5){
				
				$('#group'+gr+' #div'+gr).css('font-style' ,"italic" );
				$('#group'+gr+' #div'+gr).css('text-decoration' ,"underline" );
			$('#group'+gr).prepend("<input class='italic' type='hidden' name=grouitalic"+cou+" value='italic'>")
			$('#group'+gr).prepend("<input class='underline' type='hidden' name=grouunderline"+cou+" value='underline'>")
			}
			else if(js[yu].Font_b ==6){
			
				$('#group'+gr+' #div'+gr).css('font-style' ,"italic" );
				$('#group'+gr+' #div'+gr).css('font-weight' ,"bold" );
				$('#group'+gr+' #div'+gr).css('text-decoration' ,"underline" );
				$('#group'+gr).prepend("<input class='bold' type='hidden' name=groubold"+cou+" value='bold'>")
			$('#group'+gr).prepend("<input class='italic' type='hidden' name=grouitalic"+cou+" value='italic'>")
			$('#group'+gr).prepend("<input class='underline' type='hidden' name=grouunderline"+cou+" value='underline'>")
			}
			 if(js[yu].allighment ==3){
				
				$('#group'+gr+' #div'+gr).css('text-align' ,'right');
				$('#group'+gr).prepend("<input class='align' type='hidden' name=groualign"+cou+" value='3'>")
		}
				 else if(js[yu].allighment ==1){
				
				$('#group'+gr+' #div'+gr).css('text-align' ,'left');
				$('#group'+gr).append("<input class='align' type='hidden' name=groualign"+cou+" value='1'>")
			}
			else if(js[yu].allighment ==2){
				
				$('#group'+gr+' #div'+gr).css('text-align' ,'center');
				$('#group'+gr).prepend("<input class='align' type='hidden' name=groualign"+cou+" value='2'>")
			}
				/*if(val.length !=0){
		
	}*/
				if(parent!='elements'){
				$('#group'+gr).prepend("<input class='group' type='hidden' name=grougroup"+cou+" value="+spili[1]+">")
				}
			else{
			$('#group'+gr).prepend("<input class='group' type='hidden' name=grougroup"+cou+" value=''>")					
				}
				$('#group'+gr).prepend("<input class='lab' type='hidden' name=groutype"+cou+" value='10'>")
				$('#group'+gr).prepend("<input class='hidden' type='hidden' name=grouhide"+cou+" value="+js[yu].Visibilty_component+">")
				$('#group'+gr).prepend("<input class='must' type='hidden' name=groumust"+cou+" value="+js[yu].Must+">")
				$('#group'+gr).prepend("<input class='code' type='hidden' name=groucode"+cou+" value="+cou+">")
				$("#gec"+gr).hover(
            function(){
			
                $("#"+$(this).attr('id')+" .f").toggle();
				
            }
        );	
				$("#div"+gr).hover(
            function(){
			
				$("#"+$(this).attr('id')+" i.fa.fa-pencil.ppp.fa-1x.che.pull-right").toggle();
				$("#"+$(this).attr('id')+" i.fa.fa-trash.ppp.fa-1x.che.pull-right").toggle();
			}	
        );	
				
	
				gr++;
	
		}
				  else if(js[yu].ID_component==1){
			
				$("#size").addClass("lesize"+il);
	$("#exampleInputcomment").addClass('label'+il);
	$("#exampleInputback").addClass("leback"+il);
	$("#exampleInputlass").addClass("le"+il);
	$("#bold").addClass("bold_l"+il);
	$("#italic").addClass("italic_l"+il);
	$("#underline").addClass("underline_l"+il);
	$("#align_left").addClass("alf_l"+il);
	$("#align_right").addClass("alr_l"+il);
	$("#align_just").addClass("alj_l"+il);
		if(js[yu].Grouping!=' '){
			var va= js[yu].Grouping ;
		var spili = va.split('G');
				var parent = 'darggable'+spili[1];
				
			 } 
			else{
				
				var parent = 'elements';
			 } 
					
				$('#'+parent).append('<div draggable="true"  ondragstart="drag(event)" class=" clearfix lal mar cancel" id="labb'+il+'"><div class="llll element lal text-field basic ui-draggable pull-left text" id="label'+il+'"></div><i class="che fa fa-cog pull-right" onclick="text(label'+il+' ,'+il+');"></i></div><div class="clearfix"></div>');
				$('#label'+il).append('<label id="tt"></label>');
				$('#label'+il+" #tt").addClass('prev'+il);
				$('#label'+il+' .prev'+il).html('<div class="hover bhh che" id="p'+il+'"><label class="lav bb"><span></span><i class="fa fa-pencil fa-1x co che pull-right" aria-hidden="true" onclick="text(label'+il+' ,'+il+');"></i><i onclick="delee(this ,'+il+');"class="fa fa-trash fa-1x pull-right che co " aria-hidden="true"></i></label></div>');
				$('#label'+il+' .prev'+il+' span').text(js[yu].Data_EN);
					 
				$("#label"+il).append("<input class='code' type='hidden' name=bcode"+cou+" value="+cou+">")
				$('#label'+il).append("<input class='la' type='hidden' name='blab"+cou+"' value="+js[yu].Data_EN+">")
				$('#label'+il+' .la').val(js[yu].Data_EN);
				$('#label'+il+' .prev'+il+' div').css('background' ,js[yu].Background_c);
				$('#label'+il).append("<input class='back' type='hidden' name=bback"+cou+" value="+js[yu].Background_c+">");
				$('#label'+il+' .prev'+il+' div').css('color' ,js[yu].Color_c);
				$('#label'+il).append("<input class='color' type='hidden' name=bcolor"+cou+" value="+js[yu].Color_c+">");
				$('#label'+il).append("<input class='size' type='hidden' name=bsize"+cou+" value="+js[yu].Font_s+">")
				$('#label'+il+' .prev'+il+' div').css('font-size' ,js[yu].Font_s+"px" );
				
				 if(js[yu].Font_b ==3){
				
				$('#label'+il+' .prev'+il+' label').css('font-style' ,"italic" );
				$('#label'+il+' .prev'+il+' label').css('font-weight' ,"bold" );
				$('#label'+il).append("<input class='bold' type='hidden' name=bbold"+cou+" value='bold'>")
			$('#label'+il).append("<input class='italic' type='hidden' name=bitalic"+cou+" value='italic'>")
			} 
			else if(js[yu].Font_b==2){
			
				$('#label'+il+' .prev'+il+' label').css('font-style' ,"italic" );
			$('#label'+il).append("<input class='italic' type='hidden' name=bitalic"+cou+" value='italic'>")
			}
			else if(js[yu].Font_b==1){
				
				$('#label'+il+' .prev'+il+' label').css('font-weight' ,"bold" );
				$('#label'+il).append("<input class='bold' type='hidden' name=bbold"+cou+" value='bold'>")
			}
			else if(js[yu].Font_b==4){
				
				$('#label'+il+' .prev'+il+' label').css('text-decoration' ,"underline" );
				$('#label'+il+' .prev'+il+' label').css('font-weight' ,"bold" );
				$('#label'+il).append("<input class='bold' type='hidden' name=bbold"+cou+" value='bold'>")
			$('#label'+il).append("<input class='underline' type='hidden' name=bunderline"+cou+" value='underline'>")
			}
			else if(js[yu].Font_b ==5){
				
				$('#label'+il+' .prev'+il+' label').css('font-style' ,"italic" );
				$('#label'+il+' .prev'+il+' label').css('text-decoration' ,"underline" );
				$('#label'+il).append("<input class='underline' type='hidden' name=bunderline"+cou+" value='underline'>")
			$('#label'+il).append("<input class='italic' type='hidden' name=bitalic"+cou+" value='italic'>")
			}
			else if(js[yu].Font_b ==6){
				
				$('#label'+il+' .prev'+il+' label').css('font-style' ,"italic" );
				$('#label'+il+' .prev'+il+' label').css('font-weight' ,"bold" );
				$('#label'+il+' .prev'+il+' label').css('text-decoration' ,"underline" );
				$('#label'+il).append("<input class='bold' type='hidden' name=bbold"+cou+" value='bold'>")
			$('#label'+il).append("<input class='italic' type='hidden' name=bitalic"+cou+" value='italic'>")
			$('#label'+il).append("<input class='underline' type='hidden' name=bunderline"+cou+" value='underline'>")
			}else{
					$('#label'+il).append("<input class='bold' type='hidden' name=bbold"+cou+" value='normal'>")
			$('#label'+il).append("<input class='italic' type='hidden' name=bitalic"+cou+" value='normal'>")
			$('#label'+il).append("<input class='underline' type='hidden' name=bunderline"+cou+" value='normal'>")
			}
				 if(js[yu].allighment ==3){
				
				$('#label'+il+' .prev'+il+' div').css('text-align' ,'right');
				$('#label'+il).append("<input class='align' type='hidden' name=balign"+cou+" value='3'>")
			}
			else if(js[yu].allighment ==2){
				
				$('#label'+il+' .prev'+il+' div').css('text-align' ,'center');
				$('#label'+il).append("<input class='align' type='hidden' name=balign"+cou+" value='2'>")
			}
			else if(js[yu].allighment ==1){
				
			
				$('#label'+il+' .prev'+il+' div').css('text-align' ,'left');
				$('#label'+il).append("<input class='align' type='hidden' name=balign"+cou+" value='1'>")
		}
					  else{
						  $('#label'+il).append("<input class='align' type='hidden' name=balign"+cou+" value=''>")
					  }
					  	if(parent!='elements'){
				$("#label"+il).append("<input class='group' type='hidden' name=bgroup"+cou+" value="+spili[1]+">")
				}
			else{
			
			$("#label"+il).append("<input class='group' type='hidden' name=bgroup"+cou+" value=''>")				
				}
		$("#label"+il).append("<input class='lab' type='hidden' name=btype"+cou+" value='1'>")
				$("#label"+il).append("<input class='hidden' type='hidden' name=bhide"+cou+" value="+js[yu].Visibilty_component+">")
				$("#label"+il).append("<input class='must' type='hidden' name=bmust"+cou+" value="+js[yu].Must+">")
						$("#p"+il).hover(
            function(){
			
               $("#"+$(this).attr('id')+" .fa-pencil").toggle();
				$("#"+$(this).attr('id')+" .fa-trash").toggle();
				
			
			}
				
        );	
					$("#labb"+il).hover(
            function(){
			
                $("#"+$(this).attr('id')+" .fa-cog").toggle();
				
            }
        );	
				il++;
				  }
				else if(js[yu].ID_component==3){
			$("#size").addClass("tesize"+it);
	$("#exampleInputcomment").addClass('text'+it);
    $("#exampleInputhint").addClass("tehint"+it);
	$("#exampleInputback").addClass("teback"+it);
	$("#exampleInputlass").addClass("te"+it);
	$("#bold").addClass("bold"+it);
	$("#italic").addClass("italic"+it);
	$("#underline").addClass("underline"+it);
	$("#align_left").addClass("alf"+it);
	$("#align_right").addClass("alr"+it);
	$("#align_just").addClass("alj"+it);
 if(js[yu].Grouping!=' '){
			var va= js[yu].Grouping;
		var spili = va.split('G');
				var parent = 'darggable'+spili[1];
			} 
			else{
				var parent = 'elements';
			 } 
					
				$("#"+parent).append('<div draggable="true" ondragstart="drag(event)" class="che mar" id="t'+it+'"><div class="element text-field basic ui-draggable text" id="text'+it+'"><i class="che fa fa-cog z pull-right" onclick="text(text'+it+','+it+');"></i></div>');
				$('#text'+it).append('<label id="tt"></label>');
	$('#text'+it+" #tt").addClass('prev'+it);
				$('#text'+it+' .prev'+it).html('<div class="hide" id="lat'+it+'"><label class="bb che " disply:block"></label><i id="id_ed'+it+'"class="fa fa-pencil fa-1x l che pull-right" aria-hidden="true" onclick="text(text'+it+','+it+');"></i><i onclick="deli(this ,'+it+');"class="fa fa-trash fa-1x l che pull-right " aria-hidden="true"></i></div><div id="lai'+it+'"><input id="t" class="form-control che " readonly><i id="id_ed'+it+'"class="fa fa-pencil fa-1x y che pull-right" aria-hidden="true" onclick="text(text'+it+','+it+');"></i><i onclick="deli(this ,'+it+');"class="fa fa-trash fa-1x y che pull-right " aria-hidden="true"></i></div>');
				$("#t"+it).removeClass('che');
				 if(js[yu].Data_EN.length !=0){
				$('#text'+it).append("<input class='code' type='hidden' name=texcode"+cou+" value="+cou+">")
				$('#text'+it+' .prev'+it+' label').text(js[yu].Data_EN);
				$('#text'+it).append("<input class='labt' type='hidden' name='texlab"+cou+"' value="+js[yu].Data_EN+">")
				$('#text'+it+' .labt').val(js[yu].Data_EN);
				$('#lat'+it).removeClass('hide');
		$('#lai'+it+' .fa-trash').removeClass('y');
		$('#lai'+it+' .fa-trash').addClass('i');
		$('#lai'+it+' .fa-pencil').removeClass('y');
		$('#lai'+it+' .fa-pencil').addClass('i');
				
				
			 } 
				$('#text'+it).append("<input class='hint' type='hidden' name=texhint"+cou+" >")
		$('#text'+it+' .hint').val(js[yu].hint_EN);
				 $('#text'+it+' .prev'+it+' input').attr('placeholder' , js[yu].hint_EN);
				$('#text'+it).append("<input class='back' type='hidden' name=texback"+cou+" value="+js[yu].Background_c+">");
				$('#text'+it+' .prev'+it+' input').css('background' ,js[yu].Background_c);
				$('#text'+it).append("<input class='color' type='hidden' name=texcolor"+cou+" value="+js[yu].Color_c+">");
				$('#text'+it+' .prev'+it+' input').css('color' ,js[yu].Color_c );
				$('#text'+it).append("<input class='size' type='hidden' name=texsize"+cou+" value="+js[yu].Font_s+">")
				$('#text'+it+' input').css('font-size' ,js[yu].Font_s );
			if(js[yu].Font_b==3){
				
				$('#text'+it+' .prev'+it+' label').css('font-style' ,"italic" );
				$('#text'+it+' .prev'+it+' label').css('font-weight' ,"bold" );
				$('#text'+it).append("<input class='bold' type='hidden' name=texbold"+cou+" value='bold'>")
			$('#text'+it).append("<input class='italic' type='hidden' name=texitalic"+cou+" value='italic'>")
			}
			else if(js[yu].Font_b==1){
			
				$('#text'+it+' .prev'+it+' label').css('font-weight' ,"bold" );
				$('#text'+it).append("<input class='bold' type='hidden' name=texbold"+cou+" value='bold'>")
			}
			else if(js[yu].Font_b==3){
				
				$('#text'+it+' .prev'+it+' label').css('font-style' ,"italic" );
				$('#text'+it+' .prev'+it+' label').css('font-weight' ,"bold" );
				$('#text'+it).append("<input class='bold' type='hidden' name=texbold"+cou+" value='bold'>")
			$('#text'+it).append("<input class='italic' type='hidden' name=texitalic"+cou+" value='italic'>")
			}
			else if(js[yu].Font_b==2){
				
				$('#text'+it+' .prev'+it+' label').css('font-style' ,"italic" );
			$('#text'+it).append("<input class='italic' type='hidden' name=texitalic"+cou+" value='italic'>")
			}
			else if(js[yu].Font_b==4){
				
				$('#text'+it+' .prev'+it+' label').css('text-decoration' ,"underline" );
				$('#text'+it+' .prev'+it+' label').css('font-weight' ,"bold" );
				$('#text'+it).append("<input class='bold' type='hidden' name=texbold"+cou+" value='bold'>")
			$('#text'+it).append("<input class='underline' type='hidden' name=texunderline"+cou+" value='underline'>")
			}
			else if(js[yu].Font_b==5){
				
				$('#text'+it+' .prev'+it+' label').css('font-style' ,"italic" );
				$('#text'+it+' .prev'+it+' label').css('text-decoration' ,"underline" );
			$('#text'+it).append("<input class='underline' type='hidden' name=texunderline"+cou+" value='underline'>")
			$('#text'+it).append("<input class='italic' type='hidden' name=texitalic"+cou+" value='italic'>")
			}
			else if(js[yu].Font_b==6){
				
				$('#text'+it+' .prev'+it+' label').css('font-weight' ,"bold" );
				$('#text'+it+' .prev'+it+' label').css('font-style' ,"italic" );
				$('#text'+it+' .prev'+it+' label').css('text-decoration' ,"underline" );
			$('#text'+it).append("<input class='underline' type='hidden' name=texunderline"+cou+" value='underline'>")
			$('#text'+it).append("<input class='italic' type='hidden' name=texitalic"+cou+" value='italic'>")
			$('#text'+it).append("<input class='bold' type='hidden' name=texbold"+cou+" value='bold'>")
			}
			if(js[yu].allighment==3){
				
				$('#text'+it+' .prev'+it+' div').css('text-align' ,'right');
				$('#text'+it).append("<input class='align' type='hidden' name=texalign"+cou+" value='3'>")
			}
			else if(js[yu].allighment==2){
				
				$('#text'+it+' .prev'+it+' div').css('text-align' ,'center');
				$('#text'+it).append("<input class='align' type='hidden' name=texalign"+cou+" value='2'>")
			}
			else if(js[yu].allighment==1){
				
				$('#text'+it+' .prev'+it+' div').css('text-align' ,'left');
				$('#text'+it).append("<input class='align' type='hidden' name=texalign"+cou+" value='1'>")
		}
				/*if(val.length !=0){
		
	}*/
				if(parent!='elements'){
				$('#text'+it).append("<input class='group' type='hidden' name=texgroup"+cou+" value="+spili[1]+">")
				}
			else{
			$('#text'+it).append("<input class='group' type='hidden' name=texgroup"+cou+" value=''>")			
				}
				$('#text'+it).append("<input class='lab' type='hidden' name=textype"+cou+" value='3'>")
				$('#text'+it).append("<input class='hidden' type='hidden' name=texhide"+cou+" value="+js[yu].Visibilty_component+">")
				$('#text'+it).append("<input class='must' type='hidden' name=texmust"+cou+" value="+js[yu].Must+">")
				$("#lat"+it).hover(
            function(){
			
               $("#"+$(this).attr('id')+" .fa-pencil").toggle();
				$("#"+$(this).attr('id')+" .fa-trash").toggle();
				//$(this).css('border' , 'solid 1px rgb(100, 120, 200)')
			});
					$("#lai"+it).hover(
            function(){
			
               $("#"+$(this).attr('id')+" .fa-pencil").toggle();
				$("#"+$(this).attr('id')+" .fa-trash").toggle();
				
			});
				$("#t"+it).hover(
            function(){
			
                $("#"+$(this).attr('id')+" .fa-cog").toggle();
				
            }
        );	
				it++;
	
			
		}
				   else if(js[yu].ID_component==6){
			$("#size").addClass("resize"+ir);
	$("#exampleInputcomment").addClass('radio'+ir);
	$("#exampleInputback").addClass("reback"+ir);
	$("#exampleInputlass").addClass("re"+ir);
	$("#bold").addClass("bold_r"+ir);
	$("#italic").addClass("italic_r"+ir);
	$("#underline").addClass("underline_r"+ir);
	$("#align_left").addClass("alf_r"+ir);
	$("#align_right").addClass("alr_r"+ir);
	$("#align_just").addClass("alj_r"+ir);
 if(js[yu].Grouping!=' '){
			var va= js[yu].Grouping;
		var spili = va.split('G');
				var parent = 'darggable'+spili[1];
			 } 
			else{
		
				var parent = 'elements';
			}
					
				$("#"+parent).append('<div  draggable="true"  ondragstart="drag(event)" class="che clearfix mar" id="ral'+ir+'"><div class="element text-field basic ui-draggable pull-left text" id="radio'+ir+'"></div><i class="che fa fa-cog pull-right" onclick="text(radio'+ir+' ,'+ir+');"></i></div><div class="clearfix"></div>');
				$("#radio"+ir).append('<label id="tt"></label>');
		$("#radio"+ir+" #tt").addClass('prev'+ir);
				$("#radio"+ir+' .prev'+ir).html('<div  id="ra'+ir+'"><label class="bb  " disply:block"></label><i class="fa fa-pencil fa-1x l che pull-right" aria-hidden="true" onclick="text(radio'+ir+','+ir+');"></i><i onclick="delr(this ,'+ir+');"class="fa fa-trash fa-1x l che pull-right " aria-hidden="true"></i><div id="ray'+ir+'"><input type="radio" class=" che " readonly>Yes</div><div id="ran'+ir+'"><input type="radio" class=" che " readonly>No</div></div>');
				$("#t"+it).removeClass('che');
				 $("#radio"+ir+' .prev'+ir+' label').text(js[yu].Data_EN);
				$("#radio"+ir).append("<input class='code' type='hidden' name=radiocode"+cou+" value="+cou+">")
				
				$("#radio"+ir).append("<input class='labt' type='hidden' name='radiolab"+cou+"' value="+js[yu].Data_EN+">")
				$("#radio"+ir+" .labt").val(js[yu].Data_EN);
				$("#radio"+ir).append("<input class='back' type='hidden' name=radioback"+cou+" value="+js[yu].Background_c+">");
				$("#radio"+ir+' .prev'+ir).css('background' ,js[yu].Background_c);
				$("#radio"+ir).append("<input class='color' type='hidden' name=radiocolor"+cou+" value="+js[yu].Color_c+">");
				$("#radio"+ir+' .prev'+ir).css('color' ,js[yu].Color_c);
				$("#radio"+ir).append("<input class='size' type='hidden' name=radiosize"+cou+" value="+js[yu].Font_s+">")
				$("#radio"+ir+' .prev'+ir).css('font-size' ,js[yu].Font_s+"px" );
				if(js[yu].Font_b==3){
				
				$("#radio"+ir+' .prev'+ir+' label').css('font-style' ,"italic" );
				$("#radio"+ir+' .prev'+ir+' label').css('font-weight' ,"bold" );
				$("#radio"+ir).append("<input class='bold' type='hidden' name=radiobold"+cou+" value='bold'>")
			$("#radio"+ir).append("<input class='italic' type='hidden' name=radioitalic"+cou+" value='italic'>")
			}
			else if(js[yu].Font_b==1){
				
	$("#radio"+ir+' .prev'+ir+' label').css('font-weight' ,"bold" );
			$("#radio"+ir).append("<input class='bold' type='hidden' name=radiobold"+cou+" value='bold'>")
			}
			else if(js[yu].Font_b==2){
			
	$("#radio"+ir+' .prev'+ir+' label').css('font-style' ,"italic" );
			$("#radio"+ir).append("<input class='italic' type='hidden' name=radioitalic"+cou+" value='italic'>")
			}
			else if(js[yu].Font_b==3){
				
				$("#radio"+ir+' .prev'+ir+' label').css('text-decoration' ,"underline" );
			$("#radio"+ir).append("<input class='underline' type='hidden' name=radiounderline"+cou+" value='underline'>")
			}
			else if(js[yu].Font_b==4){
				
	$("#radio"+ir+' .prev'+ir+' label').css('font-weight' ,"bold" );
				$("#radio"+ir+' .prev'+ir+' label').css('text-decoration' ,"underline" );
			$("#radio"+ir).append("<input class='bold' type='hidden' name=radiobold"+cou+" value='bold'>")
			$("#radio"+ir).append("<input class='underline' type='hidden' name=radiounderline"+cou+" value='underline'>")
			}
			else if(js[yu].Font_b==5){
				
				$("#radio"+ir+' .prev'+ir+' label').css('font-style' ,"italic" );
				$("#radio"+ir+' .prev'+ir+' label').css('text-decoration' ,"underline" );
			$("#radio"+ir).append("<input class='italic' type='hidden' name=radioitalic"+cou+" value='italic'>")
			$("#radio"+ir).append("<input class='underline' type='hidden' name=radiounderline"+cou+" value='underline'>")
			}
			else if(js[yu].Font_b==6){
				
				$("#radio"+ir+' .prev'+ir+' label').css('font-style' ,"italic" );
				$("#radio"+ir+' .prev'+ir+' label').css('font-weight' ,"bold" );
				$("#radio"+ir+' .prev'+ir+' label').css('text-decoration' ,"underline" );
				$("#radio"+ir).append("<input class='bold' type='hidden' name=radiobold"+cou+" value='bold'>")
			$("#radio"+ir).append("<input class='italic' type='hidden' name=radioitalic"+cou+" value='italic'>")
			$("#radio"+ir).append("<input class='underline' type='hidden' name=radiounderline"+cou+" value='underline'>")
			}
			 if(js[yu].allighment==3){
				
				$("#radio"+ir+' .prev'+ir+' div').css('text-align' ,'right');
				$("#radio"+ir).append("<input class='align' type='hidden' name=radioalign"+cou+" value='3'>")
			}
				 else if(js[yu].allighment==1){
				
				$("#radio"+ir+' .prev'+ir+' div').css('text-align' ,'left');
				$("#radio"+ir).append("<input class='align' type='hidden' name=radioalign"+cou+" value='1'>")
			}
			else if(js[yu].allighment==2){
				
				$("#radio"+ir+' .prev'+ir+' div').css('text-align' ,'center');
				$("#radio"+ir).append("<input class='align' type='hidden' name=radioalign"+cou+" value='2'>")
			}
			
				if(parent!='elements'){
				$("#radio"+ir).append("<input class='group' type='hidden' name=radiogroup"+cou+" value="+spili[1]+">")
				}
			else{
			$("#radio"+ir).append("<input class='group' type='hidden' name=radiogroup"+cou+" value=''>")		
				}
				$("#radio"+ir).append("<input class='lab' type='hidden' name=radiotype"+cou+" value='6'>")
				$("#radio"+ir).append("<input class='hidden' type='hidden' name=radiohide"+cou+" value="+js[yu].Visibilty_component+">")
				$("#radio"+ir).append("<input class='must' type='hidden' name=radiomust"+cou+" value="+js[yu].Must+">")
					$("#ra"+ir).hover(
            function(){
			
               $("#"+$(this).attr('id')+" .fa-pencil").toggle();
				$("#"+$(this).attr('id')+" .fa-trash").toggle();
				
			
			}
				
        );	
				$("#ral"+ir).hover(
            function(){
			
                $("#"+$(this).attr('id')+" .fa-cog").toggle();
				
            }
        );	
	
				ir++;
	
		}
				   else if(js[yu].ID_component==7){
			
			$("#size").addClass("cesize"+ib);
	$("#exampleInputcomment").addClass('box'+ib);
	$("#exampleInputback").addClass("ceback"+ib);
	$("#exampleInputlass").addClass("ce"+ib);
	$("#bold").addClass("bold_c"+ib);
	$("#italic").addClass("italic_c"+ib);
	$("#underline").addClass("underline_c"+ib);
	$("#align_left").addClass("alf_c"+ib);
	$("#align_right").addClass("alr_c"+ib);
	$("#align_just").addClass("alj_c"+ib);
	 if(js[yu].Grouping!=' '){
			var va= js[yu].Grouping ;
		var spili = va.split('G');
				var parent = 'darggable'+spili[1];
			
			 } 
			else{
				
				var parent = 'elements';
			 } 
					
				$("#"+parent).append('<div  draggable="true"ondragstart="drag(event)"  class="che clearfix mar" id="l'+ib+'"><div class="llll box element text-field basic ui-draggable pull-left text" id="box'+ib+'"></div><i class="che fa fa-cog pull-right" onclick="text(box'+ib+' ,'+ib+');"></i></div><div class="clearfix"></div>');
				$("#box"+ib).append('<label id="tt"></label>');
		$("#box"+ib+" #tt").addClass('prev'+ib);
				$("#box"+ib+' .prev'+ib).html('<div class="hover bhh che" id="po'+ib+'"><label class="lab"><input type="checkbox" class="op"><span  class="op"></span><i class="fa fa-pencil fa-1x co che pull-right" aria-hidden="true" onclick="text(box'+ib+' ,'+ib+');"></i><i onclick="delee(this ,'+ib+');"class="fa fa-trash fa-1x pull-right che co " aria-hidden="true"></i></label></div>');
				$("#l"+ib).removeClass('che');
				 $("#box"+ib+' .prev'+ib+' span').text(js[yu].Data_EN);
				$("#box"+ib).append("<input class='code' type='hidden' name=boxcode"+cou+" value="+cou+">")
				$("#box"+ib).append("<input class='labt' type='hidden' name='boxlab"+cou+"' value="+js[yu].Data_EN+">")
				$("#box"+ib+' .labt').val(js[yu].Data_EN);
				$("#box"+ib).append("<input class='back' type='hidden' name=boxback"+cou+" value="+js[yu].Background_c+">");
				$("#box"+ib+' .prev'+ib+' div').css('background' ,js[yu].Background_c );
				$("#box"+ib).append("<input class='color' type='hidden' name=boxcolor"+cou+" value="+js[yu].Color_c+">");
				$("#box"+ib+' .prev'+ib+' div').css('color' ,js[yu].Color_c);
				$("#box"+ib).append("<input class='size' type='hidden' name=boxsize"+cou+" value="+js[yu].Font_s+">")
				$("#box"+ib+' .prev'+ib).css('font-size' ,js[yu].Font_s+"px" );
			if(js[yu].Font_b ==2){
				$("#box"+ib+' .prev'+ib+' label').css('font-style' ,"italic" );
			$("#box"+ib).append("<input class='italic' type='hidden' name=boxitalic"+cou+" value='italic'>")
		}
			else if(js[yu].Font_b==1){
				
				$("#box"+ib+' .prev'+ib+' label').css('font-weight' ,"bold" );
				$("#box"+ib).append("<input class='bold' type='hidden' name=boxbold"+cou+" value='bold'>")
			}
			else if(js[yu].Font_b ==3){
				
				$("#box"+ib+' .prev'+ib+' label').css('font-style' ,"italic" );
				$("#box"+ib+' .prev'+ib+' label').css('font-weight' ,"bold" );
				$("#box"+ib).append("<input class='bold' type='hidden' name=boxbold"+cou+" value='bold'>")
			$("#box"+ib).append("<input class='italic' type='hidden' name=boxitalic"+cou+" value='italic'>")
			}
			else if(js[yu].Font_b ==5){
				
				$("#box"+ib+' .prev'+ib+' label').css('font-style' ,"italic" );
				$("#box"+ib+' .prev'+ib+' label').css('text-decoration' ,"underline" );
			$("#box"+ib).append("<input class='italic' type='hidden' name=boxitalic"+cou+" value='italic'>")
			$("#box"+ib).append("<input class='underline' type='hidden' name=boxunderline"+cou+" value='underline'>")
			}
			else if(js[yu].Font_b ==6){
				
				$("#box"+ib+' .prev'+ib+' label').css('font-style' ,"italic" );
				$("#box"+ib+' .prev'+ib+' label').css('font-weight' ,"bold" );
				$("#box"+ib+' .prev'+ib+' label').css('text-decoration' ,"underline" );
				$("#box"+ib).append("<input class='bold' type='hidden' name=boxbold"+cou+" value='bold'>")
			$("#box"+ib).append("<input class='italic' type='hidden' name=boxitalic"+cou+" value='italic'>")
			$("#box"+ib).append("<input class='underline' type='hidden' name=boxunderline"+cou+" value='underline'>")
			}
			 if(js[yu].allighment ==3){

				$("#box"+ib+' .prev'+ib+' div').css('text-align' ,'right');
				$("#box"+ib).append("<input class='align' type='hidden' name=boxalign"+cou+" value='3'>")
			}
				 else if(js[yu].allighment ==1){
				
				$("#box"+ib+' .prev'+ib+' div').css('text-align' ,'left');
				$("#box"+ib).append("<input class='align' type='hidden' name=boxalign"+cou+" value='1'>")
			}
			else if(js[yu].allighment ==2){
				
				$("#box"+ib+' .prev'+ib+' div').css('text-align' ,'center');
				$("#box"+ib).append("<input class='align' type='hidden' name=boxalign"+cou+" value='2'>")
			}
		
				if(parent!='elements'){
				$("#box"+ib).append("<input class='group' type='hidden' name=boxgroup"+cou+" value="+spili[1]+">")
				}
			else{
			$("#box"+ib).append("<input class='group' type='hidden' name=boxgroup"+cou+" value=''>")	
				}
				$("#box"+ib).append("<input class='lab' type='hidden' name=boxtype"+cou+" value='7'>")
				$("#box"+ib).append("<input class='hidden' type='hidden' name=boxhide"+cou+" value="+js[yu].Visibilty_component+">")
				$("#box"+ib).append("<input class='must' type='hidden' name=boxmust"+cou+" value="+js[yu].Must+">")

				$("#po"+ib).hover(
            function(){
			
               $("#"+$(this).attr('id')+" .fa-pencil").toggle();
				$("#"+$(this).attr('id')+" .fa-trash").toggle();
				
			
			}
				
        );	
				$("#l"+ib).hover(
            function(){
			
                $("#"+$(this).attr('id')+" .fa-cog").toggle();
				
            }
        );	
				ib++;
	
		}
				   else if(js[yu].ID_component ==11){
					   v=0;
				se++;
				select[se]=[];
				
			$("#exampleInputlass").addClass("se"+se);
	    $("#exampleInputback").addClass("seback"+se);
	$("#size").addClass("size_s"+se);
	 $("#exampleInputhint").addClass("sehint"+se);
	$("#exampleInputcomment").addClass('select'+se);
	$("#exampleInputll").addClass("sell"+se);
	$("#bold").addClass("bold_s"+se);
	$("#italic").addClass("italic_s"+se);
	$("#underline").addClass("underline_s"+se);
	$("#align_left").addClass("alf_s"+se);
	$("#align_right").addClass("alr_s"+se);
	$("#align_just").addClass("alj_s"+se);
 if(js[yu].Grouping !=' '){
			var va= js[yu].Grouping;
		var spili = va.split('G');
				var parent = 'darggable'+spili[1];
				
			 } 
			else{
				
				var parent = 'elements';
 } 
					
				$("#"+parent).append('<div  draggable="true" ondragstart="drag(event)" class="che mar clearfix" id="se'+se+'"><div class="element text-field basic ui-draggable pull-left text" id="select'+se+'"></div><i class="che fa fa-cog pull-right" onclick="text(select'+se+' ,'+se+');"></i></div>');
				$('#select'+se).append('<label id="tt"></label>');
		$('#select'+se+" #tt").addClass('prev_s'+se);
				$('#select'+se+' .prev_s'+se).html('<div class="che bb hide" id="sel'+se+'"></div><div class="che" id="sey'+se+'"><input ondragstart="return false;" ondrop="return false;" id="seo'+se+'" class="form-control" type="text" data-toggle="dropdown"><i class="fa fa-pencil che pull-right pre fa-1x  pp" aria-hidden="true" onclick="text(select'+se+','+se+');"></i><i onclick="deli(this ,'+se+');"class="fa fa-trash pre fa-1x che pull-right pp " aria-hidden="true"></i><ul class="dropdown-menu" role="menu" aria-labelledby="menu1"></ul></div>');
				$("#se"+se).removeClass('che');
					$('#select'+se).append("<input class='code' type='hidden' name=selecode"+cou+" value="+cou+">")
					 if(js[yu].Data_EN.length !=0 ){
				 $('#select'+se+' .prev_s'+se+' #sel'+se).text(js[yu].Data_EN);
				$('#sel'+se).removeClass('hide');
				$('#sed'+se+' .pre').removeClass('pp');
		$('#sey'+se+' .pre').removeClass('pp');
				$('#select'+se).append("<input class='label' type='hidden' name='selelab"+cou+"' value="+js[yu].Data_EN+">");
				$('#select'+se+" .label").val(js[yu].Data_EN);
				
			 } 
				$('#select'+se+' .prev_s'+se+' #sel'+se).append('<i class="fa fa-pencil che l pull-right fa-1x" aria-hidden="true" onclick="text(section'+se+','+se+');"></i><i onclick="deli(this ,'+se+');"class="fa fa-trash l fa-1x che pull-right  " aria-hidden="true">')
				$('#select'+se).append("<input class='hint' type='hidden' name=selehint"+cou+" >")
		        $('#select'+se+' .hint').val(js[yu].hint_EN);
				$('#select'+se+' .prev_s'+se+' input').attr('placeholder' , js[yu].hint_EN);
				$('#select'+se).append("<input class='back' type='hidden' name=seleback"+cou+" value="+js[yu].Background_c+">");
				$('#select'+se+' .prev_s'+se+' #sey'+se).css('background' ,js[yu].Background_c);
				$('#select'+se+' .prev_s'+se+' input').css('background' ,js[yu].Background_c);
				$('#select'+se+' .prev_s'+se+' .dropdown-menu').css('background' ,js[yu].Background_c);
				$('#select'+se).append("<input class='color' type='hidden' name=selecolor"+cou+" value="+js[yu].Color_c+">");
				$('#select'+se+' .prev_s'+se+' #sey'+se).css('color' ,js[yu].Color_c);
				$('#select'+se+' .prev_s'+se+' #sey'+se).css('font-size' ,js[yu].Font_s+"px" );
				$('#select'+se+' .prev_s'+se+' input').css('font-size' ,js[yu].Font_s+"px");
				$('#select'+se).append("<input class='size' type='hidden' name=selesize"+cou+" value="+js[yu].Font_s+">")
				$('#select'+se+' .prev_s'+se+' .dropdown-menu').css('font-size' ,js[yu].Font_s+"px" );
				$('#select'+se).append("<input class='textarea' type='hidden' >");
				$('#select'+se).append("<input class='opton' type='hidden' name=seleoption"+cou+" >")
			if(js[yu].Font_b ==2){
			$('#select'+se+' .prev_s'+se+' .dropdown-menu').css('font-style' ,"italic" );
				$('#select'+se+' .prev_s'+se+' #sey'+se+' input').css('font-style' ,"italic" );
	
			$('#select'+se).append("<input class='italic' type='hidden' name=boxitalic"+cou+" value='italic'>")
}
			else if(js[yu].Font_b ==1){
				
				$('#select'+se+' .prev_s'+se+' #sey'+se+' input').css('font-weight' ,"bold" );
				$('#select'+se+' .prev_s'+se+' .dropdown-menu').css('font-weight' ,"bold" );
				$('#select'+se).append("<input class='bold' type='hidden' name=boxbold"+cou+" value='bold'>")
				}
			 else if(js[yu].Font_b ==3){
			
				$('#select'+se+' .prev_s'+se+' .dropdown-menu').css('font-style' ,"italic" );
				$('#select'+se+' .prev_s'+se+' #sey'+se+' input').css('font-style' ,"italic" );
				$('#select'+se+' .prev_s'+se+' #sey'+se+' input').css('font-weight' ,"bold" );
				$('#select'+se+' .prev_s'+se+' .dropdown-menu').css('font-weight' ,"bold" );
				$('#select'+se).append("<input class='bold' type='hidden' name=boxbold"+cou+" value='bold'>")
			$('#select'+se).append("<input class='italic' type='hidden' name=boxitalic"+cou+" value='italic'>")
			}
			else if(js[yu].Font_b==6){
				
				$('#select'+se+' .prev_s'+se+' .dropdown-menu').css('font-style' ,"italic" );
				$('#select'+se+' .prev_s'+se+' #sey'+se+' input').css('font-style' ,"italic" );
				$('#select'+se+' .prev_s'+se+' #sey'+se+' input').css('font-weight' ,"bold" );
				$('#select'+se+' .prev_s'+se+' .dropdown-menu').css('font-weight' ,"bold" );
				$('#select'+se+' .prev_s'+se+' .dropdown-menu').css('text-decoration' ,"underline" );
				$('#select'+se+' .prev_s'+se+' #sey'+se+' input').css('text-decoration' ,"underline" );
				$('#select'+se).append("<input class='bold' type='hidden' name=boxbold"+cou+" value='bold'>")
			$('#select'+se).append("<input class='italic' type='hidden' name=boxitalic"+cou+" value='italic'>")
			$('#select'+se).append("<input class='underline' type='hidden' name=boxunderline"+cou+" value='underline'>")
		}
			else if(js[yu].Font_b==5){
				
				$('#select'+se+' .prev_s'+se+' .dropdown-menu').css('text-decoration' ,"underline" );
				$('#select'+se+' .prev_s'+se+' #sey'+se+' input').css('text-decoration' ,"underline" );
				$('#select'+se).append("<input class='bold' type='hidden' name=selebold"+cou+" value='bold'>")
			$('#select'+se).append("<input class='underline' type='hidden' name=seleunderline"+cou+" value='underline'>")
		}
			else if(js[yu].Font_b ==4){
		
				$('#select'+se+' .prev_s'+se+' #sey'+se+' input').css('font-weight' ,"bold" );
				$('#select'+se+' .prev_s'+se+' .dropdown-menu').css('font-weight' ,"bold" );
				$('#select'+se+' .prev_s'+se+' .dropdown-menu').css('text-decoration' ,"underline" );
				$('#select'+se+' .prev_s'+se+' #sey'+se+' input').css('text-decoration' ,"underline" );
				$('#select'+se).append("<input class='bold' type='hidden' name=selebold"+cou+" value='bold'>")
			$('#select'+se).append("<input class='underline' type='hidden' name=seleunderline"+cou+" value='underline'>")
			}
			 if(js[yu].allighment==3){
				
				$('#select'+se+' .prev_s'+se+' input').css('text-align' ,'right');
				$('#select'+se+' .prev_s'+se+' #sey'+se).css('text-align' ,'right');
				$('#select'+se+' .prev_s'+se+' .dropdown-menu').css('text-align' ,'right');
				$('#select'+se).append("<input class='align' type='hidden' name=selealign"+cou+" value='3'>")
			 }
		
				 else if(js[yu].allighment ==1){
				$('#select'+se+' .prev_s'+se+' input').css('text-align' ,'left');
				$('#select'+se+' .prev_s'+se+' #sey'+se).css('text-align' ,'left');
				$('#select'+se+' .prev_s'+se+' .dropdown-menu').css('text-align' ,'left');
				$('#select'+se).append("<input class='align' type='hidden' name=selealign"+cou+" value='1'>")
			}
			else if(js[yu].allighment==2){
			
				$('#select'+se+' .prev_s'+se+' input').css('text-align' ,'center');
				$('#select'+se+' .prev_s'+se+' #sey'+se).css('text-align' ,'center');
				$('#select'+se+' .prev_s'+se+' .dropdown-menu').css('text-align' ,'center');
				$('#select'+se).append("<input class='align' type='hidden' name=selealign"+cou+" value='2'>")
			}
			
				var obj =JSON.parse(js[yu].Option_EN);
				console.log(obj)
				for(var ob in obj){
					if(obj[ob]!=''){
					
				 $('#select'+se+' .prev_s'+se+' #sey'+se+' .dropdown-menu').append('<li role="presentation" id="dro'+v+'"><input role="menuitem" tabindex="-1" type="checkbox">'+obj[ob]+'</li>');
				select[se][v]=obj[ob];
				
				v++;
				 }} 
				var x=select[se];

				$('#select'+se+' .opton').val(JSON.stringify(select[se]))
				$('#select'+se+' .textarea').val(x.toString().replace(/\,/g , '\n'))
				$("#seo"+se).keyup(function(ee) {
					
	$('#select'+se+' .prev_s'+se+' #sey'+se+' .dropdown-menu').html('');
			var val= $(this).val();
        for(var g=0 ; g<=select[se].length-1 ; g++){
			console.log(select[se][g])
			if(select[se][g].match(val)){
				var matv = select[se][g];
	$('#select'+se+' .prev_s'+se+' #sey'+se+' .dropdown-menu').append('<li role="presentation"><input role="menuitem" tabindex="-1" type="checkbox">'+matv+'</li>');
			}}
});	
				if(parent!='elements'){
			$('#select'+se).append("<input class='group' type='hidden' name=selegroup"+cou+" value="+spili[1]+">")
				}
			else{
			$('#select'+se).append("<input class='group' type='hidden' name=selegroup"+cou+" value=''>")
				}
		$('#select'+se).append("<input class='lab' type='hidden' name=seletype"+cou+" value='11'>")
				$('#select'+se).append("<input class='hidden' type='hidden' name=selehide"+cou+" value="+js[yu].Visibilty_component+">")
				$('#select'+se).append("<input class='must' type='hidden' name=selemust"+cou+" value="+js[yu].Must+">")
			
			$("#select"+se+" #sey"+se).hover(
            function(){
			
               $("#"+$(this).attr('id')+" .fa-pencil").toggle();
				$("#"+$(this).attr('id')+" .fa-trash").toggle();
				
			
			}
				
        );	
					$("#sel"+se).hover(
            function(){
			 
               $("#"+$(this).attr('id')+" .fa-pencil").toggle();
				$("#"+$(this).attr('id')+" .fa-trash").toggle();
			});
				$("#se"+se).hover(
            function(){
			
                $("#"+$(this).attr('id')+" .fa-cog").toggle();
				
            }
        );	
	
		}
				   else if(js[yu].ID_component==8){
					   s=0;
				sec++;
				section[sec]=[];
				$("#exampleInputlass").addClass("sc"+sec);
	    $("#exampleInputback").addClass("scback"+sec);
			$("#size").addClass("size_se"+sec);
	 $("#exampleInputhint").addClass("selhint"+sec);
	$("#exampleInputcomment").addClass('section'+sec);
	$("#exampleInputll").addClass("selle"+sec);
	$("#bold").addClass("bold_sc"+sec);
	$("#italic").addClass("italic_sc"+sec);
	$("#underline").addClass("underline_sc"+sec);
	$("#align_left").addClass("alf_sc"+sec);
	$("#align_right").addClass("alr_sc"+sec);
	$("#align_just").addClass("alj_sc"+sec);
	
	 if(js[yu].Grouping !=' '){
			var va= js[yu].Grouping ;
		var spili = va.split('G');
				var parent = 'darggable'+spili[1];
			 } 
			else{
				
				var parent = 'elements';
			 } 
					
				$("#"+parent).append('<div  draggable="true" ondragstart="drag(event)" class="che mar clearfix" id="sec'+sec+'"><div class="element text-field basic ui-draggable pull-left text" id="section'+sec+'"></div><i class="che fa fa-cog pull-right" onclick="text(section'+sec+' ,'+sec+');"></i></div>');
				$('#section'+sec).append('<label id="tt"></label>');
		$('#section'+sec+" #tt").addClass('prev_sc'+sec);
				$('#section'+sec+' .prev_sc'+sec).html('<div class="che bb hide" id="sep'+sec+'"></div><div class="che" id="sed'+sec+'"><input ondragstart="return false;" ondrop="return false;" id="sei'+sec+'" class="form-control" type="text" data-toggle="dropdown"><i class="fa fa-pencil che pull-right pre pp fa-1x" aria-hidden="true" onclick="text(section'+sec+','+sec+');"></i><i onclick="deli(this ,'+sec+');"class="fa fa-trash pre fa-1x che pull-right pp " aria-hidden="true"></i><ul class="dropdown-menu" role="menu" aria-labelledby="menu1"></ul></div>');
				$("#sec"+sec).removeClass('che');
					$('#section'+sec).append("<input class='code' type='hidden' name=sectcode"+cou+" value="+cou+">")
				
				 if(js[yu].Data_EN.length!=0){
				 $('#section'+sec+' .prev_sc'+sec+' #sep'+sec).text(js[yu].Data_EN);
				$('#sep'+sec).removeClass('hide');
				$('#sed'+sec+' .pre').removeClass('pp');
		$('#sed'+sec+' .pre').removeClass('pp');
				$('#section'+sec).append("<input class='label' type='hidden' name='sectlab"+cou+"' value="+js[yu].Data_EN+">");
					 $("#section"+sec+" .label").val(js[yu].Data_EN);
				
			 } 
		
				$('#section'+sec+' .prev_sc'+sec+' #sep'+sec).append('<i class="fa fa-pencil che l pull-right fa-1x" aria-hidden="true" onclick="text(section'+sec+','+sec+');"></i><i onclick="deli(this ,'+sec+');"class="fa fa-trash l fa-1x che pull-right  " aria-hidden="true">')
				$('#section'+sec).append("<input class='hint' type='hidden' name=secthint"+cou+" >")
		        $('#section'+sec+' .hint').val(js[yu].hint_EN);
				$('#section'+sec+' .prev_sc'+sec+' input').attr('placeholder' , js[yu].hint_EN);
				$('#section'+sec).append("<input class='back' type='hidden' name=sectback"+cou+" value="+js[yu].Background_c+">");
				$('#section'+sec+' .prev_sc'+sec+' #sed'+sec).css('background' ,js[yu].Background_c );
				$('#section'+sec+' .prev_sc'+sec+' input').css('background' ,js[yu].Background_c );
				$('#section'+sec+' .prev_sc'+sec+' .dropdown-menu').css('background' ,js[yu].Background_c );
				$('#section'+sec).append("<input class='color' type='hidden' name=sectcolor"+cou+" value="+js[yu].Color_c+">");
				$('#section'+sec+' .prev_sc'+sec+' #sed'+sec).css('color' ,js[yu].Color_c);
				$('#section'+sec+' .prev_sc'+sec+' #sed'+sec).css('font-size' ,js[yu].Font_s+"px" );
				$('#section'+sec+' .prev_sc'+sec+' input').css('font-size' ,js[yu].Font_s+"px" );
				$('#section'+sec).append("<input class='size' type='hidden' name=sectsize"+cou+" value="+js[yu].Font_s+">")
				$('#section'+sec+' .prev_sc'+sec+' .dropdown-menu').css('font-size' ,js[yu].Font_s+"px" );
				$('#section'+sec).append("<input class='textarea' type='hidden' >");
				$('#section'+sec).append("<input class='opton' type='hidden' name=sectoption"+cou+" >");
			
			 if(js[yu].Font_b ==2){
				
				$('#section'+sec+' .prev_sc'+sec+' #sed'+sec).css('font-style' ,"italic" );
			$('#section'+sec).append("<input class='italic' type='hidden' name=sectitalic"+cou+" value='italic'>")
			}
				
			 else if(js[yu].Font_b ==1){
				
				$('#section'+sec+' .prev_sc'+sec+' #sed'+sec).css('font-weight' ,"bold" );
				$('#section'+sec).append("<input class='bold' type='hidden' name=sectbold"+cou+" value='bold'>")
			}	
			
			 else if(js[yu].Font_b ==3){
				
				$('#section'+sec+' .prev_sc'+sec+' #sed'+sec).css('font-style' ,"italic" );
				$('#section'+sec+' .prev_sc'+sec+' #sed'+sec).css('font-weight' ,"bold" );
				$('#section'+sec).append("<input class='bold' type='hidden' name=sectbold"+cou+" value='bold'>")
			$('#section'+sec).append("<input class='italic' type='hidden' name=sectitalic"+cou+" value='italic'>")
			}
			else if(js[yu].Font_b==6){
				
				$('#section'+sec+' .prev_sc'+sec+' #sed'+sec).css('font-style' ,"italic" );
				$('#section'+sec+' .prev_sc'+sec+' #sed'+sec).css('font-weight' ,"bold" );
				$('#section'+sec+' .prev_sc'+sec+' #sed'+sec).css('text-decoration' ,"underline" );
				$('#section'+sec).append("<input class='bold' type='hidden' name=sectbold"+cou+" value='bold'>")
			$('#section'+sec).append("<input class='italic' type='hidden' name=sectitalic"+cou+" value='italic'>")
			$('#section'+sec).append("<input class='underline' type='hidden' name=sectunderline"+cou+" value='underline'>")
			}
			else if(js[yu].Font_b==4){
	
				$('#section'+sec+' .prev_sc'+sec+' #sed'+sec).css('font-weight' ,"bold" );
				$('#section'+sec+' .prev_sc'+sec+' #sed'+sec).css('text-decoration' ,"underline" )
				$('#section'+sec).append("<input class='bold' type='hidden' name=selebold"+cou+" value='bold'>")
			$('#section'+sec).append("<input class='underline' type='hidden' name=seleunderline"+cou+" value='underline'>")
		}
			else if(js[yu].Font_b ==5){
			
			$('#section'+sec+' .prev_sc'+sec+' #sed'+sec).css('font-style' ,"italic" );
				$('#section'+sec+' .prev_sc'+sec+' #sed'+sec).css('text-decoration' ,"underline" )
$('#section'+sec).append("<input class='italic' type='hidden' name=sectitalic"+cou+" value='italic'>")
			$('#section'+sec).append("<input class='underline' type='hidden' name=seleunderline"+cou+" value='underline'>")
			}
			 if(js[yu].allighment ==3){
				
				$('#section'+sec+' .prev_sc'+sec+' input').css('text-align' ,'right');
				$('#section'+sec+' .prev_sc'+sec+' #sed'+sec).css('text-align' ,'right');
				$('#section'+sec+' .prev_sc'+sec+' .dropdown-menu').css('text-align' ,'right');
				$('#section'+sec).append("<input class='align' type='hidden' name=sectalign"+cou+" value='3'>")
			}
				else if(js[yu].allighment==1){
				
				$('#section'+sec+' .prev_sc'+sec+' input').css('text-align' ,'left');
				$('#section'+sec+' .prev_sc'+sec+' #sed'+sec).css('text-align' ,'left');
				$('#section'+sec+' .prev_sc'+sec+' .dropdown-menu').css('text-align' ,'left');
				$('#section'+sec).append("<input class='align' type='hidden' name=sectalign"+cou+" value='1'>")
			}
			else if(js[yu].allighment ==2){
			
				$('#section'+sec+' .prev_sc'+sec+' input').css('text-align' ,'center');
				$('#section'+sec+' .prev_sc'+sec+' #sed'+sec).css('text-align' ,'center');
				$('#section'+sec+' .prev_sc'+sec+' .dropdown-menu').css('text-align' ,'center');
				$('#section'+sec).append("<input class='align' type='hidden' name=sectalign"+cou+" value='2'>")
				
			}
			
				var obj =JSON.parse(js[yu].Option_EN);
				for (var ob in obj){
					if(obj[ob].length!=0){
				 $('#section'+sec+' .prev_sc'+sec+' #sed'+sec+' .dropdown-menu').append('<li role="presentation" id="drope'+v+'"><input role="menuitem" tabindex="-1" type="radio">'+obj[ob]+'</li>');
				section[sec][s]=obj[ob];
				
				s++;
				}} 
				var x=section[sec];

				$('#section'+sec+' .opton').val(JSON.stringify(section[sec]))
				$('#section'+sec+' .textarea').val(x.toString().replace(/\,/g , '\n'))
				$("#seo"+se).keyup(function(ee) {
					
	$('#section'+sec+' .prev_sc'+sec+' #sed'+sec+' .dropdown-menu').html('');
			var val= $(this).val();
        for(var g=0 ; g<=section[sec].length-1 ; g++){
			if(section[sec][g].match(val)){
				var matv = section[sec][g];
	$('#section'+sec+' .prev_sc'+sec+' #sed'+sec+' .dropdown-menu').append('<li role="presentation"><input role="menuitem" tabindex="-1" type="radio">'+matv+'</li>');
			}}
});	
				if(parent!='elements'){
			$('#section'+sec).append("<input class='group' type='hidden' name=sectgroup"+cou+" value="+spili[1]+">")
				}
			else{
			$('#section'+sec).append("<input class='group' type='hidden' name=sectgroup"+cou+" value=''>")	
				}
			$('#section'+sec).append("<input class='lab' type='hidden' name=secttype"+cou+" value='8'>")
				$('#section'+sec).append("<input class='hidden' type='hidden' name=secthide"+cou+" value="+js[yu].Visibilty_component+">")
				$('#section'+sec).append("<input class='must' type='hidden' name=sectmust"+cou+" value="+js[yu].Must+">")
			
				$("#section"+sec+" #sed"+sec).hover(
            function(){
			
               $("#"+$(this).attr('id')+" .fa-pencil").toggle();
				$("#"+$(this).attr('id')+" .fa-trash").toggle();
				
			
			}
				
        );	
					$("#sep"+sec).hover(
            function(){
			 
               $("#"+$(this).attr('id')+" .fa-pencil").toggle();
				$("#"+$(this).attr('id')+" .fa-trash").toggle();
			});
			$("#sec"+sec).hover(
            function(){
			
                $("#"+$(this).attr('id')+" .fa-cog").toggle();
				
            }
        );	

	}	   
			   }
			    $(".fa-pencil").css('display' , 'none');
			$(".fa-trash").hide();
		$(".fa-cog").hide();
           }
		
		
		});
			
			}
	
	
		
				$('.collapse').on('shown.bs.collapse', function(){
				var col = $(this).attr('id');
				var c = col.split('collapse');
	
$('#Group'+c[1]).find(".fa-chevron-right").removeClass("fa-chevron-right").addClass("fa-chevron-down");
$('.panel-heading[href="#'+col+'"]').addClass("active");
}).on('hidden.bs.collapse', function(){
					var col = $(this).attr('id');
				var c = col.split('collapse');
$('#Group'+c[1]).find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-right");
$('.panel-heading.active.collapsed[href="#'+col+'"]').removeClass("active");
});

$("#imgInp").change(function(){
		readURL(this);
	});
		function readURL(input) {

		if (input.files && input.files[0]) {
			var reader = new FileReader();

	reader.onload = function (e) {
		$('#blah').attr('src', e.target.result);
			}

			reader.readAsDataURL(input.files[0]);
		}
	}
$("#appName").keyup(function() {
	
	var val = $(this).val();
$('.pageName').attr('id' , val);
});
		
			$( "#data").change(function() {
				$('#loading').show();
				var ioo=1;
				$('#elements').html('');
				$('.panel-default').html('');
                var appn = $("#data option:selected").text() ;
                $('.AppName2').text(appn) ;
				var my_array= [];
 var val = $(this).val();
				$('#appId').val(val);
					$.ajax({
           type: "GET",
           url: "/choseApps",
           data: { 'app':val}, // serializes the form's elements.
           success: function(data)
           {
			   $('#loading').hide();
			  $('#up').val('update')
			var obj = JSON.parse(data);
			   $('img#blah').attr('src' , obj['con'][0].logo_path)
			   $('#appName').val(obj['con'][0].name)
			   console.log(obj);
			for(yu in obj){
			$('#app_id').val(obj[yu].app_id)
			if(yu != 'con'){
			if(my_array.indexOf(obj[yu].group_code) == -1){
				
			
			$('.panel-default').append('<div class="panel-heading active" data-toggle="collapse" data-parent="#accordion" href="#collapse'+obj[yu].group_code+'"><h4 class="panel-title" id="Group'+obj[yu].group_code+'"> <a  >'+obj[yu].group_name+'</a><span class="fa fa fa-chevron-down pull-right "></span><i class="fa fa-plus pull-right " onclick="groupi(this)" style="display:none"></i><i  class="glyphicon glyphicon-trash pull-right " aria-hidden="true" onclick="groupdelete(this)" style="display:none"></i><i  class="glyphicon glyphicon-pencil pull-right"  onclick="groupedit(this)" style="display:none"></i></h4></div><div id="collapse'+obj[yu].group_code+'" class="panel-collapse collapse in"> </div>')
	
	group= obj[yu].group_code;
	
				my_array[ioo] = obj[yu].group_code;
				ioo++;
		}
			
				$('#collapse'+obj[yu].group_code).append('<div onclick="pagi(this)" class="panel-body part" id="P'+obj[yu].page_code+'"><a class="page" >'+obj[yu].page_name+'</a><i class="fa fa-plus pull-right pag" onclick="paged(this)" style="display:none"></i><i class="glyphicon glyphicon-trash pull-right pag" aria-hidden="true" onclick="pagedelete(this)" style="display:none"></i><i class="glyphicon glyphicon-pencil pull-right page " aria-hidden="true" onclick="pageedit(this)" style="display:none"></i></div>')
page= obj[yu].page_code;
		app = obj[yu].app_id;	
			}}
			   
			$(".panel-title").hover(
		
            function(){
				$("#"+$(this).attr('id')+" .glyphicon-trash").toggle();
				$("#"+$(this).attr('id')+" .fa-plus").toggle();
				$("#"+$(this).attr('id')+" .glyphicon-pencil").toggle();
			}	
        );
	$(".panel-body").hover(
		
            function(){
				$("#"+$(this).attr('id')+" .glyphicon-trash").toggle();
				$("#"+$(this).attr('id')+" .fa-plus").toggle();
				$("#"+$(this).attr('id')+" .glyphicon-pencil").toggle();
			}	
        );
           }});

});
		$('#new').click(function(e) {
            e.preventDefault();
	group=1;
	page=1;
			$('.panel-default').html('');
			$('#blah').attr('src' ,'#');
			$('#up').val('submit');
			$('#appName').val('');
			$('#data').val('te');
			$('#data').children().each(function(){
              app = $(this).val();
               if(app == null) { 
                   app = 0;
               }
            });
			app++;
			$('#appId').val(app);
			var appName = $('#appId').val();
			$('.panel-default').append('<div class="panel-heading active " data-toggle="collapse" data-parent="#accordion" href="#collapse1"><h4 class="panel-title" id="Group1"> <a  > Group1</a><span class="fa fa fa-chevron-down pull-right "></span><i class="fa fa-plus pull-right " onclick="groupi(this)" style="display:none"></i><i onclick="groupdelete(this)"  class="glyphicon glyphicon-trash pull-right " aria-hidden="true" style="display:none"></i><i  class="glyphicon glyphicon-pencil pull-right" onclick="groupedit(this)" style="display:none"></i></h4></div><div id="collapse1" class="panel-collapse collapse in">  <div class="panel-body part " id="P1" onclick="pagi(this)" ><a class="page act" >Page1</a><i class="fa fa-plus pull-right pag" onclick="paged(this)" style="display:none"></i><i onclick="pagedelete(this)" class="glyphicon glyphicon-trash pull-right pag" aria-hidden="true" style="display:none"></i><i  class="glyphicon glyphicon-pencil  pull-right page " aria-hidden="true" style="display:none" onclick="pageedit(this)"></i></div></div>')
		$.ajax({
           type: "GET",
           url: "/page",
           data: { 'apId':appName }, // serializes the form's elements.
           success: function(data)
           {
              		$('.collapse').on('shown.bs.collapse', function(){
				var col = $(this).attr('id');
				var c = col.split('collapse');
	
$('#Group'+c[1]).find(".fa-chevron-right").removeClass("fa-chevron-right").addClass("fa-chevron-down");
$('.panel-heading[href="#'+col+'"]').addClass("active");
}).on('hidden.bs.collapse', function(){
					var col = $(this).attr('id');
				var c = col.split('collapse');
$('#Group'+c[1]).find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-right");
$('.panel-heading.active.collapsed[href="#'+col+'"]').removeClass("active");
});
		  $("#P"+page).hover(
		
            function(){
				$("#"+$(this).attr('id')+" .glyphicon-trash").toggle();
				$("#"+$(this).attr('id')+" .fa-plus").toggle();
				$("#"+$(this).attr('id')+" .glyphicon-pencil").toggle();
			}	
        );
			     $("#Group"+group).hover(
		
            function(){
				$("#"+$(this).attr('id')+" .glyphicon-trash").toggle();
				$("#"+$(this).attr('id')+" .fa-plus").toggle();
				$("#"+$(this).attr('id')+" .glyphicon-pencil").toggle();
			}	
        );
           }});
});	