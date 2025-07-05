let submit = document.getElementById("submit");
let h3 = document.getElementById("h3");
let div = document.getElementById("quote-list");

let tab = [];
let compteur = 0;
h3.innerText = `${compteur} citation`

// crée une balise en dynamique html a partir d'une id existante
function nouvelleBalise(typeBalise, texte, id){
    let element = document.createElement(`${typeBalise}`);
    element.innerText = texte;
    return id.appendChild(element);
}

function renvoiInput(id1) {
   const txt = document.getElementById(`${id1}`).value;
   return txt
}

function effaceInput(id1){
    return document.getElementById(`${id1}`).value = "";
}

function addQuote(text, author){
    const p1 = nouvelleBalise("p", text, div);
    const p2 = nouvelleBalise("p", author, div);
    p1.className = "quote";
    p2.className = "author"; 
    return p1, p2
}


 submit.addEventListener("click", () => {
        compteur ++

        if (compteur === 1 )
            {
                h3.innerText = `${compteur} citation`
            }
        else
            {
                h3.innerText = `${compteur} citations`
            }

       
    let input1 = renvoiInput("citation");
    let input2 = renvoiInput("nomAuteur");
    addQuote(input1, input2);
        
        effaceInput("citation");
        effaceInput("nomAuteur");  
    })

 
