// Paso 18: Paso 10 con async/await

const salidaPaso18 = document.getElementById('salida-paso18');

function limpiarSalidaPaso18() {
  salidaPaso18.textContent = '';
}

function cargarUsuario() {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;

    setTimeout(() => {
      const usuario = { id: 1, nombre: 'Ana' };
      resolve(usuario);
    }, delay);
  });
}

async function manejarClickPaso18() {
  limpiarSalidaPaso18();
  try {
    const usuario = await cargarUsuario();
    salidaPaso18.textContent =
      `Usuario cargado: ${usuario.nombre} (ID: ${usuario.id})`;
  } catch (error) {
    salidaPaso18.textContent = 'Error: ' + error.message;
  }
}

document
  .getElementById('btn-paso18')
  .addEventListener('click', manejarClickPaso18);
