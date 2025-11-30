// Paso 12: Crea  una  función  llamada  procesarLista.    Debe  recibir  un  arreglo  de  números,  un  callback,  por  cada  número  del  arreglo esperar  entre  500  y  1500  ms  usando  setTimeout.  Imprimir  "Procesando  <numero>..."  y  cuando  todos  los  números  estén procesados llamar al callback final con el mensaje "Proceso completado"
const salidaPaso12 = document.getElementById('salida-paso12');

function limpiarSalidaPaso12() {
  salidaPaso12.textContent = '';
}

function procesarLista(numeros, callbackFinal) {
  let pendientes = numeros.length;

  numeros.forEach((numero) => {
    const delay = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;

    setTimeout(() => {
      salidaPaso12.textContent += `Procesando ${numero}...\n`;
      pendientes--;

      if (pendientes === 0) {
        callbackFinal('Proceso completado');
      }
    }, delay);
  });
}

document.getElementById('btn-paso12').addEventListener('click', () => {
  limpiarSalidaPaso12();

  const lista = [1, 2, 3, 4, 5];

  procesarLista(lista, (mensajeFinal) => {
    salidaPaso12.textContent += mensajeFinal;
  });
});
