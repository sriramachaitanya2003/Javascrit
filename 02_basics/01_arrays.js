const arr1 = [1,2,3,4]
console.log(arr1[2]);

const arr2 = new Array("Sriram", "Ayyappa" , "Bhaskar")
console.log(arr2[0]);

arr1.push(5)
arr1.push(6)
console.log(arr1);
arr1.pop()
console.log(arr1);

console.log(arr1.indexOf(3));
console.log(arr1.includes(4));
console.log(arr1.includes(19));

const arr3 = arr1.join() //converts the array into string and binds the values
console.log(arr3);

const arr4 = arr1.slice(0,2)  // It will give the numbers in between the given indexes without changing the original array
console.log(arr4);

const arr5 = arr1.splice(0,2) // It will also work as slice but the original array values changes according to the indexes
console.log(arr5);
console.log(arr1);
