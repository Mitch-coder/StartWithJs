// Metodos con arrays 
let exampleArray = ["Mariana","Rodrigo","Carla","Cassandra","Roberto","Andrea"];

//-*- Metodos Transformadores  -*-
    // Pop lo que hace es eliminar el ultimo elemto y devuelve cual ha eliminado
        //let result = exampleArray.pop();
        //document.write(exampleArray.pop()+"<br>");
        //document.write(exampleArray);

    // shift es el inverso de pop saca el primer elemento 
        //document.write(exampleArray.shift()+"<br>");
        //document.write(exampleArray);

    // Push agrega uno o mas elementos  elementos al array de ultimo
        // document.write(exampleArray.push("Michelle")+"<br>");
        //document.write(exampleArray);

    // Reverse invierte el orden de los elementos de un array
        //document.write(exampleArray.reverse()+"<br>");
        //document.write(exampleArray);

    // Unshift agrega uno o mas elementos al inicio del array y devuelve su nueva longitud
        //document.write(exampleArray.unshift("Cassandra"));
        //document.write(exampleArray);

    // sort Ordena de manera lexico grafico un array
        //document.write(exampleArray.sort());

    // Splice pones donde arranca, cuantos elementos desaeas eliminar, y en esa misma posicion que arranco
        // Le podes agregar mas elementos
        // Ojo devuelve los que esta quitando del arrar
        //document.write(exampleArray.splice(2,2,"Bruno"));
        //document.write(exampleArray);
// Metodos Accesores
    // Con join agarra un arreglo, lo convierte a una cadena y te permite agregar algo entremedio de lo elementos de la cadena 
    //document.write(exampleArray.join("/"));
    // slice devuelve una parte del array dentro de un nuevo array empezando por inicio hasta el fin
    //Meutodo de filtrado
    //Tipo las consultas de sql 
    result = exampleArray.filter(names =>names.length>20);
    
    document.write(result);
    