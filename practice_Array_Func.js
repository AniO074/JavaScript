//Using th ForEach returns Undefined
/**
var A = new Array(4,3,1,5,7)
m =[]
A.forEach(check)
function check(num)
{
     h = num*2
     m.push(h)
}

console.log(m)

**/

//Using fiter --> Returns the Array That Satifies the Condition

/**
n = [2,4,6,5,7,8,10,18]

console.log(n.filter(func))

function func(num)
{
    return num%2 == 0
}
**/

//Using every() --> check whether every element passes the given Condition --> returns true or false
/**
n = [2,4,6,5,7,8,10,18]

console.log(n.every(func))

function func(num)
{
    return n%2 == 0
}
**/
n = [2,4,6,5,7,8,10,18]
console.log(n.join(""))

//join joins the array elements into a string
// Map is simpler of Foreach function is same but return is different
console.log(n.map(func))//maps every element with condition and returns array
console.log(n.reverse())//reverses the array
console.log(n.some(func2)) // for some elements in the Array
function func(num)
{
    return num%2 == 0
}

function func2(num)
{
    return num%2 == 0
}




