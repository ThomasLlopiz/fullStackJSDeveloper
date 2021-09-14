//Los callbacks son asincronicos y no van en orden que esta el codigo.
// setTimeout(() => {
//     console.log('Me ejecute despues')
// }, 3000);
// const ejecutarMasTarde = () =>{
//     console.log('me ejecute mas tarde')
// }
// setTimeout(ejecutarMasTarde,3000)
// const ejecutarMasTarde = () =>{
//     setTimeout(() => {
//         console.log('ejecute mas tarde')
//     }, 3000);
// }
// ejecutarMasTarde();
// const funcionCallback = () => {
//     console.log('me ejectue mas tarde')
// }
// const ejecutarMasTarde = () =>{
//     setTimeout(funcionCallback, 3000);
// } 
// ejecutarMasTarde();


// function sumar (num1, num2) {
//     return num1+num2;
// }
// function restar (num1, num2) {
//     return num1-num2;
// }
// function multiplicar (num1, num2) {
//     return num1*num2;
// }
// function multiFuncion (num1,num2, callback){
//     const resultado = callback(num1,num2)
//     console.log(resultado)
// }
// multiFuncion(5,4,sumar);
// console.log(sumar(5,4));
// console.log(restar(5,4));   
// console.log(multiplicar(5,4))


// const miboton = document.getElementById('miboton');
// console.dir(miboton);
// miboton.addEventListener('click',(evento)=>{
//     console.log(evento)
//     alert('diste click en el boton')
// });
// const ejecutarCuandoHagaClickEnElBoton = evento =>{
//     console.log(evento)
//     alert('Diste click')
// }
// miboton.addEventListener('click',ejecutarCuandoHagaClickEnElBoton)

// setTimeout(() => {
//     console.log('ejecucion1')
//     setTimeout(() => {
//         console.log('ejecucion2')
//         setTimeout(() => {
//             console.log('ejecucion3')
//             setTimeout(() => {
//                 console.log('ejecucion4')
//             }, 4000);
//         }, 10000);
//     }, 2000);
// }, 3000);

// const funcion4 = () => {
//     console.log('ejecucion4')
//     setTimeout(4000);
// }
// const funcion3 = () =>{
//     console.log('ejecucion3')
//     setTimeout(funcion4,10000);
// }
// const funcion2 = () => {
//     console.log('ejecucion2')
//         setTimeout(funcion3,2000);
// }
// const funcion1 = () => {
//     console.log('ejecucion1' )
//     setTimeout(funcion2, 2000)
// }
// setTimeout(funcion1, 3000)