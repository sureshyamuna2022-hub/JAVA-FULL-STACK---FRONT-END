//
// -----------------------------------------------------------------------
// class Person {
//     constructor(name){
//         this.name=name
//     }
// }
 
// class Employee extends Person{
//     constructor(name, salary){
//         super(name)
//         this.salary=salary
//     }
//     display(){
//         console.log(this.name, this.salary)
//     }
// }
 
// let emp1=new Employee("Sridhar", 50000)
// emp1.display()
// let emp2=new Employee("Priya", 60000)
// emp2.display()
 
 
// let arr1=[1,2,3,4,5,6,7,8,9,10]
// let arr2=["A", ...arr1,"B", "C"]
 
// // console.log(arr1)
// console.log(arr2)
 
// let a=[1,2,3]
// let b=[4,5,6]
// let answer=[...a, ...b]
// console.log(answer)
 
 
// let obj1={
//     name:"Sridhar"
// }
 
// let obj2={
//     age:28,
//     salary:50000
// }
 
// let answer={
//     ...obj1, ...obj2
// }
// console.log(answer)
 
// function display(a,b,c,...arr){
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(arr)
// }
// display(1,2,3,4,5,6,7,8,9,0)
 
// Array Destructuring
 
// let colors=["Red", "Green", "Bule", "Orange",1,2,3,4]
// let [a,b,c,d,...e]=colors
 
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
 
// let Employee={
//     id:101,
//     name:"Sridhar",
//     salary:50000,
// }
 
// let {id,name,salary }=Employee
// console.log(id)
// console.log(name)
// console.log(salary)
 
// I am 'Sridhar'
 
// console.log('I am "Sridhar"')
// console.log("I am 'Sridhar'")
// console.log(`I am 'Sridhar Raj P' - "Trainer & Developer"`)
 
// let name="Sridhar"
// let email="sridhar@gmail.com"
// let salary=50000
// // console.log("Welcome "+name)
 
// console.log(`Welcome ${name} - Email ${email} - Salary - ${salary}`)