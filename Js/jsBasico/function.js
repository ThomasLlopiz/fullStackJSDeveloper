// const  miFuncion2 = () =>{
//     console.log('ejecutro miFuncion2')
// }

// const miFuncion = () =>{
//     console.log('1 ejecture miFuncion');
//     console.log('2 ejecture miFuncion');
//     miFuncion2()
//     return true;
// }
// console.log(miFuncion())
// miFuncion()

// console.log(miFuncion3())
// function miFuncion3(){
//     return 100
// }

// const miFuncion4 = () => {

// }
// console.log(miFuncion4())

// function miFuncion5(){
//     return function miFunction6(){
//         return this;
//     }
// }
// console.log(miFuncion5()())

// const a = miFuncion5()
// console.log(a)
// console.log(a())

// const b = new miFuncion5()
// console.log(b())

// function miFuncion5(){
//     return  ()=>{
//         return this;
//     }
// }
// console.log(miFuncion5)
// console.log(miFuncion5())
// console.log(miFuncion5()())

// function miFuncion5(){
//     this.miFuncion6 = function(){
//         return this;
//     }
// }

// const c = new miFuncion5()
// console.log(c)
// console.log(c.miFuncion6)
// console.log(c.miFuncion6())

// function miFuncion5(){
//     this.miFuncion6 = ()=>{
//         return this;
//     }
// }
// console.log(miFuncion5)
// console.log(miFuncion5())

// const d = new miFuncion5()
// console.log(d)
// console.log(d.miFuncion6)

// const miFuncion = () =>{
//     this.miFuncion2 = ()=>{
//         return this
//     }
// }
// console.log(miFuncion)
// console.log(miFuncion())
// const e = new miFuncion()

// const objeto = {
//     metodo(){
//         return this
//     }
// }
// console.log(objeto)
// console.log(objeto.metodo)
// console.log(objeto.metodo())
// const a = objeto
// console.log(a)
// console.log(a.metodo)
// console.log(a.metodo())

//OBJETO EN ARROW FUNCTION (EL THIS ES WINDOWS)
// const objeto ={
//     metodo: () =>{
//         return this
//     }
// }
// console.log(objeto)
// console.log(objeto.metodo)
// console.log(objeto.metodo())

//OBJETO CON FUNCION NORMAL (EL THIS ES EL OBJETO)
// const objeto2 = {
//     metodo(){
//         return this
//     }
// }
// console.log(objeto2)
// console.log(objeto2.metodo)
// console.log(objeto2.metodo())

//ARROW FUNCTION CON FUNCION NORMAL (EL THIS ES WINDOWS)
// const miFuncion = ()=>{
//     return function miFuncion2(){
//         return this
//     }
// }
// console.log(miFuncion)
// console.log(miFuncion())
// console.log(miFuncion()())

// function miFuncion1(){
//     this.miFuncion2= function miFuncion2(){
//         this.miFuncion3 = function miFuncion3(){
//             this.miFuncion4 = function miFuncion4(){
//                 return this
//             }
//             this.miFuncion5 = () =>{
//                 return this
//             }
//         }
//     }
// }
// console.log(miFuncion1)
// const a = new miFuncion1()
// console.log(a)
// console.log(a.miFuncion2())
// const b = new a.miFuncion2()
// console.log(b)
// const c = new b.miFuncion3()
// console.log(c)
// console.log(c.miFuncion4)
// console.log(c.miFuncion4())
// console.log(c.miFuncion3)
// console.log(c.miFuncion5)
// console.log(c.miFuncion5())

//DESTRUCTURACION de objeto. Para hacerlo debe tener la misma variable que tiene en el objeto.
// let miObjeto = {a:1, b:2, c:'hola', d:function(){console.log('soy una funcion')}, e:true}
// console.log(miObjeto)
// console.log(miObjeto.d)
// let {a,b,c,d,e} = miObjeto
// console.log(b)
// console.log(a)
// console.log(c)
// console.log(e)
// console.log(d)
//expreso predictor
//Se aisla la variable y se pone todos los otros en una unica variable. Esto sirve para aislar una variable.
// let{d, ...otros} = miObjeto
// console.log(d)
// console.log(otros)

