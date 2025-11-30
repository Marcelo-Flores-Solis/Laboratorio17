// Paso 8: En un catch dentro de una función imprimir un mensaje de error y luego volver a lanzar el mismo error con throw hacia otra función que la invocó. 
const salidaPaso8 = document.getElementById('salida-paso8');

function limpiarSalidaPaso8() {
  salidaPaso8.textContent = '';
}

function nivel2() {
  try {
    let resultado = x + 1; 
  } catch (e) {
    salidaPaso8.textContent +=
      'Nivel 2 atrapó el error: ' + e.message + '\n';
    throw e;
  }
}


function nivel1() {
  try {
    nivel2();
  } catch (e) {
    salidaPaso8.textContent +=
      'Nivel 1 recibió el error: ' + e.message + '\n';
    throw e;
  }
}

function paso8() {
  limpiarSalidaPaso8();
  try {
    nivel1();
  } catch (e) {
    salidaPaso8.textContent +=
      'nivel superior ERROR FINAL : ' + e.message;
  }
}

document.getElementById('btn-paso8').addEventListener('click', paso8);
