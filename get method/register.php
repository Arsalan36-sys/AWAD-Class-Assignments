<?php
if (isset($_GET['submit'])){
    $name = $_GET['name'];
    $email = $_GET['email'];

    if(empty($name)){
        echo "Please enter your name";
    } else if (empty($email)){
        echo "Please enter your email";
    }
    else{
        echo $name;
        echo "<br>";
        echo $email;
    }
}else{
    echo " Not Authorized";
}