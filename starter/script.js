var scores, roundSore, activePlayer;

scores = [0, 0];
roundSore = 0;
activePlayer = 0;

// dice = Math.floor(Math.random() * 6) + 1;


// document.querySelector('#current--' + activePlayer).textContent = dice;
// document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice + '</em>';
 
// var x = document.querySelector('#score--0').textContent;
// console.log(x);


// using querySelector to set the style of the dice to display none
document.querySelector('.dice').style.display = 'none'; 


// using the getElementById to change the textContent on webpage
document.getElementById('score--0').textContent  = '0';
document.getElementById('score--1').textContent  = '0';
document.getElementById('current--0').textContent  = '0';
document.getElementById('current--1').textContent  = '0';


// added eventListener to listen for a click
document.querySelector('.btn--roll').addEventListener('click', function() {
    // Random number
   var dice = Math.floor(Math.random() * 6) + 1;

    // Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';



    // update d round score if the rolled num was NOT a 1
    if(dice !== 1){
        // add score
        roundSore += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundSore;
    } else {
        // next player
        activePlayer === 0? activePlayer = 1 : activePlayer = 0;
    }


})
































