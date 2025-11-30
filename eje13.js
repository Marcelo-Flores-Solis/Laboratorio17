// Paso 15: Paso 11 con promesas

const salidaPaso15 = document.getElementById('salida-paso15');
const inputA15 = document.getElementById('a');
const inputB15 = document.getElementById('b');

function limpiarSalidaPaso15() {
  salidaPaso15.textContent = '';
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

document.getElementById('btn-paso15').addEventListener('click', () => {
  limpiarSalidaPaso15();

  const a = Number(inputA15.value);
  const b = Number(inputB15.value);

  dividirAsync(a, b)
    .then((resultado) => {
      salidaPaso15.textContent = 'Resultado: ' + resultado;
    })
    .catch((error) => {
      salidaPaso15.textContent = 'Error: ' + error.message;
    });
});
