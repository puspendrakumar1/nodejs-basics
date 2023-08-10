const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,'This is a simple txt file');

// fs.readFile(filePath,'utf8',(err,data)=>{
//     console.log(data);
// })

// fs.appendFile(filePath,'and file name is apple ',(err)=>{
//     if(!err) console.log("file is updated")
// })

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file name updated")
// });

fs.unlinkSync(`${dirPath}/fruit.txt`);