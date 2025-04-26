function Image() {
  return (
    <img
      src="https://images.pexels.com/photos/2664417/pexels-photo-2664417.jpeg?auto=compress&cs=tinysrgb&w=400"
      alt=""
    />
  );
}

function DogCard() {
  return (
    <div>
      <h3>Bruno</h3>
      <Image />
      <Image />
    </div>
  );
}

export default DogCard;
