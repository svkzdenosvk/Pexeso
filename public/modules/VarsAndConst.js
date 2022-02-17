/**------------------------------------------------VARIABLES---------------------------------------------- */

/*------------------------(like) GLOBAL */

export let stticSource=""; /*------------variable to save and then check source of image to compare and remove if same*/
export function modifyStticSource( value ) { stticSource = value; }

export let level;
export function modifyLevel( value ) { level = value; }

export let intervalSecond;/*--------------variable to save function of interval for seconds interval*/
export function modifyIntervalSecond( value ) { intervalSecond = value; }

let intervalShuffle;/*-------------variable to save function of interval for shuffle interval*/
export function modifyIntervalShuffle( value ) { intervalShuffle = value; }

export let seconds = 0;/*-----------------variable for seconds increment*/
export function modifySeconds( value ) { seconds = value; }


/*------------------------CONSTANTS */

export const secondsEl=document.getElementById("seconds");

export const start =document.getElementById("start"); /*--------I don´t understand why is this not needed ?!?!*/

const levelBtns=document.getElementById("levelBtns");
export const levelsHTMLColl = levelBtns.children;

export const imgsColl = document.getElementsByClassName("div_on_click");