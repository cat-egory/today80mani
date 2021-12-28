<?php

namespace App\Http\Controllers;

class UserController extends Controller
{

    public function show($id) {
//        http://localhost:8080/user/123
        return view('user.profile', ['user' => 'AAAAA' . $id]);
    }
    public function index() {
        $path = base_path('/database/sample/data.json');
        $file = file_get_contents($path);
        $jsonFile = json_decode($file, false,);

//        dd(array_key_exists('userList', $jsonFile), isset($jsonFile['userList']));
//        dd($jsonFile->userList);

        return view('user.index', ['userList' =>$jsonFile->userList]);

    }

    public function create() {

    }

    public function store() {

    }


}
