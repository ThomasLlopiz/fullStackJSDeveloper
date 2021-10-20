const listaConsultas = document.getElementById('lista-consultas');
const email = document.getElementById('email');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const indice = document.getElementById('indice');
const form = document.getElementById('form');
const exampleModal = document.getElementById('exampleModal');
const btnGuardar = document.getElementById('btn-guardar');
const url = "http://localhost:5000/consultas";
let consultas = [];

async function listarConsultas() {
    try {
        const respuesta = await fetch(url);
        const consultasDelServidor = await respuesta.json();
        if (Array.isArray(consultasDelServidor)) {
            consultas = consultasDelServidor;
        }
        if (respuesta.ok) {
            const htmlConsultas = consultas.map(
                (consulta, indice) =>
            `<tr>
                <th scope="row">${indice}</th>
                <td>${consulta.mascota.nombre}</td>
                <td>${consulta.veterinaria.nombre} ${consulta.veterinaria.apellido}</td>
                <td>${consulta.diagnostico}</td>
                <td>${consulta.fechaCreacion}</td>
                <td>${consulta.fechaEdicion}</td>
                <td>${consulta.historia}</td>
                <td>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-info editar" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-edit"></i></button>
                    </div>
                </td>
            </tr>`).join("");
            listaConsultas.innerHTML = htmlConsultas;
        }
    } catch (error) {
        throw error;
    }
}

listarConsultas();

