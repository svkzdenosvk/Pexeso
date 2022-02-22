"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CheckEnd_1 = __importDefault(require("./CheckEnd"));
/*------------------------SHOW and HIDE img CLASS----------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/
var ShowHideImg = /** @class */ (function () {
    function ShowHideImg() {
        this.checkEndController = new CheckEnd_1.default();
    }
    ShowHideImg.prototype._animate = function (element) {
        element.classList.add("rotate-center");
    };
    ShowHideImg.prototype.animateAndDelete = function (first, second) {
        this._animate(first);
        this._animate(second);
    };
    ShowHideImg.prototype._deleteImg = function (el) {
        el.remove();
        this.checkEndController.checkEnd(); /*-----------------------------------------after remove check if all images is removed */
    };
    ShowHideImg._hideImage = function (elm) {
        elm.classList.add('mask'); /*--------------------------------------------------hide image below joker´s image*/
        elm.firstElementChild.style.opacity = "0"; /*------------------------------------hide image*/
        elm.classList.remove('selected_img'); /*---------------------------------------remove specific class for identification*/
    };
    return ShowHideImg;
}());
exports.default = ShowHideImg;
