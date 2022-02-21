import Time from "./Time.js";
import ShowHideImg from "./ShowHideImg.js";

export default class Pexeso{

    static stticSource=""
    static level
    
    timeController= new Time();
    showHideImgController = new ShowHideImg();
    

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
            
                      ShowHideImg.animateAndDelete(firstSelectedImg,secondSelectedImg);
                                                                
                      document.body.style.pointerEvents = "auto";/*-------------give back functionality to pointer*/
                      
                      Pexeso.stticSource="";
                                         
              }else{/*----------------------------------------------------------if NOT - the same src-path --> hide images below joker img */
                  document.body.style.pointerEvents = "none";/*-----------------prevent to show third image*/

                  setTimeout(function(){

                      ShowHideImg._hideImage(firstSelectedImg);
                      ShowHideImg._hideImage(secondSelectedImg);

                      document.body.style.pointerEvents = "auto";/*-------------give back functionality to pointer*/

                      Pexeso.stticSource="";/*----------------------------------clear comparable variable */

                      if(Pexeso.level!="normal"){
                          Pexeso.shuffle();/*------------------------------------------in harder (and hardest) version ... shuffle after good trying*/
                      }

                     
                  }, 300);
              }
          }
      
       }
    }



    

// module.exports={animateAndDelete, _deleteImg, _hideImage};
 static _shuffleArray(array) {/*-------------------------------------------------partial f. to shuffle random positions in array stolen from : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array  (EDIT: Updating to ES6 / ECMAScript 2015) */
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}    

static shuffle(){/*-------------------------------------------------------------function for shuffling (ONLY) in harder and the hardest version of game*/

    if(Pexeso.level!="normal"){
 
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

 
}