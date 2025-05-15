function DogCard(props) {
    // ye prop DogCard ko kaun dega , app.js dega 
    return(
        <>
        <h3>{props.name}</h3>
        <img src={props.image} alt="" />
        </>
    )
}

export default DogCard;

