const form = document.querySelector("form");
const resultDiv = document.querySelector(".result");
const input = document.querySelector("input")

form.addEventListener("submit", (e) => {
	e.preventDefault();
	getWordInfo(form.elements[0].value);
});

const getWordInfo = async (word) => {
	try {
		
	
	const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`); // JSON format
	const data = await response.json(); // asynchronous func
	console.log(data);
	
	resultDiv.innerHTML = `
	<h2><strong>Word : </strong>${data[0].word}</h2>
	
	<p class ="pos">${data[0].meanings[0].partOfSpeech}</p>

	<p><strong>Definition : </strong>${data[0].meanings[0].definitions[0].definition}</p>

	<p><strong>Definition : </strong>${data[0].meanings[0].definitions[1].definition === undefined ? "No Result Found" : data[0].meanings[0].definitions[0].definition}</p>

	<p><strong>Example : </strong>${data[0].meanings[0].definitions[0].example === undefined ? "No Result Found" : data[0].meanings[0].definitions[0].example}</p>

	<p><strong>Example : </strong>${data[0].meanings[0].definitions[1].example === undefined ? "No Result Found" : data[0].meanings[0].definitions[0].example}</p>

	<p><strong>Antonym : </strong>

	`;
if(data[0].meanings[0].antonyms.length === 0){
	resultDiv.innerHTML += `<p>No Result Found</p>`
} else{
	for(let i=0; i<data[0].meanings[0].antonyms.length; i++ ){
		resultDiv.innerHTML += `<li>${data[0].meanings[0].antonyms[i]}</li>`
}}



resultDiv.innerHTML += `
<p>synonyms</p> 
`

if(data[0].meanings[0].synonyms.length === 0){
	resultDiv.innerHTML += `<p>No Result Found</p>`
} else{	
	for(let i=0; i<data[0].meanings[0].synonyms.length; i++ ){
		resultDiv.innerHTML += `<li>${data[0].meanings[0].synonyms[i]}</li>`
	}
	};

resultDiv.innerHTML += `<a href="${data[0].sourceUrls}" targrt = "_blank">Read More</a>`


// resultDiv.innerHTML += `<div><a href="${data[0].sourceUrls}" targrt = "_blank">Read More</a></div>`


} catch (error) {
	resultDiv.innerHTML = '<p>Sorry, No Result Found</p>'
		
}


};