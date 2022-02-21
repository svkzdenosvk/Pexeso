import Pexeso from "./Pexeso.js";

/*------------------------------------ SHUFFLE CLASS-------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/
export default class Shuffle{

  static _shuffleArray(array) {/*-------------------------------------------------partial f. to shuffle random positions in array stolen from : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array  (EDIT: Updating to ES6 / ECMAScript 2015) */
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }    

 shuffle(){/*---------------------------------------------------------------------function for shuffling (ONLY) in harder and the hardest version of game*/

    if(Pexeso.setLevelController.level!="normal"){
 
       //get HTMLcollection
       let x= document.getElementsByClassName("div_on_click");/*------------------collection of divs above image*/

       //convert collection to array
       let arr = Array.from(x);
       Shuffle._shuffleArray(arr);

       //remove old collection
       let row = document.getElementById("row");
       row.innerHTML="";
        
       // add new random order of collection
       for(let i = 0; i < arr.length; i++){
            row.appendChild(arr[i]);
       }
    }              
  }
}