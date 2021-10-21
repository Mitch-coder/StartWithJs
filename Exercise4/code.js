class calculator{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    static adition(num1,num2){
        return parseInt(num1) + parsInt(num2);
    } 
    static substract(num1,num2){
        return parseInt(num1) - parseInt(num2);
    }
    static divide(num1,num2){
        return parseInt(num1) / parseInt(num2);
    }
    static multiple(num1,num2){
        return parseInt(num1) * parseInt(num2);
    }
    static pow2(num1){
        return parseInt(num1)**2;
    }
    static sqrt(num1){
        return Math.sqrt(parseInt(num1));
    }
}

// Preguntamos que operacion desea realizar
var operation = parseInt(prompt(`Que operacion desea realizar?<br>1-Suma 2-Resta 3-Multiplicacion 4-Division 5-pow2 6-Raiz2`));
if(operation==5||operation==6)
{
    var number1 =parseInt(prompt("Ingrese su numero"));
}else{
    number1 = prompt("Ingrese su primer numero");
    var number2 = prompt("Ingrese su segundo numero");
}

var result;

// Efectuamos la operacion que haya seleccionado
switch (operation) {
    case 1:
        result = calculator.adition(number1,number2);
        break;
    case 2:
        result = calculator.substract(number1,number2);
        break;
    case 3:
        result = calculator.multiple(number1,number2);
        break;
    case 4:
        result = calculator.divide(number1,number2);
        break;
    case 5:
        result = calculator.pow2(number1);
        break;
    case 6:
        result = calculator.sqrt(number1);
    default:
        break;
}
// Le mostramos el resultado de la operacion
alert(result);