<?php 
require "functions.php";
?>

<!DOCTYPE html>
<html lang="en">
    <head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-8WH83JV9LP"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8WH83JV9LP');
</script>
        <meta charset="UTF-8">
        <script type="text/javascript" src="dodatky.js"></script>

        <script type="text/javascript" src="pexeso.js"></script>

        <link rel="stylesheet" href="pexeso.css" >

        <title>Pexeso</title>
    </head>
    <body>
    <div>
        <div class="row_first">
            <div id="up__left">
                <div class="row_first_part_same" id="seconds" >0 s</div>
                <div class="row_first_part_same" id="start" onclick="timer();">START</div>
            </div>
            <div class="row_first_part_same" id="harder" onclick="setHarder()">HARDER</div>
            <div class="row_first_part_same" id="hardest" onclick="setHardest()">HARDEST</div>
        </div>

        <h1>Pexeso</h1>
    </div>


    <div class="column_content">
        <?php
        
            print_r(echo_img());
        ?>
    </div>

    </body>
</html>

<?php



?>