const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
   { name: "note 5",
    brand: "Mi",
    price: 320,
    category: "mobile"},
    { name: "note 7",
    brand: "Mi",
    price: 320,
    category: "mobile"},
    { name: "note 6",
    brand: "Mi",
    price: 3000,
    category: "mobile"}
  ]);

  if (result.acknowledged) {
    console.log(result);
  }
};

insert();
