const number1 = 400
console.log(number1);

const number2 = new Number(100)
console.log(number2)

console.log(number2.toString())
console.log(number2.toString().length)
console.log(number2.toFixed(3))

const number3  = 123.789
console.log(number3.toPrecision(4))

const number4 = 10000000
console.log(number4.toLocaleString())
console.log(number4.toLocaleString('en-IN'))  //according to Indian conversion


//***********************Maths************************** */
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(1,2,3))
console.log(Math.max(1,2,3))

console.log(Math.random()) // It will give numbers between 0 and 1
console.log((Math.random() * 10) + 1)
console.log((Math.floor(Math.random() * 10) + 1))

