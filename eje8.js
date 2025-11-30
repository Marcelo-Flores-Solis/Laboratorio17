// Paso 10:  Crea  una  función  llamada  cargarUsuario  que  reciba  un  callback.  
const salidaPaso10 = document.getElementById('salida-paso10');

function limpiarSalidaPaso10() {
  salidaPaso10.textContent = '';
}

function cargarUsuario(callback) {
  const delay = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;

  setTimeout(() => {
    const usuario = {
      id: 1,
      nombre: 'Jazmin'
    };
    callback(usuario);
  }, delay);
}

function mostrarUsuarioEnPantalla(usuario) {
  salidaPaso10.textContent =
    `Usuario cargado: ${usuario.nombre} (ID: ${usuario.id})`;
}

document.getElementById('btn-paso10').addEventListener('click', () => {
  limpiarSalidaPaso10();
  cargarUsuario(mostrarUsuarioEnPantalla);
});
