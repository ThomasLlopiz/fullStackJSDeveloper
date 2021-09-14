// const miPromesa = new Promise((resolve, reject)=>{
//     const tiempoRejected = Math.floor(Math.random() * 10000) +1000;
//     const tiempoResolved = Math.floor(Math.random() * 10000) +1000;
//     // resolve('la promesa fue resuelta')
//     // reject('la promesa fallo')
//     console.log('tiempo rejected', tiempoRejected)
//     console.log('tiempo resolved', tiempoResolved)
//     setTimeout(()=>{
//         // resolve('set time out finalizo')
//         reject('la promesa fallo')
//     },tiempoRejected)
//     setTimeout(()=>{
//         resolve('la proemsa se completo')
//     },tiempoResolved)
// });
// miPromesa.then(
//     respuesta => console.log(respuesta),
//     razon => console.log(razon)
// );

// const fabricaDePromesas = (indice) =>
//     new Promise((resolve, reject) => {
//         const tiempoRejected = Math.floor(Math.random() * 10000) + 1000;
//         const tiempoResolved = Math.floor(Math.random() * 10000) + 1000;
//         // console.log('tiempo rejected', tiempoRejected)
//         // console.log('tiempo resolved', tiempoResolved)
//         setTimeout(() => {
//             reject(`la promesa con ${indice} fallo`)
//         }, tiempoRejected)
//         setTimeout(() => {
//             resolve(`la proemsa con ${indice} se completo`)
//         }, tiempoResolved)
//     });
// let misPromesas = []
// for (let i = 0; i < 10; i++) {
//     misPromesas = [...misPromesas, fabricaDePromesas(i)]
// }
// misPromesas.forEach((promesaActual) => promesaActual
// .then((respuesta) => console.log(respuesta))
// .catch((razon) => console.log(razon))
// );
//Todas completadas o 1 rechazada
// Promise.all(misPromesas)
// .then(respuesta => console.log(respuesta)
// .catch(razon=>console.log(razon))
// );
//
// Promise.allSettled(misPromesas)
// .then(respuesta => console.log(respuesta)
// .catch(razon=>console.log(razon))
// );

