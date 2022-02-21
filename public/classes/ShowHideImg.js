import CheckEnd from "./CheckEnd.js";

export default class ShowHideImg{

    checkEndController = new CheckEnd();

    /*------------------------SHOW and HIDE img F.-------------------------------------------------*/
    /*---------------------------------------------------------------------------------------------*/

    static _animate(element){

        element.classList.add("rotate-center");
     
    }

    static animateAndDelete(first,second){

        this._animate(first);
        this._animate(second);
    }

    _deleteImg(el){/*-----------------------------------------------------------------partial f. to remove the same showed images*/
        
        el.remove();
        this.checkEndController.checkEnd();/*--------------------------------------------------------after remove check if all images is removed */

   }

   static _hideImage(elm){/*----------------------------------------------------------partial f. to hide showed image*/
        elm.classList.add('mask');/*--------------------------------------------------hide image below joker´s image*/
        elm.firstElementChild.style.opacity="0";/*------------------------------------hide image*/
        elm.classList.remove('selected_img');/*---------------------------------------remove specific class for identification*/
    }


}