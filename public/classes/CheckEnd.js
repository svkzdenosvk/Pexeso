import Time from "./Time.js";
/*------------------------------------ CHECKING END CLASS--------------------------------------*/
/*---------------------------------------------------------------------------------------------*/
export default class CheckEnd {
    checkEnd() {
        setTimeout(function () {
            if (!document.getElementById("row").firstElementChild) { /*------------------if all images on page are removed */
                Time.stopTimer(); /*---------------------------------------------------stop increment seconds */
                let endTime = CheckEnd._fmtMSS(Time.seconds); /*-------------------------formating time */
                let bodyTag = document.getElementsByTagName("BODY")[0];
                bodyTag.firstElementChild.classList.add('div_center'); /*---------------start ---animation of gratulation text */
                let headTitle = document.getElementsByTagName("H1")[0];
                let timeArr = endTime.split(":"); /*--------------------------------------split time string (seconds:minutes) to array for separate minutes and second in gratulation text */
                headTitle.innerHTML = "Gratulácia, vyhrali ste za " + (timeArr[0] == "0" ? "" : timeArr[0] + "m") + " " + timeArr[1] + "s";
                headTitle.classList.add('h1End'); /*------------------------------------end ---animation of gratulation text */
            }
        }, 50);
    }
    static _fmtMSS(s) { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s; }
}
