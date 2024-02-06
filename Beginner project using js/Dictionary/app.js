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

	// The code form.element[0].value is used to retrieve the value of the first element (index 0) within a form. 

	// For example, if you have a form with an input field for entering a word and you want to retrieve the value entered by the user in that input field, you can use this code.
})


const getWordInfo = async (word) => {
	try {
		resultDiv.innerHTML = "Fetching Data .....";
		
	
	// alert("word : "+ word);	// just to check working
	const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
	// console.log(response); // JSON format
	const data = await response.json();
	console.log(data);
	

	// === undefined ? "Not Found" : data[0].word
	// i html we haven't created any html tags/elements so we'll create element/tags here only and then access then to show result
	resultDiv.innerHTML = `
		<h2><strong>Word : </strong>${data[0].word }</h2>

		<p class="pos"><strong></strong>${data[0].meanings[0].partOfSpeech}</p>

		<p><strong>Definition : </strong>${data[0].meanings[0].definitions[0].definition === undefined ? "Not Found" : data[0].meanings[0].definitions[0].definition}</p>

		<p><strong>Definition : </strong>${data[0].meanings[1].definitions[0].definition === undefined ? "Not Found" : data[0].meanings[1].definitions[0].definition}</p>


		<p><strong>Example : </strong>${data[0].meanings[0].definitions[0].Example === undefined ? "Not Found" : data[0].meanings[0].definitions[0].Example}</p>


		${ /*we can also find antonym like this : <p><strong>Antonyms : </strong>${data[0].meanings[0].antonyms[0] === undefined ? "Not Found" : data[0].meanings[0].antonyms[0]}</p>*/'' }

		<p><strong>Antonyms :</strong> </p>
		
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
	
	