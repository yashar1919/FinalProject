<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: PUT");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    
    include_once '../config/database.php';
    include_once '../class/movies.php';
    
    $database = new Database();
    $db = $database->getConnection();
    
    $item = new Movie($db);
    
    $data = json_decode(file_get_contents("php://input"));
    
    $item->id = $data->id;
    
    // movie values
    $item->name = $data->name;
    $item->poster = $data->poster;
    $item->description = $data->description;
    $item->created = $data->created;
    
    if($item->updateMovie()){
        echo json_encode("Movie data updated.");
    } else{
        echo json_encode("Data could not be updated");
    }
?>