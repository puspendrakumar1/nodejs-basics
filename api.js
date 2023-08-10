const express = require("express");
const dbConnect = require("./mongodb");
const mongodb = require('mongodb');
const app = express(); 

app.use(express.json());

app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  res.send(data);
});

// app.post('/', async (req,res)=>{

//     res.send({name:'anil'});

//  });

app.post("/", async (req, res) => {
  let data = await dbConnect();
  console.log(typeof req.body);
  console.log(req.body);
  console.log(Array.isArray(req.body));
  let result = await data.insertOne(req.body);
  res.send(result);
});

app.put("/", async  (req, res) => {
  console.log(req.body);

  let data  = await dbConnect();
  let result  = data.updateOne(
    {name:req.body.name},
    {$set:req.body}
  )
  res.send({ result: "update" })
});

app.delete("/:id", async (req,res) => {
  let data = await dbConnect();
  let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
console.log(req.params.id);
res.send("done");
})
app.listen(5000);
