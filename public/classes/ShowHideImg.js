import CheckEnd from "./CheckEnd.js";
/*------------------------SHOW and HIDE img CLASS----------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/
export default class ShowHideImg {
    constructor() {
        this.checkEndController = new CheckEnd();
    }
    _animate(element) {
        element.classList.add("rotate-center");
    }
    animateAndDelete(first, second) {
        this._animate(first);
        this._animate(second);
    }
    _deleteImg(el) {
        el.remove();
        this.checkEndController.checkEnd(); /*-----------------------------------------after remove check if all images is removed */
    }
    static _hideImage(elm) {
        elm.classList.add('mask'); /*--------------------------------------------------hide image below joker´s image*/
        let elmChildren = elm.children;
        elmChildren[0].style.opacity = "0"; /*------------------------------------hide image*/
        elm.classList.remove('selected_img'); /*---------------------------------------remove specific class for identification*/
    }
}
