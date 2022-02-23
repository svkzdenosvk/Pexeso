import CheckEnd from "./CheckEnd.js";

/*------------------------SHOW and HIDE img CLASS----------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/
export default class ShowHideImg{

    checkEndController = new CheckEnd();


    private _animate(element: HTMLDivElement){

        element.classList.add("rotate-center");
     
    }

     animateAndDelete(first:HTMLDivElement,second:HTMLDivElement){

        this._animate(first);
        this._animate(second);
    }

    _deleteImg(el: HTMLDivElement){/*-----------------------------------------------------------------partial f. to remove the same showed images*/
        
        el.remove();
        this.checkEndController.checkEnd();/*-----------------------------------------after remove check if all images is removed */

   }

    static _hideImage(elm:HTMLDivElement){/*----------------------------------------------------------partial f. to hide showed image*/
        elm.classList.add('mask');/*--------------------------------------------------hide image below joker´s image*/
        
        let elmChildren=elm.children as HTMLCollectionOf<HTMLElement>
        elmChildren[0].style.opacity="0";/*------------------------------------hide image*/
        elm.classList.remove('selected_img');/*---------------------------------------remove specific class for identification*/
    }


}