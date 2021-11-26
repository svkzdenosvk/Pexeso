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

        <script type="text/javascript" src="pexeso.js"></script>
        <!-- <script type="module" src="pexeso.js"></script> -->

        <link rel="stylesheet" href="pexeso.css" >

        <title>Pexeso</title>
    </head>
    <body>
    <div>
        <div class="row_first2">
            <div id="timeAndStart">
                <div class="row_first_part_same" id="seconds" >0 s</div>
                <div class="row_first_part_same" id="start" onclick="timer()">START</div>
            </div>
            <div id="up">
                <div class="row_first_part_same" id="normal" onclick="setLevel('normal')">NORMAL</div>
                <div class="row_first_part_same" id="harder" onclick="setLevel('harder')">HARDER</div>
                <div class="row_first_part_same" id="hardest" onclick="setLevel('hardest')">HARDEST</div>
            </div>

        </div>

        <h1>Vstúpili ste do hry Pexeso, najskôr nastavte obtiažnosť</h1>
    </div>


    <div class="column_content">
        <div class="row">
            <?php view_el(echo_img()); ?>  
        </div> 
    </div>

    </body>
</html>

<?php



?>