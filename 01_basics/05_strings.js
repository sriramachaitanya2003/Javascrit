const myName = "sriram"
let myAge = 20

// console.log(myName + myAge);  //outdated

// console.log(`My name is ${myName} and I am ${myAge} years old`); // new version

const fullName = new String('Srirama Chaitanya')

// console.log(fullName[2])
// console.log(fullName.__proto__)
// console.log(fullName.length)
// console.log(fullName.toUpperCase())
// console.log(fullName.charAt(5))
// console.log(fullName.indexOf('a'))

const gameName = fullName.substring(0,7)
console.log(gameName);

const newString = gameName.slice(-4,7)
console.log(newString)

const anotherString = "   Chaitanya   "
console.log(anotherString)
console.log(anotherString.trim())

const newerstring = "Hello World"
console.log(newerstring.replace('World','sriram'))