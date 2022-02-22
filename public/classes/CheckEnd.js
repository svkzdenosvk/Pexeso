"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Time__js_1 = __importDefault(require("./Time..js"));
/*------------------------------------ CHECKING END CLASS--------------------------------------*/
/*---------------------------------------------------------------------------------------------*/
var CheckEnd = /** @class */ (function () {
    function CheckEnd() {
    }
    CheckEnd.prototype.checkEnd = function () {
        setTimeout(function () {
            if (!document.getElementById("row").firstElementChild) { /*------------------if all images on page are removed */
                Time__js_1.default.stopTimer(); /*---------------------------------------------------stop increment seconds */
                var endTime = CheckEnd._fmtMSS(Time__js_1.default.seconds); /*-------------------------formating time */
                var bodyTag = document.getElementsByTagName("BODY")[0];
                bodyTag.firstElementChild.classList.add('div_center'); /*---------------start ---animation of gratulation text */
                var headTitle = document.getElementsByTagName("H1")[0];
                var timeArr = endTime.split(":"); /*--------------------------------------split time string (seconds:minutes) to array for separate minutes and second in gratulation text */
                headTitle.innerHTML = "Gratulácia, vyhrali ste za " + (timeArr[0] == "0" ? "" : timeArr[0] + "m") + " " + timeArr[1] + "s";
                headTitle.classList.add('h1End'); /*------------------------------------end ---animation of gratulation text */
            }
        }, 50);
    };
    CheckEnd._fmtMSS = function (s) { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s; };
    return CheckEnd;
}());
exports.default = CheckEnd;
