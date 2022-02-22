"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pexeso_1 = __importDefault(require("./Pexeso"));
/*------------------------------------ SHUFFLE CLASS-------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/
var Shuffle = /** @class */ (function () {
    function Shuffle() {
    }
    Shuffle.prototype._shuffleArray = function (array) {
        var _a;
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
        }
    };
    Shuffle.prototype.shuffle = function () {
        if (Pexeso_1.default.setLevelController.getLevel() != "normal") {
            //get HTMLcollection
            var x = document.getElementsByClassName("div_on_click"); /*------------------collection of divs above image*/
            //convert collection to array
            var arr = Array.from(x);
            this._shuffleArray(arr);
            //remove old collection
            var row = document.getElementById("row");
            row.innerHTML = "";
            // add new random order of collection
            for (var i = 0; i < arr.length; i++) {
                row.appendChild(arr[i]);
            }
        }
    };
    return Shuffle;
}());
exports.default = Shuffle;
