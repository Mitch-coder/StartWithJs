// Realizar una calculadora con las operaciones basicas
// Definimos las operaciones basicas
const addition = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const substract = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const divide = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}
const multiple = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

// Preguntamos que operacion desea realizar
let operation = prompt(`Que operacion desea realizar?<br>1-Suma 2-Resta 3-Multiplicacion 4-Division`);
let number1 = prompt("Ingrese su primer numero");
let number2 = prompt("Ingrese su segundo numero");
var result;

// Efectuamos la operacion que haya seleccionado
switch (operation) {
    case 1:
        result = addition(number1,number2);
        break;
    case 2:
        result = substract(number1,number2);
        break;
    case 3:
        result = multiple(number1,number2);
        break;
    case 4:
        result = divide(number1,number2);
        break;
    default:
        break;
}
// Le mostramos el resultado de la operacion
alert(result);