import Pexeso from "./Pexeso.js";

/*-------------------------------about TIME CLASS----------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/
export default class Time {
    
   
    static seconds=0;
    
    //intervalSecond:number=0/*--------------variable to save function of interval for seconds interval*/
    intervalShuffle: number;/*-------------variable to save function of interval for shuffle interval*/
    static intervalSecond: number;
    

    private _incrementSeconds(){/*---------------------------------------------------------partial f. for change seconds number by increment */
       
        Time.seconds=Time.seconds+1;
          document.getElementById("seconds").innerHTML  = Time.seconds + " s";
      }
  
      static stopTimer(){/*--------------------------------------------------------stop seconds increment */
          clearInterval(this.intervalSecond);
          document.getElementById("seconds").style.display="none";
      }
  
      timer(){/*-------------------------------------------------------------------button start */
          
          //to hide start button 
          document.getElementById("start").style.display="none";
          
          // to see images
          let columnContentColl = document.getElementsByClassName('column_content') as HTMLCollectionOf<HTMLElement>  
          let columnContentEl= columnContentColl[0];
          columnContentEl.style.display="flex";
    
          Time.intervalSecond=setInterval(this._incrementSeconds, 1000);
         // modifyIntervalSecond(setInterval(_incrementSeconds, 1000));
          if(Pexeso.setLevelController.getLevel()==="hardest"){/*------------------------working only in hardest version *//*maybe this can by removed from timer();*/
             
             this.intervalShuffle=setInterval(Pexeso.shuffleController.shuffle, 800);
          }
      }
}