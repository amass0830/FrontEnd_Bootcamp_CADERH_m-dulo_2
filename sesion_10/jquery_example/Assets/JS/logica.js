// $(document).ready(function() {
//  $("selectorPorEtiqueta"); // Retornará un arreglo con todos los componentes con la etiqueta correspondiente
//  $(".selectorPorClase"); // Retornará un arreglo con todos los componentes con la clase correspondiente
//  $("#selectorPorId"); // Retornará el primer elemento encontrado con el id correspondiente
// });

// $(document).ready(function () {
//  var miTexto = $("#contenido").text();
//  alert(miTexto);
// })

// $(document).ready(function () {
//  var miTexto = $("#contenido").html();
//  alert(miTexto);
// })

// $(document).ready(function () {
//  var miAtributo = $("#nombre").attr("type");
//  alert(miAtributo);
// })

// $(document).ready(function () {
//     $("#caja1").mouseenter(function () {
//         $("#caja2").show();
//     })
// })

// $("#caja1").mouseout(function () {
//  $("#caja2").hide();
// })
 
// $("#caja1").mouseenter(function () {
//     $
// })

// $("#boton").click(function () {
//  var nombre = $("#nombre").val();
//  var correo = $("#correo").val();
//  alert("su nombre es: " + nombre + " y su correo es: " +
// correo);
// })
 
// $("#boton1").click(function(){
//  $("#contenido").css("background-color", "greenyellow");
// })
 
// $("#boton2").click(function(){
//  $("#texto").text("Texto escrito usando JQuery");
// })
 
// $("#boton1").dblclick(function () {
//  $("#contenido").css("background-color", "white");
//  $("#texto").text("Lola" + "hola");
// }) 
 

$(document).ready
    (function () {
        //SUBTITULO
        $("#caja1").mouseenter(function () {
            $("#caja2").toggle();
        })
    })


$("#boton").click(function () {
 var nombre = $("#nombre").val();
 var correo = $("#correo").val();
 alert("su nombre es: " + nombre + " y su correo es: " +
correo);
})
 
 //BOTON 1
 $("#boton1").click(function () {
 $("#contenido").css("background-color", "greenyellow");
 })
 //BOTON 2
 $("#boton2").click(function () {
 $("#texto").text("Texto escrito usando JQuery");
 })
 //VOLVER ATRÁS
 $("#boton1").dblclick(function () {
 $("#contenido").css("background-color", "white");
 $("#texto").text("Lorem, ipsum dolor sit amet consecteturadipisicing elit. Repudiandae voluptatibus"
 + "doloremque rerum corrupti eveniet, quis quas namquisquam,"
 + "magnam consequuntur ipsa aspernatur reprehenderitrepellendus delectus voluptates veniam"
 + "odio, adipisci aliquam!");
 })
