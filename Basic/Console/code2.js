// Esrablecemos la horas que va a dedicar a cada actividad
let job = "240 minutos";
let study = "100 minutos";
let practiceClases = "100 minutos";
let houseWork = "30 minutos";
let rest = "10 minutos";
console.log("Tareas")
for (let i = 0; i < 14; i++) {
    if (i==0) {
        console.group("Semana 1")
    }
    console.groupCollapsed("Dia"+(i+1))
    console.log(job)
    console.log(rest)
    console.log(study)
    console.log(practiceClases)
    console.log(houseWork)
    console.groupEnd()
    if (i==7) {
        console.groupEnd()
        console.groupCollapsed("Semana 2")
    }
    console.groupEnd();
    console.groupEnd();
}
