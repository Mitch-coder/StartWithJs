// Declaramos una funcion de busqueda
const getInfo = (subject)=>{
    // Creamos un diccionario donde estan los registros ya dados
    subjects = {
        math:["Carolina","Roberto","Carlos","Steven","Michelle"],
        introduction:["Norwing","Roberto","Carlos","Steven","Michelle"],
        biologic:["Karen","Roberto","Carlos","Steven"],
        physic:["Hilda","Roberto","Carlos","Steven"]
    }
    if (subjects[subject]!==undefined) {
        return [subjects[subject],subject]
    }else{
        return subjects
    }
}
// Filtramos informacion de acuerdo a los que se nos pida
const showInfo=(subject)=>{
    let register =getInfo(subject); 
    getInfo(subject)[0].shift()
    students = getInfo(subject)[0]
    if (register != false){
        let students = getInfo(subject)[0];
        students.shift(); 
        document.write(`Los alumnos en la materia de ${register[1]} son:${students}<br>Docente: ${register[0][0]}`);
    }
    document.write(`<br>`)
}
const search=(student)=>{
    let register =getInfo(); 
    let quantity = 0;
    let takenSubjects=[];
    for (const person in register) {
        if (register[person].includes(student)) {
            quantity++;
            takenSubjects.push(" "+person);
        }
    }
    return `${student} lleva ${quantity} clases este semestre las cuales son:
    ${takenSubjects}
    `;
}
// Especificamos la info de la materia que queremos mostrar
showInfo("math");
showInfo("introduction");
showInfo("biologic");
document.write(search("Michelle"));