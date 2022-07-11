let sujeto = [
  "The dog",
  "My grandma",
  "Elon Musk",
  "Rasputin",
  "The Peaky Blinders",
  "Aliens",
  "A cow",
  "A dinosaur",
  "An old man",
  "John Wick",
  "Shrek",
  "Obama",
  "Bin Laden",
  "Zoboomafoo",
  "Chewbacca",
  "Nicolas Maduro"
];
let accion = [
  "ate",
  "peed",
  "destroyed",
  "stole",
  "sold",
  "burned",
  "lost",
  "buried"
];
let objeto = [
  "my homework",
  "my keys",
  "my car",
  "my PC",
  "my house",
  "my room",
  "my notes",
  "my ID",
  "my driving license",
  "my fridge",
  "my grandpa",
  "my money",
  "my toilet"
];
let tiempo = [
  "before the class",
  "before leaving this morning",
  "this morning",
  "during my lunch",
  "while I was away",
  "the other day",
  "when I was asleep",
  "during break",
  "during vacations"
];

var builtExcuse = [];
let listadelistas = [sujeto, accion, objeto, tiempo];

function randomNum(item) {
  let num = Math.floor(Math.random() * item.length);
  builtExcuse.push(item[num]);
}

listadelistas.forEach(randomNum);

let excusa = builtExcuse.join(" ");
let excusaDOM = document.getElementById("excusa");
excusaDOM.innerText = excusa;

// console.log(builtExcuse.join(" "))
