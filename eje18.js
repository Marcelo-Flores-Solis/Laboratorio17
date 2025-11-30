// Paso 20: Paso 12 con async/await

const salidaPaso20 = document.getElementById('salida-paso20');

function limpiarSalidaPaso20() {
  salidaPaso20.textContent = '';
}

function procesarLista(numeros) {
  return new Promise((resolve) => {
    let pendientes = numeros.length;

    numeros.forEach((numero) => {
      const delay = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;

      setTimeout(() => {
        salidaPaso20.textContent += `Procesando ${numero}...\n`;
        pendientes--;

        if (pendientes === 0) {
          resolve('Proceso completado');
        }
      }, delay);
    });
  });
}

async function manejarClickPaso20() {
  limpiarSalidaPaso20();

  const lista = [1, 2, 3, 4, 5];

  try {
    const mensajeFinal = await procesarLista(lista);
    salidaPaso20.textContent += mensajeFinal;
  } catch (error) {
    salidaPaso20.textContent += 'Error: ' + error.message;
  }
}

document
  .getElementById('btn-paso20')
  .addEventListener('click', manejarClickPaso20);
