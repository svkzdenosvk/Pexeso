export default class Pexeso{
    static stticSource=""
    static level
    intervalSecond;/*--------------variable to save function of interval for seconds interval*/
    intervalShuffle;/*-------------variable to save function of interval for shuffle interval*/
    static seconds=0;
    self=this;

    
    // secondsEl=document.getElementById("seconds");

   
    
   

    //time
    //pictureColl
    
    // setLevel(level){
    //     Pexeso.level=level;
    // }

     _incrementSeconds(){/*---------------------------------------------------------partial f. for change seconds number by increment */
      // console.log(Pexeso.seconds);
      // Pexeso.setSeconds(parseInt(Pexeso.seconds)+1);
       Pexeso.seconds=Pexeso.seconds+1;
        document.getElementById("seconds").innerHTML  = Pexeso.seconds + " s";
    }

    static stopTimer(){/*-----------------------------------------------------------stop seconds increment */
        clearInterval(this.intervalSecond);
        document.getElementById("seconds").style.display="none";
    }

    timer(){/*---------------------------------------------------------------button start */
        
        //to hide start button 
        start.style.display="none";
        
        // to see images
        document.getElementsByClassName("column_content")[0].style.display="flex";
  
        this.intervalSecond=setInterval(this._incrementSeconds, 1000);
       // modifyIntervalSecond(setInterval(_incrementSeconds, 1000));
        if(this.level==="hardest"){/*------------------------------------------------------------working only in hardest version *//*maybe this can by removed from timer();*/
           
           this.intervalShuffle=setInterval(shuffle, 800);
        }
    }

    static _fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

    static _hideImage(elm){/*-------------------------------------------------------partial f. to hide showed image*/
        elm.classList.add('mask');/*--------------------------------------------------hide image below joker´s image*/
        elm.firstElementChild.style.opacity="0";/*------------------------------------hide image*/
        elm.classList.remove('selected_img');/*---------------------------------------remove specific class for identification*/
    }


    mainFn(element) {/*----------------------------------the most main function to manage pexeso-code */
        
        if(element.classList.contains('mask')){/*-------------------------------if on image is joker´s image */

          var imgElm = element.firstElementChild;
          imgElm.style.opacity="100";/*-----------------------------------------show image */
          element.classList.remove('mask');/*-----------------------------------remove joker image */
          element.classList.add('selected_img');/*------------------------------give specific class for identification*/


          if(Pexeso.stticSource===""){/*-----------------------------------------------if no image is shown, get attribute from clicked*/
             
            Pexeso.stticSource=imgElm.getAttribute("src");
          }else{/*--------------------------------------------------------------compare sources attribute of showed and clicked */
              
              let firstSelectedImg = document.getElementsByClassName("selected_img")[0];
              let secondSelectedImg= document.getElementsByClassName("selected_img")[1];

              if(Pexeso.stticSource===imgElm.getAttribute("src")){/*-------------------if the same --> remove images */
                   document.body.style.pointerEvents = "none";/*----------------prevent to show third image*/
            
                      Pexeso.animateAndDelete(firstSelectedImg,secondSelectedImg);
                                                                
                      document.body.style.pointerEvents = "auto";/*-------------give back functionality to pointer*/
                      
                      Pexeso.stticSource="";
                                         
              }else{/*----------------------------------------------------------if NOT - the same src-path --> hide images below joker img */
                  document.body.style.pointerEvents = "none";/*-----------------prevent to show third image*/

                  setTimeout(function(){

                      Pexeso._hideImage(firstSelectedImg);
                      Pexeso._hideImage(secondSelectedImg);

                      document.body.style.pointerEvents = "auto";/*-------------give back functionality to pointer*/

                      Pexeso.stticSource="";/*----------------------------------clear comparable variable */

                      if(this.level!="normal"){
                          Pexeso.shuffle();/*------------------------------------------in harder (and hardest) version ... shuffle after good trying*/
                      }

                     
                  }, 300);
              }
          }
      
       }
    }

   static _animate(element){

        element.classList.add("rotate-center");
    
    }

   static animateAndDelete(first,second){

        Pexeso._animate(first);
        Pexeso._animate(second);
    }

    _deleteImg(el){/*--------------------------------------------------------partial f. to remove the same showed images*/
        
        el.remove();
        this.checkEnd();/*-----------------------------------------------------------------after remove check if all images is removed */

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

 _setLevelChanges(colorText,colorBG){/*--------------------------------- partial function for set level of the game*/
    // set H1
    let headingText = document.getElementsByTagName("H1")[0];
    headingText.style.color=colorText;
    headingText.textContent="Pexeso";

    // set background of page
    document.getElementsByTagName("BODY")[0].style.backgroundColor=colorBG;
    
    // set disappear settings buttons and show timer and starter of game
    levelBtns.style.display="none";
    document.getElementById("timeAndStart").style.display="flex";
    document.getElementById("seconds").style.color=colorText;

}

 setHarder(){/*----------------------------------------------------------function for set the harder version of game*/
    this._setLevelChanges("white","#4d141d");
}

 setHardest(){/*---------------------------------------------------------function for set the hardest version of game*/
    this._setLevelChanges("white","black");
}

 setNormal(){
  this._setLevelChanges("black");
}


setLevel(leveliD){/*-----------------------------------------------------main f. for set level*/
  
    Pexeso.level=leveliD;
    console.log(Pexeso.level);
    //modifyLevel(leveliD);
    switch(Pexeso.level) {
        case "harder":
            this.setHarder();
           break;
        case "hardest":
            this.setHardest();
          break;
          default:
            this.setNormal();
    }
}   

 checkEnd(){/*-----------------------------------------------check if is end == each picture removed */
    setTimeout(function(){
        if(!document.getElementById("row").firstElementChild){/*-------------------if all images on page are removed */

            Pexeso.stopTimer();/*---------------------------------------------------------stop increment seconds */
            let endTime=Pexeso._fmtMSS(Pexeso.seconds);/*----------------------------------------formating time */

            let bodyTag=document.getElementsByTagName("BODY")[0];

            bodyTag.firstElementChild.classList.add('div_center');/*---------------start ---animation of gratulation text */
            let headTitle=document.getElementsByTagName("H1")[0];
            let timeArr=endTime.split(":");/*--------------------------------------split time string (seconds:minutes) to array for separate minutes and second in gratulation text */

            headTitle.innerHTML = "Gratulácia, vyhrali ste za "+(timeArr[0]=="0"?"":timeArr[0]+"m")+" "+ timeArr[1]+"s";
            headTitle.classList.add('h1End');/*------------------------------------end ---animation of gratulation text */
        }
    }, 50);
}
}