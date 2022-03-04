

export const DivPicture = ({pictureName,index,stticSource,level,shuffle,setStticSource}) => {

  function _deleteImg(el){/*-----------------------------------------------------------------partial f. to remove the same showed images*/
    setTimeout(function(){    
       el.remove();
    //checkEnd();/*-----------------------------------------after remove check if all images is removed */
     }, 300);
}

  function _animate(element){

    element.classList.add("rotate-center");
    _deleteImg(element);
 
}
  
function animateAndDelete(first,second){

    _animate(first);
    _animate(second);
}

function _hideImage(elm){/*----------------------------------------------------------partial f. to hide showed image*/
  elm.classList.add('mask');/*--------------------------------------------------hide image below joker´s image*/
  elm.firstElementChild.style.opacity="0";/*------------------------------------hide image*/
  elm.classList.remove('selected_img');/*---------------------------------------remove specific class for identification*/
}


 function mainFn(element) {/*---------------------------------------------------------the most main function to manage pexeso-code */
       
    if(element.classList.contains('mask')){/*-------------------------------if on image is joker´s image */

      var imgElm = element.firstElementChild;
      imgElm.style.opacity="100";/*-----------------------------------------show image */
      element.classList.remove('mask');/*-----------------------------------remove joker image */
      element.classList.add('selected_img');/*------------------------------give specific class for identification*/


      if(stticSource===""){/*----------------------------------------if no image is shown, get attribute from clicked*/
         
        setStticSource(imgElm.getAttribute("src"));
      }else{/*--------------------------------------------------------------compare sources attribute of showed and clicked */
          
          let firstSelectedImg = document.getElementsByClassName("selected_img")[0];
          let secondSelectedImg= document.getElementsByClassName("selected_img")[1];

          if(stticSource===imgElm.getAttribute("src")){/*------------if the same --> remove images */
               document.body.style.pointerEvents = "none";/*----------------prevent to show third image*/
        
                  animateAndDelete(firstSelectedImg,secondSelectedImg);
                                                            
                  document.body.style.pointerEvents = "auto";/*-------------give back functionality to pointer*/
                  
                  setStticSource("");
                                     
          }else{/*----------------------------------------------------------if NOT - the same src-path --> hide images below joker img */
              document.body.style.pointerEvents = "none";/*-----------------prevent to show third image*/

              setTimeout(function(){

                  _hideImage(firstSelectedImg);
                  _hideImage(secondSelectedImg);

                  document.body.style.pointerEvents = "auto";/*-------------give back functionality to pointer*/

                  setStticSource("");/*----------------------------------clear comparable variable */

                  if(level!=="normal"){
                    shuffle();/*-------------------in harder (and hardest) version ... shuffle after good trying*/
                  }

                 
              }, 300);
          }
      }
  
   }
}

  return (
    <div onClick={(e) => {mainFn(e.target.parentNode)}} className='mask div_on_click' key={index}>
        <img  src={"pictures/pexeso/"+pictureName+".jpg"} alt='Smiley face' />  
    </div> 
  );
}
