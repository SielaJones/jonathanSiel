<?php
   /* try{
        $pdo = new PDO("mysql:host=localhost;dbname=persodb","root","pass");
    }catch(Exception $e){
        die('Error of connection :' .$e->getMessage());
    }*/
    $servername = "localhost";
    $username = "root";
    $dbname = "persodb";
    $password = "pass";

    $conn =new mysqli($servername, $username, $password, $dbname);

    if($conn->connect_error){
        echo "Connection error";
    }else{
        echo "Connection Success";
    }

?>