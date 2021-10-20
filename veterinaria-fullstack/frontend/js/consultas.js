const listaConsultas = document.getElementById('lista-consultas');
const mascota = document.getElementById('mascota');
const url = "http://localhost:5000";
let consultas = [];
let mascotas = [];

async function listarConsultas() {
    const entidad = "consultas"
    try {
        const respuesta = await fetch(`${url}/${entidad}`);
        const consultasDelServidor = await respuesta.json();
        if (Array.isArray(consultasDelServidor)) {
            consultas = consultasDelServidor;
        }
        if (respuesta.ok) {
            const htmlConsultas = consultas
            .map((consulta, indice) =>
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

async function listarMascotas() {
    const entidad = "mascotas"
    try {
        const respuesta = await fetch(`${url}/${entidad}`);
        const mascotasDelServidor = await respuesta.json();
        if (Array.isArray(mascotasDelServidor)) {
            mascotas = mascotasDelServidor;
        }
        if (respuesta.ok) {
            const htmlMascotas = mascotas
            .forEach((_mascota, indice) => {
            const optionActual = document.createElement("option");
            optionActual.innerHTML = _mascota.nombre;
            optionActual.value = indice;
            mascota.appendChild(optionActual);
            });
        }
    } catch (error) {
        throw error;
    }
}

listarMascotas();