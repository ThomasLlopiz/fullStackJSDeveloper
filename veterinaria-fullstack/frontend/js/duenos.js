const listaDuenos = document.getElementById('lista-duenos');
const pais = document.getElementById('pais');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const identificacion = document.getElementById('identificacion');
const indice = document.getElementById('indice');
const form = document.getElementById('form');
const exampleModal = document.getElementById('exampleModal');
const btnGuardar = document.getElementById('btn-guardar');
let duenos = [
    {
        pais: "Ecuador",
        identificacion: "123456789",        
        nombre: "Esteban",
        apellido: "Alberto",               
    },
    {
        pais: "Argentina",
        identificacion: "123456789",
        nombre: "Thomas",
        apellido: "Llopiz",
    },
]

function listarDuenos() {
    const htmlDuenos = duenos.map((dueno,index) => `
    <tr>
    <th scope="row">${index}</th>
    <td>${dueno.identificacion}</td>
    <td>${dueno.pais}</td>
    <td>${dueno.nombre}</td>
    <td>${dueno.apellido}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-info editar" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
        </div>
    </td>
    </tr>
    `).join('');
    listaDuenos.innerHTML = htmlDuenos;
    Array.from(document.getElementsByClassName('editar')).forEach((bontonEditar,index)=>bontonEditar.onclick = editar(index));
    Array.from(document.getElementsByClassName('eliminar')).forEach((bontonEliminar,index)=>bontonEliminar.onclick = eliminar(index));
}

function enviarDatos(e) {
    e.preventDefault();
    const datos = {
        pais: pais.value,
        identificacion: identificacion.value,
        nombre: nombre.value,
        apellido: apellido.value,
    };
    const accion = btnGuardar.innerHTML;
    switch (accion) {
        case 'Editar':
            duenos[indice.value] = datos;
        break;

        default:
        //Crear
            duenos.push(datos);
        break;
    }
    listarDuenos();
    resetModal();
}

function editar(index){
    return function cuandoHagoClick(){
        btnGuardar.innerHTML = 'Editar'
        const dueno = duenos[index];
        pais.value = dueno.pais;
        identificacion.value = dueno.identificacion;
        nombre.value = dueno.nombre;
        apellido.value = dueno.apellido;
        indice.value = index;
    }
}

function resetModal(){
    indice.value = '';
    pais.value = '';
    identificacion.value = '';
    nombre.value = '';
    apellido.value = '';
    btnGuardar.innerHTML = 'Crear'
}

function eliminar (index){
    return  function clickEnEliminar () {
        console.log(index);
        duenos = duenos.filter((veterinaria,indiceDuenos)=>indiceDuenos !== index);
        listarDuenos();
    }
}

listarDuenos();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;