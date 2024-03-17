//                                  DOM - part 1

//                  id
document.getElementById("one");
// console.log(document.getElementById("one"));;
// console.log(document.getElementById("one").innerText);;
// console.log(document.getElementById("one").innerHTML);;

//                   class
document.getElementsByClassName("tech");
let a = document.getElementsByClassName("tech");
// console.log(a);
// console.log(a[0]);
// console.log(a[0].innerText);
// console.log(a[2]);
// console.log(a[2].innerText);
// a[2].innerText = "The Vamps"
// console.log(a[2].innerText);

//                    tagName
// document.getElementsByTagName("h1");
// let b = document.getElementsByTagName("h1");
// console.log(b);

// wrong code
// console.log(b.innerText);
// as this line attempts to access innerText directly on the collection itself. However, innerText is not a property of an HTML collection; it's a property of individual HTML elements. Therefore, this line will likely throw an error, such as "Cannot read property 'innerText' of undefined" or "b.innerText is not a function".

//    right code
// console.log(b[0].innerText);
// b[0].style.color = "pink"
// b[0].style.backgroundColor = "aqua"
// console.log(b[1].innerText);

// console.log(b.innerText);  // output - undefined
// b.innerText = "Maa Radha"
// console.log(b.innerText);   // output is Maa Radha

//                                 query selector

b = document.querySelector(".first");

//  method to change name of already existing class
b.className = "Hola";
console.log(b);

// method to give multiple class
// b.classList = "hello hola hi"
// console.log(b);

// b.setAttribute("id", "js")
// upon hover on first on browser we can see indu
b.setAttribute("title", "indu");
// b.setAttribute("Attribute ka naam", "Attribute ki value")



//                                   DOM - part 2