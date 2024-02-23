const accessKey = 'fCYQK0rhQQzPIN4UN8ZLJBJXPd42FzseoXPz6M9gEaU';
const searchForm = document.querySelector("form");
const searchInput = document.querySelector(".search_input");
const imageContainer = document.querySelector(".image_container");
const loadMoreBtn = document.querySelector(".loadMoreBtn");



let page = 1;
// this is done to make it global so that i can use it wherever needed 
// Function to fetch images using Unsplash API
const fetchImages = async(text, pageNo) => {
	try {
		
	// console.log(text);
	if(pageNo === 1){
		// agar pageNo 1 hai tab hi innerhtml ko clear karna hai - aisa karne se "no image to show" hat jayega aur images text ke according display hongi

		// baahi pages ke liye hume ye nahi karna hai kyuki hume load more ke through continue images caahiye aur baaki pages ke liye innerHTML empty karne se purani page ki image clear ho jayegi aur sirf next page ki image display hogi , jo hum nahi caahte 
		imageContainer.innerHTML = '';
		// imageContainer ke innerHTML ko pehle khali kar diya uske baad ushme image add karenge;
	}
	const url = `https://api.unsplash.com/search/photos?query=${text}&per_page=30&page=${pageNo}&client_id=${accessKey}`
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);

	if(data.results.length > 0) {

	// results me 30 images hai to loop lagane pe wo ek ek kar ke photo variable me aayenge aur unse hum ek ek image create karenge aur image container me add kar lenge.
	data.results.forEach(photo => {
		const imageElement = document.createElement("div");
		imageElement.innerHTML = `<img src="${photo.urls.raw}"/>`;
		imageElement.classList.add("imageDiv");
		imageContainer.appendChild(imageElement);
		
		// creating overlay
		const overlayElement = document.createElement("div");
		overlayElement.classList.add("overlay");
		imageElement.appendChild(overlayElement);
		
		// creating overlay Text 
		const overlayText = document.createElement("h3");
		overlayText.innerText = `${photo.alt_description}`;
		overlayElement.appendChild(overlayText);
	});

	// this if else is inside fetchImage function 
	// total_pages - we can see this value in console when we search for any text.
	if(data.total_pages === pageNo){
		loadMoreBtn.style.display = "none";
	} else {
		loadMoreBtn.style.display = "block";
	}

} else{
	imageContainer.innerHTML = `<h2>No image found.</h2>`;
	loadMoreBtn.style.display = "none";
}
// console.log(undefinedVariable.property);
// to check try catch 

} catch (error) {
	imageContainer.innerHTML = `<h2>Failed to fetch Images. Please try again later.</h2>`

	//  to check try catch 
	// console.error("An unknown error occurred:", error);
}
};




// adding eventlistener to search form
searchForm.addEventListener("submit",(e) => {
	e.preventDefault();
	// console.log(searchInput.value);
	// fetchImages(searchInput.value);
	const inputText = searchInput.value.trim();
	if(inputText !== ''){
		page = 1;
		// yaha se page ki value 1 se start ho jayegi
		fetchImages(inputText, page);
	}
	else{
		imageContainer.innerHTML = `<h2>Please Enter a Search Query</h2>`;
	}
});


//adding eventlistener to loadMore Button to fetch more images
loadMoreBtn.addEventListener("click", () => {
	fetchImages(searchInput.value.trim(), ++page);
});
