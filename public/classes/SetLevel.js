"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*------------------------------- SET LEVEL CLASS----------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/
var SetLevel = /** @class */ (function () {
    function SetLevel() {
    }
    SetLevel.prototype.getLevel = function () {
        return this.level;
    };
    SetLevel.prototype._setLevelChanges = function (colorText, colorBG) {
        // set H1
        var headingText = document.getElementsByTagName("H1")[0];
        headingText.style.color = colorText;
        headingText.textContent = "Pexeso";
        // set background of page
        document.getElementsByTagName("BODY")[0].style.backgroundColor = colorBG;
        // set disappear settings buttons and show timer and starter of game
        levelBtns.style.display = "none";
        document.getElementById("timeAndStart").style.display = "flex";
        document.getElementById("seconds").style.color = colorText;
    };
    SetLevel.prototype.setHarder = function () {
        this._setLevelChanges("white", "#4d141d");
    };
    SetLevel.prototype.setHardest = function () {
        this._setLevelChanges("white", "black");
    };
    SetLevel.prototype.setNormal = function () {
        this._setLevelChanges("black");
    };
    SetLevel.prototype.setLevel = function (leveliD) {
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
    };
    return SetLevel;
}());
exports.default = SetLevel;
