    /*
    this is game called Pexeso

     */

    $(document).ready(function(){
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

/*----------------------------------------------------EVENT LISTENERS------------------------------------------*/

    //------START BUTTON L.
    $('#start').click(function(){
         
        timer();
    });
   
    //------LEVEL BUTTONS L.
     $('#levelBtns').children().click(function(){
         
         setLevel($(this).attr('id'))
     });


    //------IMG PEXESO CONTROL L.
     $(".div_on_click").click(function(){
         
       mainFn($(this));
    });

     // }

    /*-----------------------------------------------------FUNCTIONS-----------------------------------------------------------------------------*/

    /*------------------------SETTING LEVEL F.s----------------------------------------------------*/
    /*---------------------------------------------------------------------------------------------*/

    function _setLevelChanges(colorText,colorBG){/*--------------------------------- partial function for set level of the game*/
        // set H1
        $('h1').first().css('color',colorText).text('Pexeso');
       
        // set background of page
        $('body').first().css('backgroundColor',colorBG);
        
        // set disappear settings buttons and show timer and starter of game
        $('#levelBtns').hide();
        $("#timeAndStart").css('display', 'flex');
        $('#seconds').css('color', colorText);

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
        $('#seconds').text(seconds + " s");
    }

    function stopTimer(){/*-----------------------------------------------------------stop seconds increment */
        clearInterval(intervalSecond);
        $('#seconds').css("display","none");
    }

    function timer(){/*---------------------------------------------------------------button start */
        //to hide start button 
        $('#start').hide();
        
        // to see images
        $('.column_content').first().css('display','flex');
    
        intervalSecond=setInterval(_incrementSeconds, 1000);
        if(level==="hardest"){/*------------------------------------------------------working only in hardest version *//*maybe this can by removed from timer();*/
            intervalShuffle=setInterval(shuffle, 800);
        }
    }

    function _fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s} /*---------------------partial f. to formate seconds on seconds and minutes -- stolen from Stack Overflow https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds*/ 


    /*------------------------SHOW and HIDE img F.-------------------------------------------------*/
    /*---------------------------------------------------------------------------------------------*/

    function _hideImage(elm){/*-------------------------------------------------------partial f. to hide showed image*/
        setTimeout(function(){

            elm.addClass('mask');/*---------------------------------------------------hide image below joker´s image*/

            elm.children().first().css('opacity','0');/*----------------=-------------hide image*/

            elm.removeClass('selected_img');/*----------------------------------------remove specific class for identification*/
        },300)
    }

    /*-------------------------MAIN CONTROL F.-------------------------------------------------*/
    /*-----------------------------------------------------------------------------------------*/

    function mainFn(element) {/*------------------------------------------------------the most main function to manage pexeso-code */
              
        
        if(element.hasClass('mask')){/*-----------------------------------------------if on image is joker´s image */
             
            var imgElm = element.children().first();
            imgElm.css('opacity','100');/*--------------------------------------------show image */
                
            element.removeClass('mask');/*--------------------------------------------remove joker image */
            element.addClass('selected_img');/*---------------------------------------give specific class for identification*/

            if(stticSource===""){/*--------------------------------------------------if no image is shown, get attribute from clicked*/
                
                stticSource=imgElm.attr("src");

            }else{/*------------------------------------------------------------------compare sources attribute of showed and clicked */
                   
                if(stticSource===imgElm.attr("src")){/*-------------------------------if the same --> remove images */
                
                    $('body').css('pointerEvents','none');/*--------------------------prevent to show third image*/
                    $('.selected_img').fadeOut( "slow", function() {
                        // Animation complete. 
                        $(this).remove();
                        checkEnd();/*-------------------------------------------------after remove check if all images is removed */

                        })             
                        
                    $('body').css('pointerEvents','auto'); /*-------------------------give back functionality to pointer*/                 stticSource="";
                                                    
                    if(level!="normal"){
                        shuffle();/*--------------------------------------------------in harder (and hardest) version ... shuffle after good trying*/
                    }
                                

                }else{/*------------------------------------------------------------if NOT - the same src-path --> hide images below joker img */
                    
                    $('body').css('pointerEvents','none');/*----------------------prevent to show third image*/
                
                    $('.selected_img').each( function() {
                       // Animation complete. 
                        _hideImage($(this));
                     });
                         
                    $('body').css('pointerEvents','auto');/*--------------------------give back functionality to pointer*/

                    stticSource="";/*-------------------------------------------------clear comparable variable */

                    if(level!="normal"){
                       shuffle();/*---------------------------------------------------in harder (and hardest) version ... shuffle after good trying*/
                    }                
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

    function checkEnd(){/*------------------------------------------------------------check if is end == each picture removed */
     
        if($(".row").children().length==0){/*-----------------------------------------if all images on page are removed */
            stopTimer();/*------------------------------------------------------------stop increment seconds */
            let endTime=_fmtMSS(seconds);/*-------------------------------------------formating time */

            $("body").children().first().addClass('div_center');/*-------------------start ---animation of gratulation text */
            let timeArr=endTime.split(":");/*----------------------------------------split time string (seconds:minutes) to array for separate minutes and second in gratulation text */

            $("h1").text("Gratulácia, vyhrali ste za "+(timeArr[0]=="0"?"":timeArr[0]+"m")+" "+ timeArr[1]+"s");
            $("h1").addClass('h1End');/*----------------------------------------------end ---animation of gratulation text */
        }
    }

});