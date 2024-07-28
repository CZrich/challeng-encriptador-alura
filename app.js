
let hola = "hola mundo";
let regex = /^[a-z\s]+$/
let anchoPantalla;

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
  anchoPantalla = window.innerWidth;
  let mensage = optenerInput('inputTexto');
  if (mensage.length) {
    limpiarInput('inputTexto');
    if (regex.test(mensage)) {
      try {
        mensage = encritador(mensage);
        estadoRenderizarElemento('contenido__encriptado__parrafo', 'block')

        setTextToHTML('contenido__encriptado__parrafo', mensage);


        estadoRenderizarElemento('contenido__encriptado__imagen', 'none');
        estadoRenderizarElemento('contenido__encriptado_mensaje', 'none')
        estadoRenderizarElemento('bonton__copiar', 'block');
        Swal.fire({
         position: "bottom-end",
          icon: "success",
          color: "green",
          title: "Enciptado...",
          showConfirmButton: false,
          timer: 2000,
          backdrop: true,
          background: '#FFFFFF',
         // background:'#28a745',
          toast:true,
          timerProgressBar: true
        })

      } catch (e) {
        Swal.fire({
          // position: "center",
          icon: "error",
          color: "red",
          title: "Opps hubo un error...",
        //    html: '<span style="color: #E95C53;">Ingrese solo minúsculas y sin acento</span>',
          showConfirmButton: false,
          timer: 2000,
          backdrop: true,
          background: '#FFFFFF',
          // background:'#211312',
          // toast:true,
          timerProgressBar: true
        })
      }




      //estadoVisibleElemento('bonton__copiar', 'visible');
    } else {
      Swal.fire({
        // position: "center",
        icon: "error",
        color: "red",
        title: "Opps...",
        html: '<span style="color: #E95C53;">Ingrese solo minúsculas y sin acento</span>',
        showConfirmButton: false,
        timer: 2000,
        backdrop: true,
        background: '#FFFFFF',
        // background:'#211312',
        // toast:true,
        timerProgressBar: true
      })
    }
  } else {
    estadoRenderizarElemento('contenido__encriptado__parrafo', 'none');
    estadoRenderizarElemento('bonton__copiar', 'none');
    if (anchoPantalla < 1200) {
      estadoRenderizarElemento('contenido__encriptado__imagen', 'none');
    } else {
      estadoRenderizarElemento('contenido__encriptado__imagen', 'block');
    }

    estadoRenderizarElemento('contenido__encriptado_mensaje', 'block')

  }


}

function desencriptarMensaje() {
  anchoPantalla = window.innerWidth;
  let mensage = optenerInput('inputTexto');
  if (mensage.length) {

    limpiarInput('inputTexto');
    if (regex.test(mensage)) {
      try {
        mensage = desencriptar(mensage);
        Swal.fire({
          position: "bottom-end",
          icon: "success",
          color: "green",
          title: "Desencriptado...",

          showConfirmButton: false,
          timer: 2000,
          toast: true,
          backdrop: true,
          background: '#FFFFFF',

          timerProgressBar: true
        })
      } catch (e) {
        Swal.fire({
          // position: "center",
          icon: "error",
          color: "red",
          title: "Opps hubo un error...",
          toast: true,
          showConfirmButton: false,
          timer: 2000,
          backdrop: true,
          background: '#FFFFFF',
          // background:'#211312',
          // toast:true,
          timerProgressBar: true
        })
      }


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
    if (anchoPantalla < 1200) {
      estadoRenderizarElemento('contenido__encriptado__imagen', 'none');
    } else {
      estadoRenderizarElemento('contenido__encriptado__imagen', 'block');
    }

    estadoRenderizarElemento('contenido__encriptado_mensaje', 'block')

  }
}
function copiar() {

  // Obtener el contenido del elemento
  var content = document.getElementById("contenido__encriptado__parrafo").value;

  // Usar la API de Portapapeles para copiar el contenido
  navigator.clipboard.writeText(content).then(function () {
    console.log("Contenido copiado exitosamente");

    // Mostrar alerta de éxito usando SweetAlert2
    Swal.fire({
      position: "top-end",
      color: 'green',
      icon: "success",
      title: "Copiado",

      showConfirmButton: false,
      timer: 1500,
      toast: true,
      background: '#FFFFFF',
      timerProgressBar: true

    }).then(() => {
      console.log("SweetAlert mostrado");
    });
  }).catch(function (error) {
    console.error("Error al copiar el contenido:", error);

    // Mostrar alerta de error
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Error al copiar",
      text: error,
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      console.log("SweetAlert de error mostrado");
    });
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
  //let i = 0; i < mensage.length; i++
  i = 0;

  while (i < mensage.length) {

    switch (mensage[i]) {
      case "e"://enter
        console.log(mensage.slice(i, i + 5).join(''))
        if (mensage.slice(i, i + 5).join('') === "enter") {

          mensage.splice(i + 1, 4);
        }

        break;
      case "i"://imes
        console.log(mensage.slice(i, i + 4).join(''))
        if (mensage.slice(i, i + 4).join('') === "imes") {
          mensage.splice(i + 1, 3);
        }

        break;
      case "a"://ai
        console.log(mensage.slice(i, i + 2).join(''))
        if (mensage.slice(i, i + 2).join('') === "ai") {
          mensage.splice(i + 1, 1);
        }

        break;
      case "o"://ober
        console.log(mensage.slice(i, i + 4).join(''))
        if (mensage.slice(i, i + 4).join('') === "ober") {
          mensage.splice(i + 1, 3);
        }

        break;
      case "u"://ufat
        if (mensage.slice(i, i + 4).join('') === "ufat") {
          mensage.splice(i + 1, 3);
        }

        break;
    }
    i++;
  }

  return mensage.join('');

}
