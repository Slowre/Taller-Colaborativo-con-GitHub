const FRASES = ['Frase 1', 'Frase 2', 'Frase 3', 'Frase 4', 'Frase 5'];

const fraseDiv = document.getElementById('frase');
const button = document.getElementById('cambiar-frase');

fraseDiv.innerText = FRASES[0];

const obtenerFraseAleatoria = (fraseActual) => {
  const frasesDisponibles = FRASES.filter((frase) => frase !== fraseActual);

  return frasesDisponibles[
    Math.floor(Math.random() * frasesDisponibles.length)
  ];
};

const cambiarFrase = () => {
  const nuevaFrase = obtenerFraseAleatoria(fraseDiv.innerText);
  fraseDiv.innerText = nuevaFrase;
};

button.addEventListener('click', cambiarFrase);

console.log(FRASES);
