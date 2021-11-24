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

// write img name without extensions
function echo_img():array{
    return remove_ext();
}

// print_r($images);

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