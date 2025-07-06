// NEXT >> CSS
// NEXT ++ >> rechercher des auteurs et ou des mots


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
    // a remplir

// soit il est deja rempli
    //console.log(madata); 
    //[{"auteur":"untel1","citation":"mots1","numero":1},{"auteur":"untel2","citation":"mots2","numero":2}]
    //tableau d'objets mais strings (et oui c'est du JSON !!!)
    // IL FAUT LES RETRANSFORMER EN objet tableau (parse)

// je verifie si le tiroir existe
if (madata === null){ //si il n'existe pas tab reste vide
    tab = [];
}
else {
    tab = JSON.parse(madata); // sinon je le rempli avec les infos precedentes
}
console.log("a quoi ressemble mon tableau", tab)

let compteur = tab.length;
h3Text();

// crée une balise en dynamique html a partir d'une id existante
function nouvelleBalise(typeBalise, texte, id){
    let element = document.createElement(`${typeBalise}`);
    element.innerText = texte;
    return id.appendChild(element);
}

function recupInput(id1) {
   const txt = document.getElementById(`${id1}`).value;
   if (txt === ""){ // si rien, renvoie null > pour pouvoir sortir du click
    return null
   }
   else {
        return txt
   }
}

function effaceChampInput(id1){
    return document.getElementById(`${id1}`).value = "";
}

function addQuote(text, author){ // affiche dynamiquement ds le html 
    const p1 = nouvelleBalise("p", text, div);
    const p2 = nouvelleBalise("B", author, div);
    p1.className = "quote";
    p2.className = "author";
    
    return p1, p2
}

function h3Text(){
       // texte du compteur
    if (compteur <= 1)
            {
                return h3.innerText = `${compteur} citation`
            }
        else
            {
                return h3.innerText = `${compteur} citations`
            }
}


submit.addEventListener("click", () => {
    let input1 = recupInput("citation");
    let input2 = recupInput("nomAuteur");

    //si pas de caractère dans les inputs > récupère le 'null' du return recupInput
    if (input1 === null || input2 === null) {
    // on ne compte rien, on sort du click, on ne va pas plus loin.
            return;
        }
    else{
    //on compte et on affiche h3
        compteur++
        h3Text();
    }

    //on remplit notre tableau
    tab.push({auteur: input2, citation: input1, numero: compteur});
    //console LOGGGG
    console.log(tab); 

  
    //pour envoyer tab dans le JSON je dois le transformer en strings
    let tab2 = JSON.stringify(tab);

    localStorage.setItem("citations", tab2); // je declare

    //console LOGGGG
    console.log(localStorage.getItem("citations"));
            //console LOGGGG
            console.log(localStorage);
     
    for(let item of tab){
        addQuote(item.citation, item.auteur)
    }     
        effaceChampInput("citation");
        effaceChampInput("nomAuteur");  
    })


 



