let chain = "Mundo interesante Mundo interesante";
let chain2 = "interesante";
// Buscar Strings
    // Concatenar dos strings 
        //let result = chain.concat(chain2);
    // Verifica si una cadena comienza con otra, es sensitive case     
        //let result = chain.startsWith(chain2);
    // Verifica si una cadena termina con otra
        //let result = chain.endsWith(chain2);
    // Si una cadena puede estar dentro de otra sin importar el orden 
        //let result = chain.includes(chain2);
    // Este metodo nos devuelve la posicion de donde se encuentra la cadena 
        //let result = chain.indexOf(chain2);
        // y si no se encuentra devuelve -1
    // Este metodo nos devuelve la ultima vez que coincide
        //let result = chain.lastIndexOf(chain2);

// Rellenar cadenas
    // Especifico de cuantos caracteres quieo que sea la nueva cadena y con quiero que se rellene desde el inicio
        //let result = chain.padStart(100,chain2);
    //Lo mismo de padStart pero al final 
        //let result = chain.padEnd(100,chain2);
    // Si queremos repetir la cadena cuab=ntas veces queremos se lo tenemos que especificar
        //let result = chain.repeat(5);

// Convertir cadenas
// divide la cadena como le pidamos, convirtiendolo en array
    //let result = chain.split(" ");

// Saca una cadena desde el rango de posiciones que le especifiquemos
    //let result = chain.substring(0,5);
// Convertir cadena a mayuscula
    //let result = chain.toUpperCase();
// Convertir cadena a minuscula
    //let result = chain.toLowerCase();
// Pues toString(); ya se sabe xd
// Remover espacios de una cadena dada
let result = chain.trimEnd();
document.write(result.length);