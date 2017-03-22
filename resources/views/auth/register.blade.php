<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>Hightik | Register</title>

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
                            <h3 class="panel-title">Please Register</h3>
                        </div>
                        <div class="panel-body">
                    <form class="form-horizontal" role="form" method="POST" action="{{ route('register') }}">
                        {{ csrf_field() }}
                        <fieldset>
                        <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                                <input  placeholder="Name" id="name" type="text" class="form-control" name="name" value="{{ old('name') }}" required autofocus>

                                @if ($errors->has('name'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                      
                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            
                                <input id="email" placeholder="E-mail" type="email" class="form-control" name="email" value="{{ old('email') }}" required>

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                       
                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                           
                                <input placeholder="Password" id="password" type="password" class="form-control" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        
                        <div class="form-group">
                           
                                <input id="password-confirm" placeholder="Confirm password" type="password" class="form-control" name="password_confirmation" required>
                            </div>
                        
                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <button type="submit" class="btn btn-lg btn-success ">
                                    Register
                                </button>
                                <a class="btn btn-link" href="{{ route('login') }}">
                                    To Login >>
                                </a>
                            </div>
                        </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </body>
</html>
