

export const DivPicture = ({pictureName,key}) => {
    
  return (
    <div className='mask div_on_click' key={key}>
        <img  src={"pictures/pexeso/"+pictureName+".jpg"} alt='Smiley face' />  
    </div> 
  );
}
