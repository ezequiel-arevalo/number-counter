'use strict'

/*
    Definimos las cosas que vamos a utilizar del DOM
*/

let contador     = 0;
let number       = document.querySelector('#number');
let buttonRestar = document.querySelector('.button__restar');
let buttonReset  = document.querySelector('.button__reset');
let buttonSumar  = document.querySelector('.button__sumar');

number.textContent = contador;

const updateDisplay = () => {
    number.textContent = contador;

    if (number.textContent < 0) {
        number.style.color = "red";
    } else if (number.textContent >= 1) {
        number.style.color = "green";
    } else {
        number.style.color = "black";
    }
}

buttonRestar.addEventListener('click', (e) => {
    contador--;
    updateDisplay();
});

buttonReset.addEventListener('click', (e) => {
    contador = 0;
    updateDisplay();
});

buttonSumar.addEventListener('click', (e) => {
    contador++;    
    updateDisplay();
});