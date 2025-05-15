function Image(props) {
  return (
    <div class="image-box">
      <img src="https://images.pexels.com/photos/2664417/pexels-photo-2664417.jpeg?auto=compress&cs=tinysrgb&w=400"
      alt=""/>
      {/* <img src={props.src} alt="" /> */}
      <img src={props.src} alt="" />
    </div>
    // <div class="image-box">, we'll get error on writing class as this is not HTML , it is HTML like , kyuki hum same HTML jaisi chiz js me likh rahe hai and js me class ek reserved keyword hai so we'll use className if we want to set class

    // class jaisi chiz hum nahi kar sakte jsx me kyuki jsx finally transpile karegi babble ka use kar ke  and wo confuse ho sakta hai ki class keyword hai ya kya hai so we'll use className class dene ke liye 

  
  )
}

export default Image;
