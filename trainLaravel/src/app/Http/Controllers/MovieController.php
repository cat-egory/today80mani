<?php

namespace App\Http\Controllers;

class MovieController extends Controller
{
    public function index() {

        $headers = array("X-Naver-Client-Id: ".env('NAVER_CLIENT_ID', 'sample'), "X-Naver-Client-Secret: ".env('NAVER_CLIENT_KEY', 'test'));

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://openapi.naver.com/v1/search/movie.json?query=%EC%A3%BC%EC%8B%9D&display=10&start=1&genre=1");
        curl_setopt($ch, CURLOPT_HEADER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSH_COMPRESSION, true);

        $response = curl_exec($ch);
        curl_close($ch);

        $result = preg_split('/\r\n/', $response);

        $movieList = $result[15];

        $jsonFile = json_decode($movieList, false,);
//        dd($jsonFile);


        return view('movie.index', ['movieList' =>$jsonFile->items]);

    }
}
