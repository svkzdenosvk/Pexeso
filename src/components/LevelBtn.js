
export const LevelBtn = ( {my_setLevel,id,text}) => {

      
  return (
     <div onClick={() => {my_setLevel(id)}} id={id}  >{text}</div>
   // <div onClick={console.log("ahoj")} id={id}  >{text}</div>
  )
}

