function a1(){
    return new Promise((resolve,reject)=>{
        let datas = true
        if(datas)
        {
            resolve("data a1 received");
        }
        else{
            reject("data a1 never returned");
        }
    })
}
function a2(){
    return new Promise((resolve,reject)=>{
        let datas = true
        if(datas)
        {
            resolve("data a2 received");
        }
        else{
            reject("data a2 never returned");
        }
    })
}
function a3(){
    return new Promise((resolve,reject)=>{
        let datas = true
        if(datas)
        {
            resolve("data a3 received");
        }
        else{
            reject("data a3 never returned");
        }
    })
}
async function dog(){
    try{
   let[a,b,c] = await Promise.all([a1(),a2(),a3()]);
   console.log(a)
   console.log(b)
   console.log(c)
    }
    catch(error){
        console.error(error)
    }
}
dog();