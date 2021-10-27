// Metodos de seleccion de elementos 
//let test = document.getElementById("grettings")
//let test = document.getElementsByTagName("grettings")
// Selectores de clases
//let test = document.querySelector(".grettings")
//let test = document.querySelectorAll(".grettings");
//document.write(test)

//  Metodos para definir, obtener y eliminar valores de atributos
//  const rangeOfAge = document.querySelector(".rangeOfAge")
//  document.write(rangeOfAge.getAttribute("type"))
//  rangeOfAge.setAttribute("type","color")
//  Podes remover un atributo con removeAttribute

//-------> Atributos globales
// Modificar tipos de nodos con query selector
//const title = document.querySelector(".title")

//title.style.backgroundColor = "blue";

// Class, classlist y metodos de classList
const title = document.querySelector(".title");
// Add es para agregar clases
//title.classList.add("big")

// remove el contrario de add
//title.classList.remove("big")

// item este metodo le pasamos el indice de la clase que este en esa posicion y lo que nos devuelve es la clase como tal
//let value = title.classList.item(0)

// Metodo Contains le pasamos la clase y pues nos dice true/false
//let className = "big"
//let value = title.classList.contains(className)
//if (value) {
  //  title.classList.remove(className)
//}else{
    //title.classList.add(className)
//}
// Metodo toggle nos ahora ese if y else y nos deja poner un parametro extra true/false para forzar
//title.classList.toggle(className,false)
// Metodo replace remplaza una clase por otra
// Este metodo tiene que encontrar ambas clases para poder realizarse
    //title.classList.replace("big","small")
/*************************************************************** */
// Text content es solo para mostrar el contenido de texto de la etiqueta
//let result = title.textContent;
// luego esta el outterHtml que este ya muestra el contenido con toda las etiquetas 
let result = title.innerHTML;
alert(result)
// Creacion de elementos
