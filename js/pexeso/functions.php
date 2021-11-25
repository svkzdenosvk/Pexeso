<?php


// get images
function get_imgs():array {
   
    return array_map('basename', glob('pictures/pexeso/*.jpg'));
}


// remove extensions
function remove_ext():array{

    $images=get_imgs();

    return array_map(function($item) { return pathinfo($item, PATHINFO_FILENAME); }
    ,$images);
}

// write img name without extensions and shuffle
function echo_img():array{
    $images=remove_ext();
    $images_all=array_merge($images, $images);
    return shuffle($images_all)? $images_all : $images_all;
}


function view_el(array $arr){

    foreach ($arr as $value) {
       
    //    echo "<img  src='pictures/".$value.jpg' alt='Smiley face' >";
    echo <<<END
         <div class='mask' onclick="completeFn(this)">
         <img  src='pictures/pexeso/{$value}.jpg' alt='Smiley face' >  
         </div>    
         END;
      }
}


// echo <<<END
// <img  src='pictures/$value.jpg' alt='Smiley face'>
// END;



// <?php
//             for($i = 0; $i < 10; $i += 2):
//         ?>       
 <!--                 <div class='mask' onclick="completeFn(this)">
                <img  src="pictures/sun.jpg" alt="Smiley face" >
              </div> 
-->
       <?php
//             endfor;
//         ?>