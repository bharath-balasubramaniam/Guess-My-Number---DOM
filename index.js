'use strict';
let default_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
function message(textcontent) {
  document.querySelector('.message').innerText = textcontent;
}
document.querySelector('.check').addEventListener('click', () => {
  let guess = +document.querySelector('.guess').value;
  let scoreValue = Number(document.querySelector('.score').innerText);
  let highscorevalue = Number(document.querySelector('.highscore').innerText);
  if (!guess) {
    message('❌ No Number!');
  }
  if (guess > 0 && guess < 21 && score >= 1) {
    if (guess === default_number) {
      message('🎊 Correct Number!');
      document.querySelector('.number').innerText = default_number;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.score').innerText = score;
      scoreValue > highscorevalue
        ? (document.querySelector('.highscore').innerText = score)
        : (document.querySelector('.highscore').innerText = highscorevalue);
    } else if (guess !== default_number) {
      message(
        guess > default_number ? '📈 Number is high!!' : '📉 Number is low!!'
      );
      score--;
      document.querySelector('.score').innerText = score;
    }
  } else if (guess > 20 || guess < 0 || score >= 1) {
    message('❌ Invalid Number!');
  } else {
    if (score === 0) {
      message('❌ you loss the Game');
    }
  }
});
document.querySelector('.again').onclick = () => {
  message('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').innerText = score;
  default_number = Math.trunc(Math.random() * 20) + 1;
};
