//import logo from './logo.svg';
import { useState, useRef } from "react";

import { DivPictures } from "./components/DivPictures";
import { LevelBtn } from "./components/LevelBtn";
//import { TimeAndStart } from './components/TimeAndStart';
import "./App.css";

function App() {
  //const start =document.getElementById("start"); /*--------I don´t understand why is this not needed ?!?!*/

  //const levelBtns=this.refs.levelBtns;
  // const levelBtns=useRef();
  // const secondsEl=useRef();
  const headingText = useRef();

  const [level, setLevel] = useState("");
  const [h1Style, setH1style] = useState("");
  const [h1Context, setH1context] = useState(
    "Vstúpili ste do hry Pexeso, najskôr nastavte obtiažnosť"
  );
  const [lvlBtnsStyle, setLevelBtnsStyle] = useState("");
  const [timeAndStartStyle, setTimeAndStartStyle] = useState("");
  const [secondsStyle, setSecondsStylle] = useState("");

  const secondsEl = document.getElementById("seconds");

  // const start =document.getElementById("start");

  const levelBtns = document.getElementById("levelBtns");

  //if(levelBtns){const levelsHTMLColl = levelBtns.children;

  //const imgsColl = document.getElementsByClassName("div_on_click");
  //------START BUTTON L.
  // start.addEventListener("click",TimeAndStart.timer());

  //for (let i = 0; i < levelsHTMLColl.length; i++) {

  //------LEVEL BUTTONS L.
  //  levelsHTMLColl[i].addEventListener("click", function(){ setLevel(this.id); });
  //      levelsHTMLColl[i].addEventListener("click", function(){ setLevel("this.id"); });

  //}
  //}

  // for (let i = 0; i < imgsColl.length; i++) {

  //     //------IMG PEXESO CONTROL L.
  //     imgsColl[i].addEventListener("click", function(){ mainFn(this); });

  //     //------AFTER ANIMATION DELETE L.
  //     imgsColl[i].addEventListener("animationend", function(){ _deleteImg(this); });
  //     //------AFTER ANIMATION SHUFFLE L.
  //     imgsColl[i].addEventListener("animationend", shuffle);

  // }
  function _setLevelChanges(colorText, colorBG) {
    /*--------------------------------- partial function for set level of the game*/
    // set H1
    //let headingText = this.refs.h1;
    setH1style("color", colorText);
    //headingText.style.color=colorText;
    //  headingText.current.style({color:colorText});
    setH1context("Pexeso");
     headingText.textContent="Pexeso";

    // set background of page
    document.getElementsByTagName("BODY")[0].style.backgroundColor = colorBG;

    // set disappear settings buttons and show timer and starter of game
    //levelBtns.style.display="none";
    setLevelBtnsStyle("display:none");
    //document.getElementById("timeAndStart").style.display="flex";
    setTimeAndStartStyle("display:flex");
    // secondsEl.style.color=colorText;
    setSecondsStylle("color", colorText);
  }

  function setHarder() {
    /*----------------------------------------------------------function for set the harder version of game*/
    this._setLevelChanges("white", "#4d141d");
  }

  function setHardest() {
    /*---------------------------------------------------------function for set the hardest version of game*/
    this._setLevelChanges("white", "blue");
  }

  function setNormal() {
    _setLevelChanges("black");
  }

  function my_setLevel(leveliD ) {
    /*-----------------------------------------------------main f. for set level*/
console.log("som v my_set f");
    setLevel(leveliD);
    switch (level) {
      case "harder":
        setHarder();
        break;
      case "hardest":
        setHardest();
        break;
      case "normal":
        setNormal();
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <div>
        {/* <TimeAndStart /> */}
        <div id="timeAndStart" style={{ timeAndStartStyle }}>
          <div id="seconds" ref={secondsEl} style={{ secondsStyle }}>
            0 s
          </div>
          {/* <div onClick={timer} id="start" >START</div> */}
          <div id="start">START</div>
        </div>
        <div id="levelBtns" ref={levelBtns} /*style={{ lvlBtnsStyle }}*/>
          <LevelBtn onClick={() => my_setLevel("normal")} text="NORMAL" id="normal" />
          <LevelBtn onClick={() => my_setLevel("harder")} text="HARDER" id="harder"/>
          <LevelBtn onClick={() => my_setLevel("hardest")} text="HARDEST" id="hardest" />
        </div>
      </div>

      <h1 style={{ h1Style }} ref={headingText}>
        {h1Context}
      </h1>

      <div className="column_content" id="content">
        {/* <DivPictures /> */}
      </div>
    </div>
  );
}

export default App;