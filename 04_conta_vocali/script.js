/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function contavocali(stringa) {

    let numeroVocali = 0

    for (let i = 0; i < stringa.length; i++)

        if (stringa[i] === "a" || 
            stringa[i] === "e" || 
            stringa[i] === "i" || 
            stringa[i] === "o" || 
            stringa[i] === "u") {

            numeroVocali = numeroVocali + 1;

        }
    return numeroVocali

}



// Invoca la funzione qui e stampa il risultato in console

let numeroVocali = contavocali(word)

console.log(numeroVocali)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)