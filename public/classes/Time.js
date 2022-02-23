import Pexeso from "./Pexeso.js";
/*-------------------------------about TIME CLASS----------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/
export default class Time {
    _incrementSeconds() {
        Time.seconds = Time.seconds + 1;
        document.getElementById("seconds").innerHTML = Time.seconds + " s";
    }
    static stopTimer() {
        clearInterval(this.intervalSecond);
        document.getElementById("seconds").style.display = "none";
    }
    timer() {
        //to hide start button 
        document.getElementById("start").style.display = "none";
        // to see images
        let columnContentColl = document.getElementsByClassName('column_content');
        let columnContentEl = columnContentColl[0];
        columnContentEl.style.display = "flex";
        Time.intervalSecond = setInterval(this._incrementSeconds, 1000);
        // modifyIntervalSecond(setInterval(_incrementSeconds, 1000));
        if (Pexeso.setLevelController.getLevel() === "hardest") { /*------------------------working only in hardest version */ /*maybe this can by removed from timer();*/
            this.intervalShuffle = setInterval(Pexeso.shuffleController.shuffle, 800);
        }
    }
}
Time.seconds = 0;
