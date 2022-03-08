import { DivPicture } from './DivPicture.js';
import { useState } from "react";

export const DivPictures = ({level, shuffle,intervalSecond,seconds}) => {

  //component about array of pictures

     const [stticSource, setStticSource] = useState("");

    //array of pictures names
     const arr= ["blesk", "drop", "sea", "space", "sun", "vibration", "wind", "wood"];
     const fullArr= [...arr, ...arr];

     //array of components -> div>img
     const divItems = fullArr.map((pictureName,index) =>

        <DivPicture key={index} 
                    pictureName={pictureName} 
                    stticSource={stticSource} 
                    level={level} 
                    shuffle={shuffle} 
                    setStticSource={setStticSource}
                    seconds={seconds}
                    intervalSecond={intervalSecond} />
     );

  return (
    <div className="row" id="row">

         {divItems}
    
    </div> 
   
  );
}
