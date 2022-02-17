import {level, secondsEl, intervalSecond,modifyIntervalSecond,seconds,modifySeconds,modifyIntervalShuffle,start} from './VarsAndConst.js'
import shuffle from './Shuffle.js';

  
/*------------------------ TIME F.s------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/

    function _incrementSeconds(){/*---------------------------------------------------------partial f. for change seconds number by increment */
       
        modifySeconds(seconds+1);
        secondsEl.innerHTML  = seconds + " s";
    }

   export function stopTimer(){/*-----------------------------------------------------------stop seconds increment */
        clearInterval(intervalSecond);
        secondsEl.style.display="none";
    }

   export function timer(){/*---------------------------------------------------------------button start */
        
        //to hide start button 
        start.style.display="none";
        
        // to see images
        document.getElementsByClassName("column_content")[0].style.display="flex";
  
        //intervalSecond=setInterval(_incrementSeconds, 1000);
        modifyIntervalSecond(setInterval(_incrementSeconds, 1000));
        if(level==="hardest"){/*------------------------------------------------------------working only in hardest version *//*maybe this can by removed from timer();*/
           
           modifyIntervalShuffle(setInterval(shuffle, 800));
        }
    }

   export function _fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

  