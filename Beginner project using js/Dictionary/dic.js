const form = document.querySelector("form");
const resultDiv = document.querySelector(".result");
const input = document.querySelector("input");


const getWordInfo = async (word) => {
	try {
	const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
	const data = await response.json();
	// console.log(data);
	// console.log(word);
	// alert("word : " + word)


	resultDiv.innerHTML = `
	<h2><strong>Word : </strong> ${data[0].word}</h2>
	<p><strong></strong>${data[0].meanings[0].partOfSpeech}</p>
	<p><strong>Definition : </strong>${data[0].meanings[0].definitions[0].definition === undefined ? "No Result Found" : data[0].meanings[0].definitions[0].definition }</p>
	<p><strong>Definition : </strong>${data[0].meanings[1].definitions[0].definition === undefined ? "No Result Found" : data[0].meanings[1].definitions[0].definition}</p>
	<p><strong>Example : </strong>${data[0].meanings[1].definitions[0].example === undefined ? "No Result Found" : data[0].meanings[1].definitions[0].example}</p>
	<p><strong>Synonyms : </strong></p>

	` 

	if(data[0].meanings[0].synonyms.length === 0){
		resultDiv.innerHTML += `<p>No Result Found</p>`
	}
	else{
		for(let i=0; i<data[0].meanings[0].synonyms.length; i++){
			resultDiv.innerHTML += `<li>${data[0].meanings[0].synonyms[i]}</li>`
		}
	}
	resultDiv.innerHTML += `<p><strong>Antonyms : </strong></p>`

	if(data[0].meanings[0].antonyms.length === 0){
		resultDiv.innerHTML += `<p>No Result Found</p>`
	}else{
		for(let i=0; i<data[0].meanings[0].antonyms.length; i++){
			resultDiv.innerHTML += `<li>${data[0].meanings[0].antonyms[i]}</li>`
		}
	};

	resultDiv.innerHTML += `<p><a href="${data[0].sourceUrls}" target = "_blank">Read More</a></p>`

} catch (error) {
	resultDiv.innerHTML = `<p>Sorry, Word couldn't be found`
		
}};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	getWordInfo(form.elements[0].value)
});