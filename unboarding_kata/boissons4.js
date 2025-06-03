    let jus = ["mangue🥭", "pomme🍏", "pasteque🍉","jus d'orange 🍊","jus de myrtille 🍇","jus de raisin 🍇","jus d’ananas 🍍","jus de citron vert 🍈","jus de fraise 🍓"];

    function annoncerChoix (number1){
        if(isNaN(number1)){
        return `${number1} n'est pas un nombre.`
        }  
        return `Tu as choisis le numéro ${number1}. `
    }
        
    function choisirBoisson(tab,number1){
    if(number1 > tab.length||number1 < 1 || isNaN(number1)){
        return("Le numéro choisi est invalide. Essaie entre 1 et 9.")
    }
    return(`Tu as choisi la boisson ${tab[number1-1]}.`)
    }

    function distributeurDeBoissons(tab,number1){
        return (annoncerChoix(number1) + choisirBoisson(tab,number1))    
    }
    console.log(distributeurDeBoissons(jus,8))

    