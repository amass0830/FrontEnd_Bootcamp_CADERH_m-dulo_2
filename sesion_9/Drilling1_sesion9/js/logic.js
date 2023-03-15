var datainputsform1 = document.querySelectorAll('#formName1, #formSurname1, #formInputEmail1, #formInputNumber1, #formDate1, #formAsistentes1, #formInputHour1');
var datainputsform2 = document.querySelectorAll('#formName2, #formSurname2, #formInputEmail2, #formInputNumber2, #formDate2, #formAsistentes2, #formInputHour2');

function showMessageSubmitted1() {
  alert("Haz enviado tu formulario " + $('#formName1').val() + ", hemos recibido su sugerencia y enviaremos una pronta respuesta al correo " + $('#formInputEmail1').val());
}

function showMessageSubmitted2() {
    alert("Haz enviado tu formulario " + $('#formName2').val() + ", hemos recibido su sugerencia y enviaremos una pronta respuesta al correo " + $('#formInputEmail2').val());
}

function noDataRegistered1() {
  for (var i = 0; i < datainputsform1.length; i++) {
    if (datainputsform1[i].value === "") {
      alert("Por favor, ingrese los datos requeridos, es obligatorio.");
      return false;
    }
  }
  return true;
}

function noDataRegistered2() {
  for (var i = 0; i < datainputsform2.length; i++) {
    if (datainputsform2[i].value === "") {
      alert("Por favor, ingrese los datos requeridos, es obligatorio.");
      return false;
    }
  }
  return true;
}

document.getElementById('form_1').onsubmit = function() {
  if (noDataRegistered1()) {
    showMessageSubmitted1();
  }
  return false;
}

document.getElementById('form_2').onsubmit = function() {
  if (noDataRegistered2()) {
    showMessageSubmitted2();
  }
  return false;
}
