    let jus = ["mangue🥭", "pomme🍏", "pasteque🍉","jus d'orange 🍊","jus de myrtille 🍇","jus de raisin 🍇","jus d’ananas 🍍","jus de citron vert 🍈","jus de fraise 🍓"];
    let yolo = ["caca", "pipi", "prout","biouman","jus de dorothé 🍇","jus de betonneuse 🍇","jus de chaussette 🍍","jus de vestiaire vert 🍈","jus de mercredi 🍓"];
function choisirBoisson(tab,number1){
    if(number1 > tab.length||number1 < 1){
        return("Le numéro choisi est invalide. Essaie entre 1 et 9.")
    }
    return(`Tu as choisi la boisson jus de ${tab[number1-1]}.`)
    }

    function listeBoisson (tab){
        for(let i = 0; i < tab.length ;i++ ){
        return(`Le choix ${i+1} correspond a ${tab[i]}`);
        }
    }
console.log(jus.length)
console.log(choisirBoisson(jus,0.5));
console.log(listeBoisson(jus));






