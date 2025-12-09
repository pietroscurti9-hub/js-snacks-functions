/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali
 di ogni parola dell'array fornito */



 
const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

const listTwo = ['Paolo', 'Pietro']

// Dichiara la funzione qui.



function nomiIniziali(singoliNomi) {

    // define new array for initials ([])
    let initialsList = [];

    // get inistials from names
    for (let i = 0; i < singoliNomi.length; i++) {
        // get first letter
        const firstLetter = singoliNomi[i].charAt(0)
        // push first letter in new array
        initialsList.push(firstLetter);
    } 
      
            
    // return new array
 return initialsList 

}

// Invoca la funzione qui e stampa il risultato in console

let initialsList = nomiIniziali(names)
console.log(initialsList);
// console.log(lettere);


// const lettere2 = nomiIniziali(listTwo)










//Risultato atteso: ["A", "L", "M", "A", "G", "A"]