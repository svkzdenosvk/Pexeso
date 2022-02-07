
const express = require('express');

//express app
const app = express();



// register view engine
app.set('view engine', 'ejs');

app.listen(3000);

app.get('/', (req, res) =>{

const imgsFolder = './pictures/pexeso';
const fs = require('fs');
const path = require('path');


// array of pictures
  var arrPictures=[];
  var arr;

  // load pictures
  fs.readdir(imgsFolder, (err, files) => {
    files.forEach(file => {

    // without extensions
    arrPictures.push(path.parse(file).name);

    });
    
    //double for pairing 
    arrPictures= [...arrPictures,...arrPictures];

    //shuffle aray
    function _shuffleArray(array) {/*----------------------- shuffle random positions in array stolen from : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array  (EDIT: Updating to ES6 / ECMAScript 2015) */
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
    }  

    _shuffleArray(arrPictures);

    var picturesDivs;
    

    //add pictures in div
    arrPictures.forEach(function(picture){

        picturesDivs += 
        `
                <div class='mask div_on_click'>
                      <img  src='pictures/pexeso/`+picture+`.jpg' alt='Smiley face' >  
                </div>   
        `;
  
      });

    //res.sendFile('./view/index.html', { root: __dirname });
    res.render('index', {content : picturesDivs});
  });
});
