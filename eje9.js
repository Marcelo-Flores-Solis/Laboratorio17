// Paso 11:   Crea una función dividirAsync que reciba a, b y un callback. Espere 1.5 segundos. Si b === 0, llame a callback(new Error("No se puede dividir entre cero"), null); Si no, llame a: callback(null, a / b);

const salidaPaso11 = document.getElementById('salida-paso11');
const inputA = document.getElementById('a');
const inputB = document.getElementById('b');

function limpiarSalidaPaso11() {
  salidaPaso11.textContent = '';
}

function dividirAsync(a, b, callback) {
  setTimeout(() => {
    if (b === 0) {
      callback(new Error('No se puede dividir entre cero'), null);
    } else {
      callback(null, a / b);
    }
  }, 1500);
}

document.getElementById('btn-paso11').addEventListener('click', () => {
  limpiarSalidaPaso11();

  const a = Number(inputA.value);
  const b = Number(inputB.value);

  dividirAsync(a, b, (error, resultado) => {
    if (error) {
      salidaPaso11.textContent = 'Error: ' + error.message;
    } else {
      salidaPaso11.textContent = 'Resultado: ' + resultado;
    }
  });
});
