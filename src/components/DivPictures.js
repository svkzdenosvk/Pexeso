import { DivPicture } from './DivPicture.js';


export const DivPictures = () => {



     const arr= ["blesk", "drop", "sea", "space", "sun", "vibration", "wind", "wood"];
     const fullArr= [...arr, ...arr];

     const divItems = fullArr.map((pictureName,index) =>

        <DivPicture key={index} pictureName={pictureName}/>

     );


  return (
    <div className="row" id="row">

         {divItems}
    
    </div> 
   
  );
}
