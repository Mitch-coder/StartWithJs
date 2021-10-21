// Clase 
class animal{
    constructor(type,age,color){
        this.type = type;
        this.age = age;
        this.color = color;
        this.info = `Soy un ${this.type}, tengo ${this.age} de edad 
        y soy de color ${this.color}`;
    }
    printInfo()
    {
        document.write(this.info +"<br>")
    }
}
// Herencia 
class dog extends animal{
    constructor(type,age,color,branch){
        super(type,age,color);
        this.branch = branch;
    }
}
// Instancia
let dog1 = new dog("Perro",3,"Negro","doberman");
dog1.printInfo();

// El polimorfismo es cuando se especifica aun metod con que caracteristicas acceder  
// en Java script no puedo tener un objeto con el mismo nombre de la clase
// Nota: EN NINGUNA OCASION SE PUEDE PONER UNA FUNCION FLECHA 
//COMO METODO DE UNA CLASE :v