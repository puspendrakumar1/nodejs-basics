let a = 10;
let b = 0;



let waitData = new Promise ((resolve,reject)=> {
    setTimeout(()=>{
        resolve(20);
        },2000)
})

waitData.then((data)=>{
    console.log(a+data);
})
