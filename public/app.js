import mainFn from './modules/MainControl.js';
import setLevel from './modules/SetLevel.js';
import { _deleteImg } from './modules/ShowHideImg.js';
import shuffle from './modules/Shuffle.js';
import { timer } from './modules/Time.js';

import {levelsHTMLColl, imgsColl,start} from './modules/VarsAndConst.js'

//------------------------------------------------------------LISTENERS---------------------------------------------
//------START BUTTON L.
start.addEventListener("click",timer);
   


for (let i = 0; i < levelsHTMLColl.length; i++) {

    //------LEVEL BUTTONS L.
    levelsHTMLColl[i].addEventListener("click", function(){ setLevel(this.id); });
  }


for (let i = 0; i < imgsColl.length; i++) {

    //------IMG PEXESO CONTROL L.
    imgsColl[i].addEventListener("click", function(){ mainFn(this); });

    //------AFTER ANIMATION DELETE L.
    imgsColl[i].addEventListener("animationend", function(){ _deleteImg(this); });
    //------AFTER ANIMATION SHUFFLE L.
    imgsColl[i].addEventListener("animationend", shuffle);

  }