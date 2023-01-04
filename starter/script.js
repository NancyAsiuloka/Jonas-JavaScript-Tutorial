var scores, roundScore, activePlayer, gamePlaying;

init();

// dice = Math.floor(Math.random() * 6) + 1;

// document.querySelector('#current--' + activePlayer).textContent = dice;
// document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score--0').textContent;
// console.log(x);

// added eventListener to listen for a click
document.querySelector('.btn--roll').addEventListener('click', function () {
  if (gamePlaying) {
    // Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // update d round score if the rolled num was NOT a 1
    if (dice !== 1) {
      // add score
      roundScore += dice;
      document.querySelector('#current--' + activePlayer).textContent =
        roundScore;
    } else {
      // next player
      nextPlayer();
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (gamePlaying) {
    // add current score to global score
    scores[activePlayer] += roundScore;

    // update the UI
    document.querySelector('#score--' + activePlayer).textContent =
      scores[activePlayer];

    // check if player won the game
    if (scores[activePlayer] >= 20) {
      document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document
        .querySelector('.player-' + activePlayer + '-panel')
        .classList.add('player--winner');
      document
        .querySelector('.player-' + activePlayer + '-panel')
        .classList.remove('active');
      gamePlaying = false;
    } else {
      // next player
      nextPlayer();
    }
  }
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;

  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');

  // document.querySelector('.player--0').classList.remove('player--active');
  // document.querySelector('.player--1').classList.add('player--active');

  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn--new').addEventListener('click', init);
function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;

  // using querySelector to set the style of the dice to display none
  document.querySelector('.dice').style.display = 'none';

  // using the getElementById to change the textContent on webpage
  document.getElementById('score--0').textContent = '0';
  document.getElementById('score--1').textContent = '0';
  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';
  document.getElementById('name--0').textContent = 'Player 1';
  document.getElementById('name--1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('player--winner');
  document.querySelector('.player-1-panel').classList.remove('player--winner');
  document.querySelector('.player-0-panel').classList.remove('player--active');
  document.querySelector('.player-1-panel').classList.remove('player--active');
  document.querySelector('.player-0-panel').classList.add('player--active');
}
