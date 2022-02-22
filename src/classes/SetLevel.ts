
/*------------------------------- SET LEVEL CLASS----------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/
export default class SetLevel{

     private level:string

     getLevel(){
         return this.level
     }

    private _setLevelChanges(colorText:string,colorBG?:string){/*--------------------------------- partial function for set level of the game*/
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
    
    
    setLevel(leveliD:string){/*-------------------------------------------------------main f. for set level*/
      
        this.level=leveliD;
        //modifyLevel(leveliD);
        switch(this.level) {
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