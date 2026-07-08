// Array - An Array is used to store multiple values in a single variable

// let fruits=["apple", "orange" ,"guava"]
// console.log(fruits)
// console.log(typeof(fruits))

// Array Methods 
// 1.push() - Add element at the end
// let fruits=["apple", "orange" ,"guava"]
// console.log(fruits) 
// console.log (fruits.push ("Green Apple"))
// console.log(fruits)

// 2. pop() - Remove the last element
//  let fruits=["apple", "orange" ,"guava"]
//  console.log(fruits)
//  console.log(fruits.pop())
//  console.log(fruits)

// 3. Unshift() - Add element at beginning
// let fruits=["apple", "orange" ,"guava"]
//  console.log(fruits)
//  console.log(fruits.unshift("Red Apple"))
//  console.log(fruits)

//  4.shift() - Remove frist element 
// let fruits=["apple", "orange" ,"guava"]
//  console.log(fruits)
//  console.log(fruits.shift())
//  console.log(fruits)

//5.length() - Returns total number of elements
// let fruits=["apple", "orange" ,"guava"]
// console.log(fruits)
// console.log(fruits.length)

// 6. IndexOf() - Returns index position
// let fruits=["apple", "orange" ,"guava"]
// console.log(fruits)
// console.log(fruits.indexOf("orange"))

// 7.Includes() - checks value exist or not
// let fruits=["apple", "orange" ,"guava"]
// console.log(fruits)
// console.log(fruits.includes("Red apple"))

// 8.Revers() - Reverses Array {example}
// let numbers=[10,20,30,40,50]
// console.log(numbers)
// console.log(numbers.reverse())

// let fruits=["apple", "orange" ,"guava"]
// console.log(fruits)
// console.log(fruits.reverse())

// 9 concat()- combines Arrays
// let A1=["js", "RJS", "python"]
// let A2=[10000,20000,30000]
// console.log(A1.concat(A2))

// 10.slice() - Returns selected elements
// Syntax = Array.slice(starting , ending)
// let nums=[10,20,30,40,50,60,70,80,90]
// console.log(nums.slice(1,4))
// 1<4 - 1,2,3

// 11.splice() - Add/remove Element
// syntax= Array.splice(index, deletecount, newvalue)
// let nums=[10,20,30,40,50,60,70,80,90,100]
// console.log(nums)
// nums.splice(2,5)
// console.log(nums)

// 12.join() - Converts array into string
// let fruits=["Apple", "Mango", "Orange"]
//  console.log(fruits)
//  console.log(fruits.join(" _ "))

// 13. toString - Converts Array to String
// let fruits=["Apple", "Mango", "Orange"]
// console.log(fruits)
// console.log(fruits.toString())

 
// 14. map() - Creates new array after operation
// 15. filter() - Returns matching elements
// 16. reduce() - Returns single value
 
// let nums=[1,2,3,4,5,6,7,8,9,10]
// let answer=nums.map(element=>element*10)
// let answer=nums.filter(element=>element%2==0)
// let answer=nums.reduce((sum,n)=>sum+n,0)
// console.log(answer)
 
// Array - An Array is used to store multiple values in a single variable
 
// forEach() - Executes funtion for every element
 
// let course=["AI", "FSD", "React JS", "JS"]
 
// let i=0
// while(i<course.length){
//     console.log(course[i])
//     i++
// }
 
// for(let i=0;i<course.length;i++){
//     console.log(course[i])
// }
 
// course.forEach(topic=>{console.log(topic)})

 
// Interview Fresher Programs
 
// Print Array Elements
 
// let arr=[1,2,3,4,5,6,7,8,9,10]
// // arr.forEach(value=>console.log(value*5))
// let answer=arr.map(value=>value*5)
// console.log(answer)
 
// Find Sum of Array
 
// let arr=[1,2,3,4,5]
// let sum=0
 
// for(let num of arr){
//     sum+=num
//     // sum=sum+num
//     console.log("Step ", sum)
// }
// console.log("Answer - ", sum)
 
 
// Find Largest Number
// Find Smallest Number
 
// Search Element
 
// let arr=[1,2,3,4,5]
// if(arr.includes(30)){
//     console.log("Found")
// }
// else{
//     console.log("Not Found")
// }
 
// Double Numbers , Square Numbers, Add 10
// let nums=[1,2,3,4,5]
// let result=nums.map(value=>value*2)
// let result=nums.map(num=> num*num)
// let result=nums.map(num=>num+10)
// console.log(result)
 
// let names=["Sridhar", "Sasi", "Sam", "Ram", "San"]
// let answer=names.map(name=>name.toUpperCase())
// let answer=names.map(name=>name.length)
// let answer=names.map(name=>"Mr."+name)
// console.log(answer)
 
// let prices=[100,200,300,400,500,600,700,800,900,1000]
// let answer=prices.map(price=>price+(price*0.18))
// console.log(answer)
 
// let nums=[1,2,3,4]
// // let answer=nums.map(num=> num%2==0 ? "Even Number":"Odd Number")
// let answer=nums.map(num=>num**3)
// console.log(answer)
 
 
// let nums=[1,2,3,4,5,6,7,8,9,10]
// let answer=nums.filter(num=>num%2==0)
// console.log(answer)
 
// let names=["Sridhar", "Sasi", "Kumar", "Priya", "Sam", "Ram", "San", "Arun"]
// // let answer=names.filter(name=>name.length>=5)
// let answer=names.filter(word=>word.startsWith("S"))
// console.log(answer)
 
