import Image from "./image.js";

function DogCard() {
  // // grouping HTML element using div
  // return (
  //   <div>
  //     <h3>Bruno</h3>
  //     <Image />
  //   </div>
  // );
  
  // grouping HTML element using fragment
  return (
    <>
      <h3>Bruno</h3>
      <Image />
      <Image />
    </>
  );
}

export default DogCard;
