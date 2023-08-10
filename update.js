const dbConnect = require("./mongodb");

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.updateMany(
    { name: "note 7" },
    {
      $set: { name: "note 11", price: 5001 },
    }
  );
  console.log(result);
};

updateData();
