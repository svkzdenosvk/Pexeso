import {stopTimer, _fmtMSS} from './Time.js';

import {seconds} from './VarsAndConst.js'


/*-------------------------CHECK END GAME F.-----------------------------------------------*/
/*-----------------------------------------------------------------------------------------*/

   export default function checkEnd(){/*-----------------------------------------------check if is end == each picture removed */
        setTimeout(function(){
            if(!document.getElementById("row").firstElementChild){/*-------------------if all images on page are removed */

                stopTimer();/*---------------------------------------------------------stop increment seconds */
                let endTime=_fmtMSS(seconds);/*----------------------------------------formating time */

                let bodyTag=document.getElementsByTagName("BODY")[0];

                bodyTag.firstElementChild.classList.add('div_center');/*---------------start ---animation of gratulation text */
                let headTitle=document.getElementsByTagName("H1")[0];
                let timeArr=endTime.split(":");/*--------------------------------------split time string (seconds:minutes) to array for separate minutes and second in gratulation text */

                headTitle.innerHTML = "Gratulácia, vyhrali ste za "+(timeArr[0]=="0"?"":timeArr[0]+"m")+" "+ timeArr[1]+"s";
                headTitle.classList.add('h1End');/*------------------------------------end ---animation of gratulation text */
            }
        }, 50);
    }

