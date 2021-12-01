<?php 
require "functions.php";
?>

<!DOCTYPE html>
<html lang="sk">
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
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


        <script type="text/javascript" src="pexeso.js"></script>

        <link rel="stylesheet" href="pexeso.css" >

        <title>Pexeso</title>
    </head>
    <body>
        
        <div >
            <div id="timeAndStart">
                <div  id="seconds" >0 s</div>
                <div  id="start" onclick="timer()">START</div>
            </div>
            <div id="up">
                <div  id="normal"  onclick="setLevel(this)">NORMAL</div>
                <div  id="harder"  onclick="setLevel(this)">HARDER</div>
                <div  id="hardest" onclick="setLevel(this)">HARDEST</div>
            </div>

        </div>

        <h1>Vstúpili ste do hry Pexeso, najskôr nastavte obtiažnosť</h1>
        
        <div class="column_content" id="content">
            <div class="row" id="row">
                <?php view_el(_echo_img()); ?>  
            </div> 
        </div>

    </body>
</html>

<?php



?>