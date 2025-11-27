// Paso 4: Generar un SyntaxError usando JSON.parse con texto inválido. En el catch mostrar e.name y e.message
const salida = document.getElementById('salida');

function limpiarSalida() {
  salida.textContent = '';
}

function provocarSyntaxError() {
  limpiarSalida();
  try {

    const texto = "{nombre: 'Juan'}";
    const obj = JSON.parse(texto); 
    salida.textContent = 'Objeto convertido: ' + JSON.stringify(obj);
  } catch (e) {
    salida.textContent =
      'Nombre del error: ' + e.name + '\n' +
      'Mensaje: ' + e.message;
  }
}

document
  .getElementById('btn-syntaxerror-json')
  .addEventListener('click', provocarSyntaxError);
