// Arreglo de frases 
const FRASES = [
  "Cree en ti y todo será posible.",
  "Cada día es una nueva oportunidad.",
  "El esfuerzo de hoy es el éxito de mañana.",
  "No te detengas hasta estar orgulloso.",
  "Los grandes cambios empiezan con pequeños pasos."
];

// Referencias (IDs)
const fraseDiv = document.getElementById('frase');
const button = document.getElementById('cambiar-frase');
const contadorEl = document.getElementById('contador');

// Estado del contador 
let contador = 0;
function actualizarContador() {
  contadorEl.textContent = String(contador);
}

// Lógica de frases sin repetir consecutiva
let ultimoIndice = -1;

function indiceAleatorioDistinto(de) {
  if (!Array.isArray(FRASES) || FRASES.length === 0) return -1;
  if (FRASES.length === 1) return 0;
  let i;
  do {
    i = Math.floor(Math.random() * FRASES.length);
  } while (i === de);
  return i;
}

function mostrarFrase(idx) {
  if (idx < 0) {
    fraseDiv.textContent = 'Ups, no hay frases disponibles ahora mismo.';
    return false;
  }
  ultimoIndice = idx;
  fraseDiv.textContent = FRASES[idx];
  return true;
}

// Eventos 
function cambiarFrase() {
  const nuevo = indiceAleatorioDistinto(ultimoIndice);
  if (mostrarFrase(nuevo)) {
    contador += 1;
    actualizarContador();
  }
}

// Mostrar primera frase y contarla
document.addEventListener('DOMContentLoaded', () => {
  const inicial = indiceAleatorioDistinto(-1);
  if (mostrarFrase(inicial)) {
    contador = 1;       // cuenta la primera mostrada
    actualizarContador();
  } else {
    contador = 0;
    actualizarContador();
  }
});

// Click y accesibilidad por teclado 
button.addEventListener('click', cambiarFrase);
button.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    cambiarFrase();
  }
});
