// Function - A Function is a block of code that performs a speicfic task.
// functions help avoid code repetition and mark programs easier to maintain
 
function display(){
    console.log("Welcome to JavaScript")
}
display()
// ----------------------------------------------------------------
// with parameters, with return value
function add(a,b,c,d,e){
    return a+b+c+d+e
}
console.log(add(90,80,99,100,100))
// without parameters and with return value
function add(){
    a=90
    b=50
    return a+b
}
console.log(add())
// with parameters and without return value
function add(a,b){
    console.log(a+b)
}
add(90,90)
// Without any parameters and without return value
function add(){
    a=10
    b=20
    console.log(a+b)
}
add()