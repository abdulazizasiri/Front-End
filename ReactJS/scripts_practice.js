// // var  Dog = function() {
// // 	let name , breed ; 
// // }
// // 
// // let firstdog = new Dog;
// // 
// // let secondog = new Dog;
// // 
// // 
// // if (firstdog === secondog){
// // 	console.log('Hey')
// // }
// // 
// // let obj = {
// //   x:1,
// // 	y: 12,
// // 	p: function (){
// // 	return x;
// // 	}
// // }
// // console.log(obj.p())
// 
// // 
// // let Circle = function (){
// // 	let radius ; 
// // 	let height ;
// // 	 console.log(this);
// // 	 let y = this ;
// // 	
// // }
// 
// /*let first = new Circle; 
// first.radius = 13; 
// first.height = 13 ; 
// 
// let second = new Circle ;
// let third = new Circle ;
// let forth = new Circle ;
// let fifth = new Circle ;
// let sixth = new Circle ;
// 
// // This in Circle exaple will point to
// 
// 
// let y = first;
// 
// console.log('Y NOW HAS THIS '+y.radius);*/
// 
// 
// 
// 
// 
// function speak (spk){
// console.log(spk)
// }
// var Dog = function() {
// var name, age ; 
// 
// } 
// Dog.prototype.A = speak;
// 
// let dogone = new Dog();
// dogone.name= 'DOGY'; 
// 
// dogone.age = 10 ; 
// 
// dogone.A('woof');
// 
// 
// let dogtwo = new Dog();
// dogtwo.name= 'Molly'; 
// 
// dogtwo.age = 4 ; 
// 
// 
// console.dir(dogone); 
// console.dir(dogtwo)
// 
// /*
// 1- all objects inherts properties
// 
// */
// 
// /*
// 
// Dogage: 10name: "DOGY"__proto__: A: ƒ speak(spk)arguments: nullcaller: nulllength: 1name: "speak"prototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM311:1[[Scopes]]: Scopes[2]constructor: ƒ ()arguments: nullcaller: nulllength: 0name: "Dog"prototype: {A: ƒ, constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM311:4[[Scopes]]: Scopes[2]__proto__: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
// VM311:25 Dogage: 4name: "Molly"__proto__: Object
// */
//  call and apply to invoke function

// en example for using apply and call


// let speak = function(what,bredd){
//   console.log(what);
//   console.log(bredd)
//   console.log(this); //t his will return the the window object if we do not use call or apply.
// }
// 
// 
// let onject = {name: "CAT"};
// speak.apply(onject,['meow','Huskey']) 

// let fun = function(){
//     let sum = 0 ;
//     console.log("size of arguments: "+arguments.length)
//     console.log("This is function 1");
//   for (let i = 0 ; i<arguments.length ; i++){
// 
//     sum += arguments[i];
//   }
//   return (sum);
// }
// // OR 
// 
// let fun2 = function(...argument){
//   let sum = 0 ;
//   console.log("size of arguments: "+argument.length)
//   console.log("This is function 2");
// for (let i = 0 ; i<arguments.length ; i++){
// 
//   sum += argument[i];
// }
// return (sum);
// }
// 
// 
// 
// console.log(fun(1,2,2))
// console.log(fun2(1,2,2))
// calling a function immediatly.


let object = function(){
  console.log("foo")
}();





















