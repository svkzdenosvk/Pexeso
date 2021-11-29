<?php

// get images
function _get_imgs():array {
   
    return array_map('basename', glob('pictures/pexeso/*.jpg'));
}


// remove extensions
function _remove_ext():array{

    $images=_get_imgs();

    return array_map(function($item) { return pathinfo($item, PATHINFO_FILENAME); }
    ,$images);
}

// write img name without extensions and shuffle
function _echo_img():array{
    $images=_remove_ext();
    $images_all=array_merge($images, $images);
    return shuffle($images_all)? $images_all : $images_all;
}

// render images to page
function view_el(array $arr){

    foreach ($arr as $value) {
       
    echo <<<END
         <div class='mask div_on_click' onclick="mainFn(this)">
              <img  src='pictures/pexeso/{$value}.jpg' alt='Smiley face' >  
         </div>    
         END;
      }
}


