const FRASES = [
  '"Cree en ti y todo será posible."',
  '"Cada día es una nueva oportunidad."',
  '"El esfuerzo de hoy es el éxito de mañana."',
  '"No te detengas hasta estar orgulloso."',
  '"Los grandes cambios empiezan con pequeños pasos."',
];

const fraseDiv = document.getElementById('frase');
const button = document.getElementById('cambiar-frase');
const contadorEl = document.getElementById('contador');

const nuevaFraseInput = document.getElementById('nueva-frase');
const agregarButton = document.getElementById('agregar-frase');
const guardarButton = document.getElementById('guardar-frase');
const cancelarButton = document.getElementById('cancelar-frase');
const modalAgregar = document.getElementById('modal-agregar');
const modalClose = document.getElementById('modal-close');
const modalBackdrop = document.querySelector('.modal-backdrop');

const contenedor = document.getElementById('container');


let contador = 0;
function actualizarContador() {
  contadorEl.textContent = String(contador);
}

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

function cambiarFrase() {
  const nuevo = indiceAleatorioDistinto(ultimoIndice);
  if (mostrarFrase(nuevo)) {
    contador += 1;
    actualizarContador();
    changeColor()
  }
}


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

// Mostrar primera frase y contarla
document.addEventListener('DOMContentLoaded', () => {
  const inicial = indiceAleatorioDistinto(-1);
  if (mostrarFrase(inicial)) {
    contador = 1;
    actualizarContador();
  } else {
    contador = 0;
    actualizarContador();
  }
});

function mostrarModal() {
  modalAgregar.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    nuevaFraseInput.focus();
  }, 100);
}

function ocultarModal() {
  modalAgregar.classList.add('hidden');
  document.body.style.overflow = '';
  nuevaFraseInput.value = '';
}

function agregarNuevaFrase() {
  const nuevaFrase = nuevaFraseInput.value.trim();

  if (nuevaFrase === '') {
    alert('Por favor escribe una frase antes de agregarla.');
    return;
  }

  if (FRASES.includes(nuevaFrase)) {
    alert('Esta frase ya existe en la lista.');
    return;
  }

  FRASES.push(nuevaFrase);
  ocultarModal();
  alert('¡Frase agregada exitosamente!');
}

button.addEventListener('click', cambiarFrase);
button.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    cambiarFrase();
    
  }
});

agregarButton.addEventListener('click', mostrarModal);
guardarButton.addEventListener('click', agregarNuevaFrase);
cancelarButton.addEventListener('click', ocultarModal);
modalClose.addEventListener('click', ocultarModal);

modalBackdrop.addEventListener('click', ocultarModal);

nuevaFraseInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    agregarNuevaFrase();
  }
  if (e.key === 'Escape') {
    e.preventDefault();
    ocultarModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modalAgregar.classList.contains('hidden')) {
    ocultarModal();
  }
});
