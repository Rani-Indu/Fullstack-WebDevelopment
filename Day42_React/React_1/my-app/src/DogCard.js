import Name from "./Name.js";
// import image from "./image.js";
function DogCard(props) {
  return (
    <>
      <Name>
        <h3>{props.name}</h3>
      </Name> 
      <img src={props.image} alt="" />       
    </>
  );
}

export default DogCard;
