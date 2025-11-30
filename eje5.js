// Paso 7: Dentro de try provocar un TypeError. Ejemplo: let x = null; x.nombre;  En catch verificar con instanceof si es TypeError. Imprimir un mensaje distinto según el tipo

const salidaPaso7 = document.getElementById('salida-paso7');

function limpiarSalidaPaso7() {
  salidaPaso7.textContent = '';
}

function provocarTypeError() {
  limpiarSalidaPaso7();
  try {
    let x = null;
    let nombre = x.nombre;  
  } catch (e) {
    if (e instanceof TypeError) {
      salidaPaso7.textContent = 'Se produjo un TypeError: ' + e.message;
    } else {
      salidaPaso7.textContent = 'Se produjo otro tipo de error: ' + e.message;
    }
  }
}

function provocarOtroError() {
  limpiarSalidaPaso7();
  try {
    let resultado = variableQueNoExiste + 1; 
  } catch (e) {
    if (e instanceof TypeError) {
      salidaPaso7.textContent = 'Se produjo un TypeError: ' + e.message;
    } else {
      salidaPaso7.textContent = 'Se produjo otro tipo de error: ' + e.message;
    }
  }
}

document
  .getElementById('btn-typeerror')
  .addEventListener('click', provocarTypeError);

document
  .getElementById('btn-otro-error')
  .addEventListener('click', provocarOtroError);

