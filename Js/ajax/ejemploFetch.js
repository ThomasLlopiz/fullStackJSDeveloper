const listaUsuarios = document.getElementById('body-usuarios');
const boton = document.getElementById('boton');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const pais = document.getElementById('pais');
const indice = document.getElementById('indice');
const limpiar = document.getElementById('limpiar');

let botonesEliminar = null;
let botonesEditar = null;
let usuarios = [];

function render() {
    const usuariosRender = usuarios
        .map((usuario, indice) => 
        `<tr>
        <td>${usuario.nombre ? usuario.nombre : 'vacio'}</td>
        <td>${usuario.apellido ? usuario.apellido : 'vacio'}</td>
        <td>${usuario.pais ? usuario.pais : 'vacio'}</td>
        <td><button class="editar" data-indice=${indice}>Editar</button></td>
        <td><button class="eliminar" data-indice=${indice}>Eliminar</button></td>
        </tr>`)
        .join('');
    //console.log(usuariosRender)
    listaUsuarios.innerHTML = usuariosRender;
    botonesEliminar = document.getElementsByClassName('eliminar');
    botonesEditar = document.getElementsByClassName('editar');
    Array.from(botonesEliminar).forEach(botonEliminar => {
        botonEliminar.onclick = eliminarUnUsuario;
    });
    Array.from(botonesEditar).forEach(botonesEditar => {
        botonesEditar.onclick = editarUnUsuario;
    });
}

function enviarDatos(e) {
    e.preventDefault()
    let accion = e.target.innerText;
    console.log('accion',accion)
    const datos = { 
        nombre: nombre.value, 
        apellido: apellido.value, 
        pais: pais.value 
    };
    let url = null;
    let method = null;
    if (accion === 'Crear') {
        url = 'https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios';
        method = 'POST';
    } else if (accion === 'Editar') {
        if (indice.value) {
            url = `https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${indice.value}`
            method = 'PUT';
        } else {
            return;
        }
    } else {
        return;
    }
    fetch('url', {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
    })
    .then(response => response.json())
    .then(respuestaJson=>{
        console.log('resupuesta json', respuestaJson)
        refrescar();
        restaurarBoton();
    }).catch((razon)=>{
        console.log(razon);
        restaurarBoton();
    })
}

function eliminarUnUsuario(e) {
    e.preventDefault();
    //console.log('eliminar un usarios', e);
    fetch(`https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/${e.target.dataset.indice}`, {
        method: 'DELETE',
    })
    .then((response) => response.json())
    .then(respuestaJson=>{
        console.log('resupuesta json', respuestaJson);
        refrescar();
    })
}

function editarUnUsuario(e) {
    e.preventDefault();
    console.log('editar un usarios', e);
    if (e.target.dataset.indice) {
        const usuario = usuarios[e.target.dataset.indice];
        nombre.value = usuario.nombre ? usuario.nombre : '';
        apellido.value = usuario.apellido ? usuario.apellido : '';
        pais.value = usuario.pais ? usuario.pais : '';
        indice.value = e.target.dataset.indice;
        boton.innerText = 'Editar';
    } else {
        boton.innerText = 'Crear';
    }  
}

//CORS sirven para evitar cargar contenido de otr dominio a no ser que vos se lo digas
function refrescar() {
   fetch('https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios')
   .then(response=>response.json())
   .then(respuestaUsuarios=>{
    // console.log('respuestaUsuarios', respuestaUsuarios)
       usuarios = respuestaUsuarios;
       render();
   })
}

function restaurarBoton () {
    boton.innerText = 'Crear';
    nombre.value = '';
    apellido.value = '';
    pais.value = '';
}

refrescar();
boton.onclick = enviarDatos;
limpiar.onclick = restaurarBoton;
