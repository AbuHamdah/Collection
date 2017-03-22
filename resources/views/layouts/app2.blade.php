<!DOCTYPE html>
<!--[if lt IE 7]> <html class="ie lt-ie9 lt-ie8 lt-ie7 sidebar sidebar-discover"> <![endif]-->
<!--[if IE 7]>    <html class="ie lt-ie9 lt-ie8 sidebar sidebar-discover"> <![endif]-->
<!--[if IE 8]>    <html class="ie lt-ie9 sidebar sidebar-discover"> <![endif]-->
<!--[if gt IE 8]> <html class="ie sidebar sidebar-discover"> <![endif]-->
<!--[if !IE]><!-->
<html class="sidebar sidebar-discover">
<!-- <![endif]-->
<head>
    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
    <!-- 
	**********************************************************
	In development, use the LESS files and the less.js compiler
	instead of the minified CSS loaded by default.
	**********************************************************
	{{!! Html::style('assets/less/admin/module.admin.stylesheet-complete.sidebar_type.discover.less')!!}}
	{{!! Html::style('assets/less/admin/module.admin.stylesheet-complete.sidebar_type.collapse.less')!!}}
	
	-->
    <!--[if lt IE 9]><link rel="stylesheet" href="assets/components/library/bootstrap/css/bootstrap.min.css" /><![endif]-->
    {!! Html::style('assets/css/admin/module.admin.stylesheet-complete.sidebar_type.discover.min.css')!!}
    {!! Html::style('assets/css/style.css')!!}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
    
	-->
   <style>
	  ul#menu_tables a {
    font-size: 11px !important;
}
	   ul#menu_table a {
    font-size: 11px !important;
}
	</style>
    <!--[if lt IE 9]><link rel="stylesheet" href="assets/components/library/bootstrap/css/bootstrap.min.css" /><![endif]-->
  
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
   
    
    {!! Html::script('assets/css/admin/module.admin.stylesheet-complete.sidebar_type.collapse.min.css')!!}
    {!! Html::script('assets/components/library/jquery/jquery.min.js?v=v1.0.3-rc2&sv=v0.0.1.1')!!}
    {!! Html::script('assets/components/library/jquery/jquery-migrate.min.js?v=v1.0.3-rc2&sv=v0.0.1.1')!!}
    {!! Html::script('assets/components/library/modernizr/modernizr.js?v=v1.0.3-rc2&sv=v0.0.1.1')!!}
    {!! Html::script('assets/components/plugins/less-js/less.min.js?v=v1.0.3-rc2&sv=v0.0.1.1')!!}
    {!! Html::script('assets/components/modules/admin/charts/flot/assets/lib/excanvas.js?v=v1.0.3-rc2')!!}
    {!! Html::script('assets/components/plugins/browser/ie/ie.prototype.polyfill.js?v=v1.0.3-rc2&sv=v0.0.1.1')!!}

   
    <script>
    if ( /*@cc_on!@*/ false && document.documentMode === 10)
    {
        document.documentElement.className += ' ie ie10';
    }
    </script>
  <title>
  	
  	school
  	|
  	@yield('title')
  </title>  
  @yield('header')
</head>
<body >
         
   <div >
  
   <nav class="navbar hidden-print main " role="navigation">
  
    <ul class="main pull-right ">

        <li class="dropdown username">
          
             <ul class="nav navbar-nav navbar-right">
                    <!-- Authentication Links -->
                    @if (Auth::guest())
                        <li><a href="{{ url('/login') }}">Login</a></li>
                        
                    @else
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                {{ Auth::user()->name }} <span class="caret"></span>
                            </a>

                            <ul class="dropdown-menu" role="menu">
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
        </li>
    </ul>
    <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav">

            <li><a href="{{ url('/home') }}">Home</a></li>

        </ul>
    </div>
</nav>
    

    @yield('content')
	   </div>
            <div class="clearfix"></div>
        <!-- // Sidebar menu & content wrapper END -->
       
        <!-- // Footer END -->
    </div>
    <!-- // Main Container Fluid END -->
    <!-- Global -->
    <script data-id="App.Config">
    var App = {};
    var basePath = '',
        commonPath = '../assets/',
        rootPath = '../',
        DEV = false,
        componentsPath = 'assets/components/';
    var primaryColor = '#3695d5',
        dangerColor = '#b55151',
        successColor = '#609450',
        infoColor = '#4a8bc2',
        warningColor = '#ab7a4b',
        inverseColor = '#45484d';
    var themerPrimaryColor = primaryColor;
    </script>
 
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
@yield('footer')
    
</body>
</html>
