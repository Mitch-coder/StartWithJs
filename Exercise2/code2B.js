/* Problema B 
//Crear un sistema para registrar presentes y ausentes 
// pasado 30 dias mostrar la situacion final del alumno 
//Maximo de auxencias permitidas es del 10% de un semestre de 6 meses*/

// Recolectamos los datos de los estudiantes
let quantity = prompt("Cuantos alumnos son?");
let totalStudents = [];
for (let i = 0; i < quantity; i++) {
    totalStudents[i] = [prompt("Nombre del alumno"+(i+1)),0];   
}
// Tomamos Asistencias por 30 dias
const takeList = (Name,p)=>{
    let present = prompt(Name);
    if(present=="p"||present=="P")
    {
        totalStudents[p][1]++;
    }
}
for (let i = 0; i < 30; i++) {
    for (student in totalStudents) {
        takeList(totalStudents[student][0],student)
    }
}
// Damos el reporte de la clase 
for (student in totalStudents) {
    var result =`${totalStudents[student][0]}:<br>
    _______Asistencias:${totalStudents[student][1]}<br>
    _______Ausencias:${30-totalStudents[student[1]]}
    `;
    if (30-totalStudents[student][1]>18) {
        result+=`<br>Reprobado por inasistencias<br>`;
    }else{
        result+=`<br><br>`;
    }
}
document.write(result);