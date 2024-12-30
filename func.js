//non parameterized + without return
function apple()
{
    console.log("Apple")
}
apple();
//non parameterized + with return
function orange(){
    let a ="orange"
    return a
}
console.log(orange())
//parameterized + without return
function apple(a,b)
{
    console.log(a+b)
}
apple(1,2)
//arrow function
let appale = () => console.log("Appe")
appale()
let orangee = () => "Orange"
console.log(orangee())

let banana = ()  =>
{
    console.log("Dhayanithi")
    return 4+3; 
}
//banana();
console.log(banana())

let num = (a,b) =>
{
    return a+b;
}
num(4,3)