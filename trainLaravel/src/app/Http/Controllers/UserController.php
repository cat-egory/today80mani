<?php

namespace App\Http\Controllers;

class UserController extends Controller
{

    public function show($id) {
//        http://localhost:8080/user/123
        return view('user.profile', ['user' => 'AAAAA' . $id]);
    }
    public function index() {
        $collection = collect([1,2,3]);

        $tempUser = $collection->map( function ($item, $key) {
            return [
                'id'=> $item, 'name'=> '어제의 그녀'.$item, 'position'=> '<supervisor'.$item.'>'
            ];
        });

//        dd($tempUser);

        return view('user.index', ['userList' => $tempUser]);

    }

    public function create() {

    }

    public function store() {

    }


}
