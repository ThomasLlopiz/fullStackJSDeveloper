const listaConsultas = document.getElementById('lista-consultas');
const email = document.getElementById('email');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const indice = document.getElementById('indice');
const form = document.getElementById('form');
const exampleModal = document.getElementById('exampleModal');
const btnGuardar = document.getElementById('btn-guardar');
let consultas = [
    {   
        nombre: "Esteban",
        apellido: "Alberto",  
        email: "@algo",             
    },
    {
        nombre: "Thomas",
        apellido: "Llopiz",
        email: "@tomi",
    },
]

function listarConsultas() {
    const htmlConsultas = consultas.map((consulta,index) => `
    <tr>
    <th scope="row">${index}</th>
    <td>${consulta.nombre}</td>
    <td>${consulta.apellido}</td>
    <td>${consulta.email}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-info editar" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
        </div>
    </td>
    </tr>
    `).join('');
    listaConsultas.innerHTML = htmlConsultas;
    Array.from(document.getElementsByClassName('editar')).forEach((bontonEditar,index)=>bontonEditar.onclick = editar(index));
    Array.from(document.getElementsByClassName('eliminar')).forEach((bontonEliminar,index)=>bontonEliminar.onclick = eliminar(index));
}

function enviarDatos(e) {
    e.preventDefault();
    const datos = {
        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
    };
    const accion = btnGuardar.innerHTML;
    switch (accion) {
        case 'Editar':
            consultas[indice.value] = datos;
        break;

        default:
        //Crear
            consultas.push(datos);
        break;
    }
    listarConsultas();
    resetModal();
}

function editar(index){
    return function cuandoHagoClick(){
        btnGuardar.innerHTML = 'Editar'
        const consulta = consultas[index];
        nombre.value = consulta.nombre;
        apellido.value = consulta.apellido;
        email.value = consulta.email;
        indice.value = index;
    }
}

function resetModal(){
    indice.value = '';
    nombre.value = '';
    apellido.value = '';
    email.value = '';
    btnGuardar.innerHTML = 'Crear'
}

function eliminar (index){
    return  function clickEnEliminar () {
        console.log(index);
        consultas = consultas.filter((veterinaria,indiceConsultas)=>indiceConsultas !== index);
        listarConsultas();
    }
}

listarConsultas();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;