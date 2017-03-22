<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
  <title>
  	
  	Hightik
  	|
  	@yield('title')
  </title> 
    {!! Html::style('start/css/bootstrap.min.css')!!}
    {!! Html::style('start/css/metisMenu.min.css')!!}
    {!! Html::style('start/css/timeline.css')!!}
    {!! Html::style('start/style.css')!!}
    {!! Html::style('start/css/startmin.css')!!}
    {!! Html::style('start/css/morris.css')!!}
    {!! Html::style('start/css/font-awesome.min.css')!!}
   {!! Html::style('start/css/dataTables/dataTables.bootstrap.css')!!}
     {!! Html::style('start/css/dataTables/dataTables.responsive.css')!!}
        
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
 
  @yield('header')
</head>
<body >
    <div id="wrapper">
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
                                            Logout
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            {{ csrf_field() }}
                                        </form>
                                    </li>
                        </ul>
                    </li>
                     @endif
                </ul>
                <!-- /.navbar-top-links -->
            </nav>

    @yield('content')
     
            <div class="clearfix"></div>
        <!-- // Sidebar menu & content wrapper END -->
       
        <!-- // Footer END -->
  
    {!! Html::script('start/js/jquery.min.js')!!}
        <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
  <script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>
    {!! Html::script('start/js/bootstrap.min.js')!!}
    {!! Html::script('start/js/metisMenu.min.js')!!}
    {!! Html::script('start/js/raphael.min.js')!!}
    {!! Html::script('start/js/morris.min.js')!!}
    {!! Html::script('start/js/morris-data.js')!!}
    {!! Html::script('start/js/startmin.js')!!}
    {!! Html::script('start/js/dataTables/jquery.dataTables.min.js')!!}
    {!! Html::script('start/js/dataTables/dataTables.bootstrap.min.js')!!}
    {!! Html::script('export/jquery.base64.js')!!}
    {!! Html::script('export/tableExport.js')!!}
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://cdn.datatables.net/fixedcolumns/3.2.2/js/dataTables.fixedColumns.min.js"></script>
    
   
@yield('footer')
    </div>
</body>
</html>
