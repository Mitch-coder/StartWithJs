let subjects={
    math : [90,6,4,"matematicas"],
    ddbb : [80,8,8,"Base de datos"],
    logic : [95,9,5,"Logistica"],
    physic : [94,6,5,"Fisica"],
    biologic : [96,5,4,"Biologia"]
}

const puntuality = ()=>{
    for (const subject in subjects) {
       let puntualities = subjects[subject];
       if (puntualities>=90) {
           console.log(subjects[subject][3])
           console.log("%cAprobado","color:green")
       }else{
        console.log(subjects[subject][3])
        console.log("%cAprobado","color:red")
       }
    }
}
puntuality();