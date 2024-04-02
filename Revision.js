// Array
let names = ["Radhe Radhe", "Hare Krishn","indu", "rani", 1, "Anurg", 3, true, false];
console.log(names[names.length - 4]);

//    manipulation when we know the index
names[names.length - 4] = "Anurag"
console.log(names);

//    manipulation when we don't know the index
for(let i = 0; i < names.length; i++ ){
	if(names[i] === "Anurg"){
		names[i] = "Anurag Sir"
	}
}
console.log(names);