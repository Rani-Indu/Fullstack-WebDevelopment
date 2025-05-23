import Name from "./Name.js";
import Image from "./image.js";
function DogCard(props) {
  let title = "this is a dog card";
  return (
    <>
    <h2> 
      {title} 
      {/* we are using curly braces again and again - we call this as jsx curlies */}
      {/* jo bhi valid js expression hogi usko as input de sakte hai - then puri ki puri js expression evaluate ki jayegi - evaluate karne ke baad  jo final o/p aayega wo apni browser pe render kar rahe honge  */}
      {/* jsx curlies - valid js expression - bahot powerful hote hai - hume koi variable print karna hai, usko UI pe show karna hai tohum jsx curlies hi use karenge  */}
    </h2>
      <Name>
        <h3>{props.name}</h3>
      </Name> 
      <Image src={props.image} alt="" />       
    </>
  );
}

export default DogCard;
