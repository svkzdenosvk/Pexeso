import checkEnd from './CheckEnd.js';


    /*------------------------SHOW and HIDE img F.-------------------------------------------------*/
    /*---------------------------------------------------------------------------------------------*/

    function _animate(element){

        element.classList.add("rotate-center");
     
    }

    export function animateAndDelete(first,second){

        _animate(first);
        _animate(second);
    }

   export function _deleteImg(el){/*--------------------------------------------------------partial f. to remove the same showed images*/
        
        el.remove();
        checkEnd();/*-----------------------------------------------------------------after remove check if all images is removed */

   }

   export function _hideImage(elm){/*-------------------------------------------------------partial f. to hide showed image*/
        elm.classList.add('mask');/*--------------------------------------------------hide image below joker´s image*/
        elm.firstElementChild.style.opacity="0";/*------------------------------------hide image*/
        elm.classList.remove('selected_img');/*---------------------------------------remove specific class for identification*/
    }

    // module.exports={animateAndDelete, _deleteImg, _hideImage};