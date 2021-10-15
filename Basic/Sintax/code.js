       /*Concepto de variables*/
            variable = "Esto es una variable xd";
            number = 4;
            bool=true;
            alert(variable)

        /*Scope de las variables*/
            // De alcance global
            var global;
            // Let tiene menos alcance que var 
            let local;
            // Esto pues una contante
            const constant ="xd";
        
        /*Casos especiales de variables*/
            let number2 = null;
            //undefined es un tipo de dato
            //Nan es cuando no se puede realizar la operacion y el interprete lo detecta
        
        /*Trabajar con cadenas de texto*/
            let Name = prompt("Cual es tu nombre?");
            alert("Hola:"+Name);
            //Como forzar una cadena de texto
            let number3=1;
            let number4=2;
            phrase = ""+number3+number4
            //formas de concatenar strings es con concat 
            //pero para poder hacer esto una de las variables tiene que ser string
            //Concatenacion con brackits
            Name= "Michelle"
            LastName= " Calderon"
            phrase =`soy ${Name + LastName}`;
            document.write(phrase)
        /*Operadores Intermedio*/
            //operadores de asignacion
            //Operadores Aritmeticos
            //%= operacion del resto numero1&numero2
            //**=  esto es exponencializacion que esta rarisima    
            /*La sintaxis de los condicionales es la misma que en los otros lenguajes*/
        /*Loops*/
            //El bucle while es igual
            //--->Existen diferentes fors el de sintaxis basica, 
            //uno de decremento y aumento si asi se requiere
            for (i = 0, j = 5; i < 5; i++, j--) {
                console.log("Valor de i y j:", i, j);
            }
            //La instruccion continue sirve para saltarsr la iteracion de un bucle
            //Arreglo de ejemplo
            animals =["Gato","Perro","Chocoyo"]
            //El for in te devuelve posicion
            forMichelle:
            for (const animal in animals) {
                document.write(animal);
                break forMichelle;
            }
            //El for of te devuelve valor
            for (const animal of animals) {
                document.write(animal);
            }
            //Podemos llamar a los bloques de fors con label y despues quebrarlos
        /*Funciones Flechas*/
            const grettings = (names) =>document.write(`Hola Como estas?${names}`);
            grettings(prompt("Cual es tu nombre"));
        /*Nota: en JavaScript los metodos por default tambien vienen en camel*/
        

        


        

        
        

