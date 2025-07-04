let submit = document.getElementById("submit");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let h3 = document.getElementById("h3");

let compteur = 0;
let tab = [];
// console.log(submit);


function retourneTexte(id1) {
   const txt = document.getElementById(`${id1}`).value;
   return txt
}

function nouvelleBalise(type, texte, id){
    let element = document.createElement(`${type}`);
    element.innerText = texte;
    return id.appendChild(element);
}

submit.addEventListener("click", () => {
    compteur ++
    console.log(compteur)
    text = retourneTexte("citation");
    author = retourneTexte("nomAuteur");
    tab.push({text,author});
    console.log(tab)
    
        for (let items of tab)
            {
                p1.innerText = items.text
                p2.innerText = items.author
            }

            if (compteur === 1) {
                h3.innerText = '1 citation';
            }
            else {
                h3.innerText = compteur + ' citations';
            }
})







 
