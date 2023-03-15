var seleccion_menu_prompt = prompt("Ingrese el dígito según lo que usted desee hacer: \n\n 1. Calcular cuál número es mayor. \n 2. Realizar una suma. \n 3. Realizar una resta. \n 4. Realizar una multiplicación. \n 5. Realizar una división. \n 6. Mostrar números ingresados. \n 7. Salir.");

input1 = parseInt (input1);
input2 = parseInt (input2);

switch (seleccion_menu) {
    case '1':
    var input1 = prompt ("Ingrese el primer dígito para realizar una operación matemática, por favor.");
    var input2 = prompt ("Ingrese el segundo dígito para realizar una operación matemática, por favor.");

    if (input1 > input2) {
        alert ("El número " + input1 + " es mayor que " + input2);
        } else if (input2 > input1) {
        alert("El número " + input2 + " es mayor que " + input1);
        } else {
        alert("Ambos números son iguales.");
        }     
    break;

    case '2': 
        var input1 = parseInt(prompt("Ingrese el primer dígito para realizar una operación matemática, por favor."));
        var input2 = parseInt(prompt("Ingrese el segundo dígito para realizar una operación matemática, por favor."));
        function sum (input1,input2) {
            sum_result = input1 + input2;
            return (sum_result);
        }
        var sum_result = sum(input1, input2);
        alert("El resultado de " + input1 + " + " + input2 + " es " + sum_result + ".");
    break;

    case '3': 
        var input1 = parseInt(prompt("Ingrese el primer dígito para realizar una operación matemática, por favor."));
        var input2 = parseInt(prompt("Ingrese el segundo dígito para realizar una operación matemática, por favor."));
        function subtraction (input1,input2) {
            subt_result = input1 - input2;
            return (subt_result);
        }
        var subt_result = subtraction(input1, input2);
        alert("El resultado de " + input1 + " - " + input2 + " es " + subt_result + ".");
    break;

    case '4':
        var input1 = parseInt(prompt("Ingrese el primer dígito para realizar una operación matemática, por favor."));
        var input2 = parseInt(prompt("Ingrese el segundo dígito para realizar una operación matemática, por favor."));
        function multiplicación (input1,input2) {
            mult_result = input1 * input2;
            return (mult_result);
        }
        var sum_result = multiplicación(input1, input2);
        alert("El resultado de " + input1 + " * " + input2 + " es " + mult_result + ".");
    break;

    case '5':
        var input1 = parseInt(prompt("Ingrese el primer dígito para realizar una operación matemática, por favor."));
        var input2 = parseInt(prompt("Ingrese el segundo dígito para realizar una operación matemática, por favor."));
        function división (input1,input2) {
            div_result = input1 / input2;
            return (div_result);
        }
        var div_result = división(input1, input2);
        alert("El resultado de " + input1 + " / " + input2 + " es " + div_result + ".");
    break;

    case '6':
        var input1 = parseInt(prompt("Ingrese el primer dígito, por favor."));
        var input2 = parseInt(prompt("Ingrese el segundo dígito, por favor."));
        var register = input1, input2;
        alert(" Su registro fue de " + input1 + " & " + input2 + ". ");  
        break;

     case '7':
        alert("¿Está usted seguro que desea salir? Muchas gracias."); 
    break;   
}

