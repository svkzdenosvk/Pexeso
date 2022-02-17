
const imgsFolder = './public/pictures/pexeso';
const fs = require('fs');
const path = require('path');

if (!fs.existsSync('index.html')){
  var arrPictures=[];

  fs.readdir(imgsFolder, (err, files) => {
    files.forEach(file => {

    // without extensions
    arrPictures.push(path.parse(file).name);

    });

    //double for pairing 
    arrPictures= [...arrPictures,...arrPictures];

    //shuffle aray
    function _shuffleArray(array) {/*-----------------------partial f. to shuffle random positions in array stolen from : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array  (EDIT: Updating to ES6 / ECMAScript 2015) */
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
    }  

    _shuffleArray(arrPictures);
    console.log(arrPictures);

    htmlString=`
    <!DOCTYPE html>
  <html lang="sk">
      <head>

      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-8WH83JV9LP"></script>
      <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-8WH83JV9LP');
      </script>

          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


          <script type="module" src="/app.js" defer></script> 

          <link rel="stylesheet" href="/pexeso.css" >

          <title>Pexeso</title>
      </head>
      <body>
          
          <div >
              <div id="timeAndStart">
                  <div  id="seconds" >0 s</div>
                  <div  id="start" >START</div>
              </div>
              <div id="levelBtns">
                  <div  id="normal"  >NORMAL</div>
                  <div  id="harder"  >HARDER</div>
                  <div  id="hardest" >HARDEST</div>
              </div>

          </div>

          <h1>Vstúpili ste do hry Pexeso, najskôr nastavte obtiažnosť</h1>
          
          <div class="column_content" id="content">
            <div class="row" id="row">
                              
    `;

    //write in html
    arrPictures.forEach(function(picture){

    htmlString += 
      `
              <div class='mask div_on_click'>
                    <img  src='pictures/pexeso/`+picture+`.jpg' alt='Smiley face' >  
              </div>   
      `;

    });
    
    htmlString += `    
            </div> 
          </div>
        </body>
      </html>`;

    fs.appendFile('index.html', htmlString, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

  });

}

