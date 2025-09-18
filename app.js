const FRASES = ["Cree en ti y todo será posible.",
  "Cada día es una nueva oportunidad.",
  "El esfuerzo de hoy es el éxito de mañana.",
  "No te detengas hasta estar orgulloso.",
  "Los grandes cambios empiezan con pequeños pasos."];

const fraseDiv = document.getElementById('frase');
const button = document.getElementById('cambiar-frase');
const contenedor = document.getElementById('container');

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
  changeColor()
};

function changeColor() {
  const red = getRandomInt(256)
  const green = getRandomInt(256)
  const blue = getRandomInt(256)
  const color = `rgb(${red} ${green} ${blue})`
  contenedor.style.backgroundColor = color
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


button.addEventListener('click', cambiarFrase);

console.log(FRASES);
