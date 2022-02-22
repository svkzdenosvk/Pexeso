"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pexeso_1 = __importDefault(require("./classes/Pexeso"));
var levelBtns = document.getElementById("levelBtns");
var levelsHTMLColl = levelBtns.children;
var imgsColl = document.getElementsByClassName("div_on_click");
var start = document.getElementById("start"); /*--------I don´t understand why is this not needed ?!?!*/
// ----------------------------------------------OBJECTS-------------------------------------------------
var pexesoController = new Pexeso_1.default();
//----------------------------------------------LISTENERS-------------------------------------------------
start.addEventListener("click", function () { pexesoController.timeController.timer(); });
for (var i = 0; i < levelsHTMLColl.length; i++) {
    //------LEVEL BUTTONS L.
    levelsHTMLColl[i].addEventListener("click", function (event) { Pexeso_1.default.setLevelController.setLevel(event.target.id); });
}
for (var i = 0; i < imgsColl.length; i++) {
    //------IMG PEXESO CONTROL L.
    imgsColl[i].addEventListener("click", function () { pexesoController.mainFn(this); });
    //------AFTER ANIMATION DELETE L.
    imgsColl[i].addEventListener("animationend", function (event) { pexesoController.showHideImgController._deleteImg(event.target); });
    //------AFTER ANIMATION SHUFFLE L.
    imgsColl[i].addEventListener("animationend", Pexeso_1.default.shuffleController.shuffle);
}
