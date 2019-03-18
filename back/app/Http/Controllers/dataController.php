<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class dataController extends Controller
{
	public function __construct()
    {
       
    }

    public function index(Request $request){
    	$method = $request->method();
    	$data = json_decode($request->getContent(), true);
    	if($data){$response = ['method' => $method , 'data' => $data];
    	}else{
            $input = $request->all();
            $data = json_decode($input['data'], true);
            if ($data) {
               $response = ['method' => $method , 'data' => $data];
            }else{
                $response = ['Error' => "I accept Just Json"];
            }
        }
    	$return = json_encode($response);
    	return $return;
    	
    }
}
