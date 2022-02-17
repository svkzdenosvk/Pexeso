import {level, modifyLevel, secondsEl} from './VarsAndConst.js'


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

   export default function setLevel(leveliD){/*-----------------------------------------------------main f. for set level*/
      
        //level=leveliD;
        modifyLevel(leveliD);
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

   // module.exports=setLevel;