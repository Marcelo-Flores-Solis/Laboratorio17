// Paso 16: Paso 12 con promesas

const salidaPaso16 = document.getElementById('salida-paso16');

function limpiarSalidaPaso16() {
  salidaPaso16.textContent = '';
}

function procesarLista(numeros) {
  return new Promise((resolve) => {
    let pendientes = numeros.length;

    numeros.forEach((numero) => {
      const delay = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;

      setTimeout(() => {
        salidaPaso16.textContent += `Procesando ${numero}...\n`;
        pendientes--;

        if (pendientes === 0) {
          resolve('Proceso completado');
        }
      }, delay);
    });
  });
}

document.getElementById('btn-paso16').addEventListener('click', () => {
  limpiarSalidaPaso16();

  const lista = [1, 2, 3, 4, 5];

  procesarLista(lista)
    .then((mensajeFinal) => {
      salidaPaso16.textContent += mensajeFinal;
    })
    .catch((error) => {
      salidaPaso16.textContent += 'Error: ' + error.message;
    });
});
