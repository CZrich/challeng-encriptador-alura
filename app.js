let hola = "hola mundo";
let regex = /^[a-z\s]+$/

estadoRenderizarElemento('contenido__encriptado__parrafo', 'none');
estadoRenderizarElemento('bonton__copiar', 'none');
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

  let mensage = document.getElementById(id).value;
  return mensage;
}
function setTextToHTML(id, texto) {
  document.getElementById(id).value = texto;
}
function encriptarMensaje() {
  let mensage = optenerInput('inputTexto');
  if (mensage.length) {
    limpiarInput('inputTexto');
    if (regex.test(mensage)) {
      mensage = encritador(mensage);


      estadoRenderizarElemento('contenido__encriptado__parrafo', 'block')

      setTextToHTML('contenido__encriptado__parrafo', mensage);
      estadoRenderizarElemento('contenido__encriptado__imagen', 'none');
      estadoRenderizarElemento('contenido__encriptado_mensaje', 'none')
      estadoRenderizarElemento('bonton__copiar', 'block');
      //estadoVisibleElemento('bonton__copiar', 'visible');
    } else {
      alert("ingrese solo minusculas y sin acentos")
    }
  } else {
    estadoRenderizarElemento('contenido__encriptado__parrafo', 'none');
    estadoRenderizarElemento('bonton__copiar', 'none');
    estadoRenderizarElemento('contenido__encriptado__imagen', 'block');
    estadoRenderizarElemento('contenido__encriptado_mensaje', 'block')

  }


}

function desencriptarMensaje() {
  let mensage = optenerInput('inputTexto');
  if (mensage.length) {

    limpiarInput('inputTexto');
    if (regex.test(mensage)) {
      mensage = desencriptar(mensage);
      // estadoRenderizarElemento('contenido__encriptado_parrafo', 'block')
      estadoRenderizarElemento('contenido__encriptado__parrafo', 'block')
      setTextToHTML('contenido__encriptado__parrafo', mensage);
      estadoRenderizarElemento('bonton__copiar', 'block');
      estadoRenderizarElemento('contenido__encriptado__imagen', 'none');
      estadoRenderizarElemento('contenido__encriptado_mensaje', 'none')
    } else {
      alert("ingrese solo minusculas y sin acentos");
    }
  } else {
    estadoRenderizarElemento('contenido__encriptado__parrafo', 'none');
    estadoRenderizarElemento('bonton__copiar', 'none');
    estadoRenderizarElemento('contenido__encriptado__imagen', 'block');
    estadoRenderizarElemento('contenido__encriptado_mensaje', 'block')
    // estadoVisibleElemento('bonton__copiar', 'hidden');
  }
}
function copiar() {

  // Obtener el contenido del elemento
  var content = document.getElementById("contenido__encriptado__parrafo").value;

  // Usar la API de Portapapeles para copiar el contenido
  navigator.clipboard.writeText(content).then(function () {
    console.log("first")
  }).catch(function (error) {
    alert("Error al copiar el contenido: " + error);
  });

}







function encritador(inputmgs) {

  let mensage = inputmgs.split('');

  for (let i = 0; i < mensage.length; i++) {
    switch (mensage[i]) {
      case "e"://enter
        mensage[i] = "enter";
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
