// O'zgaruvchilar

// 2 xil o'zgaruvchilar

// let age = 22
// age = 25

// console.log(age)

// 2

//
// 1 Number
// 2 String
// 3 Boolean True / false
// 4 Null
// 5 Undefined
//

// const age = 25
// console.log(typeof age)

// 2 Object kopleks turlari
// #1 Array - Massiv
// #2 Function
// #3 Object
// #4 Muntazam iboralar
// #5 Xatolar errorlar
//

// Object

// const person = {
// #1. Xususyati: #2. Qiymati Number String Boolean Undefined
// 	name: "Husan",
// 	age: 22,
// 	job: "Web Developer",
// 	hobby:{
// 		sport: "Velo Hiking",
// 		game: "Calash Of Clans"
// 	}
// }

// console.log(person.hobby);

// Array

// const fridge = ["Banan","Apilsin", "Olma","Nok"]

// const cars = ["Cobalt","gentra","Captiva"]

// console.log(cars[0]);

// console.log(typeof);

// 5

// alert('Salom, Hammaga')

// const isAccess = confirm("Sen 18 yoshdan kattamisan")

// console.log(isAccess);

// const name = prompt("Ism,ingiz nima")

// console.log(name);

// const age = +prompt("Yoshingiz nechida?", 12)

// console.log(typeof age);

//  interpolatsya

// const firstName = 'Husan'
// const lastName = 'Maxmarajapov'
// const age = 22

// console.log(`My name is ${firstName}  ${lastName} i am ${age} years old`);

// operatorlar

// +,-,*,/

// const x = 13
// const y = 16
// console.log(x + y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)

// Icrement va dicrement
// let x = 8
// let y = 8

// // postfix

// x++
// y--


// // prefix

// // ++x
// // --y
// console.log(x++);
// console.log(y--);

// console.log(++x)
// console.log(--y)



// && va qachonki tru qaytaradi hamma malumot true bolsa
// || yoki 2 kalasidan bittasi true bolsa


// const isMarried = true
// const isChild = true

// console.log(isMarried && isChild);

//  Amaliyot

// const age = +prompt("Yoshingizni kirting",'');

// console.log(`I em ${age} years old`)

// const numberOfSeries = +prompt("Nechta serial ko’rdingiz?",'')

// const seriesDB = {
// 	count: numberOfSeries,
// 	series: {},
// 	actors: {},
// 	genres:[],
// 	privat: false
// }

// // console.log(seriesDB)

// const a = prompt("Birinchi ko’rgan serialingiz?")
// const b = prompt("Nechi baxo berasiz?", '')

// const c = prompt("Oxirgi ko’rgan serialingiz?")
// const d = prompt("Nechi baxo berasiz?", '')

// // console.log(firstQuestion1);
// // console.log(secondQuestion2);

// seriesDB.series[a] = b
// seriesDB.series[c] = d

// console.log(seriesDB)


// Sharli operatorlar

// if - agarda 
// else if - yo agarda
// else - yokida

// const trafficLight = "red"

// if(trafficLight == "red"){
// 	alert("To'xta")
// }else if(trafficLight == "yellow"){
// 	alert("Tayyorlaning")
// }else if(trafficLight == "green"){
// 	alert("Yurishingiz mumkin")
// }

// const age = +prompt("Yoshingiz nechida")

// if(age < 18){
// 	alert("Kirishingiz mumkinemas!")
// }else{
// 	alert("Kirishingiz mumkin")
// }

// Tsikl

// do while
// while
// for

let number = 1

// for(number; number <= 10;number++){
// 	if(number == 2){
// 		console.log(`${number} Continue`);
		
// 		continue
// 	}
// 	console.log(number)
// }

// while(number <= 5){
// 	console.log(number);
// 	number++
// }

// do{
// 	console.log(number);
// 	number++
// }while (number <= 5)

// const age = 15

// age < 18? console.log("NO Access"): console.log("Access");

//  funksyalar

// function decloration

// function showHelloWorld(){
// 	console.log("Hello World")
// }

// function showHelloUser(name){
// 	const age = 18 // local ozgaruvchi
// 	console.log(`Salom ${name}`);
// }

// showHelloWorld()
// showHelloUser("Shahboz")

// function canculate(a,b){
// 	return a + b
// }

// console.log(canculate(5,5));

// function exprestion

// const showHello = function(){
// 	console.log("Salom")
// }

// showHello()

// Arrow function

// const canculate = (a,b) => {
// 	console.log("Calculate");
// 	console.log(a * b);
// }

// canculate(5,5)

// metodlar 
// String Mehods

const text = "Maxmarajapov Husan"

// length

// Method, Property

console.log(text.length)
// Methods
console.log(text.charAt(2))
