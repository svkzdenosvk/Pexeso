    /*
    this is game called Pexeso

     */

    /*------------------------------------------------- VARIABLES------------------------------------------*/

    /*------------------------GLOBAL */

    var stticSource =""; /*------------variable to save and then check source of image to compare and remove if same*/
    var level;
  
    var intervalSecond;/*--------------variable to save function of interval for seconds interval*/
    var intervalShuffle;/*-------------variable to save function of interval for shuffle interval*/
    var seconds = 0;/*-----------------variable for seconds increment*/

   
    // const setLevelObj={ ------------this construction may be for OOP 
    //     isSet:false,
    //     level:{
    //         isNormal:false,
    //         isHarder:false,
    //         isHardest:false
    //     }
    //}

    /*------------------------CONSTANTS */
    const secondsEl=document.getElementById("seconds");

    const start =document.getElementById("start");

    const levelBtns=document.getElementById("levelBtns");
    const levelsHTMLColl = levelBtns.children;

    const imgsColl = document.getElementsByClassName("div_on_click");
/*----------------------------------------------------EVENT LISTENERS------------------------------------------*/

    //------START BUTTON L.
    start.addEventListener("click",timer);
   


    for (let i = 0; i < levelsHTMLColl.length; i++) {

        //------LEVEL BUTTONS L.
        levelsHTMLColl[i].addEventListener("click", function(){ setLevel(this.id); });
      }


    for (let i = 0; i < imgsColl.length; i++) {

        //------IMG PEXESO CONTROL L.
        imgsColl[i].addEventListener("click", function(){ mainFn(this); });

        //------AFTER ANIMATION DELETE L.
        imgsColl[i].addEventListener("animationend", function(){ _deleteImg(this); });

        imgsColl[i].addEventListener("animationend", function(){ shuffle(); });

      }
 

    /*-----------------------------------------------------FUNCTIONS-----------------------------------------------------------------------------*/

    /*------------------------SETTING LEVEL F.s----------------------------------------------------*/
    /*---------------------------------------------------------------------------------------------*/

    function _setLevelChanges(colorText,colorBG){/*--------------------------------- partial function for set level of the game*/
        // set H1
        let headingText = document.getElementsByTagName("H1")[0];
        headingText.style.color=colorText;
        headingText.textContent="Pexeso";

        // set background of page
        document.getElementsByTagName("BODY")[0].style.backgroundColor=colorBG;
        
        // set disappear settings buttons and show timer and starter of game
        levelBtns.style.display="none";
        document.getElementById("timeAndStart").style.display="flex";
        secondsEl.style.color=colorText;

    }

    function setHarder(){/*----------------------------------------------------------function for set the harder version of game*/
        _setLevelChanges("white","#4d141d");
    }

    function setHardest(){/*---------------------------------------------------------function for set the hardest version of game*/
        _setLevelChanges("white","black");
    }

    function setNormal(){
      _setLevelChanges("black");
    }

    function setLevel(leveliD){/*-----------------------------------------------------main f. for set level*/
      
        level=leveliD;
        switch(level) {
            case "harder":
                setHarder();
               break;
            case "hardest":
                setHardest();
              break;
              default:
                setNormal();
        }
    }   
    
    /*------------------------ TIME F.s------------------------------------------------------------*/
    /*---------------------------------------------------------------------------------------------*/

    function _incrementSeconds(){/*---------------------------------------------------partial f. for change seconds number by increment */
        seconds += 1;
        secondsEl.innerHTML  = seconds + " s";
    }

    function stopTimer(){/*-----------------------------------------------------------stop seconds increment */
        clearInterval(intervalSecond);
        secondsEl.style.display="none";
    }

    function timer(){/*---------------------------------------------------------------button start */
        //to hide start button 
        start.style.display="none";
        
        // to see images
        document.getElementsByClassName("column_content")[0].style.display="flex";
  
    
        intervalSecond=setInterval(_incrementSeconds, 1000);
        if(level==="hardest"){/*------------------------------------------------------working only in hardest version *//*maybe this can by removed from timer();*/
            intervalShuffle=setInterval(shuffle, 800);
        }
    }

    function _fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s} /*---------------------partial f. to formate seconds on seconds and minutes -- stolen from Stack Overflow https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds*/ 


    /*------------------------SHOW and HIDE img F.-------------------------------------------------*/
    /*---------------------------------------------------------------------------------------------*/

     function _animate(element){

        element.classList.add("rotate-center");
     
    }

    function animateAndDelete(first,second){

        _animate(first);
        _animate(second);

    }


    //  function _deleteImgs(first, second){/*--------------------------------------------partial f. to remove the same showed images*/
        
    //      first.remove();
    //      second.remove();
    // }
    function _deleteImg(el){/*--------------------------------------------partial f. to remove the same showed images*/
        
        el.remove();
        //document.body.style.pointerEvents = "auto";/*-------------give back functionality to pointer*/

        checkEnd();/*---------------------------------------------after remove check if all images is removed */

   }

    function _hideImage(elm){/*-------------------------------------------------------partial f. to hide showed image*/
        elm.classList.add('mask');/*--------------------------------------------------hide image below joker´s image*/
        elm.firstElementChild.style.opacity="0";/*------------------------------------hide image*/
        elm.classList.remove('selected_img');/*---------------------------------------remove specific class for identification*/
    }

    /*-------------------------MAIN CONTROL F.-------------------------------------------------*/
    /*-----------------------------------------------------------------------------------------*/

    function mainFn(element) {/*------------------------------------------------------the most main function to manage pexeso-code */
              if(element.classList.contains('mask')){/*-------------------------------if on image is joker´s image */

                var imgElm = element.firstElementChild;
                imgElm.style.opacity="100";/*-----------------------------------------show image */
                element.classList.remove('mask');/*-----------------------------------remove joker image */
                element.classList.add('selected_img');/*------------------------------give specific class for identification*/


                if(stticSource===""){/*-----------------------------------------------if no image is shown, get attribute from clicked*/
                    stticSource=imgElm.getAttribute("src");
                }else{/*--------------------------------------------------------------compare sources attribute of showed and clicked */
                    
                    let firstSelectedImg = document.getElementsByClassName("selected_img")[0];
                    let secondSelectedImg= document.getElementsByClassName("selected_img")[1];

                    if(stticSource===imgElm.getAttribute("src")){/*-------------------if the same --> remove images */
                         document.body.style.pointerEvents = "none";/*-----------------prevent to show third image*/
                         //setTimeout(function(){
                        
                            

                            animateAndDelete(firstSelectedImg,secondSelectedImg);
                          
                            
                           
                             document.body.style.pointerEvents = "auto";/*-------------give back functionality to pointer*/

                            stticSource="";

                            // checkEnd();/*---------------------------------------------after remove check if all images is removed */
                            
                            // if(level!="normal"){
                            //     shuffle();/*------------------------------------------in harder (and hardest) version ... shuffle after good trying*/
                            // }
                           
                        // }, 300);
                            
                    }else{/*----------------------------------------------------------if NOT - the same src-path --> hide images below joker img */
                        document.body.style.pointerEvents = "none";/*-----------------prevent to show third image*/

                        setTimeout(function(){

                            _hideImage(firstSelectedImg);
                            _hideImage(secondSelectedImg);

                            document.body.style.pointerEvents = "auto";/*-------------give back functionality to pointer*/

                            stticSource="";/*-----------------------------------------clear comparable variable */

                            if(level!="normal"){
                                shuffle();/*------------------------------------------in harder (and hardest) version ... shuffle after good trying*/
                            }

                           
                        }, 300);
                    }
                }
            
             }
    }

    /*-------------------------SHUFFLE F.s-----------------------------------------------------*/
    /*-----------------------------------------------------------------------------------------*/

    function _shuffleArray(array) {/*-------------------------------------------------partial f. to shuffle random positions in array stolen from : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array  (EDIT: Updating to ES6 / ECMAScript 2015) */
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }    

    function shuffle(){/*-------------------------------------------------------------function for shuffling (ONLY) in harder and the hardest version of game*/

        if(level!="normal"){
     
           //get HTMLcollection
           let x= document.getElementsByClassName("div_on_click");/*------------------collection of divs above image*/

           //convert collection to array
           let arr = Array.from(x);
           _shuffleArray(arr);

           //remove old collection
           let row = document.getElementById("row");
           row.innerHTML="";
            
           // add new random order of collection
           for(let i = 0; i < arr.length; i++){
                row.appendChild(arr[i]);
           }
        }              
    }

    /*-------------------------CHECK END GAME F.-----------------------------------------------*/
    /*-----------------------------------------------------------------------------------------*/

    function checkEnd(){/*-------------------------------------------------------------check if is end == each picture removed */
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

   


