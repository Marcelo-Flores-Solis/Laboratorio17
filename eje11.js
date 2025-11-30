// Paso 13: Paso 9 con promesas

const salidaPaso13 = document.getElementById('salida-paso13');
const inputA13 = document.getElementById('a');
const inputB13 = document.getElementById('b');

function limpiarSalidaPaso13() {
  salidaPaso13.textContent = '';
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

document.getElementById('btn-paso13').addEventListener('click', () => {
  limpiarSalidaPaso13();

  const a = Number(inputA13.value);
  const b = Number(inputB13.value);

  dividirAsync(a, b)
    .then((resultado) => {
      salidaPaso13.textContent = 'Resultado: ' + resultado;
    })
    .catch((error) => {
      salidaPaso13.textContent = 'Error: ' + error.message;
    });
});
