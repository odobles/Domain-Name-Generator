let sujeto = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let accion = ['ate', 'peed', 'crushed', 'broke', 'stole'];
let objeto = ['my homework', 'my keys', 'the car', 'my PC'];
let tiempo = ['before the class', 'before leaving', 'when I finished', 'during my lunch'];

function randomNum(item)
{
  num = Math.floor(Math.random()*item.length);
  builtExcuse.push(item[num]);
}

let listadelistas = [sujeto, accion, objeto, tiempo];

builtExcuse = [];
listadelistas.forEach(randomNum);

let excusa = builtExcuse.join(" ");
let excusaDOM = document.getElementById("excusa");
excusaDOM.innerText = excusa;

// console.log(builtExcuse.join(" "))