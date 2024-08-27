
/// 1.recupero l'elemento dal Dom (timer, 5 values, button play)
const timerIndex = document.getElementById('timer');
const buttonPlay = document.querySelector('button');
const playGrid = document.querySelector('.playGrid');
const randomGrid = document.querySelector('.randomGrid');
const messageIndex = document.getElementById('message');

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
console.log('randomNumbers', randomNumbers);

randomGrid.innerHTML += ''
for (let i = 0; i < randomNumbers.length; i++){
    const div = document.createElement('div')
    div.append(randomNumbers[i]);
    randomGrid.appendChild(div);
}

// implemento un timer di 30 secondi (decremento)
let countDown = 3;
timerIndex.innerText = countDown;

const timer = setInterval ( () => {
    // decremento il timer e stampo
    timerIndex.innerText = --countDown;
    // quando a zero il timer si ferma
    if (countDown === 0) {
        clearInterval(timer);
        // scaduto il countdwon i numeri e il timer spariscono
        randomGrid.classList.add('display-off')
        timerIndex.classList.add('display-off')
        // faccio apparire playGrid
        playGrid.classList.remove('display-off')

    }
}, 1000)

// preparo evento al click
buttonPlay.addEventListener('click', function (){

// recupero le userValues in un array
const userNumber1 = parseInt(document.getElementById('userNumber1').value);
const userNumber2 = parseInt(document.getElementById('userNumber2').value);
const userNumber3 = parseInt(document.getElementById('userNumber3').value);
const userNumber4 = parseInt(document.getElementById('userNumber4').value);
const userNumber5 = parseInt(document.getElementById('userNumber5').value);

const userNumbers = [userNumber1, userNumber2, userNumber3, userNumber4,userNumber5];
console.log('userNumbers' , userNumbers);
// assegno score e message
let score = 0;
let message = '';
// confronto gli elementi dei due array
for(let i = 0; i < randomNumbers.length; i++){
    // verifico se gli elementi di randomNumbers[] sono contenuti in userNumbers[] 
    if(userNumbers.includes(randomNumbers[i])){
        // incremento score ogni volta che trovo un elemento in comune
        score++;
    } 
    message = `Hai azzeccato ${score} parole. <span class="text-danger">Riprova!!</span>`;
    if (score === 0) message= `<span class="text-danger">Hai totalizzato 0 punti!!!!</span>`;
    if (score === 5) message = `<span class="text-success">HAI VINTOOOO!! Hai azzeccato tutti i ${score} numeri.</span>`;
    console.log(score)
}
    
// 4.generazione output
// stampo score e message

})