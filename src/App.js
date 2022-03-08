
import { useState } from "react";

import { DivPictures } from "./components/DivPictures";
import { LevelBtn } from "./components/LevelBtn";
import { TimeAndStart } from './components/TimeAndStart';

function App() {
  
 // ---------------------------
 // ---------------------------useStates
 // ---------------------------

  const [level, setLevel] = useState();
  const [color, setColor] = useState("");
  const [display, setDisplay] = useState("");
  const [h1Context, setH1context] = useState(
    "Vstúpili ste do hry Pexeso, najskôr nastavte obtiažnosť"
  );

  let [seconds, setSeconds] = useState(0);
  let [intervalSecond, setIntervalSecond] = useState(0);

 // ---------------------------
 // ---------------------------set level fn´s
 // ---------------------------

  function _setLevelChanges(colorText, colorBG) { /*--------------------------------- partial function for set level of the game*/
    
    //style -> color of H1 and seconds
    setColor(colorText);
  
    // set H1
    setH1context("Pexeso");

    // set background of page
    document.getElementsByTagName("BODY")[0].style.backgroundColor = colorBG;

    // set disappear settings buttons and show timer and starter of game
    setDisplay("none");

    document.getElementById("timeAndStart").style.display="flex";   
  }
 
  function my_setLevel(e,leveliD ) {/*-----------------------------------------------------main f. for set level*/
    
    setLevel(leveliD)
  
      switch (e.target.id) {
      
        case "harder":
          _setLevelChanges("white", "#4d141d");
          break;
        case "hardest":
          _setLevelChanges("white", "black");
          break;
        case "normal":        
          _setLevelChanges("black");
          break;
        default:
          break;      
      }
  }

 // ---------------------------
 // ---------------------------shuffle fn´s
 // ---------------------------

  function _shuffleArray(array) {/*-------------------------------------------------partial f. to shuffle random positions in array stolen from : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array  (EDIT: Updating to ES6 / ECMAScript 2015) */
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }    

  function shuffle(){/*-------------------------------------------------------------function for shuffling (ONLY) in harder and the hardest version of game*/

    if(level!=="normal"){
 
       //get HTMLcollection
       let x= document.getElementsByClassName("div_on_click");/*--------------------collection of divs above image*/

       //convert collection to array
       let arr = Array.from(x);
       _shuffleArray(arr);

       //remove old collection
       let row = document.getElementById("row");
       row.innerHTML="";
        
       // add new random order of collection
       for(let i = 0; i < arr.length; i++){
            row.appendChild(arr[i]);
       }
    }              
  }

  return (
    <div className="App" >
      <div>
         <TimeAndStart level={level} 
                       shuffle={shuffle} 
                       seconds={seconds} 
                       setSeconds={setSeconds} 
                       setIntervalSecond={setIntervalSecond}
                       color={color}/> 
      
        <div id="levelBtns" style={{display}} >
          <LevelBtn  my_setLevel={my_setLevel} text="NORMAL" id="normal" />
          <LevelBtn  my_setLevel={my_setLevel} text="HARDER" id="harder"/>
          <LevelBtn  my_setLevel={my_setLevel} text="HARDEST" id="hardest" />
        </div>
      </div>

       <h1 style={{color}} >  
        {h1Context}
      </h1>

      <div className="column_content" id="content">
        <DivPictures level={level} shuffle={shuffle} seconds={seconds} intervalSecond={intervalSecond}/> 
      </div>
    </div>
  );
}

export default App;
