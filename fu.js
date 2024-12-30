function a1(x){
    setTimeout(()=>{
        console.log("a1")
        x(a2)
    },1000)
}
function a2(){
        console.log("a2")
}
function a3(){
    console.log("a3")
}
a1(a2);