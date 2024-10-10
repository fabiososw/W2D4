/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function calcoloArea(base, altezza) {
  return base * altezza;
}
console.log(calcoloArea(7, 4));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num1, num2) {
  if (num1 != num2) {
    return num1 + num2;
  } else if (num1 === num2) {
    return (num1 + num2) * 3;
  }
}
console.log(crazySum(4, 8));
console.log(crazySum(4, 4));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(num3) {
  if (num3 > 19) {
    return Math.abs(num3 - 19) * 3;
  } else {
    return Math.abs(num3 - 19);
  }
}

console.log(crazyDiff(4));
console.log(crazyDiff(21));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(num5) {
  if (!Number.isInteger(num5)) {
    return false;
  }
  if ((num5 >= 20 && num5 <= 100) || num5 === 400) {
    return true;
  }
  return false;
}
console.log(boundary(19));
console.log(boundary(20));
console.log(boundary(100));
console.log(boundary(399));
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(stringa) {
  if (stringa.startsWith("EPICODE")) {
    return stringa;
  } else {
    return "EPICODE " + stringa;
  }
}
console.log(epify("CIAO"));
console.log(epify("EPICODE is awesome"));
console.log(epify("Hello World"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(num6) {
  if (num6 <= 0) {
    console.log("Inserisci un numero positivo.");
    return;
  }
  if (num6 % 3 === 0 || num6 % 7 === 0) {
    console.log(`Il tuo numero ${num6} è divisibile per 3 o 7.`);
  } else {
    console.log(`Il tuo numero ${num6} non è divisibile per 3 o 7`);
  }
}

check3and7(7);
check3and7(21);
check3and7(4);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(wordToReverse) {
  return wordToReverse.split("").reverse().join("");
}
console.log(reverseString("come va"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(phrase) {
  const words = phrase.split(" ");
  const capitalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedWords.push(capitalizedWord);
  }
  return capitalizedWords.join(" ");
}

console.log(upperFirst("forza napoli sempre"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(stringa2) {
  return stringa2.slice(1, stringa2.length - 1);
}
console.log(cutString("Ciao come va?, a me tutto bene"));
console.log(cutString("lorem ipsum"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
