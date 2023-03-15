"use strict";
var TransactionState;
(function (TransactionState) {
    TransactionState[TransactionState["Sucess"] = 0] = "Sucess";
    TransactionState[TransactionState["Failure"] = 1] = "Failure";
})(TransactionState || (TransactionState = {}));
// Global variables declaration
var logged_user;
const balances = new Map();
const database = [];
// General menu
function general_menu() {
    console.log("¡Hola!");
    let inloop = true;
    while (inloop) {
        let welcome = prompt("¡Bienvenido/a a tu cajero automático móvil! \n" +
            "Por favor, escoge las siguientes opciones para continuar: \n" +
            "1. Ingresar a tu cajero móvil \n" +
            "2. Registrarme en mi cajero móvil");
        switch (welcome) {
            case '1':
                logged_user = logInUser();
                if (logged_user !== undefined)
                    logged_user_menu();
                break;
            case '2':
                signUpUser();
                break;
            default:
                inloop = false;
        }
    }
}
// Logged user menu
function logged_user_menu() {
    let inloop = true;
    while (inloop) {
        let welcome = prompt(`¡Bienvenido/a a tu cuenta, ${logged_user}! \n` +
            "Por favor, escoge las siguientes opciones para continuar: \n" +
            "1. Mostrar balance. \n" +
            "2. Realizar retiro. \n" +
            "3. Realizar depósito.\n" +
            "4. Cerrar sesión.");
        switch (welcome) {
            case '1':
                return_balance();
                break;
            case '2':
                transaction_menu(withdraw);
                break;
            case '3':
                transaction_menu(deposit);
                break;
            case '4': inloop = false;
            default: inloop = false;
        }
    }
}
function transaction_menu(callback) {
    let amount = parseInt(prompt("Especifique la cantidad deseada") || '0');
    callback(amount);
}
// Sign-in and sign-up logic
function logInUser() {
    let user_name = prompt("Por favor ingresa tu cuenta de usuario") || "";
    let user_email = prompt("Por favor ingresa tu correo") || "";
    if (!(user_name && user_email))
        return undefined;
    let user_password = prompt("Por favor ingresa tu contraseña") || "";
    let register = { userName: user_name, userMail: user_email, userPassword: user_password };
    if (isRegisteredInDataBase(register)) {
        alert("Has ingresado exitosamente a tu banca en linea.");
        return user_name;
    }
    else {
        alert("Sus datos son incorrectos.");
        return undefined;
    }
}
function signUpUser() {
    // User name and email
    let user_name = prompt("Por favor, ingresa tu cuenta de usuario") || "";
    console.log(user_name);
    if (userAlreadyExists(user_name)) {
        alert("Usuario ya existente");
        return;
    }
    let user_email = prompt("Por favor, ingresa tu correo") || "";
    console.log(user_email);
    let user_password = prompt("Por favor ingresa tu contraseña") || "";
    console.log(user_password);
    // Enter user's register into the database
    let register = { userName: user_name, userMail: user_email, userPassword: user_password };
    // Updating database and creating balance for user
    database.push(register);
    console.log(database);
    balances.set(user_name, 0);
    console.log(balances);
}
// Validations
function userAlreadyExists(user) {
    for (let existing_user of balances.keys()) {
        if (existing_user == user)
            return true;
    }
    return false;
}
function isRegisteredInDataBase(register) {
    for (let existing_register of database) {
        console.log("existing register", existing_register);
        console.log("Register", register);
        let correct_user = register.userName == existing_register.userName;
        let correct_password = register.userPassword == existing_register.userPassword;
        if (correct_user && correct_password) {
            return true;
        }
    }
    return false;
}
// User operations
function return_balance() {
    if (logged_user === undefined) {
        throw Error("Usuario no está loggeado.");
    }
    alert(`${logged_user}, su balance es de ${balances.get(logged_user)}.`);
}
function withdraw(amount) {
    if (amount < 0) {
        throw Error("Sólo es posible retirar si tiene valores positivos.");
    }
    if (logged_user === undefined) {
        throw Error("Usuario no está loggeado.");
    }
    let current_balance = balances.get(logged_user) || 0;
    if (current_balance < amount) {
        alert("No tiene fondos necesarios para la transacción solicitada.");
        return TransactionState.Failure;
    }
    else {
        balances.set(logged_user, current_balance - amount);
        alert("La transacción ha sido exitosa.");
        return TransactionState.Sucess;
    }
}
function deposit(amount) {
    let current_balance = balances.get(logged_user || "") || 0;
    console.log(current_balance);
    balances.set(logged_user || "", current_balance + amount);
    console.log(balances.get(logged_user || ""));
    alert("La transacción ha sido exitosa.");
}
general_menu();
