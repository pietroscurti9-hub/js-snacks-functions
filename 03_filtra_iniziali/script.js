/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array 
contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function filtro(array, lettera) {

    let arrayFiltrato = []

    for (let i = 0; i < array.length; i++) {

        

        if(array[i].charAt(0) === lettera) {
            arrayFiltrato.push(array[i])
        }
        // console.log(array[i].charAt(0))
        
    }
    return arrayFiltrato

}


// Invoca la funzione qui e stampa il risultato in console

let stringa = filtro(names, "A")   

console.log(stringa);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]







   
