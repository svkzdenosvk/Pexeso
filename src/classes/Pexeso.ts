import Time from "./Time.js";
import ShowHideImg from "./ShowHideImg.js";
import SetLevel from "./SetLevel.js";
import Shuffle from "./Shuffle.js";

/*-------------------------------MAIN CONTROLLING CLASS----------------------------------------*/
/*---------------------------------------------------------------------------------------------*/
export default class Pexeso{

    static stticSource :string =""
     
    timeController = new Time();
    showHideImgController  = new ShowHideImg();
    static setLevelController = new SetLevel();
    static shuffleController = new Shuffle();
    

    mainFn(element: HTMLElement) {/*---------------------------------------------------------the most main function to manage pexeso-code */
      
        if(element.classList.contains('mask')){/*-------------------------------if on image is joker´s image */

          //var imgElm  = element.firstElementChild;
          let imgElmColl  = element.children as HTMLCollectionOf<HTMLElement>  ;
          let imgElm = imgElmColl[0]
          imgElm.style.opacity="100";/*-----------------------------------------show image */
          element.classList.remove('mask');/*-----------------------------------remove joker image */
          element.classList.add('selected_img');/*------------------------------give specific class for identification*/


          if(Pexeso.stticSource===""){/*----------------------------------------if no image is shown, get attribute from clicked*/
             
            Pexeso.stticSource=imgElm.getAttribute("src");
          }else{/*--------------------------------------------------------------compare sources attribute of showed and clicked */
              
              let selectedDivImgColl= document.getElementsByClassName("selected_img") as HTMLCollectionOf<HTMLDivElement>
              let firstSelectedImg  = selectedDivImgColl[0];
              let secondSelectedImg= selectedDivImgColl[1];

              if(Pexeso.stticSource===imgElm.getAttribute("src")){/*------------if the same --> remove images */
                   document.body.style.pointerEvents = "none";/*----------------prevent to show third image*/
            
                   //this.showHideImgController.animateAndDelete(firstSelectedImg,secondSelectedImg);
                   this.showHideImgController.animateAndDelete(firstSelectedImg,secondSelectedImg);
                                                                
                      document.body.style.pointerEvents = "auto";/*-------------give back functionality to pointer*/
                      
                      Pexeso.stticSource="";
                                         
              }else{/*----------------------------------------------------------if NOT - the same src-path --> hide images below joker img */
                  document.body.style.pointerEvents = "none";/*-----------------prevent to show third image*/

                  setTimeout(function(){

                      ShowHideImg._hideImage(firstSelectedImg);
                      ShowHideImg._hideImage(secondSelectedImg);

                      document.body.style.pointerEvents = "auto";/*-------------give back functionality to pointer*/

                      Pexeso.stticSource="";/*----------------------------------clear comparable variable */

                      if(Pexeso.setLevelController.getLevel()!="normal"){
                        Pexeso.shuffleController.shuffle();/*-------------------in harder (and hardest) version ... shuffle after good trying*/
                      }

                     
                  }, 300);
              }
          }
      
       }
    }
 
}