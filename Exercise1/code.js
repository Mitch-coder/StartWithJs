// Menu de los helados
const iceCreamsPrices =  [{id:0.6,iceCream:"Cono de Vainilla"},
                          {id:1,iceCream:"Cono de Chocolate"},
                          {id:1.6,iceCream:"Cono Doble"},
                          {id:1.7,iceCream:"Cono Triple"},
                          {id:1.8,iceCream:"Mini Banana Split"},
                          {id:2.9,iceCream:"Banana Split o Sundae"}];

// Obtenemos la cantidad de dinero que tienen los clientes para el helado
menuAvailable(prompt("Cuanto dinero tienes Jonathan?"));
menuAvailable(prompt("Cuanto dinero tienes Jose?"));
menuAvailable(prompt("Cuanto dinero tienes Juan?"));

// Funcion auxiliar
function menuAvailable(budget){
    try {
        var result=(iceCreamsPrices.find(iceCreamsPrices =>iceCreamsPrices.id==budget)) 
        alert("El Helado que puede comprar es: "+result.iceCream+"con un precio de "+result.id)
    } catch (error) {
        result=(iceCreamsPrices.filter(iceCreamsPrices =>iceCreamsPrices.id<=budget)) 
        document.write(`<br>Los helados disponibles por debajo de ${budget}<br>`)
        for (i in result) {
            document.write(`${result[i].iceCream} con un precio de ${result[i].id}<br>`)
        }
    }
}