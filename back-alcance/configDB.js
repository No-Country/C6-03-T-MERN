const mongoose = require("mongoose");


const dbConnection = mongoose
  .connect(process.env.DB_CNN)
  .then((DB) => console.log("DB is connected"))
  .catch((err) => console.error(err));


module.exports = { dbConnection };
