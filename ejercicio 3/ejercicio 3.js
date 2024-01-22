'use strict'

let phrase = 'La programación web es fundamental para el progreso';

let palabras = phrase.split(' ');

let palabrasMasDeTresLetras = palabras.filter(palabra => palabra.length > 3);

console.log('Palabras con más de 3 letras:', palabrasMasDeTresLetras);