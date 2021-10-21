// Clase 
class SmartPhone{
    constructor(color,weigth,wr,cr,ram){
        this.color = color;
        this.weigth = weigth;
        this.wr = wr;
        this.cr = cr;
        this.ram = ram;
        this.info =`Color:${this.color}<br>
        Peso:${this.weigth}<br>
        Resolucion de pantalla:${this.wr}<br>
        Resolucion de camara:${this.cr}<br>
        Ram:${this.ram}<br>`
    }
    On(){
        alert("Hola,encender");
    }
    Off(){
        alert("Bye");
    }
    Reestart(){
        alert("Reiniciado");
    }
    Camara(){
        alert("Sonria para la foto :)");
    }
    Record(){
        alert("Estoy grabando");
    }
    showInfo(){
        document.write(this.info);
    }
}
class highEnd extends SmartPhone{
    constructor(color,weigth,wr,cr,ram,rdce){
        super(color,weigth,wr,cr,ram,rdce)
            this.rdce = rdce;
    }
    FacialRecognize(){
        alert("No te movas que te necesito reconocer");
    }
    mobileInfo(){
        document.write(this.info+`Resolucion de camara extra:${this.rdce}<br>`)
    }
}
const SmartPhoneSelect = (highEnd)=>{
    highEnd.mobileInfo();
    highEnd.On();
    highEnd.Off();
    highEnd.Reestart();
    highEnd.Camara();
    highEnd.Record();
    highEnd.FacialRecognize();
} 
// Instancia de los objetos
let phone1 = new highEnd("black",5.9,9,9,6,4);
let phone2 = new highEnd("White",5.9,9,9,6,4);
let phone3 = new highEnd("Gold",5.9,9,9,6,4);

// Le mostramos un menu pare que escoja
let request = parseInt(prompt("Que celular desea ver primero,el 1 - 2 - 3?"));

switch (request) {
    case 1:
        SmartPhoneSelect(phone1);
        break;
    case 2:
        SmartPhoneSelect(phone2);
        break;
    case 3:
        SmartPhoneSelect(phone3);
        break;
    default:
        break;
}