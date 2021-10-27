// Para manipular seleccionamos el contenedor principal
const container = document.querySelector(".flex-container")

function createKey(name,model,price) {
    img = `<img src="key.png">`;
    //Antes de retornarlo convertimos a html
    name = `<h2>${name}</h2>`;
    model = `<h3>${model}</h3>`;
    price = `<p>${price}</p>`;
    return[img,name,model,price];
}

const changeHidden = (number) =>{
    document.querySelector(".key-data").value = number;
}


// Iniciamos el fragmento del codigo
let documentFragment = document.createDocumentFragment();
document.querySelector(".send-button").value = "COMPRAR";
for (var i = 1; i <=20; i++) {
    let randomModel = Math.round(Math.random()*1000);
    let randomPrice = Math.round(Math.random()*10+30);
    let key = createKey(`Llave ${i}`,`Modelo: ${randomModel}`,`Precio: ${randomPrice}`);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{changeHidden(randomModel)});
    div.tabIndex = i;
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML = key[0] + key[1] +key[2]+key[3];
    documentFragment.appendChild(div);
}
container.appendChild(documentFragment);  
