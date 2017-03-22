<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>Hightik | Login</title>

        <!-- Bootstrap Core CSS -->
        {!! Html::style('start/css/bootstrap.min.css')!!}
        {!! Html::style('start/css/metisMenu.min.css')!!}
        {!! Html::style('start/css/startmin.css')!!}
         {!! Html::style('start/css/font-awesome.min.css')!!}

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>

        <div class="container">
            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <div class="login-panel panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">Please Sign In</h3>
                        </div>
                        <div class="panel-body">
                            <form class="form-horizontal" role="form" method="POST" action="{{ route('login') }}">
                                 {{ csrf_field() }}
                                <fieldset>
                                    <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                        <input class="form-control" placeholder="E-mail" name="email" type="email" autofocus>
                                        @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                                    </div>
                                    
                      
                                    <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                        
                                        <input class="form-control" placeholder="Password" name="password" type="password" value="" required>
                                        @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                                    </div>
                                  
                                    <div class="checkbox">
                                        <label>
                                             <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}>Remember Me
                                        </label>
                                    </div>
                                    <!-- Change this to a button or input when using this as a form -->
                                     <button type="submit" class="btn btn-lg btn-success btn-block">
                                    Login
                                </button>
                                <a class="btn btn-link" href="{{ route('password.request') }}">
                                    Forgot Your Password?
                                </a>
                                 <a class="btn btn-link" href="{{ route('register') }}">
                                    To Register 
                                </a>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  {!! Html::script('start/js/jquery.min.js')!!}
    {!! Html::script('start/js/bootstrap.min.js')!!}
    {!! Html::script('start/js/metisMenu.min.js')!!}
    {!! Html::script('start/js/startmin.js')!!}
        
    </body>
</html>

