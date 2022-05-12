const showHideButton = document.querySelector('[data-js="button-showHide"]');
const answer = document.querySelector('.question-card__answer');

showHideButton.addEventListener('click', () => {
  if (showHideButton.innerHTML === 'Show Answer') {
    showHideButton.innerHTML = 'Hide Answer';
    answer.classList.remove('hide');
  } else {
    showHideButton.innerHTML = 'Show Answer';
    answer.classList.add('hide');
  }
});
