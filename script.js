 let array1 = [1, 2, 3, 4, 5];

 console.log(array1[0]);
 console.log(array1[4]);
 // passed 0 and 4 as 0 is the first position  

 for (i = 1; i <= array1.length; i++)
    console.log(i);
array1.push(6, 7, 8, 9, 10);
console.log(array1); // [1, 2, 3, 5, 6, 7, 8, 9, 10]

array1.pop();
array1.pop();
array1.pop();

console.log(array1);  // [1, 2, 3, 4, 5, 6, 7]

let myString = "Hello World!";

console.log(myString.length); // 12
