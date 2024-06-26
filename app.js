let hola = "hola mundo";

function limpiarInput(id) {
  document.getElementById(id).value = "";
}
function estadoVisibleElemento(id, estado) {
  document.getElementById(id).style.visibility = estado;
}
function estadoRenderizarElemento(id, estado) {
  document.getElementById(id).style.display = estado;
}
function optenerInput(id) {
  return document.getElementById(id).value;
}
function setTextToHTML(id, texto) {
  document.getElementById(id).innerText = texto;
}
function encriptarMensaje() {
  let mensage = optenerInput('inputTexto');
  mensage = encritador(mensage);
  limpiarInput('inputTexto');

  setTextToHTML('parrafo__encriptado', mensage);
  estadoRenderizarElemento('imagen', 'none');
  estadoVisibleElemento('bonton__copiar', 'visible');
}

function desencriptarMensaje() {
  let mensage = optenerInput('inputTexto');
  limpiarInput('inputTexto');
  mensage = desencriptar(mensage);
  setTextToHTML('parrafo__encriptado', mensage);
}
function copiar(){
 
    // Obtener el contenido del elemento
    var content = document.getElementById("parrafo__encriptado").innerText;
  
    // Usar la API de Portapapeles para copiar el contenido
    navigator.clipboard.writeText(content).then(function() {
      console.log("first")
    }).catch(function(error) {
      alert("Error al copiar el contenido: " + error);
    });
  
}

function encritador(inputmgs) {

  let mensage = inputmgs.split('');

  for (let i = 0; i < mensage.length; i++) {
    switch (mensage[i]) {
      case "e"://enter
        mensage
        break;
      case "i"://imes
        mensage[i] = "imes";
        break;
      case "a"://ai
        mensage[i] = "ai";
        break;
      case "o"://ober
        mensage[i] = "ober";
        break;
      case "u"://ufat
        mensage[i] = "ufat";
        break;
    }
  }

  return mensage.join('');

}


function desencriptar(msg) {
  let mensage = msg.split('');

  for (let i = 0; i < mensage.length; i++) {

    switch (mensage[i]) {
      case "e"://enter
        //mensage[i]="e";
        mensage.splice(i + 1, 4);
        break;
      case "i"://imes
        mensage.splice(i + 1, 3);
        break;
      case "a"://ai
        mensage.splice(i + 1, 1);
        break;
      case "o"://ober
        //mensage[i]="o";
        mensage.splice(i + 1, 3);
        break;
      case "u"://ufat
        mensage.splice(i + 1, 3);
        break;
    }
  }

  return mensage.join('');

}
