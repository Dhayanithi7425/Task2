// //spread operator
// let a = [1,2,3,4,5]
// let b = [...a] //if we use b=a then if we modify b then a also gets changed in only array because in array it use address based storage
// b[2]=10 //a will have [1,2,3,4,5] and b will  have [1,2,10,4,5]
// console.log(b)

// let c = [1,2,3,4,5]
// let d = [6,7,8,9,10]
// let e = [...c,...d]
// console.log(e)
// /*function spreadExample(values)  
// {
//      console.log(values)
// }
// spreadExample(...e)*/

// //rest operator(combines the values into a array or object)
// function restExample(...values)//rest operator, we use here
// {
//      console.log(values)
// }
// restExample(1,2,3,4,5)


// let k = {
//     name : "Dhayanithi",
//     age : 20
// }
// let j = {...k}
// console.log(j)

// //destructuring operator
// let g = [1,5,7,8,9]
// let[r,t,x,...y] = g;
// console.log(y)

