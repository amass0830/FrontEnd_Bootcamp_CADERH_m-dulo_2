var datainputsform1 = document.querySelectorAll('#formName1, #formSurname1, #formInputEmail1, #formInputNumber1, #formDate1, #formAsistentes1, #formInputHour1');
var datainputsform2 = document.querySelectorAll('#formName2, #formSurname2, #formInputEmail2, #formInputNumber2, #formDate2, #formAsistentes2, #formInputHour2');

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

$(document).ready(function () {
  $('#form_1').submit(function (event) {
    event.preventDefault();
    alert("Haz enviado tu formulario " + $('#formName1').val() + ", hemos recibido su sugerencia y enviaremos una pronta respuesta al correo " + $('#formInputEmail1').val());
  });
});


$(document).ready(function () {
  $('#form_2').submit(function (event) {
    event.preventDefault();
    alert("Hola " + $('#formName2').val() + " agradecemos por reservar con nosotros. Hemos registrado " + $('#formAsistentes2').val() + " asistentes. Se ha enviado el código de confirmación al correo. " + $('#formInputEmail').val() + " Gracias por preferirnos ");
  });
});


$(document).ready(function() {
  $('.card').click(function() {
    var currentPosition = $(this).offset().top - $(window).scrollTop();

    $(this).css({
      'position': 'fixed',
      'top': '50%',
      'left': '50%',
      'transform': 'translate(-50%, -50%)',
      'z-index': '9999'
      // 'width': '100%'
      // 'height': '100%'
    });
    
    $(document).click(function(event) {
      if (!$(event.target).closest('.card').length) {
        $('.card').css({
          'position': 'static',
          'top': '',
          'left': '',
          'transform': '',
          'z-index': ''
        });
        $(window).scrollTop(currentPosition);
      }
    });
  });
});

$(document).ready(function() {
  $("#sobreNosotros").click(function() { 
    $("#nimrodel_carousel").show();
  });

  $("#cierre__carousel").click(function() { 
    $("#nimrodel_carousel").hide();
  });
});
