

export const TimeAndStart = () => {

  const start =document.getElementById("start");


 // function _incrementSeconds(){/*---------------------------------------------------partial f. for change seconds number by increment */
   // seconds += 1;
   // secondsEl.innerHTML  = seconds + " s";
//}


  function timer(){/*---------------------------------------------------------------button start */
    //to hide start button 
    start.style.display="none";
    
    // to see images
    document.getElementsByClassName("column_content")[0].style.display="flex";


    // intervalSecond=setInterval(_incrementSeconds, 1000);
    // if(level==="hardest"){/*------------------------------------------------------working only in hardest version *//*maybe this can by removed from timer();*/
    //     intervalShuffle=setInterval(shuffle, 800);
   //}
}


  return (
    <div id="timeAndStart">
        <div  id="seconds" ref="seconds" >0 s</div>
        <div onClick={timer} id="start" >START</div>
    </div>
  )
}
