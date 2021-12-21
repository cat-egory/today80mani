<?php

namespace App\Http\Controllers;

class UserController extends Controller
{

    public function show($id) {
//        http://localhost:8080/user/123
        return view('user.profile', ['user' => 'AAAAA' . $id]);
    }
}
