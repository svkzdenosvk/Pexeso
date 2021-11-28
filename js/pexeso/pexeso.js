    /*
    this is game called Pexeso

     */

    /*----------------------------------------------------------------------------------------------------------------------------------variables ---start*/
    var stticSource =""; /*------------variable to save and then check source of image to compare and remove if same*/
    var harder;/*----------------------variable to trigger the harder version of game*/
    var intervalSecond;/*--------------variable to save function of interval for seconds interval*/
    var intervalShuffle;/*-------------variable to save function of interval for shuffle interval*/
    var seconds = 0;/*-----------------variable for seconds increment*/
    let oneOrZero=0;/*-----------------variable for random shuffling */
    let oneOrZero2=0;/*----------------variable for random shuffling */
    let oneOrZero3=0;/*----------------randomly change 1 or 0*/

    var hardest;/*----------------------variable to trigger the hardest version of game*/

    const setLevelObj={
        isSet:false,
        level:{
            isNormal:false,
            isHarder:false,
            isHardest:false
        }
    }

    /*----------------------------------------------------------------------------------------------------------------------------------variables ---end*/

    /*----------------------------------------------------------------------------------------------------------------------------------functions ---start*/
    /*----------------------------------------------------------------------------------------------------------------_partial-----functions ---start*/

    function _setLevelChanges(colorText,colorBG){
        // set H1
        let headingText = document.getElementsByTagName("H1")[0];
        headingText.style.color=colorText;
        headingText.textContent="Pexeso";

        // set background of page
        document.getElementsByTagName("BODY")[0].style.backgroundColor=colorBG;
        
        // set disappear settings buttons and show timer and starter of game
        document.getElementById("up").style.display="none";
        document.getElementById("timeAndStart").style.display="flex";
        document.getElementById("seconds").style.color=colorText;

    }

    function setHarder(){/*---------------------function for set the harder version of game*/
        harder=true;
        _setLevelChanges("white","#4d141d");
    }

    function setHardest(){/*--------------------function for set the hardest version of game*/
        harder=true;
        hardest=true;     
        _setLevelChanges("white","black");
    }

    function setNormal(){
      _setLevelChanges("black");
    }

    function setLevel(level){
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

    function _incrementSeconds(){/*-----------------change seconds number by increment */
        seconds += 1;
        document.getElementById("seconds").innerHTML  = seconds + " s";
    }

    function stopTimer(){/*------------------------------------------------------stop seconds increment */
        clearInterval(intervalSecond);
        document.getElementById("seconds").style.display="none";
    }

    function timer(){/*------------------------------------------------------button start */
        //to hide start button 
        document.getElementById("start").style.display="none";
        
        // to see images
        document.getElementsByClassName("column_content")[0].style.display="flex";
  
    
        intervalSecond=setInterval(_incrementSeconds, 1000);
        if(hardest===true){/*------------------------------------------------------working only in hardest version *//*maybe this can by removed from timer();*/
            intervalShuffle=setInterval(shuffle, 600);
        }
    }

    /*----------------------------------------------------------------------------------------------------------------_partial-----functions ---end*/
    /*------------------------------------------------------------------------------------------------------------------main-----functions ---start*/

    /*selected_img class is just for identification selected image(s)*/

    function completeFn(element) {/*--------------------------------------------------------------the most main function to manage pexeso-code */
        if(seconds!==0){/*----------------------U can see images after click on start button --> and seconds start to count */
            if(element.classList.contains('mask')){/*-------------------------------if on image is joker´s image */

                var imgElm = element.firstElementChild;
                imgElm.style.opacity="100";/*---------------------------------------show image */
                element.classList.remove('mask');/*--------------------------remove joker image */
                element.classList.add('selected_img');/*------------------------------------give specific class for identification*/


                if(stticSource===""){/*---------------------------------------------------------------if no image shown, get attribute */
                    stticSource=imgElm.getAttribute("src");
                }else{/*------------------------------------------------------------------------------compare sources attribute of showed and clicked */
                    if(stticSource===imgElm.getAttribute("src")){/*----------------------if the same --> remove images */
                        document.body.style.pointerEvents = "none";
                        setTimeout(function(){
                            document.getElementsByClassName("selected_img")[1].remove();
                            document.getElementsByClassName("selected_img")[0].remove();
                            document.body.style.pointerEvents = "auto";

                            stticSource="";

                            checkEnd();/*----------------------------------------------------------------after remove check if all images is removed */

                            shuffle();/*-------------------------------------------------------------------in harder (and hardest) version ... shuffle after bad trying*/
                            return;
                        }, 300);

                    }else{/*------------------------------------------------------------------------------if NOT - the same src-path --> hide images below joker img */
                        document.body.style.pointerEvents = "none";

                        setTimeout(function(){
                            document.getElementsByClassName("selected_img")[1].classList.add('mask');/*------------------------------hide image below joker´s image*/
                            document.getElementsByClassName("selected_img")[1].firstElementChild.style.opacity="0";/*----------------hide image*/
                            document.getElementsByClassName("selected_img")[0].classList.add('mask');
                            document.getElementsByClassName("selected_img")[0].firstElementChild.style.opacity="0";

                            document.getElementsByClassName("selected_img")[1].classList.remove('selected_img');/*--------------------remove specific class for identification*/
                            document.getElementsByClassName("selected_img")[0].classList.remove('selected_img');

                            document.body.style.pointerEvents = "auto";

                            stticSource="";/*--------------------------------------------------------------clear comparable variable */

                            if(hardest!==true){
                                shuffle();/*-------------------------------------------------------------------in harder (and hardest) version ... shuffle after bad trying*/
                            }


                            return;
                        }, 300);
                    }
                }
            }
        }
    }

    

    function _shuffleArray(array) {/*---------------------------// stolen from : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array  (EDIT: Updating to ES6 / ECMAScript 2015) */
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }    

    function shuffle(){/*---------------------function for shuffling (ONLY) in harder and the hardest version of game*/

       if(harder===true){
     
           //get HTMLcollection
           let x= document.getElementsByClassName("div_on_click");/*-------------------------array of rows of images*/

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

    function checkEnd(){/*----------------------check if is end each picture removed */
        setTimeout(function(){

            if((document.getElementsByClassName("row")[0].firstElementChild) ===0){
                //document.getElementsByClassName("row")[1].firstElementChild +
                //document.getElementsByClassName("row")[2].firstElementChild +
                //document.getElementsByClassName("row")[3].firstElementChild)===0){/*----------------------if all images on page are removed */

                stopTimer();/*----------------------------------------------------------------------------stop increment seconds */
                var bodyTag=document.getElementsByTagName("BODY")[0];

                bodyTag.firstElementChild.classList.add('div_center');/*----------------------start ---animation of gratulation text */
                var headTitle=document.getElementsByTagName("H1")[0];
                headTitle.innerHTML = "Gratulácia, vyhrali ste za "+seconds+" s";
                headTitle.classList.add('h1End');/*-------------------------------------------end ---animation of gratulation text */
                }
            }, 50);
        }

    /*------------------------------------------------------------------------------------------------------------------main-----functions ---end*/
    /*----------------------------------------------------------------------------------------------------------------------------------functions ---end*/



