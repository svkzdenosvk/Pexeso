import Pexeso from './classes/Pexeso.js';

const levelBtns=document.getElementById("levelBtns");
const levelsHTMLColl = levelBtns.children;
const imgsColl = document.getElementsByClassName("div_on_click");


const pexesoControler = new Pexeso();

start.addEventListener("click",pexesoControler.timer());
   


for (let i = 0; i < levelsHTMLColl.length; i++) {

    //------LEVEL BUTTONS L.
    levelsHTMLColl[i].addEventListener("click", function(){ pexesoControler.setLevel(this.id) });
  }

  for (let i = 0; i < imgsColl.length; i++) {

    //------IMG PEXESO CONTROL L.
    imgsColl[i].addEventListener("click", function(){ pexesoControler.mainFn(this) });

    //------AFTER ANIMATION DELETE L.
    imgsColl[i].addEventListener("animationend", function(){ pexesoControler._deleteImg(this) });
    //------AFTER ANIMATION SHUFFLE L.
    imgsColl[i].addEventListener("animationend", pexesoControler.shuffle);

  }