//DESTRUCTURACION de array. Para hacerlo puede tener cualquier nombre, pero van en el orden por el indice del array.
// let miArray = [1, 2, 'hola',()=>console.log('soy funcion'), true]
// console.log(miArray)
// let [numeroUno, numeroDos, hola, unaFuncion, buleano] = miArray
// console.log(numeroDos)
// console.log(numeroUno)
// console.log(unaFuncion)
// console.log(buleano)
// console.log(hola)
//expreso predictor
// let [numeroUno, ...otro] = miArray
// console.log(numeroUno)
// console.log(otro)
//expreso predictor SOLO SE PUEDE USAR AL FINAL DEL OBJETO/ARRAY. 
//Hace copias de las variables, esto quiere decir que si modifcas la refrencia no se va a modificar el array o objeto.
//Pero si tenemos un objeto dentro de otro objeto las variables del segundo se va a poder modificar

//Se puede usar lodash para clonar deep y conservar los valores
// const lodash = require('lodash')
// let miObjeto = {a:1, b:2, c:'hola', d:function(){console.log('soy una funcion')}, e:true, f:{f1:'soy f1', f2:'soy f2', f3:()=>{}}}
// console.log(miObjeto)
// let miObjeto2 = lodash.cloneDeep(miObjeto)
// console.log(miObjeto2)
// console.log(miObjeto.f.f1)
// console.log(miObjeto2.f.f1)
// miObjeto2.f.f1 = 'he cambiado mi valor'
// console.log(miObjeto2.f.f1)
// console.log(miObjeto.f.f1)

//Esto hace lo mismo que lodash, pero es muy pesado el proceso.
// let miObjeto = {a:1, b:2, c:'hola', d:function(){console.log('soy una funcion')}, e:true, f:{f1:'soy f1', f2:'soy f2', f3:()=>{}}}
// console.log(miObjeto)
// let miObjeto2 = JSON.parse(JSON.stringify(miObjeto))
// console.log(miObjeto2)
// miObjeto2.f.f1 = 'he cambiado'
// console.log(miObjeto2.f.f1)
// console.log(miObjeto.f.f1)

//Esto es una copia superficial
// let miObjeto = {a:1, b:2, c:'hola', d:function(){console.log('soy una funcion')}, e:true, f:{f1:'soy f1', f2:'soy f2', f3:()=>{}}}
// let{...miObjeto2} = miObjeto
// console.log(miObjeto2)
// miObjeto2.c='cambie'
// console.log(miObjeto2.c)
// console.log(miObjeto.c)

//Prototipos
// function MiObjeto(nombre, apellido) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.getNombreCompleto = function (){
//         return `${this.nombre} ${this.apellido}`
//     }
// }
// console.log(MiObjeto)
// let objeto1 = new MiObjeto('Camilo', 'Montoya')
// console.log(objeto1)
// let objetoJson = {nombre: 'Camilo', apellido:'Montoya', getNombreCompleto(){}}
// console.log(objetoJson)

// function MiObjeto(nombre, apellido) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.getNombreCompleto = function (){
//         return `${this.nombre} ${this.apellido}`
//     }
// }
// MiObjeto.prototype.nombre = 'vacio'
// MiObjeto.prototype.apellido = 'vacio'
// let objeto1 = new MiObjeto('Camilo')
// console.log(objeto1)

// function MiObjeto() {
//     this.getNombreCompleto = function (){
//         return `${this.nombre} ${this.apellido}`
//     }
//     this.setNombre = function(nombre){
//         this.nombre = nombre
//     }
//     this.setApellido = function(apellido){
//         this.apellido = apellido
//     }
// }
// console.log(MiObjeto)
// let objeto1 = new MiObjeto()
// MiObjeto.prototype.nombre = 'vacio'
// MiObjeto.prototype.apellido = 'vacio'
// console.log(objeto1)
// console.log(objeto1.nombre)


//Estas funciones deberian crearse con Letra inicial mayuscula
// function MiObjeto() {
// }
// console.log(MiObjeto)
// MiObjeto.prototype.getNombreCompleto = function (){
//     return `${this.nombre} ${this.apellido}`
// }
// MiObjeto.prototype.setNombre = function(nombre){
//     this.nombre = nombre
// }
// MiObjeto.prototype.setApellido = function(apellido){
//     this.apellido = apellido
// }
// let objeto1 = new MiObjeto()  
// console.log(objeto1.getNombreCompleto)
// MiObjeto.prototype.nombre = 'vacio'
// MiObjeto.prototype.apellido = 'vacio'
// console.log(objeto1)
// console.log(objeto1.getNombreCompleto())
// objeto1.setApellido('Montoya')
// objeto1.setNombre('Camilo')
// console.log(objeto1.getNombreCompleto())
  