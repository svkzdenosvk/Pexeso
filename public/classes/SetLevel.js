/*------------------------------- SET LEVEL CLASS----------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/
export default class SetLevel {
    getLevel() {
        return this.level;
    }
    _setLevelChanges(colorText, colorBG) {
        // set H1
        let headingTextColl = document.getElementsByTagName('H1');
        let headingText = headingTextColl[0];
        headingText.style.color = colorText;
        headingText.textContent = "Pexeso";
        // set background of page
        let bodyColl = document.getElementsByTagName('BODY');
        let body = bodyColl[0];
        body.style.backgroundColor = colorBG;
        // set disappear settings buttons and show timer and starter of game
        document.getElementById("levelBtns").style.display = "none";
        document.getElementById("timeAndStart").style.display = "flex";
        document.getElementById("seconds").style.color = colorText;
    }
    setHarder() {
        this._setLevelChanges("white", "#4d141d");
    }
    setHardest() {
        this._setLevelChanges("white", "black");
    }
    setNormal() {
        this._setLevelChanges("black");
    }
    setLevel(leveliD) {
        this.level = leveliD;
        //modifyLevel(leveliD);
        switch (this.level) {
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
