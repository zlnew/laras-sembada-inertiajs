<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        
        <link rel="apple-touch-icon" sizes="180x180" href="/storage/favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/storage/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/storage/favicon/favicon-16x16.png">
        <link rel="manifest" href="/storage/favicon/site.webmanifest">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.ts', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body class="m-0 font-sans text-base antialiased font-normal leading-default bg-gray-50 text-slate-500">
        @inertia
    </body>
</html>
