
import { useState } from "react";

//import { DivPictures } from "./components/DivPictures";
import { LevelBtn } from "./components/LevelBtn";
import { TimeAndStart } from './components/TimeAndStart';
import "./App.css";

function App() {
 
  
  const [level, setLevel] = useState("");
  const [h1Style, setH1style] = useState("");
  const [h1Context, setH1context] = useState(
    "Vstúpili ste do hry Pexeso, najskôr nastavte obtiažnosť"
  );
  // const [lvlBtnsStyle, setLevelBtnsStyle] = useState("");
  // const [timeAndStartStyle, setTimeAndStartStyle] = useState("");
  // const [secondsStyle, setSecondsStylle] = useState("");

  const secondsEl = document.getElementById("seconds");


  const levelBtns = document.getElementById("levelBtns");


  function _setLevelChanges(colorText, colorBG) {
    /*--------------------------------- partial function for set level of the game*/
    // set H1
    //let headingText = this.refs.h1;
    setH1style("color", colorText);
    //headingText.style.color=colorText;
    //  headingText.current.style({color:colorText});
    setH1context("Pexeso");
    // headingText.textContent="Pexeso";

    // set background of page
    document.getElementsByTagName("BODY")[0].style.backgroundColor = colorBG;

    // set disappear settings buttons and show timer and starter of game
    levelBtns.style.display="none";
    //setLevelBtnsStyle("display:none");
    document.getElementById("timeAndStart").style.display="flex";
    //setTimeAndStartStyle("display:flex");
    secondsEl.style.color=colorText;
    //setSecondsStylle("color", colorText);
  }

  function setHarder() {
    /*----------------------------------------------------------function for set the harder version of game*/
    _setLevelChanges("white", "#4d141d");
  }

  function setHardest() {
    /*---------------------------------------------------------function for set the hardest version of game*/
    _setLevelChanges("white", "black");
  }

  function setNormal() {
    _setLevelChanges("black");
  }

  function my_setLevel(leveliD ) {
    /*-----------------------------------------------------main f. for set level*/
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
         <TimeAndStart level={level}/> 
        {/* <div id="timeAndStart" >
          <div id="seconds" >

            0 s
          </div>
          <div id="start">START</div>
        </div> */}
        <div id="levelBtns" ref={levelBtns} /*style={{ lvlBtnsStyle }}*/>
          <LevelBtn  my_setLevel={my_setLevel} text="NORMAL" id="normal" />
          <LevelBtn  my_setLevel={my_setLevel} text="HARDER" id="harder"/>
          <LevelBtn  my_setLevel={my_setLevel} text="HARDEST" id="hardest" />
        </div>
      </div>

      <h1 style={{ h1Style }} >
        {h1Context}
      </h1>

      <div className="column_content" id="content">
        {/* <DivPictures /> */}
      </div>
    </div>
  );
}

export default App;
