
/// 1.recupero l'elemento dal Dom (timer, 5 values, button play)
const timerIndex = document.getElementById('timer');
const buttonPlay = document.querySelector('button');
const playGrid = document.querySelector('.playGrid');
const randomGrid = document.querySelector('.randomGrid');

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
// invoco la funz e stampo con DOM-API i numeri casuali
randomNumbers = getRandomNumber();
console.log(randomNumbers);

randomGrid.innerHTML += ''
for (let i = 0; i < randomNumbers.length; i++){
    const div = document.createElement('div')
    div.append(randomNumbers[i]);
    randomGrid.appendChild(div);
}

// implemento un timer di 30 secondi (decremento)
let countDown = 2;
timerIndex.innerText = countDown;

const timer = setInterval ( () => {
   
    // decremento il timer e stampo
    timerIndex.innerText = --countDown;
    // quando a zero il timer si ferma
    if (countDown === 0) {
        clearInterval(timer);
        randomGrid.classList.add('display-off')
        timerIndex.classList.add('display-off')
        playGrid.classList.remove('display-off')

    }
}, 1000)
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

