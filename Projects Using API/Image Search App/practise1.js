const accessKey = `fCYQK0rhQQzPIN4UN8ZLJBJXPd42FzseoXPz6M9gEaU`;
const form = document.querySelector("form");
const inputSearch = document.querySelector(".input_search");
const imageContainer = document.querySelector(".image-container");
const loadmoreBtn = document.querySelector(".loadmoreBtn");

let page = 1;

const fetchImages = async(text, pageNo) => {
	const url = `https://api.unsplash.com/search/photos/?query=${text}&per_page=30&page=${pageNo}&client_id=${accessKey}`;
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);

	if(data.total_pages === pageNo){
		loadmoreBtn.style.display = "none"
	}
	else{
		loadmoreBtn.style.display = "block"

	}

	if(data.results.length > 0){

	if(page === 1){
		imageContainer.innerHTML = '';
	}

	data.results.forEach(photo => {
		const imageElement = document.createElement("div");
		imageElement.classList.add("imageDiv");
		imageElement.innerHTML = `<img src="${photo.urls.regular}"/>`;
		imageContainer.appendChild(imageElement);

		const overlayElement = document.createElement("div");
		overlayElement.classList.add("overlay");
		imageElement.appendChild(overlayElement);

		const overlayText = document.createElement("h3");
		overlayText.innerText = `${photo.alt_description}`
		overlayElement.appendChild(overlayText);	
	});
}
else{
	imageContainer.innerHTML = `<h2>No Image Found</h2>`;
	loadmoreBtn.style.display = "none";
}

};






form.addEventListener("submit", (e) => {
	e.preventDefault();
	inputText = inputSearch.value.trim();
	if(inputText !== ''){
		page = 1
		fetchImages(inputText, page);
	}
	else{
		imageContainer.innerHTML = `<h2>Please enter a search query!!</h2>`
	}

});

loadmoreBtn.addEventListener("click", () => {
	fetchImages(inputSearch.value.trim(), ++page);
});