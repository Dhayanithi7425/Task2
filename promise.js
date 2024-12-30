function a1(){
    return new Promise((resolve,reject)=>{
        let datas = false
        if(datas)
        {
            resolve("data received");
        }
        else{
            reject("data never returned");
        }
    })
}
a1().then((output)=>{console.log(output)})
.catch((output)=>{console.error(output)})// or console.log also 