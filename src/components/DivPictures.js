import { DivPicture } from './DivPicture.js';
import { useState } from "react";

export const DivPictures = ({level, shuffle,intervalSecond,seconds}) => {

     const [stticSource, setStticSource] = useState("");


    //array of pictures names
     const arr= ["blesk", "drop", "sea", "space", "sun", "vibration", "wind", "wood"];
     const fullArr= [...arr, ...arr];

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
