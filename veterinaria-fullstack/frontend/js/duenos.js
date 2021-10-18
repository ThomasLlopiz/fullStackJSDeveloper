const listaDuenos = document.getElementById('lista-duenos');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const documento = document.getElementById('documento');
const indice = document.getElementById('indice');
const form = document.getElementById('form');
const exampleModal = document.getElementById('exampleModal');
const btnGuardar = document.getElementById('btn-guardar');
const alert = document.getElementById("alert");
const url = "http://localhost:5000/duenos";
let duenos = []

async function listarDuenos() {
    try {
        const respuesta = await fetch(url);
        const duenosDelServer = await respuesta.json();
        if (Array.isArray(duenosDelServer)) {
            duenos = duenosDelServer;
        }
        if (duenos.length > 0) {
            const htmlDuenos = duenos.map((dueno,index) => `
            <tr>
            <th scope="row">${index}</th>
            <td>${dueno.nombre}</td>
            <td>${dueno.apellido}</td>
            <td>${dueno.documento}</td>
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
            return;
        }
        listaDuenos.innerHTML = `<tr>
                                    <td colspan="5">No hay dueñ@s</td>
                                </tr>`;
    } catch (error) {
        console.log({ error });
        $(alert).show();
    }

}

function enviarDatos(e) {
    e.preventDefault();
    const datos = {
        documento: documento.value,
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
        documento.value = dueno.documento;
        nombre.value = dueno.nombre;
        apellido.value = dueno.apellido;
        indice.value = index;
    }
}

function resetModal(){
    indice.value = '';
    documento.value = '';
    nombre.value = '';
    apellido.value = '';
    btnGuardar.innerHTML = 'Crear'
}

function eliminar (index){
    return  function clickEnEliminar () {
        console.log(index);
        duenos = duenos.filter((dueno,indiceDuenos)=>indiceDuenos !== index);
        listarDuenos();
    }
}

listarDuenos();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;