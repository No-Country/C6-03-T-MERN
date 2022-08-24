const mongoose = require("mongoose");
/* const MONGOURI = "mongodb+srv://MERN_ALCANCE:alcance123@cluster0.fc2kmvg.mongodb.net" */
const MONGOURI =
  "mongodb+srv://german1:german@cluster0.7vpbe5a.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true })

const dbConnection = mongoose
  .connect(MONGOURI)
  .then((DB) => console.log("DB is connected"))
  .catch((err) => console.error(err));
// try {

// module.exports = mongoose;

module.exports = { dbConnection };
