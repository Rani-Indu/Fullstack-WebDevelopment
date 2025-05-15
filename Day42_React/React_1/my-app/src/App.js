import DogCard from "./DogCard";
// import DogCard from "./DogCard_2.js";
// import {Image, DogCard} from "./DogCard_2.js";
// import DogCard1, {Image} from "./DogCard_2.js";


function App() {
  return ( 
    <div>
      hello
      <DogCard name="Bruno" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-YSBJ_14hDiR-QMbYE0Ahu6NfxNpNxGMfA&s"/>

      {/* <DogCard name="kalu" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9cwv22B2ewujpx09IOYQ7-PIglEKRuKcVBw&s"/>

      <DogCard name="bhuru" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWAJe8JU0TJPRTnRtVHlGSPo4bgCl8ezCUw&s"/>
    
      <DogCard name="lali" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlEMHmf7enwyHHJs7X8xD1Z_2dEy4erhPGHg&s"/> */}
      
    </div>
  );
}
// image ek reusuable component hai , image ke andar bhi kuch attribute honge eg-src , wo hamesha camel case me hoga 


export default App;
