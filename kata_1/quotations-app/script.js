let submit = document.getElementById("submit");
let h3 = document.getElementById("h3");
let div = document.getElementById("quote-list");

//tiroir "citations"
let madata = localStorage.getItem("citations");
console.log(madata); //leeet's see 🔎

let tab = []; 


//localStorage.clear(); // 🙏

// il y a deux possibilités soit le localstorage est null
    //console.log(madata); > null
    //il n'a pas été investi
    // du coup

// soit il est rempli
    //console.log(madata); 
    // > [{"auteur":"untel1","citation":"mots1","numero":1},{"auteur":"untel2","citation":"mots2","numero":2}]
    //tableau d'objets mais strings (et oui c'est du JSON !!!)
    // IL FAUT LES RETRANSFOORMER EN objet tableau (parse)

// je verifie si le tiroir existe
if (madata === null){ //si il n'existe pas tab reste vide
    tab = [];
}
else {
    tab = JSON.parse(madata); // sinon je le rempli avec les infos precedentes
}

let compteur = tab.length
h3.innerText = `${compteur} citation`;

// crée une balise en dynamique html a partir d'une id existante
function nouvelleBalise(typeBalise, texte, id){
    let element = document.createElement(`${typeBalise}`);
    element.innerText = texte;
    return id.appendChild(element);
}

function renvoiInput(id1) {
   const txt = document.getElementById(`${id1}`).value;
   if (txt === ""){ // si pas de texte
    return null
   }
   else {
        return txt
   }
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
    let input1 = renvoiInput("citation");
    let input2 = renvoiInput("nomAuteur");

    //si pas de caractère dans les inputs
    if (input1 === null || input2 === null) {
    // on ne compte rien, on sort du click
            return;
        }
    else{
    //on compte
        compteur++
    }

    // texte du compteur
    if (compteur === 1 )
            {
                h3.innerText = `${compteur} citation`
            }
        else
            {
                h3.innerText = `${compteur} citations`
            }
    
    //on rempli notre tableau
    tab.push({auteur: input2, citation: input1, numero: compteur});
    //console LOGGGG
    console.log(tab); 
    
    //pour envoyer tab vers le JSON je dois le transformer en strings
    let tab2 = JSON.stringify(tab);

    localStorage.setItem("citations", tab2); // je declare

    //console LOGGGG
    console.log(localStorage.getItem("citations"));
            //console LOGGGG
            console.log(localStorage);
            
    addQuote(input1, input2);
      
        effaceInput("citation");
        effaceInput("nomAuteur");  
    })


 



