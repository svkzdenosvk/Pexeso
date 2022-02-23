import Pexeso from "./Pexeso.js";
/*------------------------------------ SHUFFLE CLASS-------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/
export default class Shuffle {
    _shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    shuffle() {
        if (Pexeso.setLevelController.getLevel() != "normal") {
            //get HTMLcollection
            let x = document.getElementsByClassName("div_on_click"); /*------------------collection of divs above image*/
            //convert collection to array
            let arr = [].slice.call(x);
            Pexeso.shuffleController._shuffleArray(arr);
            //remove old collection
            let row = document.getElementById("row");
            row.innerHTML = "";
            // add new random order of collection
            for (let i = 0; i < arr.length; i++) {
                row.appendChild(arr[i]);
            }
        }
    }
}
