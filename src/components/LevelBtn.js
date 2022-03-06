
export const LevelBtn = ( {my_setLevel,id,text}) => {

      
  return (
     <div onClick={(e) => {my_setLevel(e,id)}} id={id}  >{text}</div>
  )
}

