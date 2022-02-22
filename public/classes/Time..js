"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pexeso_js_1 = __importDefault(require("./Pexeso.js"));
/*-------------------------------about TIME CLASS----------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/
var Time = /** @class */ (function () {
    function Time() {
    }
    Time.prototype._incrementSeconds = function () {
        Time.seconds = Time.seconds + 1;
        document.getElementById("seconds").innerHTML = Time.seconds + " s";
    };
    Time.stopTimer = function () {
        clearInterval(this.intervalSecond);
        document.getElementById("seconds").style.display = "none";
    };
    Time.prototype.timer = function () {
        //to hide start button 
        document.getElementById("start").style.display = "none";
        // to see images
        document.getElementsByClassName("column_content")[0].style.display = "flex";
        Time.intervalSecond = setInterval(this._incrementSeconds, 1000);
        // modifyIntervalSecond(setInterval(_incrementSeconds, 1000));
        if (Pexeso_js_1.default.setLevelController.level === "hardest") { /*------------------------working only in hardest version */ /*maybe this can by removed from timer();*/
            this.intervalShuffle = setInterval(Pexeso_js_1.default.shuffleController.shuffle, 800);
        }
    };
    Time.seconds = 0;
    return Time;
}());
exports.default = Time;
