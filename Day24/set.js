//  set is a object
// method to declare a set
let emptySet = new Set()

// console.log(emptySet.size);  // o/p = 0

// let myArray = [1, 2, 3, 4]
// let newSet = new Set(myArray)
// console.log(newSet);

// let myArray1 = [3, 4, 3, 4, 3, 4, 3, 4]
// let newSet1 = new Set(myArray1)
// console.log(newSet1);


let myArray = [1, 2, 3, 4, 3, 2]
let newSet = new Set([...myArray])  // //spread operator
// console.log(newSet);

//                                       add
// newSet.add(2)
// console.log(newSet);

// newSet.add(9)
// newSet.clear()
// clears entire set
// console.log(newSet);

// newSet.add(22)
// console.log(newSet);
// console.log(newSet.has(9));

//                                   set difference
function setDifference(set1, set2){
	// Convert arrays to sets
	const setA = new Set(set1);
    const setB = new Set(set2);
	return new Set([...setA].filter(el => !setB.has(el)))
}

let difference = setDifference([1, 2, 3], [4, 5, 6])
// console.log(difference);
// console.log([...difference]);

// function setDifference(set1, set2){
// 	const setA = new Set(set1)
// 	const setB = new Set(set2)
// 	return new Set([...setA].filter(el => !setB.has(el)))
// }

// difference = setDifference([1, 2, 3, 4], [7, 8, 9])
// console.log(difference);



//                              map

// koi bhi format ki key le sakte , koi bhi format ki value le sakte hai eg - map1.set('a', 1);

let map = new Map();
console.log(map.size);  // o/p = 0
map.set

// array to map

// below array is 2-D array - array inside array//
  
let arr = [[1, "Radhe Radhe"], [2, "Hare Krishn"], [3, "Shree ji"], [4, "Vrindavan"], [5, "Barsana"]];
// array se map banana hai to loop lagana hoga, map, for each
arrItem = arr.map((item) => map.set(item[0], item[1]))
console.log(arrItem);