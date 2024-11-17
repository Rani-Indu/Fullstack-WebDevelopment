let btn = document.querySelector(".btn");
let body = document.querySelector("body");
let hexcodehex = document.querySelector("#hex-code");

btn.addEventListener("click", () => {
  hex_code_alp();
  // const options= ["red", "orange","green", "yellow", "purple", "violet", "magenta", "pink", "silver", "gold", "orangered", "aqua", "aquamarine", "blue", "yellowgreen"];
  // ranIdx = Math.floor(Math.random()*options.length);
  // // console.log(options[ranIdx]);
  // const selectedColor = options[ranIdx];
  // body.style.backgroundColor = selectedColor;
  // console.log(selectedColor);
  // // hex_code()
});

const hex_code_alp = () => {
  const hex_numbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let hexcode = "";
  for (let i = 0; i < 6; i++) {
    const ranIdx = Math.floor(Math.random() * hex_numbers.length);
    let randhexcolor = hex_numbers[ranIdx];
    hexcode += randhexcolor;
  }
  hexcodehex.innerHTML = hexcode;
  body.style.backgroundColor = `#${hexcode}`;
};
// '#' + hexcode

// function changeColor()
// {
//   var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];

//   var hexcode = '';

//   for(var i = 0; i<6; i++){
//     var random_index = Math.floor(Math.random() * hex_numbers.length);
//     hexcode += hex_numbers[random_index];
//   }

//   document.getElementById("hex-code").innerHTML = hexcode;
//   document.body.style.backgroundColor = '#' + hexcode;
// }
