const accountId = 2345
let accountEmail = "hello@gmail.com"
var accountPassword = "12345"
accountCity = "Vijayawada"
let accountState

//prefer not to use var because of issue in block scope and functional scope 

// accountId = 2;  //not allowed beacuse const will not be changed

accountEmail = "world@gmail.com"
accountPassword = "56585"
accountCity = "Hyderabad"

console.log(accountEmail)

//To get all the outputs at a time in a table
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])