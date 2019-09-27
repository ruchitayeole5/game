<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Shooting-Game</title>

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>

<body>

<div class="main">
        <div class="container">
            @yield('content')
        </div>
</div>
    <script src="{{asset('js/jquery.js')}}"></script>
    <script src="{{ asset('js/login.js') }}" ></script>
    @yield('scripts')


</body>

</html>
