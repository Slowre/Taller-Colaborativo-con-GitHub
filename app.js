const FRASES = ['Frase 1', 'Frase 2', 'Frase 3', 'Frase 4', 'Frase 5'];

const fraseDiv = document.getElementById('frase');

fraseDiv.innerText = FRASES[0];

const button = document.getElementById('cambiar-frase');

button.addEventListener('click', () => {
  const nuevaFrase = FRASES[Math.floor(Math.random() * FRASES.length)];
  fraseDiv.innerText = nuevaFrase;
});

console.log(FRASES);
