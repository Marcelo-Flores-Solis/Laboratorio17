// Paso 5: Que console.log genere un error de cualquier tipo, en el catch imprimir “falló” y en finally imprimir “siempre se ejecuta”
const salidaPaso5 = document.getElementById('salida-paso5');

function limpiarSalidaPaso5() {
  salidaPaso5.textContent = '';
}

function paso5() {
  limpiarSalidaPaso5();
  try {

    console.log.noExiste('Esto causará un TypeError');
  } catch (e) {

    salidaPaso5.textContent = 'falló';
  } finally {
    salidaPaso5.textContent += '\nsiempre se ejecuta';
  }
}

document.getElementById('btn-paso5').addEventListener('click', paso5);
