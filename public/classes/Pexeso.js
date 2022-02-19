export default class Pexeso{
    stticSource=""
    level
    intervalSecond;/*--------------variable to save function of interval for seconds interval*/
    intervalShuffle;/*-------------variable to save function of interval for shuffle interval*/
    seconds

     secondsEl=document.getElementById("seconds");

     start =document.getElementById("start"); /*--------I don´t understand why is this not needed ?!?!*/
   
    
   

    //time
    //pictureColl
    
    setLevel(level){
        this.level=level;
    }

     _incrementSeconds(){/*---------------------------------------------------------partial f. for change seconds number by increment */
       
        this.seconds=this.seconds+1;
        document.getElementById("seconds").innerHTML  = seconds + " s";
    }

    stopTimer(){/*-----------------------------------------------------------stop seconds increment */
        clearInterval(intervalSecond);
        secondsEl.style.display="none";
    }

    timer(){/*---------------------------------------------------------------button start */
        
        //to hide start button 
        start.style.display="none";
        
        // to see images
        document.getElementsByClassName("column_content")[0].style.display="flex";
  
        this.intervalSecond=setInterval(this._incrementSeconds, 1000);
       // modifyIntervalSecond(setInterval(_incrementSeconds, 1000));
        if(this.level==="hardest"){/*------------------------------------------------------------working only in hardest version *//*maybe this can by removed from timer();*/
           
           modifyIntervalShuffle(setInterval(shuffle, 800));
        }
    }

    _fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

    static _hideImage(elm){/*-------------------------------------------------------partial f. to hide showed image*/
        elm.classList.add('mask');/*--------------------------------------------------hide image below joker´s image*/
        elm.firstElementChild.style.opacity="0";/*------------------------------------hide image*/
        elm.classList.remove('selected_img');/*---------------------------------------remove specific class for identification*/
    }


    mainFn(element,self) {/*----------------------------------the most main function to manage pexeso-code */
        
        if(element.classList.contains('mask')){/*-------------------------------if on image is joker´s image */

          var imgElm = element.firstElementChild;
          imgElm.style.opacity="100";/*-----------------------------------------show image */
          element.classList.remove('mask');/*-----------------------------------remove joker image */
          element.classList.add('selected_img');/*------------------------------give specific class for identification*/


          if(this.stticSource===""){/*-----------------------------------------------if no image is shown, get attribute from clicked*/
             
             this.stticSource=imgElm.getAttribute("src");
          }else{/*--------------------------------------------------------------compare sources attribute of showed and clicked */
              
              let firstSelectedImg = document.getElementsByClassName("selected_img")[0];
              let secondSelectedImg= document.getElementsByClassName("selected_img")[1];

              if(this.stticSource===imgElm.getAttribute("src")){/*-------------------if the same --> remove images */
                   document.body.style.pointerEvents = "none";/*----------------prevent to show third image*/
            
                      Pexeso.animateAndDelete(firstSelectedImg,secondSelectedImg);
                                                                
                      document.body.style.pointerEvents = "auto";/*-------------give back functionality to pointer*/
                      
                      self.stticSource="";
                                         
              }else{/*----------------------------------------------------------if NOT - the same src-path --> hide images below joker img */
                  document.body.style.pointerEvents = "none";/*-----------------prevent to show third image*/

                  setTimeout(function(){

                      Pexeso._hideImage(firstSelectedImg);
                      Pexeso._hideImage(secondSelectedImg);

                      document.body.style.pointerEvents = "auto";/*-------------give back functionality to pointer*/

                      this.stticSource="";/*----------------------------------clear comparable variable */

                      if(this.level!="normal"){
                          Pexeso.shuffle();/*------------------------------------------in harder (and hardest) version ... shuffle after good trying*/
                      }

                     
                  }, 300);
              }
          }
      
       }
    }

    _animate(element){

        element.classList.add("rotate-center");
    
    }

   static animateAndDelete(first,second){

        _animate(first);
        _animate(second);
    }

    _deleteImg(el){/*--------------------------------------------------------partial f. to remove the same showed images*/
        
        el.remove();
        checkEnd();/*-----------------------------------------------------------------after remove check if all images is removed */

    }

    

// module.exports={animateAndDelete, _deleteImg, _hideImage};
 static _shuffleArray(array) {/*-------------------------------------------------partial f. to shuffle random positions in array stolen from : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array  (EDIT: Updating to ES6 / ECMAScript 2015) */
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}    

static shuffle(){/*-------------------------------------------------------------function for shuffling (ONLY) in harder and the hardest version of game*/

    if(this.level!="normal"){
 
       //get HTMLcollection
       let x= document.getElementsByClassName("div_on_click");/*------------------collection of divs above image*/

       //convert collection to array
       let arr = Array.from(x);
       Pexeso._shuffleArray(arr);

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