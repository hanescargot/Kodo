<?php
    $db_host = "localhost"; 
    $db_user = "kodo"; 
    $db_passwd = "mrhikod3!";
    $db_name = "kodo"; 

    $name = $_POST['name'];
    $email = $_POST['email'];
    $pw = $_POST['pw'];
    $msg = $_POST['message'];

    // MySQL - DB 접속.
    $conn = mysqli_connect($db_host,$db_user,$db_passwd,$db_name);

    if (mysqli_connect_errno()){
    echo "MySQL 연결 오류: " . mysqli_connect_error();
    exit;
    } else {
    echo "DB : \"$db_name\"에 접속 성공.<br/>.$name";
    echo "$name.",".$email.",".$pw.",".$msg.";
    }
    $sql = "INSERT INTO sign_in_request (name, email, pw, msg) VALUES ('$name', '$email', '$pw', '$msg')";
    try{
        mysqli_query($conn, $sql);
    } catch(PDOException $e) {
        die("Database error: " . $e->getMessage()); 
    }
?>
