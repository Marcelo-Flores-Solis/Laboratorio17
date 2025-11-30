// Paso 19: Paso 11 con async/await

const salidaPaso19 = document.getElementById('salida-paso19');
const inputA19 = document.getElementById('a');
const inputB19 = document.getElementById('b');

function limpiarSalidaPaso19() {
  salidaPaso19.textContent = '';
}

function dividirAsync(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b === 0) {
        reject(new Error('No se puede dividir entre cero'));
      } else {
        resolve(a / b);
      }
    }, 1500);
  });
}

async function manejarClickPaso19() {
  limpiarSalidaPaso19();
  const a = Number(inputA19.value);
  const b = Number(inputB19.value);

  try {
    const resultado = await dividirAsync(a, b);
    salidaPaso19.textContent = 'Resultado: ' + resultado;
  } catch (error) {
    salidaPaso19.textContent = 'Error: ' + error.message;
  }
}

document
  .getElementById('btn-paso19')
  .addEventListener('click', manejarClickPaso19);
