// @ts-nocheck
// @ts-expect-error
//@ts-check
document.addEventListener("DOMContentLoaded", function(event) {
    'use strict';
    try {

    } catch (error) {

    }
    let cardBack = document.querySelectorAll('.mask');
    let timeFront;
    // Add class to see tips of game on the back of the card
    function flipCard() {
        this.classList.add('back');
    }
    // Remove class to see the mask
    timeFront = setInterval(() => {
        for (let i = 0; i < cardBack.length; i++) {
            const el = cardBack[i];
            el.classList.remove('back');
        }
    }, 10000);
    cardBack.forEach(function(mask) {
        mask.addEventListener('click', flipCard);
    });
});

//Identify tips cards
let dataTips = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"];