import Pexeso from './classes/Pexeso.js';

const levelBtns=document.getElementById("levelBtns");
const levelsHTMLColl = levelBtns.children;
const imgsColl = document.getElementsByClassName("div_on_click");
const start =document.getElementById("start"); /*--------I don´t understand why is this not needed ?!?!*/

// ----------------------------------------------OBJECTS-------------------------------------------------
const pexesoController = new Pexeso();

//----------------------------------------------LISTENERS-------------------------------------------------

start.addEventListener("click", function() {pexesoController.timeController.timer()});
   


for (let i = 0; i < levelsHTMLColl.length; i++) {

    //------LEVEL BUTTONS L.
    levelsHTMLColl[i].addEventListener("click", event => {Pexeso.setLevelController.setLevel(event.target.id)} );

  }

  for (let i = 0; i < imgsColl.length; i++) {

    //------IMG PEXESO CONTROL L.
    imgsColl[i].addEventListener("click", function(){pexesoController.mainFn(this)} );

    //------AFTER ANIMATION DELETE L.
    imgsColl[i].addEventListener("animationend", event => { pexesoController.showHideImgController._deleteImg(event.target) } );
    //------AFTER ANIMATION SHUFFLE L.
    imgsColl[i].addEventListener("animationend", Pexeso.shuffleController.shuffle);

  }