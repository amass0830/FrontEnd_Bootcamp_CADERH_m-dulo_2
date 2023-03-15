while (true) {
    menu_selection = prompt("Ingrese el dígito según lo que usted desee hacer: \n\n 1. Calcular cuál número es mayor. \n 2. Realizar una suma. \n 3. Realizar una resta. \n 4. Realizar una multiplicación. \n 5. Realizar una división. \n 6. Mostrar números ingresados. \n 7. Salir.");

    if (menu_selection === null || menu_selection === "7") {
        alert("¿Está usted seguro que desea salir? Muchas gracias."); 
        break;
    }
    else {
        input1 = parseInt(prompt("Por favor, ingrese el primer dígito para realizar una operación matemática."));
        input2 = parseInt(prompt("Por favor, ingrese el segundo dígito para realizar una operación matemática."));  
    }

    if (input1 === "0"|| input2 === "0") {
        input1_response_0 = parseInt(prompt("Por favor, ingrese un número distinto a cero (0)."));  
    }
    

switch (menu_selection) {
    case '1':
        if (input1 > input2 || input1 > input2 ) {
            alert ("El número " + input1 + " es mayor que " + input2);
        }
        else if (input1 < input2 || input1 < input2) {
            alert("El número " + input2 + " es menor que " + input1);
        } else {
            alert("Ambos números son iguales.");
        } 
    break;

    case '2': 
        function sum (input1,input2) {
            sum_result = input1 + input2;
            return (sum_result);
        }
        var sum_result = sum(input1, input2);
        alert("El resultado de " + input1 + " + " + input2 + " es " + sum_result + ".");
    break;
    
    case '3': 
        function subtraction (input1,input2) {
            subtraction_result = input1 - input2;
            return (subtraction_result);
        }
        var subtraction_result = subtraction(input1, input2);
        alert("El resultado de " + input1 + " - " + input2 + " es " + subtraction_result + ".");
    break;
    
    case '4':
        function multiplication (input1,input2) {
            multiplication_result = input1 * input2;
            return (multiplication_result);
        }
        var multiplication_result = multiplication(input1, input2);
        alert("El resultado de " + input1 + " * " + input2 + " es " + multiplication_result + ".");
    break;
    
    case '5':
        function division (input1,input2) {
            division_result = input1 / input2;
            return (division_result);
        }
        var division_result = division(input1, input2);
        alert("El resultado de " + input1 + " / " + input2 + " es " + division_result + ".");
    break;
    
    case '6':
        alert(" Su registro fue de " + input1 + " & " + input2 + ". ");  
    break;

}
}
