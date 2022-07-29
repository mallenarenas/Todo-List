//Funciones necesarias
escucharElCheck = function(tareas){
    const tareasFinalizadas = document.querySelector("#tareas-terminadas");
    for (let tarea of tareas){
        console.log(tarea.id)
     const btnCheck = document.getElementById(tarea.id);
     btnCheck.addEventListener("click", () => {
        if(tarea.check == 0){
            tarea.check = 1;
        }
        else{
            tarea.check = 0;
        }
        console.log(tarea.check,tarea.id); 
        console.log(sumaCheck(tareas));
        tareasFinalizadas.innerHTML = sumaCheck(tareas);
     })
    }
    }
sumaCheck = function(datos){
        let total = 0;
        for (let data of datos){
            total = total+data.check;
        }
        return total;
    }
function renderTareas(tareas){
    let html1 = ""
    let html2 = ""
    for (tarea of tareas) {
        if(tarea.check==1){
    html1 += `<li style="text-align: end; list-style-type: none;">${tarea.nombre} 
    <input checked type="checkbox" class="btnCheck" id="${tarea.id}">
    <button onclick="borrar(${tarea.id})" style="color: red;"> x </button> </li>`;
    }
    else{
    html1 += `<li style="text-align: end; list-style-type: none;">${tarea.nombre} 
    <input type="checkbox" class="btnCheck" id="${tarea.id}">
    <button onclick="borrar(${tarea.id})" style="color: red;"> X </button> </li>`;
    }
    html2 += `<li style="margin: 5px">${tarea.id} </li>`;
    }
    const listaDeTareas = document.querySelector("#tareas");
    const listaDeId = document.querySelector("#identify");
    const tareasTotal = document.querySelector("#cuenta-tareas")
    const tareasFinalizadas = document.querySelector("#tareas-terminadas");
    listaDeTareas.innerHTML = html1;
    tareasTotal.innerHTML = tareas.length; 
    listaDeId.innerHTML = html2;
    tareasFinalizadas.innerHTML = sumaCheck(tareas);   
}
function borrar(id){
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1)
    console.log(tareas)
    renderTareas(tareas)
    escucharElCheck(tareas)
    }
//Carga inicial 
const btnAgregar = document.querySelector("#agregarTarea");
const tareas = [{id: Date.now()-1659100000000, nombre: "Hacer las compras", check: 0},
    {id: Date.now()+1-1659100000000, nombre: "Lavar ropa", check: 0},
    {id: Date.now()+2-1659100000000, nombre: "Limpiar la casa", check: 0}]
console.log(tareas);   
renderTareas(tareas);
escucharElCheck(tareas); 
  
//Agregar tareas
 
btnAgregar.addEventListener("click", () => {
    const tareaInput = document.querySelector("#nuevaTarea");
// Validación del input
console.log(tareaInput)
if (tareaInput.value===""){
    alert("Debe ingresar texto")
}
else{
// Agregamos la tarea al arreglo 
const nombreTarea = tareaInput.value
tareas.push({id: Date.now()-1659100000000, nombre: nombreTarea, check: 0})
tareaInput.value = ""
// Actualizamos la información en el HTML 
renderTareas(tareas);
escucharElCheck(tareas);
}
})