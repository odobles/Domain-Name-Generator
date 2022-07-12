window.addEventListener("DOMContentLoaded", () => {


  let pronoun = ["the", "our", "my"];
  let adj = ["great", "big", "legendary", "amazing", "blue", "only", "anonimous"];
  let noun = ["jogger", "cat", "productions", "cubes", "bird", "devs"];

  let dominio = [];

	for (let a of pronoun) {
		for (let b of adj) {
			for (let c of noun) {
				dominio.push(a + b + c + ".com");
			}
		}
	}

  for (let item of dominio){
    let domainList = document.getElementById("domainList");
    let newadd = document.createElement("li");
    newadd.innerText = item;
    domainList.appendChild(newadd);
    }
});
