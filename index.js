const { log } = require('console');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');

console.log(dirPath);

for(i=0;i<5;i++){

    fs.writeFileSync(dirPath +'/hello'+i+'.txt','Simple text file');
}

fs.readdir(dirPath,(err,file)=>{
    file.forEach((item)=>{
        console.log("file", item)
    });
});

