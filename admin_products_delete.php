<?php
    if(isset($_POST["program"])){
        $num_program = count($_POST["program"]);
    }else{
        echo ("
            <script>
                alert('삭제할 프로그램을 선택하세요');
                history.go(-1);
            </script>
        ");
    }

    include "./db_con.php";
    for($i=0; $i<$num_program; $i++){
        $num_idx = $_POST["program"][$i];
        $sql = "select * from products where num='$num_idx'";
        $result = mysqli_query($con, $sql);
        $row = mysqli_fetch_array($result);

        $sql = "delete from products where num='$num_idx'";
        mysqli_query($con, $sql);
    }
    mysqli_close($con);

    echo ("
        <script>
            location.href='./admin.php';
        </script>
    ");
?>