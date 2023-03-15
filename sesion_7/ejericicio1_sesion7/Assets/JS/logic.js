input1 = prompt ("Ingrese el primer dígito para realizar una operación matemática, por favor.");
input2 = prompt ("Ingrese el segundo dígito para realizar una operación matemática, por favor.");

input1 = parseInt (input1);
input2 = parseInt (input2);

if (input1 > input2) {
    alert(input1 + " es mayor que " + input2);
    } 
    else if (input2 > input1) {
    alert(input2 + " es mayor que " + input1);
    } 
    else {
    alert("Ambos números son iguales, refresca la página para ingresar tus datos");
    }