//Problema A
//-Dejar pasar solo a los mayores de edad 
//Despues de las 2 am la primer persona no paga
let free = false;

const validateCliente = (time)=>
{ // Preguntamos la edad
    let age = prompt("Que edad tienes?");
    if (age>=18) 
    {
        // Validamos el tiempo
        if(time>=2&&time<7&&!free){
            alert("No pagas entrada");
        }else{
            alert("Paga la entrada");
        }
    }
    else{
        alert("Menor de edad");
    }
}
validateCliente(23);