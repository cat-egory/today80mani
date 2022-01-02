<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel Naver Movie List</title>

    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">
    <!-- Styles -->
    <style>
    </style>
</head>
<body class="antialiased">
<div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">

    <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div class="flex justify-center pt-8 sm:justify-start sm:pt-0">
            <div>
                <table class="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <td>Title</td>
                        <td>Link</td>
                        <td>Actor</td>
                        <td>Action</td>
                    </tr>
                    </thead>
                    <tbody>
                        @foreach($movieList as $key => $value)
                        <tr>
                            <td>{{ $value->title}}</td>
                            <td>{{ $value->link }}</td>
                            <td>{{ $value->actor}}</td>

                            <td>
                                <a class="btn btn-small btn-success" href="{{ URL::to($value->link) }}">Show this movie</a>

                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</div>
</body>
</html>
