import { _hideImage, animateAndDelete } from './ShowHideImg.js';
import shuffle from './Shuffle.js';

import {stticSource,modifyStticSource,level} from './VarsAndConst.js'


/*-------------------------MAIN CONTROL F.-------------------------------------------------*/
/*-----------------------------------------------------------------------------------------*/

   export default function mainFn(element) {/*----------------------------------the most main function to manage pexeso-code */
        
        if(element.classList.contains('mask')){/*-------------------------------if on image is joker´s image */

          var imgElm = element.firstElementChild;
          imgElm.style.opacity="100";/*-----------------------------------------show image */
          element.classList.remove('mask');/*-----------------------------------remove joker image */
          element.classList.add('selected_img');/*------------------------------give specific class for identification*/


          if(stticSource===""){/*-----------------------------------------------if no image is shown, get attribute from clicked*/
             
             modifyStticSource(imgElm.getAttribute("src"));
          }else{/*--------------------------------------------------------------compare sources attribute of showed and clicked */
              
              let firstSelectedImg = document.getElementsByClassName("selected_img")[0];
              let secondSelectedImg= document.getElementsByClassName("selected_img")[1];

              if(stticSource===imgElm.getAttribute("src")){/*-------------------if the same --> remove images */
                   document.body.style.pointerEvents = "none";/*----------------prevent to show third image*/
            
                      animateAndDelete(firstSelectedImg,secondSelectedImg);
                                                                
                      document.body.style.pointerEvents = "auto";/*-------------give back functionality to pointer*/
                      
                      modifyStticSource("");
                                         
              }else{/*----------------------------------------------------------if NOT - the same src-path --> hide images below joker img */
                  document.body.style.pointerEvents = "none";/*-----------------prevent to show third image*/

                  setTimeout(function(){

                      _hideImage(firstSelectedImg);
                      _hideImage(secondSelectedImg);

                      document.body.style.pointerEvents = "auto";/*-------------give back functionality to pointer*/

                      modifyStticSource("");/*----------------------------------clear comparable variable */

                      if(level!="normal"){
                          shuffle();/*------------------------------------------in harder (and hardest) version ... shuffle after good trying*/
                      }

                     
                  }, 300);
              }
          }
      
       }
}

