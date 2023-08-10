// const express = require("express");
// const path = require("path");
// const reqFilter = require("./middlew  are")
// const app = express();
// const publicPath = path.join(__dirname, "public");


// // app.use(reqFilter);

// // app.use(express.static(publicPath));
// app.get("", (_, res) => {
//   res.sendFile(`${publicPath}/index.html`);
// });

// app.get("/about", (_, res) => {
//   res.sendFile(`${publicPath}/about.html`);
// });

// app.get("/help", reqFilter,(_, res) => {
//   res.sendFile(`${publicPath}/help.html`);
// });

// app.get("*", (_, res) => {
//   res.sendFile(`${publicPath}/help.html`);
// });

// app.listen("5000");

dbConnect = require('./mongodb');

const main = async () => {

  let data = await dbConnect();
  data = await data.find().toArray();
  console.warn(data);
}

main();
