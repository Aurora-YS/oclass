<?php

    /*로컬환경에서 접속할 조건 -> 내부 테스트용*/
    $con = mysqli_connect("localhost", "root", "000000", "oclass", 3306);

    /*닷홈 환경하에서 작성할 접속 조건 -> 외부호스트를 통해 세상 공개*/
    //$con = mysqli_connect("localhost", "닷홈 DB 아이디", "닷홈 DB 패스워드", "닷홈 DB 이름(=닷홈 DB 아이디)");
    //$con = mysqli_connect("localhost", "aurora", "abcd1234", "aurora");

    //var_dump($con);
    mysqli_query($con, "SET NAMES utf8");  //sql의 언어 설정(인코딩 utf8로 설정)

?>