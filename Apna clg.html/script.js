// console.log("hello");
// alert("hiii")

// console.dir(window.document)     // OR
// console.dir(document) 
//     because this is object
// window is global element so we can even write as above  


//  to access body
// console.dir(document.body);
// console.dir(document.childNodes[1]);
// console.log(document.body); 


//                                           for id 
// let header = document.getElementById("heading");
// console.dir(header);
// console.log(header);

//                                          for class
// let header = document.getElementsByClassName("heading-class");
// console.dir(header);
// console.log(header);


//                                          selecting with tag

// let para = document.getElementsByTagName("p");
// console.dir(para);
// console.log(para);


//                       query selector

//                        element

// let firEle = document.querySelector("p");        // first element
// console.dir(firEle);

// let AllEle = document.querySelectorAll("p");         // all elem
// console.dir(AllEle);

// o/p is nodelist - list of various node element-in  tree like structure each individual box is called node 

//                                               class

// let class1 = document.querySelector(".heading");        
// console.dir(class1);

// let class2 = document.querySelectorAll(".heading");          
// console.dir(class2);             

//                                               id 


//  id is unique so only for one element not for all element
// let id1 = document.querySelector("#myId");        
// console.dir(id1);

//                   tagname

// let firEle = document.querySelector("button");       
// console.dir(firEle);

// let firElem = document.querySelector("p");       
// console.dir(firElem);

// console.dir(document.body.firstChild);
// we are getting "#text" in result




//                        DOM Manipulation

// let div = document.querySelector("div")
// console.dir(div);

// let heading = document.querySelector("h1")
// console.dir(heading);


//                                  question 1

// let heading = document.querySelector("h2")
// console.dir(heading);



//                                  question 2

// method 1
// let divs = document.querySelectorAll(".box");
// // console.log(divs);
// console.log(divs[0]);
// console.log(divs[1]);
// console.log(divs[2]);
// divs[0].innerText = " Radhe Radhe"
// divs[1].innerText = " Hare Krishna"
// divs[2].innerText = " Jai Shri RadhaKrishna "


//    method 2

// let divs = document.querySelectorAll(".box");
// // console.log(divs);
// // console.log(divs[0]);
// let idx = 1;
// for (div of divs) {
// 	// console.log(div);
// 	// console.log(div.innerText);
// 	div.innerText = `new unique value ${idx}`;
// 	idx++;
// }


// divs[0].innerText = "new unique value 1"
// divs[1].innerText = "new unique value 2"
// divs[2].innerText = "new unique value 3"


//               question 2 / method 2

// let divs = document.querySelectorAll(".box");
// // console.log(divs);
// let idx = 1;
// for (div of divs) {
// 	div.innerText = `Radhe Radhe ${idx}`;
// 	idx++;
// } 






