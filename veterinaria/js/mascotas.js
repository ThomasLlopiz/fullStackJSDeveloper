const listaMascotas = document.getElementById('lista-mascotas');
const tipo = document.getElementById('tipo');
const nombre = document.getElementById('nombre');
const dueno = document.getElementById('dueno');
const indice = document.getElementById('indice');
const form = document.getElementById('form');
const exampleModal = document.getElementById('exampleModal');
const btnGuardar = document.getElementById('btn-guardar');
let mascotas = [
    {
        tipo: "Gato",
        nombre: "Manchas",
        dueno: "Esteban"
    },
    {
        tipo: "Perro",
        nombre: "Pepe",
        dueno: "Thomas"
    },
]

function listarMascotas() {
    const htmlMascotas = mascotas.map((mascota,index) => `
    <tr>
    <th scope="row">${index}</th>
    <td>${mascota.tipo}</td>
    <td>${mascota.nombre}</td>
    <td>${mascota.dueno}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-info editar" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
        </div>
    </td>
    </tr>
    `).join('');
    listaMascotas.innerHTML = htmlMascotas;
    Array.from(document.getElementsByClassName('editar')).forEach((bontonEditar,index)=>bontonEditar.onclick = editar(index));
    Array.from(document.getElementsByClassName('eliminar')).forEach((bontonEliminar,index)=>bontonEliminar.onclick = eliminar(index));
}

function enviarDatos(e) {
    e.preventDefault();
    const datos = {
        tipo: tipo.value,
        nombre: nombre.value,
        dueno: dueno.value
    };
    const accion = btnGuardar.innerHTML;
    switch (accion) {
        case 'Editar':
            mascotas[indice.value] = datos;
            break;
        
        default:
        //Crear
        mascotas.push(datos);
            break;
    }
    listarMascotas();
    resetModal();
}

function editar(index){
    return function cuandoHagoClick(){
        btnGuardar.innerHTML = 'Editar'
        const mascota = mascotas[index];
        tipo.value = mascota.tipo;
        nombre.value = mascota.nombre;
        dueno.value = mascota.dueno;
        indice.value = index;
    }
}

function resetModal(){
    tipo.value = '';
    nombre.value = '';
    dueno.value = '';
    indice.value = '';
    btnGuardar.innerHTML = 'Crear'
}

function eliminar (index){
    return  function clickEnEliminar () {
        console.log(index);
        mascotas = mascotas.filter((mascota,indiceMascota)=>indiceMascota !== index);
        listarMascotas();
    }
}

listarMascotas();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;