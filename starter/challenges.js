// var scores, roundScore, activePlayer, gamePlaying;

// init();

// var lastDice;


// // added eventListener to listen for a click
// document.querySelector('.btn--roll').addEventListener('click', function () {
//   if (gamePlaying) {
//     // Random number
//     var dice1 = Math.floor(Math.random() * 6) + 1;
//     var dice2 = Math.floor(Math.random() * 6) + 1;

//     // Display the result
//     document.getElementById('dice-1').style.display = 'block';
//     document.getElementById('dice-2').style.display = 'block';
//     document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
//     document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

//     // update d round score if the rolled num was NOT a 1
//     if (dice1 !== 1 && dice2 !== 1) {
//               // add score
//               roundScore += dice1 + dice2;
//               document.querySelector('#current--' + activePlayer).textContent =
//                 roundScore;
//             } else {
//               // next player
//               nextPlayer();
//             }



//     /*
//     if(dice === 6 && lastDice === 6){
//         scores[activePlayer] = 0;
//         document.querySelector('#score--' + activePlayer).textContent = '0';
//         nextPlayer();
//     } else if (dice !== 1) {
//       // add score
//       roundScore += dice;
//       document.querySelector('#current--' + activePlayer).textContent =
//         roundScore;
//     } else {
//       // next player
//       nextPlayer();
//     }

//     lastDice = dice;
//     */
//   }
// });

// document.querySelector('.btn--hold').addEventListener('click', function () {
//   if (gamePlaying) {
//     // add current score to global score
//     scores[activePlayer] += roundScore;

//     // update the UI
//     document.querySelector('#score--' + activePlayer).textContent =
//       scores[activePlayer];

//       var input = document.querySelector('.final-score').value;
//       var winingScore;
      
//     //  Undefined, 0, null, or "" are coerced to false
//     // Anything else is coerced to true
//     if (input) {
//         winingScore = input;
//     } else {
//         winingScore = 100;
//     }

//     // check if player won the game
//     if (scores[activePlayer] >= winingScore) {
//       document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
//       document.getElementById('dice-1').style.display = 'none';
//       document.getElementById('dice-2').style.display = 'none';
//       document
//         .querySelector('.player-' + activePlayer + '-panel')
//         .classList.add('player--winner');
//       document
//         .querySelector('.player-' + activePlayer + '-panel')
//         .classList.remove('active');
//       gamePlaying = false;
//     } else {
//       // next player
//       nextPlayer();
//     }
//   }
// });

// function nextPlayer() {
//   activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
//   roundScore = 0;

//   document.getElementById('current--0').textContent = 0;
//   document.getElementById('current--1').textContent = 0;

//   document.querySelector('.player--0').classList.toggle('player--active');
//   document.querySelector('.player--1').classList.toggle('player--active');

//   // document.querySelector('.player--0').classList.remove('player--active');
//   // document.querySelector('.player--1').classList.add('player--active');

//     document.getElementById('dice-1').style.display = 'none';
//     document.getElementById('dice-2').style.display = 'none';
// }

// document.querySelector('.btn--new').addEventListener('click', init);
// function init() {
//   scores = [0, 0];
//   activePlayer = 0;
//   roundScore = 0;
//   gamePlaying =true

//   // using querySelector to set the style of the dice to display none
//     document.getElementById('dice-1').style.display = 'none';
//     document.getElementById('dice-2').style.display = 'none';

//   // using the getElementById to change the textContent on webpage
//   document.getElementById('score--0').textContent = '0';
//   document.getElementById('score--1').textContent = '0';
//   document.getElementById('current--0').textContent = '0';
//   document.getElementById('current--1').textContent = '0';
//   document.getElementById('name--0').textContent = 'Player 1';
//   document.getElementById('name--1').textContent = 'Player 2';
//   document.querySelector('.player-0-panel').classList.remove('player--winner');
//   document.querySelector('.player-1-panel').classList.remove('player--winner');
//   document.querySelector('.player-0-panel').classList.remove('player--active');
//   document.querySelector('.player-1-panel').classList.remove('player--active');
//   document.querySelector('.player-0-panel').classList.add('player--active');
// }





































