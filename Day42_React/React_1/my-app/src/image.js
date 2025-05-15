function Image({src}) { //object ko destructure / unpack kar lete hai
  // ush object me jo bhi src thi wo unpack ho jayegi ek seperate variable me 

  // we can access it as below 
  return (
    <div className="image-box">
      <img src={src}/> // like this 
    </div>
  )
}

export default Image;
