// Paso 14: Paso 10 con promesas

const salidaPaso14 = document.getElementById('salida-paso14');

function limpiarSalidaPaso14() {
  salidaPaso14.textContent = '';
}

function cargarUsuario() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;

    setTimeout(() => {
      const usuario = { id: 1, nombre: 'Juancito' };
      resolve(usuario);
    }, delay);
  });
}

document.getElementById('btn-paso14').addEventListener('click', () => {
  limpiarSalidaPaso14();

  cargarUsuario()
    .then((usuario) => {
      salidaPaso14.textContent =
        `Usuario cargado: ${usuario.nombre} (ID: ${usuario.id})`;
    })
    .catch((error) => {
      salidaPaso14.textContent = 'Error: ' + error.message;
    });
});
