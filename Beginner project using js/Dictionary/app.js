const resultDiv = document.querySelector(".result");
const input = document.querySelector("input");
const form = document.querySelector("form");


// const btn = document.querySelector("button");

// btn.addEventListener("click", (e) => {
	// 	e.preventDefault();
	// })

// or we can directly access the Form as below- 
	

form.addEventListener("submit", (e) => {
	// form ko jab submit karu to arrow function ke andar jo function / kaam likha hai wo ho jaye
	e.preventDefault();
	// prevent auto submit of form - which is default nature of form when button is clicked
	getWordInfo(form.elements[0].value);
	//  ye function run ho jaye jab bhi form submit ho

	// select input directly or form first child as here one and samething

	//getWordInfo(form.elements[0].value): This line calls a function named getWordInfo and passes it the value of the first input element (form.elements[0].value) within the form as an argument. This is typically used to retrieve the user's input from the form and pass it to a function for further processing, such as making an API request to fetch data based on the user's input.

// In summary, this code sets up a listener so that when the form is submitted, it prevents the default form submission behavior, extracts the value entered by the user in the first input field, and then calls a function (getWordInfo) to perform some action with that input value. 
});


const getWordInfo = async (word) => {
	try {
		resultDiv.innerHTML = "Fetching Data .....";
		
	
	// alert("word : "+ word);	// just to check working
	const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
	// console.log(response); // JSON format
	const data = await response.json();
	// console.log(data);
	// console.log(form.elements[0].value);
	// alert("word : " + word);
	

	// === undefined ? "Not Found" : data[0].word - for handling undefined word we have used try and catch 
	// we haven't created any html tags/elements so we'll create element/tags here only and then access then to show result
	resultDiv.innerHTML = `
		<h2><strong>Word : </strong>${data[0].word }</h2>

		<p class="pos"><strong></strong>${data[0].meanings[0].partOfSpeech}</p>

		<p><strong>Definition : </strong>${data[0].meanings[0].definitions[0].definition === undefined ? "Not Found" : data[0].meanings[0].definitions[0].definition}</p>

		<p><strong>Definition : </strong>${data[0].meanings[1].definitions[0].definition === undefined ? "Not Found" : data[0].meanings[1].definitions[0].definition}</p>

		
		<p><strong>Example : </strong>${data[0].meanings[0].definitions[0].Example === undefined ? "Not Found" : data[0].meanings[0].definitions[0].Example}</p>
		
		<p><strong>Antonyms :</strong> </p>

		${ /*we can also find antonym like this : <p><strong>Antonyms : </strong>${data[0].meanings[0].antonyms[0] === undefined ? "Not Found" : data[0].meanings[0].antonyms[0]}</p>*/'' }

		
		`;
		
	if(data[0].meanings[0].antonyms.length === 0 ){
		resultDiv.innerHTML += `<span> "Not Found" </span>`
		// this loop and Antonyms p tag above inside backticks has no relation or interdependency , these are just a line in dictionary app and above p tag is the next line 
	}else{
		for(let i=0; i<data[0].meanings[0].antonyms.length; i++){
			resultDiv.innerHTML += `<li>${data[0].meanings[0].antonyms[i]}</li>`
		}
	}

	resultDiv.innerHTML += `<div><a href="${data[0].sourceUrls}" target="_blank">Read More</a></div>`;

	} catch (error) {
		resultDiv.innerHTML = `<p>Sorry, Word couldn't be found</p>`
			
	}
	


};
	
	