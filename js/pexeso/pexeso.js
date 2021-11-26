    /*
    this is game called Pexeso

     */
    /*----------------------------------------------------------------------------------------------------------------------------------variables ---start*/
    var stticSource =""; /*------------variable to save and then check source of image to compare and remove if same*/
    //var harder;/*----------------------variable to trigger the harder version of game*/
    var intervalSecond;/*--------------variable to save function of interval for seconds interval*/
    var intervalShuffle;/*-------------variable to save function of interval for shuffle interval*/
    var seconds = 0;/*-----------------variable for seconds increment*/
    let oneOrZero=0;/*-----------------variable for random shuffling */
    let oneOrZero2=0;/*----------------variable for random shuffling */
    let oneOrZero3=0;/*----------------randomly change 1 or 0*/

   // var hardest;/*----------------------variable to trigger the hardest version of game*/

    const setLevel={
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

    function setHarder(){/*---------------------function for set the harder version of game*/
        harder=true;
        document.getElementById("seconds").style.color="white";
        document.getElementsByTagName("BODY")[0].style.backgroundColor="#4d141d";
        document.getElementById("harder").style.display="none";
        document.getElementsByTagName("H1")[0].style.color="white";
        document.getElementById("hardest").style.display="none";

    }

    function setHardest(){/*---------------------function for set the hardest version of game*/
        harder=true;
        hardest=true;

        document.getElementById("seconds").style.color="white";
        document.getElementsByTagName("BODY")[0].style.backgroundColor="black";
        document.getElementById("harder").style.display="none";
        document.getElementsByTagName("H1")[0].style.color="white";
        document.getElementById("hardest").style.display="none";
    }

    function incrementSeconds(){/*-----------------change seconds number by increment */
        seconds += 1;
        document.getElementById("seconds").innerHTML  = seconds + " s";
    }

    function stopTimer(){/*------------------------------------------------------stop seconds increment */
        clearInterval(intervalSecond);
        document.getElementById("seconds").style.display="none";
    }

    function timer(){/*------------------------------------------------------button start */
        document.getElementById("start").style.display="none";
        document.getElementById("harder").style.display="none";
        document.getElementById("hardest").style.display="none";

        intervalSecond=setInterval(incrementSeconds, 1000);
        if(hardest===true){/*------------------------------------------------------working only in hardest version */
            intervalShuffle=setInterval(shuffle, 450);
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

    function shuffle(){/*---------------------function for shuffling (ONLY) in harder and the hardest version of game*/

       if(harder===true){
           oneOrZero=(Math.random()>0.5)? 1 : 0;/*--------------------------randomly change 1 or 0*/
           oneOrZero2=(Math.random()>0.5)? 1 : 0;/*--------------------------randomly change 1 or 0*/
           oneOrZero3=(Math.random()>0.5)? 1 : 0;/*--------------------------randomly change 1 or 0*/

           var x= document.getElementsByClassName("row");/*-------------------------array of rows of images*/

           var i;/*-------------------------variable for looping rows*/
           for (i= 0; i < x.length; i++) {
                   var p;/*-------------------------variable for looping div-s(with image-s) IN rows*/
                   var j;/*-------------------------variable for looping rows*/

                   var orderPosition;/*-------------------------variable for setting order position*/
               p=x[i].querySelectorAll('.row >div');/*--------------------------array/list of div-s with in image-s*/

               if(oneOrZero===1) {
                   for (j = 0; j < p.length; j++) {/*-------------------------reorder position of images in row*/
                       orderPosition = j + 3;
                       if (orderPosition === p.length + 2) {
                           orderPosition = 1;
                       }
                       if (orderPosition === p.length + 1) {
                           orderPosition = 2;
                       }

                       p[j].style.order = orderPosition;
                   }
               }else{
                   for(j= 0; j < p.length; j++){/*-------------------------reorder position of images in row from 1 */
                        orderPosition=j+1;

                       p[j].style.order=orderPosition;
                   }
               }

                if(oneOrZero2===0) {
                    x[i].style.flexDirection = "row-reverse";/*--------------- flex-direction in concrete row i to row-reverse*/
                }else{/*------------------------------------------------------ flex-direction in all content to column*/
                    document.getElementsByClassName("column_content")[0].style.flexDirection = "column";

                }
                if(oneOrZero3===1){
                    x[i].style.flexDirection = "row";/*----------------------- flex-direction in concrete row i to row*/
                }else{/*------------------------------------------------------ flex-direction in all content to column-reverse*/
                     document.getElementsByClassName("column_content")[0].style.flexDirection = "column-reverse";
                }

               if((oneOrZero!==1)&&(i%2===1)){/*------------------------------------------randomly change order style verticaly  */
                   var c= document.querySelectorAll('.column_content >div');/*--------------------------array/list of rows*/
                   var ii;
                   for (ii = 0; ii < c.length; ii++) {
                       var orderC = ii + 3;
                       if (orderC === c.length + 2) {
                           orderC = 1;
                       }
                       if (orderC === c.length + 1) {
                           orderC = 2;
                       }

                       c[ii].style.order = orderC;
                   }
               }

               if((oneOrZero3===1)&&(i%2===0)){/*------------------------------------------ change order style verticaly back from 1    */
                   var cc= document.querySelectorAll('.column_content >div');/*--------------------------array/list of rows*/
                   var jj;
                   for(jj= 0; jj < cc.length; jj++){
                       var orderC2=jj+1;
                       cc[jj].style.order=orderC2;
                   }
               }
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



