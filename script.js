
/// 1.recupero l'elemento dal Dom (timer, 5 values, button play)
const timer = document.getElementById('timer');
const buttonPlay = document.querySelector('button');

///2.raccolta dati
// preparo la funzione per i 5 numeri casuali diversi

// funzione che genera 5 numeri random diversi
function getRandomNumber(min = 1, max = 100, numberQuantity = 5){
    // genero 16 numeri casuali diversi
    let result = [];
    while (result.length < numberQuantity) {
        randomNumber = Math.floor(Math.random() * (max - min)) + min;

        if (!result.includes(randomNumber)) result.push(randomNumber);
    }
    // dalla funzione mi uscirà l'array generato
    return result;
}
// 3.lavorazione dati
// implemento un timer di 30 secondi (decremento)
// invoco la funz e stampo i numeri casuali
// inizia il countdown di 30 sec
// scaduto il timer i numeri spariscono

// preparo evento al click
// recupero le userValues in un array
/*
const userNumber1 = document.querySelector('userNumber1').value;
const userNumber2 = document.querySelector('userNumber2').value;
const userNumber3 = document.querySelector('userNumber3').value;
const userNumber4 = document.querySelector('userNumber4').value;
const userNumber5 = document.querySelector('userNumber5').value;

const userNumbers = [userNumber1, userNumber2, userNumber3, userNumber4,userNumber5];
*/
// assegno score e message
// confronto gli elementi dei due array
// score aumenta o meno
    
/// 4.generazione output
// stampo score e message

