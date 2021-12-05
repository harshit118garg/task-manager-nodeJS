const mongoose = require("mongoose");

const connDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`connection successful`))
    .catch((err) => console.log(err));
};

module.exports = connDB;
