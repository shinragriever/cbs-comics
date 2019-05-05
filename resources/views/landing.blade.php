<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Comic Book Store</title>

        <!-- Fonts -->
        <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">
        <link href="{{asset('/css/app.css')}}" rel="stylesheet">
        
        <link
        <!-- Styles -->
        <style>
            html, body {
                font-family: 'Roboto', sans-serif;
               
            }

           
        </style>
    </head>
    <body>
        <div id="app">
            <app></app>
        </div>



        <script src="{{mix('/js/app.js')}}"></script>
        
    </body>
</html>
