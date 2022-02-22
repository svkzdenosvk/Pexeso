"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Time__js_1 = __importDefault(require("./Time..js"));
var ShowHideImg_js_1 = __importDefault(require("./ShowHideImg.js"));
var SetLevel_js_1 = __importDefault(require("./SetLevel.js"));
var Shuffle_js_1 = __importDefault(require("./Shuffle.js"));
/*-------------------------------MAIN CONTROLLING CLASS----------------------------------------*/
/*---------------------------------------------------------------------------------------------*/
var Pexeso = /** @class */ (function () {
    function Pexeso() {
        this.timeController = new Time__js_1.default();
        this.showHideImgController = new ShowHideImg_js_1.default();
    }
    Pexeso.prototype.mainFn = function (element) {
        if (element.classList.contains('mask')) { /*-------------------------------if on image is joker´s image */
            var imgElm = element.firstElementChild;
            imgElm.style.opacity = "100"; /*-----------------------------------------show image */
            element.classList.remove('mask'); /*-----------------------------------remove joker image */
            element.classList.add('selected_img'); /*------------------------------give specific class for identification*/
            if (Pexeso.stticSource === "") { /*----------------------------------------if no image is shown, get attribute from clicked*/
                Pexeso.stticSource = imgElm.getAttribute("src");
            }
            else { /*--------------------------------------------------------------compare sources attribute of showed and clicked */
                var firstSelectedImg_1 = document.getElementsByClassName("selected_img")[0];
                var secondSelectedImg_1 = document.getElementsByClassName("selected_img")[1];
                if (Pexeso.stticSource === imgElm.getAttribute("src")) { /*------------if the same --> remove images */
                    document.body.style.pointerEvents = "none"; /*----------------prevent to show third image*/
                    this.showHideImgController.animateAndDelete(firstSelectedImg_1, secondSelectedImg_1);
                    document.body.style.pointerEvents = "auto"; /*-------------give back functionality to pointer*/
                    Pexeso.stticSource = "";
                }
                else { /*----------------------------------------------------------if NOT - the same src-path --> hide images below joker img */
                    document.body.style.pointerEvents = "none"; /*-----------------prevent to show third image*/
                    setTimeout(function () {
                        ShowHideImg_js_1.default._hideImage(firstSelectedImg_1);
                        ShowHideImg_js_1.default._hideImage(secondSelectedImg_1);
                        document.body.style.pointerEvents = "auto"; /*-------------give back functionality to pointer*/
                        Pexeso.stticSource = ""; /*----------------------------------clear comparable variable */
                        if (Pexeso.setLevelController.level != "normal") {
                            Pexeso.shuffleController.shuffle(); /*-------------------in harder (and hardest) version ... shuffle after good trying*/
                        }
                    }, 300);
                }
            }
        }
    };
    Pexeso.stticSource = "";
    Pexeso.setLevelController = new SetLevel_js_1.default();
    Pexeso.shuffleController = new Shuffle_js_1.default();
    return Pexeso;
}());
exports.default = Pexeso;
