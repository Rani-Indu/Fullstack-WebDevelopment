const accessKey = 'fCYQK0rhQQzPIN4UN8ZLJBJXPd42FzseoXPz6M9gEaU';
const searchForm = document.querySelector("form");
const searchInput = document.querySelector(".search_input");
const imageContainer = document.querySelector(".image_container");
const loadMoreBtn = document.querySelector(".loadMoreBtn");



let page = 1;
// this is done to make it global so that i can use it wherever needed 
// Function to fetch images using Unsplash API
const fetchImages = async(text, pageNo) => {
	// console.log(text);
	imageContainer.innerHTML = '';
	// imageContainer ke innerHTML ko pehle khali kar diya uske baad ushme image add karenge;
	const url = `https://api.unsplash.com/search/photos?query=${text}&per_page=30&page=${pageNo}&client_id=${accessKey}`
	const response = await fetch(url);
	const data = await response.json();
	// console.log(data);
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
	// results me 30 images hai to loop lagane pe wo ek ek kar ke photo variable me aayenge aur unse hum ek ek image create karenge aur image container me add kar lenge.

};




// adding eventlistener to search form
searchForm.addEventListener("submit",(e) => {
	e.preventDefault();
	// console.log(searchInput.value);
	// fetchImages(searchInput.value);
	const inputText = searchInput.value.trim();
	if(inputText !== ''){
		page = 1;
		fetchImages(inputText, page);
	}
	else{
		imageContainer.innerHTML = `<h2>Please Enter a Search Query</h2>`
	}
});


//adding eventlistener to loadMore Button to fetch more images
loadMoreBtn.addEventListener("click", () => {
	fetchImages(searchInput.value.trim(), ++page);
});
