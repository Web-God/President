// @ts-nocheck
// @ts-expect-error
//@ts-check
document.addEventListener("DOMContentLoaded", function (event) {
  'use strict';
  try {

  } catch (error) {

  }
  let cardBack = document.querySelectorAll('.mask');
  let timeFront;
  // let flipCard = () => cardBack.classList.add('back');
  function flipCard() {
    this.classList.add('back');
  }
  timeFront = setInterval(() => {
    document.querySelector('.mask').classList.remove('back');
  }, 300);
  cardBack.forEach(function (mask) {
    mask.addEventListener('click', flipCard);
  });
});
