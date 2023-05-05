let name = prompt("please enter your name")

let age = prompt("Your age ")
console.log("your name is " + name)

console.log("your age is "+age)

if(age<18){
  console.log("Hello " +name+" you are too young to vote")
}
  else if (age>=18 && age<21){
console.log("hello "+name+" you can vote but cannot drink alcohol")}
else{
  console.log("hello "+name+" you can vote and drink alcohol.")
}

