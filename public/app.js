import Pexeso from './classes/Pexeso.js';

const levelBtns=document.getElementById("levelBtns");
const levelsHTMLColl = levelBtns.children;
const imgsColl = document.getElementsByClassName("div_on_click");
const start =document.getElementById("start"); /*--------I don´t understand why is this not needed ?!?!*/


const pexesoControler = new Pexeso();

start.addEventListener("click", function() {pexesoControler.timer()});
   


for (let i = 0; i < levelsHTMLColl.length; i++) {

    //------LEVEL BUTTONS L.
    //levelsHTMLColl[i].addEventListener("click", pexesoControler.setLevel(this.id) );
    levelsHTMLColl[i].addEventListener("click", event => {pexesoControler.setLevel(event.target.id)} );

  }

  for (let i = 0; i < imgsColl.length; i++) {

    //------IMG PEXESO CONTROL L.
    imgsColl[i].addEventListener("click", function(){pexesoControler.mainFn(this)} );

    //------AFTER ANIMATION DELETE L.
    imgsColl[i].addEventListener("animationend", event => { pexesoControler._deleteImg(event.target) } );
    //------AFTER ANIMATION SHUFFLE L.
    imgsColl[i].addEventListener("animationend", pexesoControler.shuffle);

  }