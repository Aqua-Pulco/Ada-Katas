function annoncerChoix (number1){
    return `Tu as choisis le numéro ${number1}.`
}
console.log(annoncerChoix(10))

function servirBoisson(number2){

    let jus = ["mangue🥭", "pomme🍏", "pasteque🍉"];

    if (number2 === 1){
        return `Voici un jus de jus de ${jus[0]}.`
    }
    else if (number2 === 2){
        return `Voici un jus de jus de ${jus[1]}.`  
    }
    else if (number2 === 3){
        return `Voici un jus de jus de ${jus[2]}.`   
    }
    return `Désolé, je n’ai pas cette boisson😢.`
}
console.log(servirBoisson(2))