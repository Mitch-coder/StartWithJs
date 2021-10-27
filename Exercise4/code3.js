/*Solucion al problema c*/
let subjects = {
    math:["Carolina","Roberto","Carlos","Steven","Michelle"],
    introduction:["Norwing","Roberto","Carlos","Steven","Michelle"],
    biologic:["Karen","Roberto","Carlos","Steven"]
}
const inscriptions = (student,subject)=>{
    persons = subjects[subject];
    persons.shift();
    var students = persons;
    if (student.length >= 20) {
        document.write(`lo siento ${student},la materia ${subject} ya esta llena`)
    }
    else{
        //Mandamos a agregar al alumno correspondiente a la clase
        students.push(student);
       switch (subject) {
            case "math":
                subjects = {
                    math:students,
                    introduction:subjects['introduction'],
                    biologic:subjects['biologic']
                }
                break;
            case "introduction":
                subjects={
                    math:subjects['math'],
                    introduction:students,
                    biologic:subjects['biologic']
                }
                break;
            case "biologic":
                subjects={
                    math:subjects['math'],
                    introduction:subjects['introduction'],
                    biologic:students
                }
                break;
            default:
                break;
        }
        document.write(`Felicidades ${student} te haz escrito a ${subject}`)
    }
}
inscriptions("maria","math");
