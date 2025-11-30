// Paso 6: Definir una función validarEdad(edad), si edad < 0 o no es número, lanzar un error ("Edad inválida"). Capturar y mostrar el error

const inputEdad = document.getElementById('edad');
const salidaPaso6 = document.getElementById('salida-paso6');

function limpiarSalidaPaso6() {
  salidaPaso6.textContent = '';
}

function validarEdad(edad) {
  const numeroEdad = Number(edad);

  if (isNaN(numeroEdad) || numeroEdad < 0) {
    throw new Error('Edad inválida');
  }

  return numeroEdad;
}

function manejarValidacionEdad() {
  limpiarSalidaPaso6();
  try {
    const valorIngresado = inputEdad.value;
    const edadValida = validarEdad(valorIngresado);
    salidaPaso6.textContent = 'Edad válida: ' + edadValida;
  } catch (e) {
    salidaPaso6.textContent = 'Error: ' + e.message;
  }
}

document
  .getElementById('btn-validar-edad')
  .addEventListener('click', manejarValidacionEdad);
