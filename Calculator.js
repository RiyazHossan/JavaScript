let num = +prompt("enter 1st number")
console.log(typeof num)
console.log(num)

let num2 = +prompt("enter 2nd number")
console.log(typeof num2)
console.log(num2)

function add(num,num2)
{
   return num + num2
}

console.log("addition : "+ add(num,num2))

function sub(num,num2)
{
   return num - num2
}

console.log("subtract : "+ sub(num,num2))


function mul(num,num2)
{
   return num * num2
}

console.log("multi : "+ mul(num,num2))

function div(num,num2)
{
   return num / num2
}

console.log("division : "+ div(num,num2))
