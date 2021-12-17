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
    
       var compared;
        // const setLevelObj={ ------------this construction may be for OOP 
        //     isSet:false,
        //     level:{
        //         isNormal:false,
        //         isHarder:false,
        //         isHardest:false
        //     }
        //}
    
        /*------------------------CONSTANTS */
       // const secondsEl= $('#seconds');
    
        //const start =$('#start');
    
       // const levelBtns=$('#levelBtns');
       // const levelsHTMLColl = levelBtns.children();
    
        const imgsColl = $(".div_on_click");




   

/*----------------------------------------------------EVENT LISTENERS------------------------------------------*/

    //------START BUTTON L.
    $('#start').click(function(){
         
        timer();
    });
   


    // for (let i = 0; i < levelsHTMLColl.length; i++) {

        // //------LEVEL BUTTONS L.
        // levelsHTMLColl[i].click(function(){
        //     setLevel($(this.id));
        //   });
//console.log($('#levelBtns').children());
        //------LEVEL BUTTONS L.
        $('#levelBtns').children().click(function(){
         
            setLevel($(this).attr('id'))
        });

    //   }


    //for (let i = 0; i < imgsColl.length; i++) {

        // //------IMG PEXESO CONTROL L.
        // imgsColl[i].addEventListener("click", function(){ mainFn(this); });

        $(".div_on_click").click(function(){
         

            mainFn($(this));
            //setLevel($(this).attr('id'))
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
        // document.getElementsByTagName("BODY")[0].style.backgroundColor=colorBG;
        
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
        $('#seconds').innerHTML  = seconds + " s";
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
        //document.getElementsByClassName("column_content")[0].style.display="flex";
  
    
        intervalSecond=setInterval(_incrementSeconds, 1000);
        if(level==="hardest"){/*------------------------------------------------------working only in hardest version *//*maybe this can by removed from timer();*/
            intervalShuffle=setInterval(shuffle, 800);
        }
    }

    function _fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s} /*---------------------partial f. to formate seconds on seconds and minutes -- stolen from Stack Overflow https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds*/ 


    /*------------------------SHOW and HIDE img F.-------------------------------------------------*/
    /*---------------------------------------------------------------------------------------------*/

    function _deleteImgs(first, second){/*--------------------------------------------partial f. to remove the same showed images*/
        first.remove();
        second.remove();
    }

    function _hideImage(elm){/*-------------------------------------------------------partial f. to hide showed image*/
      setTimeout(function(){

          elm.addClass('mask');/*--------------------------------------------------hide image below joker´s image*/
          elm.find(">:first-child").css('opacity', '0');//firstElementChild.style.opacity="0";/*------------------------------------hide image*/
          elm.removeClass('selected_img');/*---------------------------------------remove specific class for identification*/
      },300)
    }

    function _hideImages(col){
        _hideImage(coll.first());
       // _hideImage(coll:nth(1));

        // col.each(function() {
                               
        //     _hideImage( $( this ));
        //   });
    }

    /*-------------------------MAIN CONTROL F.-------------------------------------------------*/
    /*-----------------------------------------------------------------------------------------*/

    function mainFn(element) {/*------------------------------------------------------the most main function to manage pexeso-code */
              
        
        if(element.hasClass('mask')){/*-------------------------------if on image is joker´s image */
                //console.log("ma mask");
               // var imgElm = element.firstElementChild;

               var imgElm = element.find(">:first-child");

                imgElm.css('opacity','100');/*-----------------------------------------show image */
                element.removeClass('mask');/*-----------------------------------remove joker image */
                element.addClass('selected_img');/*------------------------------give specific class for identification*/


                if(stticSource===""){/*-----------------------------------------------if no image is shown, get attribute from clicked*/
                   // stticSource=imgElm.getAttribute("src");
                    stticSource=imgElm.attr("src");

                }else{/*--------------------------------------------------------------compare sources attribute of showed and clicked */
                   
                    //let collSelectedImg = $('.selected_img');


                  //  let firstSelectedImg = document.getElementsByClassName("selected_img")[0];
                   // let secondSelectedImg= document.getElementsByClassName("selected_img")[1];

                    if(stticSource===imgElm.attr("src")){/*-------------------if the same --> remove images */
                        console.log(" same");

                        $('body').css('pointerEvents','none');/*-----------------prevent to show third image*/
                        //setTimeout(function(){


                            $('.selected_img').fadeOut( "slow", function() {
                                // Animation complete. 
                                $(this).remove();
                              });
                           // _deleteImgs(firstSelectedImg,secondSelectedImg);

                           $('body').css('pointerEvents','auto'); //document.body.style.pointerEvents = "auto";/*-------------give back functionality to pointer*/

                            stticSource="";
                            //console.log(stticSource);
                            checkEnd();/*---------------------------------------------after remove check if all images is removed */
                            
                            if(level!="normal"){
                                shuffle();/*------------------------------------------in harder (and hardest) version ... shuffle after good trying*/
                            }
                            return;
                           
                      //  }, 300); re

                    }else{/*----------------------------------------------------------if NOT - the same src-path --> hide images below joker img */
                       console.log("not same");
                        $('body').css('pointerEvents','none');/*-----------------prevent to show third image*/
                        

                      //  $('.selected_img')
                      //console.log($('.selected_img').first());
                     // _hideImage($('.selected_img').first());
//console.log($('.selected_img').last());
                        $('.selected_img').each( function() {
                            // Animation complete. 
                           

                                _hideImage($(this));
                    
                        });
                        //_hideImage($('.selected_img'));
//_hideImage($('.selected_img').last());

stticSource="";
console.log(stticSource);
                            // Animation complete. 
                          //  _hideImage($('.selected_img'));
                         

                        //setTimeout(function(){

                           // _hideImage($('.selected_img'));

                           // $('.selected_img').each(_hideImage($(this)));
                           //console.log($('.selected_img'));
                          // $('.selected_img:first').first(function() {
                            //console.log($( this ));
                           // _hideImage($('.selected_img:nth(1)'));
                          //  });
                         //  $('.selected_img:nth(1)').(function() {
                           // console.log($( this ));
                           // _hideImage($('.selected_img:nth(0)'));
                         // });
                       
                       // _hideImages($('.selected_img'));

                        //console.log($('.selected_img'));
                          //_hideImage($('.selected_img').first());
                          //_hideImage($('.selected_img:nth(1)'));

                            // _hideImage(firstSelectedImg);
                            // _hideImage(secondSelectedImg);

                            $('body').css('pointerEvents','auto');/*-------------give back functionality to pointer*/

                            //stticSource="";/*-----------------------------------------clear comparable variable */

                            if(level!="normal"){
                                shuffle();/*------------------------------------------in harder (and hardest) version ... shuffle after good trying*/
                            }
                            return;
                           // return;
                       // }, 300);
                    }
                }
            
             }else return;
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

                let bodyTag=$("body");

                bodyTag.firstElementChild.classList.add('div_center');/*---------------start ---animation of gratulation text */
                let headTitle=document.getElementsByTagName("H1")[0];
                let timeArr=endTime.split(":");/*--------------------------------------split time string (seconds:minutes) to array for separate minutes and second in gratulation text */

                headTitle.innerHTML = "Gratulácia, vyhrali ste za "+(timeArr[0]=="0"?"":timeArr[0]+"m")+" "+ timeArr[1]+"s";
                headTitle.classList.add('h1End');/*------------------------------------end ---animation of gratulation text */
            }
        }, 50);
    }

   


});