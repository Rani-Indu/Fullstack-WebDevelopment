function Image(props) {
  return (
    <div>
      <img src="https://images.pexels.com/photos/2664417/pexels-photo-2664417.jpeg?auto=compress&cs=tinysrgb&w=400"
      alt=""/>
      {/* <img src={props.src} alt="" /> */}
      <img src={props.src} alt="" />
    </div>


  
  )
}

export default Image;
