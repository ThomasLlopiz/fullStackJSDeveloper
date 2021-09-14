// const fabricaDePromesas = (indice) =>
//     new Promise((resolve, reject) => {
//         const tiempoRejected = Math.floor(Math.random() * 10000) + 1000;
//         const tiempoResolved = Math.floor(Math.random() * 10000) + 1000;
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
// Promise.allSettled(misPromesas)
// .then(respuesta => console.log(respuesta)
// .catch(razon=>console.log(razon))
// );
// async function miAsyncFunction (){
//     try {
//         const miPromesa1 = await fabricaDePromesas(1);
//         //  
//         return miPromesa1 
//     } catch (error) {
//         // console.log('hubo un error')
//         // return error
//         throw error
//     }
// }
// miAsyncFunction()
// .then(resultado=> console.log('el resultado de mi Async Function es : ', resultado))
// .catch((razon=>console.log('razon: ', razon)))
// function miFunction (){
//     const miPromesa2 = fabricaDePromesas(2)
//     .then(resultado => console.log(resultado))
//     .catch(razon => console.log(razon));
// }
// miFunction();\

