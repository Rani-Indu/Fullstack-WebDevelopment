const accessKey = 'fCYQK0rhQQzPIN4UN8ZLJBJXPd42FzseoXPz6M9gEaU';
const searchForm = document.querySelector("form");
const searchInput = document.querySelector(".search_input");
const imageContainer = document.querySelector(".image_container");
const loadMoreBtn = document.querySelector(".loadMoreBtn");


let page = 1;
// Function to fetch images using Unsplash API
const fetchImages = async(text, pageNo)=>{
	try {
		
	
	if(pageNo === 1){
		imageContainer.innerHTML = '';
	}
	// text - any random name by our choice
//    ?


	// console.log(text);
	// const url = `https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY`
	const url = `https://api.unsplash.com/search/photos/?query=${text}&per_page=28&page=${pageNo}&client_id=${accessKey}`;


	const response = await fetch(url);
	const data = await response.json();
	// console.log(data);
	// data.result comes out to be an array so we'll apply loop
	if(data.results.length > 0){
		data.results.forEach((photo) => {
			const imageElement = document.createElement("div");
			imageElement.classList.add("imageDiv");
			imageElement.innerHTML = `<img src="${photo.urls.regular}"/>`;
	
			imageContainer.appendChild(imageElement);
	
	
			// creating overlay element
			const overlayElement = document.createElement("div");
			overlayElement.classList.add("overlay");
			
			imageElement.appendChild(overlayElement);
			
	
			// creating overlay text
			const overlayText = document.createElement("h3");
			// overlayText.innerHTML = `${photo.alt_description}`;
			overlayText.innerText = `${photo.alt_description}`;
			
			overlayElement.appendChild(overlayText);	
		});
	
		if(data.total_pages === pageNo){
			loadMoreBtn.style.display = "none";
		} else{
			loadMoreBtn.style.display = "block";	
		}
	}
	else{
		if(pageNo === 1) {
			imageContainer.innerHTML = `<h3>No Image Found</h3>`;
		}
		loadMoreBtn.style.display = "none";
	}

} catch (error) {
	imageContainer.innerHTML = `<h3>Failed to fetch images. Please try again later.</h3>`;
	loadMoreBtn.style.display = "none";	
}
};

// adding eventlistener to search form
searchForm.addEventListener("submit", (e)=>{
	e.preventDefault();
	// console.log(searchInput.value);
	const inputText = searchInput.value.trim();
	// trim will remove all the extra space, eg input = "  coding" then space from front will get removed and we'll get only coding
	if(inputText !== ''){
		page = 1;
		fetchImages(inputText, page);
		// input box me kuch value hai to uske respect me images fetch karo 
	} else {
		imageContainer.innerHTML = `<h3>Please enter a search query.</h3>`;
		// agar input box empty hai to ye msg display karo
		loadMoreBtn.style.display = "none";
	}
});


// adding eventlistener to loadMoreBtn
loadMoreBtn.addEventListener("click", () => {
	fetchImages(searchInput.value.trim(), ++page)
});