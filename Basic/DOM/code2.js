//Aqui es todo lo que tiene que ver con la creacion de elementos
//const container = document.querySelector(".container")
// Creamos el elemento
//const item = document.createElement("LI");
// Creamos el contenido del elemento
//const textDelItem = document.createTextNode("Este es un elemento de la lista")
//const fragment = document.createDocumentFragment();
//fragment.appendChild(textDelItem)
// Se lo agregamos al elemento
//item.appendChild(textDelItem)
// Lo mostramos agregandolo al contenedor del html
//container.appendChild(fragment)

//---->Obtencion y modificacion de hijos
//const container = document.querySelector(".container")

//const firstChild = container.lastElementChild;
//const childs = container.childNodes;
//const childs = container.children;

//console.log(childs)
// Metodos de childs 
// Remplazar a un hijo

const container = document.querySelector(".container")

const paragraph = document.createElement("P").innerHTML = "Parrafo";
const newChild = document.createElement("H2");
const oldChild = document.querySelector(".h1");

//container.replaceChild(newChild,oldChild);
//container.removeChild(oldChild);

/*let answer = container.hasChildNodes();
if (answer) {
    document.write("El elemeento si tiene hijos");
}
else{
    document.write("El elemeento no tiene hijos");
}
document.write(container.parentElement())*/

// Los metodos siblings
document.write(oldChild.nextSibling)