const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
let recursos = {
  mascotas:
  [
    { tipo: "perro", nombre: "Trosky", dueno: "Camilo"},
    { tipo: "perro", nombre: "Trosky", dueno: "Camilo"},
    { tipo: "perro", nombre: "Trosky", dueno: "Camilo"},
    { tipo: "perro", nombre: "Trosky", dueno: "Camilo"}
  ]
}
//Creando el servidor
const callbackDelServidor = (req, res) => {
  //1. Obtener url desde el objeto request
  const urlActual = req.url;
  const urlParseada = url.parse(urlActual, true);
  //2. Obtener la ruta
  const ruta = urlParseada.pathname;
  //3. Quitar slash a la ruta
  const rutaLimpia = ruta.replace(/^\/+|\/+$/g, '');
  //3.1 Obtener el método http
  const metodo = req.method.toLowerCase();
  //3.2 Obtener variables query url
  const { query = {} } = urlParseada;
  console.log({ query });
  //3.3 Obtener los headers
  const { headers = {} } = req;
  //3.4 obtenr payload, en el caso de haber uno
  const decoder = new StringDecoder('utf-8');
  //3.4.1 ir acumlando la data cuando el request reciba un payload
  let buffer = '';
  req.on('data', (data) => {
    buffer += decoder.write(data);
  });
  //3.4.2 terminar de acumular datos y desirle al decoder que finalice 
  req.on('end', () => {
    buffer += decoder.end();
    //3.5 ordenar los data del request
    const data = {
      ruta:rutaLimpia,
      query,
      metodo,
      headers,
      payload: buffer
    };
    console.log({data});
    //3.6 elegir el manejador dependiendo de la ruta y asignarle la funcion que el enrutador tiene
    let handler;
    if (rutaLimpia && enrutador[rutaLimpia]) {
      handler = enrutador[rutaLimpia];
    } else {
      handler = enrutador.noEncontrado;
    }
    //4. ejecutar handler (manejador) para enviar la respuesta
    if (typeof handler === 'function') {
      handler(data, (statusCode = 200, mensaje) =>{
        const respuesta = JSON.stringify(mensaje);
        res.setHeader("Content-Type","application/json")
        res.writeHead(statusCode);
        //linea donde realmente ya estamos responiendo a la aplicacion cliente
        res.end(respuesta);
      });
    }
  });
};
const enrutador = {
  ruta: (data, callback) => {
    callback(200, { mensaje: 'esta es /ruta' });
  },
  mascotas: (data, callback) => {
    callback(200, recursos.mascotas);
  },
  noEncontrado: (data, callback) => {
    callback(404, { mensaje: 'no encontrado' });
  }
}
//Guardando el servidor en una peticion http
const server = http.createServer(callbackDelServidor)
//Escuchando el servidor
server.listen(5000, () => {
  console.log('el servidor está escuchando peticiones en http://localhost:5000/');
});