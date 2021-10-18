const listaVeterinarias = document.getElementById('lista-veterinarias');
const pais = document.getElementById('pais');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const documento = document.getElementById('documento');
const indice = document.getElementById('indice');
const form = document.getElementById('form');
const exampleModal = document.getElementById('exampleModal');
const btnGuardar = document.getElementById('btn-guardar');
const alert = document.getElementById("alert");
const url = "http://localhost:5000/veterinarias";
let veterinarias = []

async function listarVeterinarias() {
    try {
        const respuesta = await fetch(url);
        const veterinariasDelServer = await respuesta.json();
        if (Array.isArray(veterinariasDelServer)) {
            veterinarias = veterinariasDelServer;
        }
        if (veterinarias.length > 0) {
            const htmlVeterinarias = veterinarias
            .map((veterinaria, index) => `
            <tr>
            <th scope="row">${index}</th>
            <td>${veterinaria.nombre}</td>
            <td>${veterinaria.apellido}</td>
            <td>${veterinaria.documento}</td>
            <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-info editar" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-edit"></i></button>
                    <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
                </div>
            </td>
            </tr>
            `).join('');
            listaVeterinarias.innerHTML = htmlVeterinarias;
            Array.from(document.getElementsByClassName('editar')).forEach((bontonEditar, index) => bontonEditar.onclick = editar(index));
            Array.from(document.getElementsByClassName('eliminar')).forEach((bontonEliminar, index) => bontonEliminar.onclick = eliminar(index));
            return;
        }
        listaVeterinarias.innerHTML =`<tr>
                                        <td colspan="5">No hay mascotas</td>
                                      </tr>`;
    } catch (error) {
        console.log({ error });
        // $(alert).show();
    }
}

    function enviarDatos(e) {
        e.preventDefault();
        const datos = {
            pais: pais.value,
            documento: documento.value,
            nombre: nombre.value,
            apellido: apellido.value,
        };
        const accion = btnGuardar.innerHTML;
        switch (accion) {
            case 'Editar':
                veterinarias[indice.value] = datos;
                break;

            default:
                //Crear
                veterinarias.push(datos);
                break;
        }
        listarVeterinarias();
        resetModal();
    }

    function editar(index) {
        return function cuandoHagoClick() {
            btnGuardar.innerHTML = 'Editar'
            const veterinaria = veterinarias[index];
            pais.value = veterinaria.pais;
            documento.value = veterinaria.documento;
            nombre.value = veterinaria.nombre;
            apellido.value = veterinaria.apellido;
            indice.value = index;
        }
    }

    function resetModal() {
        indice.value = '';
        pais.value = '';
        documento.value = '';
        nombre.value = '';
        apellido.value = '';
        btnGuardar.innerHTML = 'Crear'
    }

    function eliminar(index) {
        return function clickEnEliminar() {
            console.log(index);
            veterinarias = veterinarias.filter((veterinaria, indiceVeterinaria) => indiceVeterinaria !== index);
            listarVeterinarias();
        }
    }

    listarVeterinarias();

    form.onsubmit = enviarDatos;
    btnGuardar.onclick = enviarDatos;