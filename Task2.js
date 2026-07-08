// sort() → Used to arrange array elements in ascending, descending, or alphabetical order.// The sort() method is used to arrange the elements of an array in alphabetical or numerical order.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The sort() method is used to arrange the elements of an array in alphabetical or numerical order.
// // Example 1: Sort String Array
// let fruits = ["Mango", "Apple", "Banana"];
// fruits.sort();
// console.log(fruits);

// Example 2: Sort Number Array (Ascending Order)
// let numbers = [40, 10, 30, 20];
// numbers.sort(function(a, b) {
//     return a - b;
// });
// console.log(numbers);

// Example 3: Sort Number Array (Descending Order)
// let numbers = [40, 10, 30, 20];
// numbers.sort(function(a, b) {
//     return b - a;
// });
// console.log(numbers);

////////////////////////////////////////////////////////////////////////////////
// Find //
// Syntax: 
// array.find(function(element) {
//     return condition;
// });

// Example 1: Find a Number
// let numbers = [10, 20, 30, 40, 50];

// let result = numbers.find(num => num > 25);

// console.log(result);
// Output = 30
// Explanation:
// find() checks each element and returns the first number greater than 25, which is 30.

// Example 2: Find a Student
// let students = ["Ravi", "Kumar", "Yamuna", "Priya"];

// let result = students.find(name => name === "Yamuna");

// console.log(result);
// Output: Yamuna

// Example 3: Using Normal Function

// let ages = [15, 18, 20, 25];

// let result = ages.find(function(age) {
//     return age >= 18;
// });

// console.log(result);
// Output : 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// findIndex() is used to find the index position of the first element in an array that satisfies a condition.
// Syntax:array.findIndex(function(element) {
//     return condition;
// });

// Example 1: Find the index of a number

// let numbers = [10, 20, 30, 40, 50];

// let index = numbers.findIndex(function(num) {
//     return num === 30;
// });

// console.log(index);
// Output=2
// Explanation: 30 is at index position 2.

// Example 2: Find the first number greater than 25

// let numbers = [10, 20, 30, 40, 50];

// let index = numbers.findIndex(function(num) {
//     return num > 25;
// });

// console.log(index);
// Output=2
// Explanation: The first number greater than 25 is 30, and its index is 2.

// Arrow Function Example

// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// let index = fruits.findIndex(fruit => fruit === "Mango");

// console.log(index);
// Output=2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The for...of loop is used to iterate through the values of an array one by one.

// Syntax:for (let value of arrayName) {
    // code }

    // Example 1: Display Array Elements

// let fruits = ["Apple", "Banana", "Mango"];

// for (let fruit of fruits) {
//     console.log(fruit);
// }

//Output:
// Apple
// Banana
// Mango

// Example 2: Display Student Names
// let students = ["Ram", "Sita", "John", "Priya"];

// for (let student of students) {
//     console.log(student);
// }

// Output:

// Ram
// Sita
// John
// Priya

// Example 3: Find Sum of Array Elements
// let numbers = [10, 20, 30, 40];
// let sum = 0;

// for (let num of numbers) {
//     sum = sum + num;
// }

// console.log("Sum =", sum);
// output= Sum = 100
/////////////////////////////////////////////////////////////////////////

// for...in is used to loop through the indexes (keys) of an array or the properties of an object.

// Syntax =for (let index in arrayName) {
    // code}

//Example 1: Print Array Indexes
// let fruits = ["Apple", "Banana", "Mango"];

// for (let index in fruits) {
//     console.log(index);
// }

// output =0
// 1
// 2

// Example 2: Print Array Values
// let fruits = ["Apple", "Banana", "Mango"];

// for (let index in fruits) {
//     console.log(fruits[index]);
// }

// Output:

// Apple
// Banana
// Mango

// Example 3: Print Student Names
// let students = ["Ravi", "Priya", "Arun"];

// for (let i in students) {
//     console.log("Student " + (Number(i) + 1) + ": " + students[i]);
// }

// Output:
// Student 1: Ravi
// Student 2: Priya
// Student 3: Arun