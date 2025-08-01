README DU KATA 1 04/07/2025

depot git fonctions et appel de fonctions

form.addEventListener("submit", function(event){ //(let event = submit)
    event.preventDefault();

    const quote = document.getElementById("quote-text").value.trim();
    const author = document.getElementById("quote-author").value.trim();

    console.log("quote is", quote)
    console.log("author is", author)
})

<!-- if(quote && author){
    addQuote(quote, author)
} -->

qd on ecout eun form event = "submit"

const quote = document.getElementById("quote-text").value.trim()

.trim() => enleve les espace blancs avant et apres



qd on clique sur submit le comportement par defaut et de rafraichir la page