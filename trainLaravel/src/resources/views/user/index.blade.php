<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>
</head>
<body class="antialiased">
<div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">

    <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div class="flex justify-center pt-8 sm:justify-start sm:pt-0">
            <div>
{{--                {{$userList}}--}}
                @foreach($userList as $user)
                    @foreach($user as $u)
                    {{$u}}
                    @endforeach
                @endforeach
{{--                <table class="table table-striped table-bordered">--}}
{{--                    <thead>--}}
{{--                    <tr>--}}
{{--                        <td>ID</td>--}}
{{--                        <td>Name</td>--}}
{{--                        <td>Position</td>--}}
{{--                        <td>Action</td>--}}
{{--                    </tr>--}}
{{--                    </thead>--}}
{{--                    <tbody>--}}
{{--                    @foreach($user as $key => $value)--}}
{{--                        <tr>--}}
{{--                            <td>{{ $value }}</td>--}}
{{--                            <td>{{ $value }}</td>--}}
{{--                            <td>{{ $value }}</td>--}}

{{--                            <!-- we will also add show, edit, and delete buttons -->--}}
{{--                            <td>--}}

{{--                                <!-- delete the shark (uses the destroy method DESTROY /sharks/{id} -->--}}
{{--                                <!-- we will add this later since its a little more complicated than the other two buttons -->--}}

{{--                                <!-- show the shark (uses the show method found at GET /sharks/{id} -->--}}
{{--                                <a class="btn btn-small btn-success" href="{{ URL::to('user/' . $value->id) }}">Show this user</a>--}}

{{--                                <!-- edit this shark (uses the edit method found at GET /sharks/{id}/edit -->--}}
{{--                                <a class="btn btn-small btn-info" href="{{ URL::to('user/' . $value->id . '/edit') }}">Edit this user</a>--}}

{{--                            </td>--}}
{{--                        </tr>--}}
{{--                    @endforeach--}}
{{--                    </tbody>--}}
{{--                </table>--}}
            </div>
        </div>

    </div>
</div>
</body>
</html>
