// Paso 9: Crear una función llamada cargarMensaje que reciba un callback, espere 1 segundo utilizando setTimeout y llame al callback con el mensaje: "Mensaje cargado" que deberá ser impreso en pantalla 
const salidaPaso9 = document.getElementById('salida-paso9');

function limpiarSalidaPaso9() {
  salidaPaso9.textContent = '';
}

function cargarMensaje(callback) {
  setTimeout(() => {
    callback('Mensaje cargado');
  }, 1000);
}

function mostrarMensajeEnPantalla(mensaje) {
  salidaPaso9.textContent = mensaje;
}

document.getElementById('btn-paso9').addEventListener('click', () => {
  limpiarSalidaPaso9();
  cargarMensaje(mostrarMensajeEnPantalla);
});
