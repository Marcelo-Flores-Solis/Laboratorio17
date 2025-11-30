// Paso 17: Paso 9 con async/await

const salidaPaso17 = document.getElementById('salida-paso17');

function limpiarSalidaPaso17() {
  salidaPaso17.textContent = '';
}

function cargarMensaje() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Mensaje cargado');
    }, 1000);
  });
}

async function manejarClickPaso17() {
  limpiarSalidaPaso17();
  try {
    const mensaje = await cargarMensaje();
    salidaPaso17.textContent = mensaje;
  } catch (error) {
    salidaPaso17.textContent = 'Error: ' + error.message;
  }
}

document
  .getElementById('btn-paso17')
  .addEventListener('click', manejarClickPaso17);
