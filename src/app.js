let pronoun = ["the", "our"];
let adj = ["great", "big", "only", "amazing", "lordOf", "masterOf"];
let noun = ["jogger", "raccoon", "anime", "coffee", "cats" ];
let tld = [".net", ".com",".gov",".me", ".dev", ".us"]

var construirDominio = [];
let listadelistas = [pronoun, adj, noun, tld];

function randomNum(item) {
  let num = Math.floor(Math.random() * item.length);
  construirDominio.push(item[num]);
}

listadelistas.forEach(randomNum);

let domainName = construirDominio.join(" ");
let domainDOM = document.getElementById("domainName");
domainDOM.innerText = domainName;

// console.log(builtExcuse.join(" "))
