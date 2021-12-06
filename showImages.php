<?php

if(isset($_GET["duck"])){
    $count = $_GET["duck"];
    for($i = 0; $i < $count; $i++){
        echo "<img src='duck.jpg' alt='Duck'>";
    }
}

if(isset($_GET["chicken"])){
    $count = $_GET["chicken"];
    for($i = 0; $i < $count; $i++){
        echo "<img src='chicken.jpg' alt='Chicken'>";
    }
}
?>