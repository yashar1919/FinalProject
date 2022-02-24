<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    include_once '../config/database.php';
    include_once '../class/movies.php';

    $database = new Database();
    $db = $database->getConnection();

    $items = new Movie($db);

    $stmt = $items->getMovies();
    $itemCount = $stmt->rowCount();

    if($itemCount > 0){
        
        $movieArr = array();


        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $e = array(
                "id" => $id,
                "name" => $name,
                "poster" => $poster,
                "description" => $description,
                "created" => $created
            );
            array_push($movieArr, $e);
        }
        echo json_encode($movieArr);
    }

    else{
        http_response_code(404);
        echo json_encode(
            array("messposter" => "No record found.")
        );
    }
?>