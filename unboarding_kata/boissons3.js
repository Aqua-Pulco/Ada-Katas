    let jus = ["mangue🥭", "pomme🍏", "pasteque🍉","jus d'orange 🍊","jus de myrtille 🍇","jus de raisin 🍇","jus d’ananas 🍍","jus de citron vert 🍈","jus de fraise 🍓"];
    let yolo = ["caca", "pipi", "prout","biouman","jus de dorothé 🍇","jus de bétonneuse 🍇","jus de chaussette 🍍","jus de vestiaire 🍈","jus de mercredi 🍓"];
    let rien = [];

    function choisirBoisson(tab,number1){
    if(number1 > tab.length||number1 < 1){
        return("Le numéro choisi est invalide. Essaie entre 1 et 9.")
    }
    return(`Tu as choisi la boisson jus de ${tab[number1-1]}.`)
    }

    function listeBoisson (tab){
        for(let i = 0; i < tab.length ;i++ ){
        return(`Le choix ${i+1} correspond a ${tab[i]}.`);
        }
    }

    function yatildesBoissons (tab){
    if (tab.length <= 0){
        return `il n'y a plus de boissons dans ce distributeur.`
    }
    }


console.log(`il y a ${jus.length} jus dans le distributeur.`)
console.log(choisirBoisson(jus,0.5));
console.log(listeBoisson(jus));
console.log(yatildesBoissons(rien));






