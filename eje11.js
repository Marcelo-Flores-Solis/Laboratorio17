// Paso 13: Paso 9 con promesas

const salidaPaso13 = document.getElementById('salida-paso13');

function limpiarSalidaPaso13() {
  salidaPaso13.textContent = '';
}

function cargarMensaje() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Mensaje cargado');
    }, 1000);
  });
}

document.getElementById('btn-paso13').addEventListener('click', () => {
  limpiarSalidaPaso13();

  cargarMensaje()
    .then((mensaje) => {
      salidaPaso13.textContent = mensaje;
    })
    .catch((error) => {
      salidaPaso13.textContent = 'Error: ' + error.message;
    });
});
