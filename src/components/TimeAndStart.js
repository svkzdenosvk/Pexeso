import { useState } from "react";


export const TimeAndStart = ({level}) => {

  let [seconds, setSeconds] = useState(0);

  const start =document.getElementById("start");
  const secondsEl= document.getElementById("seconds");
  

 function _incrementSeconds(){/*---------------------------------------------------partial f. for change seconds number by increment */
   setSeconds(seconds=seconds+1);
   secondsEl.innerHTML  = seconds + " s";
}


  function timer(){/*---------------------------------------------------------------button start */
    //to hide start button 
    start.style.display="none";
    
    // to see images
    document.getElementsByClassName("column_content")[0].style.display="flex";


    const intervalSecond=setInterval(_incrementSeconds, 1000);
    if(level==="hardest"){/*------------------------------------------------------working only in hardest version *//*maybe this can by removed from timer();*/
      // let intervalShuffle=setInterval(shuffle, 800);
   }
}


  return (
    <div id="timeAndStart">
        <div  id="seconds"  >{seconds} s</div>
        <div onClick={() => {timer()}} id="start" >START</div>
    </div>
  )
}
