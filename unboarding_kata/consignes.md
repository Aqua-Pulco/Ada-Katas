
Evaluation onboarding
Conditions d’achèvement
Ouvert le : vendredi 30 mai 2025, 14:00
À rendre : vendredi 30 mai 2025, 18:00
Évaluation – Le distributeur de boisson Ada
Objectifs pédagogiques

Dans ce petit projet, tu vas utiliser :

    des fonctions
    des conditions
    des variables
    des tableaux
    une boucle

⚠️ Rappel important : utiliser return dans une fonction

Quand tu écris une fonction qui doit renvoyer un résultat (par exemple une addition, une boisson, un message...), tu dois utiliser le mot-clé return.

    return ne fait pas d'affichage à l'écran.

    Il renvoie juste une valeur que tu peux utiliser plus tard.

Donc, si tu veux voir le résultat dans la console, pense à utiliser console.log() autour de l'appel de ta fonction.
✅ Exemple simple :

function direBonjour(prenom) {
  return `Bonjour ${prenon} !`;
}

// Ici on affiche le résultat avec console.log
console.log(direBonjour("Léa"));
// Bonjour Léa !

❌ Si tu oublies le console.log, rien ne s'affichera :

direBonjour("Léa"); // rien ne s'affiche dans la console

En résumé :

    return renvoie une valeur
    console.log() affiche une valeur
    Pour tester tes resultats tu as besoin des deux
    Dans les premiers exemples, on t’indique console.log() pour appeler ta fonction dans le resultat attendu.

Ensuite, on ne l’écrit plus à chaque fois, mais tu as compris
Échauffement

Avant de commencer avec les boissons, on s’échauffe !

    Crée une constante prenom et donne-lui ton prénom.
    Crée une constante nom et donne-lui ton nom.
    Affiche dans la console la phrase suivante :

    "Je m’appelle [ton prénom] [ton nom]"

Exemple attendu :

// Je m’appelle John Doe

    Crée une fonction add qui prend deux nombres en paramètre et retourne leur addition.

Exemple attendu :

console.log(add(2, 3));
// resultat attendu
// 5

    Crée une fonction equal qui prend deux nombres en paramètre et retourne :

    true s’ils sont strictement égaux (même valeur et même type)
    false sinon

Exemple attendu:

console.log(equal(2, 3));
// false
console.log(equal(3, 3));
// true

Contexte

Tu es chargé·e de programmer un prototype de distributeur de boissons. L’idée : quand l’utilisateur tape un numéro, la machine lui donne une boisson correspondante.
Étape 1 – Fonction

Crée une fonction annoncerChoix qui :

    prend un nombre en paramètre
    affiche ce message dans la console : "Tu as choisi le numéro X" (Remplace X par le bon numéro.)

Exemple attendu :

annoncerChoix(3);
// affiche : Tu as choisi le numéro 3

Étape 2 – Conditions

Crée une fonction servirBoisson(nombre) qui :

    prend un nombre en paramètre
    affiche la boisson correspondante :
        si le nombre est 1 : "Voici un jus de mangue ��"
        si le nombre est 2 : "Voici un jus de pomme ��"
        si le nombre est 3 : "Voici un jus de pastèque ��"
        sinon : "Désolé, je n’ai pas cette boisson ��"

Exemple attendu:

servirBoisson(1); // "Voici un jus de mangue 🥭"
servirBoisson(2); // "Voici un jus de pomme 🍏"
servirBoisson(3); // "Voici un jus de pastèque 🍉"
servirBoisson(5); // "Désolé, je n’ai pas cette boisson 😢"

Étape 3 – Boucle et tableau

Voici une liste de boissons :

const boissons = [
  "jus de mangue 🥭",
  "jus de pomme 🍏",
  "jus de pastèque 🍉",
  "jus d'orange 🍊",
  "jus de myrtille 🫐",
  "jus de raisin 🍇",
  "jus d’ananas 🍍",
  "jus de citron vert 🍈",
  "jus de fraise 🍓"
];

Utilise une boucle pour afficher chaque boisson avec son numéro :
Exemple attendu :

Boisson 1: jus de mangue 🥭
Boisson 2: jus de pomme 🍏
Boisson 3: jus de pastèque 🍉
Boisson 4: jus d'orange 🍊
Boisson 5: jus de myrtille 🫐
Boisson 6: jus de raisin 🍇
Boisson 7: jus d’ananas 🍍
Boisson 8: jus de citron vert 🍈
Boisson 9: jus de fraise 🍓

Bonus

Comment ajouter un jus de kiwi à notre tableau de boissons ?

Si tu trouves, tu peux ensuite relancer ta boucle pour afficher la nouvelle liste de jus !
Avancé
Étape 4 – Boucle dans une fonction

Écris une fonction choisirBoisson qui :

    prend un tableau et un nombre en paramètre
    retourne la boisson à cet index (attention, les tableaux commencent à 0 !)
    si le numéro est invalide, affiche : "Le numéro choisi est invalide. Essaie entre 1 et 9 ��"

Exemple attendu:

choisirBoisson(boissons, 1); //Voici un jus de mangue �� !
choisirBoisson(boissons, 11); //Le numéro choisis est invalide. Essaie entre 1 et 9 ��
// (ou entre 1 et 10 si tu as ajouté plus haut le jus de kiwi à tes boissons)

🔹 Étape 5 – Appel de fonction dans une autre fonction

Écris une fonction distributeurDeBoissons qui :

    prend un tableau de boissons et un nombre
    utilise les fonctions annoncerChoix et choisirBoisson pour :
    afficher le numéro choisi
    afficher la boisson correspondante

Exemple attendu:

distributeurDeBoissons(boissons, 9)
//Tu as choisi le numéro 9
//Voici un jus de fraise 🍓 !

Bonus avancé

Améliore la fonction annoncerChoix :

    Elle ne doit accepter que des nombres.
    Si ce n’est pas un nombre, elle affiche : "Erreur : tu dois entrer un nombre !"

