<?php
    require_once("database.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skywalk Personal Portfolio Website </title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" 
    integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
</head>
<body>
    <!------------------------------------------------Header CODE------------------------------------------------------->
    <?php
        include("header.html");
    ?>
    <!------------------------------------------------ABOUT CODE------------------------------------------------------->
    <?php
        include("about.html");
    ?>
    <!------------------------------------------------SERVICES CODE-------------------------------------------------->
    <?php
        include("services.html");
    ?>
        <!--------------------------------------------Portfolio------------------------------------->
    <?php
        include("portfolio.html");
    ?>
    <!--------------------------------------------Contact------------------------------------->
<div id="contact">
    <div class="container">
        <div class="row">
            <div class="contactLeft">
                <h1 class="subTitle">Contact Me</h1>
                <p><!--font papersend-->skywalk.jilena@gmail.com</p>
                <p><!--font phone-->+237674888692</p>
                <div class="socialIcons">
                    <a href=""><!--font facebook--></a>
                    <a href=""><!--font twitter--></a>
                    <a href=""><!--font instagram--></a>
                    <a href=""><!--font linkedin--></a>
                </div>
                <a href="images/my-cv.pdf" download="" class="btn btn2">Download CV</a>
            </div>
            <div class="contactRight">
                <form action="index.php" method="GET">
                    <input type="text" name="name" placeholder="Your Name" >
                    <input type="email" name="email" placeholder="Your Email" >
                    <textarea name="message" rows="6" placeholder="Your Message" id=""></textarea>
                    <button type="submit" class="btn btn2">Submit</button>
                </form>
            </div>
        </div>
    </div>
    <div class="copyright">
        <p>Copyright @ SkyHunter <!--font sky--></p>
    </div>
</div>
    <?php

    $name = $_REQUEST["name"];
    $email = $_REQUEST["email"];
    $message = $_REQUEST["message"];

   /* $sql2="INSERT INTO 'contactinfo' ( name, email, message) VALUES ( '$name', '$email', '$message')";
    $result=$pdo->query($sql2);ù*/

    $sql = "INSERT INTO contactinfo VALUES (Null,'$name', '$email', '$message')";
    $result = mysqli_query($conn,$sql);

    if(empty($name) || empty($email)  ||empty($message)){
        echo "Fill all the required fields";
        
    }
    else{
        if( $result){
            echo "<h3>record inserted successfull</h3>";
        }
        else{
            echo "<h2>Error<h2>";
        }
    }

   
    ?>    
<script src="index.js"></script>

</body>
</html>
