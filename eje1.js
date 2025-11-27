// Paso 3: 3. Provocar un error de cualquier tipo e imprimir su mensaje

const salida = document.getElementById('salida');

function limpiarSalida() {
  salida.textContent = '';
}

function provocarError() {
  limpiarSalida();
  try {
    
    let resultado = x + 1; 
    salida.textContent = 'Resultado: ' + resultado;
  } catch (e) {
    salida.textContent = 'Mensaje de error: ' + e.message;
  }
}

document
  .getElementById('btn-error-generico')
  .addEventListener('click', provocarError);
