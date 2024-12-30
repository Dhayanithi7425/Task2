
// function dog(cat) // or dog(callback)
// {
//     setTimeout(()=>{
//         console.log("dog")
//         cat();//or callback()
//     },2000);
// }
// function cat()
// {
//     console.log("Dhayanithi")
// }
// dog(cat)
// function attendance(lunch)
// {

//     setTimeout(()=>{
//         console.log("Present")
//         lunch(goingtohome);
//     })
// }
// function lunch(goingtohome)
// {
//     setTimeout(()=>{
//         console.log("Biriyani")
//         goingtohome();
//     })
// }
// function goingtohome()
// {
//     console.log("Bye Bye")
//     console.log("Day Completed")
// }
// attendance(lunch)


/*callback hell
attendence(()=>{
    lunch(()=>{
        goingtohome(()=>{
            console.log("Day Completed")
            }
            )}
            )}
            )*/
// function attendence(){
//     return new Promise((resolve,reject)=>{
//         let  attendanceAP = false;
//         if(attendanceAP)
//             resolve("Attendence Present");
//         else
//             reject("Attendence Absent");
//     })
// }
// attendence().then((op)=>console.log(op))
//            .catch(error=>console.log(error))
/* function brain(){
    return new Promise((succes,failure)=>{
       // succes("Brain Activated")
         failure("Brain Dead")
    })
}
brain().then(output=>console.log(output))
.catch(output=>console.error(output))  */          

