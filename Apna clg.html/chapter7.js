
//                            
//  method 1


//                     for div

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);


//                         for class

// let para = document.querySelector("p");
// console.log(para);

// let cla = para.getAttribute("class");
// console.log(cla);

// let iden = para.getAttribute("name");
// console.log(iden);


// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// let heloo = document.querySelector("p");
// console.log(heloo);
// let ola = heloo.getAttribute("name");
// console.log(ola);
// let hola = heloo.getAttribute("class");
// console.log(hola);



//                             1st and 2nd p tag                   


// let heloo = document.querySelector(".para");
// console.log(heloo);    // to access 2nd p tag
// // let heloo = document.querySelector("p");
// // console.log(heloo);   // to access 1st p tag
// let ola = heloo.getAttribute("class");
// console.log(ola);
// let hola = heloo.getAttribute("name");
// console.log(hola);



//                          set Attribute

// let heloo = document.querySelector("p");
// console.log(heloo.setAttribute("class", "newpara")); 




//                      style 

// let sys = document.querySelector("#box");
// console.log(sys);

//                     or

// let sys = document.querySelector("div");
// // console.log(sys);
// sys.style.backgroundColor = "green";
// sys.style.backgroundColor = "purple";
// sys.style.color = "orange";
// // sys.style.visibility = "hidden";
// sys.style.fontSize = "30px";
// sys.innerText = "Hello !!";





//                      Insert Element


//        new button 

// let newBtn = document.createElement("button");
// // console.log(newBtn);
// // console.dir(newBtn);
// newBtn.innerText = "click here !";
// console.log(newBtn);


//   node is div , we want to append in or using div
// let div = document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);


// // node is p tag , we want to append in or using p
// let p = document.querySelector("p");
// // p.after(newBtn);
// p.before(newBtn);



//  new heading 1 
//create
// let newHeading = document.createElement("heading");
// newHeading.innerText = " somebody to you"
// console.log(newHeading);

// // add - to add we need to access the element, node is body
// let heading = document.querySelector("body");
// // heading.after(newHeading)
// heading.before(newHeading)



//  new heading 2
// let newHeading = document.createElement("h1");
// newHeading.innerHTML= "<i> Hi, I am new!!</i>";
// document.querySelector("body").prepend(newHeading);



//                   delete element 

// let para = document.querySelector("p");
// para.remove()



//                                     Question     7:08:49

// let newButton = document.createElement("button");
// newButton.innerText = "click me !"
// console.log(newButton);

// newButton.style.backgroundColor = "red";
// newButton.style.color = "white";
// let sys = document.querySelector("body");
// sys.prepend(newButton);
// document.querySelector("body").prepend(newButton)

//                                          question  7:12:00
// let para = document.querySelector("p");
let para = document.querySelector("p");

